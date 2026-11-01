import { AIRequestError } from '../errors.js'
import { assertResponseBody, mapHttpError, readErrorBody } from './http.js'

export async function streamGroq({ config, messages, signal, onToken }) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'text/event-stream',
      Authorization: `Bearer ${config.aiApiKey}`,
    },
    body: JSON.stringify({
      model: config.aiModel,
      messages,
      stream: true,
      temperature: 0.45,
      max_completion_tokens: 900,
    }),
    signal,
  })

  if (!response.ok) {
    const detail = await readErrorBody(response)
    throw mapHttpError(response.status, detail, 'Groq')
  }

  assertResponseBody(response, 'Groq')
  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''
  let content = ''
  let finished = false

  const handleLine = (line) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith(':')) return
    const dataLine = trimmed.startsWith('data:') ? trimmed.slice(5).trim() : trimmed
    if (!dataLine) return
    if (dataLine === '[DONE]') {
      finished = true
      return
    }

    let data
    try { data = JSON.parse(dataLine) } catch { return }
    if (data.error) {
      throw new AIRequestError(data.error.message ?? 'Groq returned an error.', {
        code: 'provider_error', status: 502,
      })
    }

    const text = data.choices?.[0]?.delta?.content ?? ''
    if (typeof text === 'string' && text) {
      content += text
      onToken(text)
    }
  }

  try {
    while (!finished) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split(/\r?\n/)
      buffer = lines.pop() ?? ''
      for (const line of lines) handleLine(line)
    }
    buffer += decoder.decode()
    if (buffer.trim()) handleLine(buffer)
  } finally {
    reader.releaseLock()
  }
  return content
}
