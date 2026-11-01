import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const envFile = process.env.ENV_FILE
  ? path.resolve(process.env.ENV_FILE)
  : path.join(here, '.env')

if (existsSync(envFile)) {
  try {
    process.loadEnvFile(envFile)
  } catch {
    console.warn('[futurepath] Could not read the .env file. Check its syntax.')
  }
}

function readInt(value, fallback) {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : fallback
}

function readString(value, fallback = '') {
  const text = String(value ?? '').trim()
  return text || fallback
}

export const config = {
  port: readInt(process.env.PORT, 8787),
  aiModel: readString(process.env.GROQ_MODEL, 'openai/gpt-oss-20b'),
  aiApiKey: readString(process.env.GROQ_API_KEY),
  requestTimeoutMs: readInt(process.env.AI_TIMEOUT_MS, 120000),
  allowedOrigins: readString(
    process.env.ALLOWED_ORIGINS,
    'http://localhost:5173,http://127.0.0.1:5173,http://localhost:4173,http://127.0.0.1:4173',
  )
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
  rateLimitWindowMs: readInt(process.env.RATE_LIMIT_WINDOW_MS, 60000),
  rateLimitMax: readInt(process.env.RATE_LIMIT_MAX, 20),
  maxConcurrentPerClient: readInt(process.env.MAX_CONCURRENT_PER_CLIENT, 2),
  maxMessages: readInt(process.env.MAX_MESSAGES, 8),
  maxMessageChars: readInt(process.env.MAX_MESSAGE_CHARS, 2500),
  maxConversationChars: readInt(process.env.MAX_CONVERSATION_CHARS, 12000),
  maxContextChars: readInt(process.env.MAX_CONTEXT_CHARS, 12000),
}

export function getProviderStatus() {
  const missing = []
  if (!config.aiApiKey) missing.push('GROQ_API_KEY')
  if (!config.aiModel) missing.push('GROQ_MODEL')

  return {
    provider: 'groq',
    model: config.aiModel,
    configured: missing.length === 0,
    ready: missing.length === 0,
    models: [],
    error:
      missing.length === 0
        ? ''
        : `Groq is not configured. Add ${missing.join(' and ')} to backend/.env or the backend deployment environment, then restart the backend.`,
  }
}

export const systemLimits = {
  maxMessages: config.maxMessages,
  maxMessageChars: config.maxMessageChars,
  maxConversationChars: config.maxConversationChars,
  maxContextChars: config.maxContextChars,
}
