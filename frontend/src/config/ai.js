const DEFAULT_API_BASE_URL = 'http://127.0.0.1:8787'

function readNumber(value, fallback) {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

function readBaseUrl(value) {
  const url = String(value ?? '').trim()
  return (url || DEFAULT_API_BASE_URL).replace(/\/+$/, '')
}

export const AI_CONFIG = {
  apiBaseUrl: readBaseUrl(import.meta.env.VITE_AI_API_BASE_URL),
  requestTimeoutMs: readNumber(import.meta.env.VITE_AI_TIMEOUT_MS, 130000),
  connectionTimeoutMs: readNumber(import.meta.env.VITE_AI_CONNECTION_TIMEOUT_MS, 8000),
}

export const BACKEND_SETUP_COMMAND = 'cd backend && npm install && npm run dev'
