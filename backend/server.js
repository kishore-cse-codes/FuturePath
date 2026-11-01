import cors from 'cors'
import express from 'express'
import { config, getProviderStatus } from './config.js'
import { AIRequestError, sendError, toRequestError } from './errors.js'
import { buildSystemPrompt } from './prompts.js'
import { streamGroq } from './providers/groq.js'

const app = express()
app.disable('x-powered-by')

function isAllowedOrigin(origin) {
  if (!origin) return true
  if (config.allowedOrigins.includes(origin)) return true
  try {
    const url = new URL(origin)
    return url.hostname === 'localhost' || url.hostname === '127.0.0.1'
  } catch {
    return false
  }
}

app.use(
  cors({
    origin(origin, callback) {
      if (isAllowedOrigin(origin)) callback(null, true)
      else callback(new Error('Origin not allowed'))
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept'],
    maxAge: 600,
  }),
)

app.use(express.json({ limit: '96kb' }))

function createRateLimiter({ windowMs, max }) {
  const hits = new Map()

  const cleanup = setInterval(() => {
    const now = Date.now()
    for (const [key, timestamps] of hits) {
      const recent = timestamps.filter((time) => now - time < windowMs)
      if (recent.length === 0) hits.delete(key)
      else hits.set(key, recent)
    }
  }, windowMs)
  cleanup.unref?.()

  return (req, res, next) => {
    const key = req.ip ?? 'unknown'
    const now = Date.now()
    const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs)

    if (recent.length >= max) {
      res.setHeader('Retry-After', String(Math.ceil(windowMs / 1000)))
      sendError(
        res,
        new AIRequestError(
          'Too many AI requests from this connection. Please wait a minute and try again.',
          { code: 'rate_limit', status: 429 },
        ),
      )
      return
    }

    recent.push(now)
    hits.set(key, recent)
    next()
  }
}

function createConcurrencyGuard(max) {
  const active = new Map()

  return (req, res, next) => {
    const key = req.ip ?? 'unknown'
    const count = active.get(key) ?? 0

    if (count >= max) {
      sendError(
        res,
        new AIRequestError(
          'Another AI request from this connection is still running. Wait for it to finish or stop it first.',
          { code: 'busy', status: 429 },
        ),
      )
      return
    }

    active.set(key, count + 1)
    let released = false
    const release = () => {
      if (released) return
      released = true
      const remaining = (active.get(key) ?? 1) - 1
      if (remaining <= 0) active.delete(key)
      else active.set(key, remaining)
    }

    res.on('finish', release)
    res.on('close', release)
    next()
  }
}

const chatRateLimiter = createRateLimiter({
  windowMs: config.rateLimitWindowMs,
  max: config.rateLimitMax,
})
const chatConcurrencyGuard = createConcurrencyGuard(config.maxConcurrentPerClient)

function validateChatBody(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new AIRequestError('The request body must be a JSON object.', {
      code: 'validation',
      status: 400,
    })
  }

  if (!Array.isArray(body.messages) || body.messages.length === 0) {
    throw new AIRequestError('Please send at least one chat message.', {
      code: 'validation',
      status: 400,
    })
  }

  if (body.messages.length > config.maxMessages) {
    throw new AIRequestError(
      `The conversation has too many messages. Start a new chat or keep it under ${config.maxMessages} messages.`,
      { code: 'validation', status: 400 },
    )
  }

  const messages = body.messages.map((message, index) => {
    if (!message || typeof message !== 'object') {
      throw new AIRequestError(`Message ${index + 1} is invalid.`, {
        code: 'validation',
        status: 400,
      })
    }

    if (message.role !== 'user' && message.role !== 'assistant') {
      throw new AIRequestError('Only user and assistant messages are accepted.', {
        code: 'validation',
        status: 400,
      })
    }

    if (typeof message.content !== 'string' || !message.content.trim()) {
      throw new AIRequestError('Empty messages are not accepted.', {
        code: 'validation',
        status: 400,
      })
    }

    const content = message.content.trim()
    if (content.length > config.maxMessageChars) {
      throw new AIRequestError(
        `Each message must be ${config.maxMessageChars} characters or fewer. Please shorten your question.`,
        { code: 'validation', status: 400 },
      )
    }

    return { role: message.role, content }
  })

  const totalChars = messages.reduce((sum, message) => sum + message.content.length, 0)
  if (totalChars > config.maxConversationChars) {
    throw new AIRequestError(
      'This conversation is too long for one request. Start a new chat or shorten the earlier messages.',
      { code: 'validation', status: 400 },
    )
  }

  if (messages[messages.length - 1].role !== 'user') {
    throw new AIRequestError('The last message must come from the student.', {
      code: 'validation',
      status: 400,
    })
  }

  const context = typeof body.context === 'string' ? body.context : ''
  if (context.length > config.maxContextChars) {
    throw new AIRequestError('The supplied FuturePath context is too large.', {
      code: 'validation',
      status: 400,
    })
  }

  return { messages, context }
}

