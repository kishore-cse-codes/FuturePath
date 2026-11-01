import { useState } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  Send,
  ShieldCheck,
} from 'lucide-react'
import { CONTACT_CONFIG } from '../config/contact'

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form) {
  const errors = {}

  if (form.name.trim().length < 2) {
    errors.name = 'Enter your name using at least 2 characters.'
  }

  if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = 'Enter a valid email address so the team can reply.'
  }

  if (form.subject.trim().length < 3) {
    errors.subject = 'Add a short subject using at least 3 characters.'
  }

  if (form.message.trim().length < 20) {
    errors.message = 'Write at least 20 characters so the message has enough context.'
  }

  return errors
}

function FieldError({ id, message }) {
  if (!message) return null

  return (
    <p id={id} className="mt-1.5 text-[11px] leading-5 text-rose-300">
      {message}
    </p>
  )
}

function openMailto(href) {
  const link = document.createElement('a')
  link.href = href
  link.target = '_self'
  link.rel = 'noopener noreferrer'
  link.hidden = true
  document.body.append(link)
  link.click()
  link.remove()
}

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [state, setState] = useState({ tone: 'idle', message: '' })

  const isSubmitting = state.tone === 'submitting'

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
    if (state.tone !== 'submitting') setState({ tone: 'idle', message: '' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSubmitting) return

    if (form.website) {
      setState({
        tone: 'error',
        message: 'Message not sent. Please use the form directly without hidden fields.',
      })
      return
    }

    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      setState({ tone: 'error', message: 'Please correct the highlighted fields and try again.' })
      window.setTimeout(() => {
        const firstField = Object.keys(nextErrors)[0]
        document.getElementById(`contact-${firstField}`)?.focus()
      }, 0)
      return
    }

    setState({ tone: 'submitting', message: 'Sending your message…' })

    if (CONTACT_CONFIG.hasEndpoint) {
      try {
        const response = await fetch(CONTACT_CONFIG.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            subject: form.subject.trim(),
            message: form.message.trim(),
          }),
        })

        if (!response.ok) throw new Error('Contact endpoint rejected the request.')

        setState({
          tone: 'success',
          message: 'Your message was sent successfully.',
        })
        setForm(INITIAL_FORM)
        setErrors({})
      } catch {
        setState({
          tone: 'error',
          message: 'Your message was not sent. The contact service could not accept it. Please try again later.',
        })
      }
      return
    }

    if (CONTACT_CONFIG.hasEmail) {
      const subject = encodeURIComponent(`[FuturePath] ${form.subject.trim()}`)
      const body = encodeURIComponent(
        `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`,
      )
      openMailto(`mailto:${CONTACT_CONFIG.email}?subject=${subject}&body=${body}`)
      setState({
        tone: 'draft',
        message:
          'A pre-filled email draft should now be open in your email app. FuturePath has not received your message until you send it from that app.',
      })
      return
    }

    setState({
      tone: 'unconfigured',
      message:
        'Message not sent. No contact email or delivery endpoint is configured in this build.',
    })
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-[11.5px] font-medium text-white/80">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={updateField('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={`contact-input ${errors.name ? 'contact-input-invalid' : ''}`}
            placeholder="Your name"
          />
          <FieldError id="contact-name-error" message={errors.name} />
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-[11.5px] font-medium text-white/80">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={updateField('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={`contact-input ${errors.email ? 'contact-input-invalid' : ''}`}
            placeholder="you@example.com"
          />
          <FieldError id="contact-email-error" message={errors.email} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-[11.5px] font-medium text-white/80">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          value={form.subject}
          onChange={updateField('subject')}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
          className={`contact-input ${errors.subject ? 'contact-input-invalid' : ''}`}
          placeholder="What would you like to ask or share?"
        />
        <FieldError id="contact-subject-error" message={errors.subject} />
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between gap-3">
          <label htmlFor="contact-message" className="text-[11.5px] font-medium text-white/80">
            Message
          </label>
          <span className="text-[10px] tabular-nums text-subtle">{form.message.length} / 1500</span>
        </div>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          maxLength={1500}
          value={form.message}
          onChange={updateField('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`contact-input min-h-32 resize-y ${errors.message ? 'contact-input-invalid' : ''}`}
          placeholder="Share enough context for the team to understand your question or suggestion."
        />
        <FieldError id="contact-message-error" message={errors.message} />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={updateField('website')}
        />
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`rounded-xl border px-3.5 py-3 text-[11.5px] leading-5 ${
          state.tone === 'success'
            ? 'border-aqua/25 bg-aqua/10 text-aqua'
            : state.tone === 'error'
              ? 'border-rose-300/20 bg-rose-300/[0.07] text-rose-200'
              : state.tone === 'draft' || state.tone === 'unconfigured'
                ? 'border-amber-200/20 bg-amber-200/[0.06] text-amber-100'
                : 'border-white/8 bg-white/[0.025] text-subtle'
        }`}
      >
        <span className="flex items-start gap-2">
          {state.tone === 'success' ? (
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
          ) : state.tone === 'error' ? (
            <AlertCircle className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
          ) : state.tone === 'submitting' ? (
            <Loader2 className="mt-0.5 h-3.5 w-3.5 flex-none animate-spin" aria-hidden="true" />
          ) : (
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
          )}
          <span>
            {state.message ||
              (CONTACT_CONFIG.hasEndpoint
                ? 'This form sends to the configured contact endpoint. Only a successful response is shown as “sent”.'
                : CONTACT_CONFIG.hasEmail
                  ? 'Submitting opens a pre-filled draft in your email app. This page does not report delivery, because the message is only sent when you send it from that app.'
                  : 'Message delivery is not configured in this build. The form validates input, but it cannot send a message yet.')}
          </span>
        </span>
      </div>

      <div className="flex flex-col gap-3 border-t border-white/8 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] leading-5 text-subtle">
          Do not include sensitive personal, financial, or identity information.
        </p>
        <button type="submit" disabled={isSubmitting} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60">
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : CONTACT_CONFIG.hasEndpoint ? (
            <Send className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Mail className="h-4 w-4" aria-hidden="true" />
          )}
          {isSubmitting
            ? 'Sending…'
            : CONTACT_CONFIG.hasEndpoint
              ? 'Send Message'
              : 'Open Email Draft'}
        </button>
      </div>
    </form>
  )
}
