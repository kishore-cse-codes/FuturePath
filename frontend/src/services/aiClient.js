export class AIError extends Error {
  constructor(message, { code = 'unknown', status = null, cause = null } = {}) {
    super(message)
    this.name = 'AIError'
    this.code = code
    this.status = status
    this.cause = cause
  }
}

function createRequestSignal(externalSignal, timeoutMs) {
  const controller = new AbortController()
  let timedOut = false

  const timer = globalThis.setTimeout(() => {
    timedOut = true
    controller.abort()
  }, timeoutMs)

  const abortFromExternal = () => controller.abort()
  if (externalSignal) {
    if (externalSignal.aborted) controller.abort()
    else externalSignal.addEventListener('abort', abortFromExternal, { once: true })
  }

  return {
    signal: controller.signal,
    didTimeout: () => timedOut,
    cleanup: () => {
      globalThis.clearTimeout(timer)
      externalSignal?.removeEventListener('abort', abortFromExternal)
    },
  }
}

function backendOfflineMessage(baseUrl) {
  return `Could not reach the FuturePath AI backend at ${baseUrl}. Start it with "cd backend && npm run dev" and try again.`
}

async function readErrorBody(response) {
  try {
    const text = await response.text()
    if (!text) return { message: '', code: 'backend' }
    try {
      const data = JSON.parse(text)
      const error = data?.error ?? data
      return {
        message: error?.message ?? text,
        code: error?.code ?? 'backend',
      }
    } catch {
      return { message: text, code: 'backend' }
    }
  } catch {
    return { message: '', code: 'backend' }
  }
}

export function friendlyAIError(error) {
  if (!(error instanceof AIError)) {
    return 'Something went wrong while contacting the AI service. Please try again.'
  }

  switch (error.code) {
    case 'backend_offline':
    case 'not_configured':
    case 'auth':
    case 'model':
    case 'rate_limit':
    case 'timeout':
    case 'empty':
    case 'invalid_response':
    case 'validation':
    case 'busy':
    case 'cors':
      return error.message
    case 'aborted':
      return 'The response was stopped.'
    default:
      return error.message || 'The AI service could not complete this request.'
  }
}

export async function fetchAIStatus({ baseUrl, signal, timeoutMs = 8000 } = {}) {
  const request = createRequestSignal(signal, timeoutMs)

  try {
    const response = await fetch(`${baseUrl}/api/ai/status`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
      signal: request.signal,
    })

    if (!response.ok) {
      const detail = await readErrorBody(response)
      throw new AIError(detail.message || `The AI backend returned HTTP ${response.status}.`, {
        code: detail.code || 'backend',
        status: response.status,
      })
    }

    return await response.json()
  } catch (error) {
    if (error instanceof AIError) throw error
    if (request.didTimeout()) {
      throw new AIError(
        `The FuturePath AI backend at ${baseUrl} did not respond in time. Check that it is running.`,
        { code: 'timeout' },
      )
    }
    if (signal?.aborted) {
      throw new AIError('The connection check was cancelled.', { code: 'aborted' })
    }
    throw new AIError(backendOfflineMessage(baseUrl), { code: 'backend_offline', cause: error })
  } finally {
    request.cleanup()
  }
}

function createEventParser(onEvent) {
  let buffer = ''

  const parseBlock = (block) => {
    const lines = block.split('\n')
    let event = 'message'
    const dataLines = []

    for (const line of lines) {
      if (line.startsWith('event:')) event = line.slice(6).trim()
      else if (line.startsWith('data:')) dataLines.push(line.slice(5).trimStart())
    }

    if (!dataLines.length) return

    const raw = dataLines.join('\n')
    let data = null
    try {
      data = JSON.parse(raw)
    } catch {
      data = raw
    }

    onEvent(event, data)
  }

  return {
    push(chunk) {
      buffer += chunk
      const blocks = buffer.split('\n\n')
      buffer = blocks.pop() ?? ''
      blocks.forEach(parseBlock)
    },
    flush() {
      if (buffer.trim()) parseBlock(buffer)
      buffer = ''
    },
  }
}

export async function streamChat({
  baseUrl,
  messages,
  context,
  model,
  signal,
  timeoutMs = 130000,
  onToken,
}) {
  const request = createRequestSignal(signal, timeoutMs)

  try {
    const response = await fetch(`${baseUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/event-stream, application/json',
      },
      body: JSON.stringify({
        messages,
        context,
        ...(model ? { model } : {}),
      }),
      signal: request.signal,
    })

    if (!response.ok) {
      const detail = await readErrorBody(response)
      throw new AIError(detail.message || `The AI backend returned HTTP ${response.status}.`, {
        code: detail.code || 'backend',
        status: response.status,
      })
    }

    const contentType = response.headers.get('content-type') ?? ''

    if (!contentType.includes('text/event-stream')) {
      const data = await response.json()
      if (data?.error) {
        throw new AIError(data.error.message ?? 'The AI service returned an error.', {
          code: data.error.code ?? 'backend',
        })
      }
      const text = String(data?.content ?? '')
      if (text) onToken?.(text)
      if (!text.trim()) {
        throw new AIError('The AI model returned an empty response. Try rephrasing your question.', {
          code: 'empty',
        })
      }
      return text
    }

    if (!response.body) {
      throw new AIError('The AI service returned an empty response stream.', {
        code: 'invalid_response',
      })
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let content = ''
    let streamError = null
    let finished = false

    const parser = createEventParser((event, data) => {
      if (event === 'token' && typeof data?.text === 'string') {
        content += data.text
        onToken?.(data.text)
        return
      }

      if (event === 'error') {
        streamError = new AIError(
          data?.message ?? 'The AI service reported an error while responding.',
          { code: data?.code ?? 'provider_error' },
        )
        return
      }

      if (event === 'done') finished = true
    })

    while (!finished && !streamError) {
      const { done, value } = await reader.read()
      if (done) break
      parser.push(decoder.decode(value, { stream: true }))
    }

    parser.push(decoder.decode())
    parser.flush()

    if (streamError) throw streamError

    if (!content.trim()) {
      throw new AIError('The AI model returned an empty response. Try rephrasing your question.', {
        code: 'empty',
      })
    }

    return content
  } catch (error) {
    if (error instanceof AIError) throw error
    if (request.didTimeout()) {
      throw new AIError(
        'Groq took too long to respond. Try a shorter question.',
        { code: 'timeout' },
      )
    }
    if (signal?.aborted) {
      throw new AIError('The response was stopped.', { code: 'aborted' })
    }
    throw new AIError(backendOfflineMessage(baseUrl), { code: 'backend_offline', cause: error })
  } finally {
    request.cleanup()
  }
}