function startEventStream(res) {
  res.status(200)
  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8')
  res.setHeader('Cache-Control', 'no-cache, no-transform')
  res.setHeader('Connection', 'keep-alive')
  res.setHeader('X-Accel-Buffering', 'no')
  res.flushHeaders?.()
}

function writeEvent(res, event, data) {
  res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.get('/api/ai/status', (_req, res) => {
  res.json(getProviderStatus())
})

app.post('/api/chat', chatRateLimiter, chatConcurrencyGuard, async (req, res) => {
  let payload
  try {
    payload = validateChatBody(req.body)
  } catch (error) {
    sendError(res, toRequestError(error))
    return
  }

  const status = getProviderStatus()
  if (!status.configured) {
    sendError(
      res,
      new AIRequestError(status.error, { code: 'not_configured', status: 503 }),
    )
    return
  }

  const messages = [
    { role: 'system', content: buildSystemPrompt(payload.context) },
    ...payload.messages,
  ]

  const controller = new AbortController()
  let timedOut = false
  let clientClosed = false
  let finished = false

  const timer = setTimeout(() => {
    timedOut = true
    controller.abort()
  }, config.requestTimeoutMs)

  res.on('close', () => {
    if (!finished) {
      clientClosed = true
      controller.abort()
    }
  })

  let started = false
  let content = ''

  const onToken = (text) => {
    if (!text) return
    if (!started) {
      startEventStream(res)
      started = true
    }
    content += text
    writeEvent(res, 'token', { text })
  }

  try {
    await streamGroq({ config, messages, signal: controller.signal, onToken })

    if (!content.trim()) {
      throw new AIRequestError(
        'The AI model returned an empty response. Try rephrasing your question.',
        { code: 'empty', status: 502 },
      )
    }

    if (!started) {
      startEventStream(res)
      started = true
    }

    writeEvent(res, 'done', { model: config.aiModel })
    finished = true
    res.end()
  } catch (error) {
    const mapped = toRequestError(error, { timedOut, clientClosed })

    if (clientClosed) {
      finished = true
      if (!res.writableEnded) res.end()
      return
    }

    if (!started) {
      finished = true
      sendError(res, mapped)
      return
    }

    writeEvent(res, 'error', { code: mapped.code, message: mapped.message })
    finished = true
    res.end()
  } finally {
    clearTimeout(timer)
  }
})

app.use((error, _req, res, _next) => {
  if (error?.type === 'entity.too.large') {
    sendError(
      res,
      new AIRequestError('The request is too large. Please shorten your message.', {
        code: 'validation',
        status: 413,
      }),
    )
    return
  }

  if (error?.message === 'Origin not allowed') {
    sendError(
      res,
      new AIRequestError('This website origin is not allowed to use the AI service.', {
        code: 'cors',
        status: 403,
      }),
    )
    return
  }

  sendError(res, toRequestError(error))
})

app.use((_req, res) => {
  res.status(404).json({ error: { code: 'not_found', message: 'Endpoint not found.' } })
})

app.listen(config.port, () => {
  const status = getProviderStatus()
  console.log(`[futurepath] AI backend listening on http://localhost:${config.port}`)
  console.log(`[futurepath] Provider: Groq`)
  console.log(`[futurepath] Model: ${status.model}`)
  if (!status.configured) console.log(`[futurepath] Not configured: ${status.error}`)
})
