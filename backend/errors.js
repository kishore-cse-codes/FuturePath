export class AIRequestError extends Error {
  constructor(message, { code = 'provider_error', status = 502, cause = null } = {}) {
    super(message)
    this.name = 'AIRequestError'
    this.code = code
    this.status = status
    this.cause = cause
  }
}

export function toRequestError(error, { timedOut = false, clientClosed = false } = {}) {
  if (error instanceof AIRequestError) return error

  if (timedOut) {
    return new AIRequestError(
      'The AI provider took too long to respond. Try a shorter question or a smaller model.',
      { code: 'timeout', status: 504 },
    )
  }

  if (clientClosed || error?.name === 'AbortError') {
    return new AIRequestError('The request was stopped.', { code: 'aborted', status: 499 })
  }

  if (error?.name === 'TypeError') {
    return new AIRequestError(
      'The AI provider could not be reached. Check your internet connection and provider settings, then try again.',
      { code: 'network', status: 503 },
    )
  }

  return new AIRequestError(
    'The AI provider could not complete this request. Please try again.',
    { code: 'provider_error', status: 502 },
  )
}

export function sendError(res, error) {
  const status = Number.isInteger(error.status) && error.status >= 400 ? error.status : 502
  if (res.headersSent) {
    if (!res.writableEnded) res.end()
    return
  }
  res.status(status).json({
    error: {
      code: error.code ?? 'provider_error',
      message: error.message,
    },
  })
}
