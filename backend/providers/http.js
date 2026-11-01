import { AIRequestError } from '../errors.js'

export async function readErrorBody(response) {
  try {
    const text = await response.text()
    if (!text) return ''
    try {
      const data = JSON.parse(text)
      return data.error?.message ?? data.error ?? data.message ?? text
    } catch {
      return text
    }
  } catch {
    return ''
  }
}

export function mapHttpError(status, detail, providerLabel = 'AI provider') {
  const suffix = detail ? ` ${String(detail).slice(0, 240)}` : ''

  if (status === 401 || status === 403) {
    return new AIRequestError(
      `The ${providerLabel} rejected the API key. Check GROQ_API_KEY in backend/.env or the backend hosting settings.`,
      { code: 'auth', status: 502 },
    )
  }

  if (status === 404) {
    return new AIRequestError(
      `The configured model was not found by the ${providerLabel}. Check GROQ_MODEL in backend/.env or the backend hosting settings.${suffix}`,
      { code: 'model', status: 502 },
    )
  }

  if (status === 429) {
    return new AIRequestError(
      `The ${providerLabel} rate limit was reached. Wait a little and try again, or check your provider plan and billing limits.`,
      { code: 'rate_limit', status: 429 },
    )
  }

  if (status === 400 || status === 422) {
    return new AIRequestError(
      `The ${providerLabel} rejected the request. Check the Groq model name and request settings.${suffix}`,
      { code: 'invalid_request', status: 502 },
    )
  }

  if (status >= 500) {
    return new AIRequestError(
      `The ${providerLabel} is temporarily unavailable. Please try again later.${suffix}`,
      { code: 'provider_unavailable', status: 502 },
    )
  }

  return new AIRequestError(
    `The ${providerLabel} returned an unexpected error (HTTP ${status}).${suffix}`,
    { code: 'provider_error', status: 502 },
  )
}

export function assertResponseBody(response, providerLabel = 'AI provider') {
  if (!response.body) {
    throw new AIRequestError(
      `The ${providerLabel} returned an empty response stream. Please try again.`,
      { code: 'invalid_response', status: 502 },
    )
  }
}
