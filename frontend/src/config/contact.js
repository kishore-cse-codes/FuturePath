const DEFAULT_CONTACT_EMAIL = 'kishoreprojects31@gmail.com'

const endpoint = String(import.meta.env.VITE_CONTACT_ENDPOINT ?? '').trim()
const configuredEmail = String(import.meta.env.VITE_CONTACT_EMAIL ?? '').trim()
const email = configuredEmail || DEFAULT_CONTACT_EMAIL

export const CONTACT_CONFIG = {
  endpoint,
  email,
  hasEndpoint: endpoint.length > 0,
  hasEmail: email.length > 0,
  deliveryMode: endpoint ? 'endpoint' : 'mailto',
}
