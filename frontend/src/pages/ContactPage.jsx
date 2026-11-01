import { Link } from 'react-router-dom'
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react'
import ContactForm from '../components/ContactForm'
import usePageTitle from '../hooks/usePageTitle'
import { CONTACT_CONFIG } from '../config/contact'

export default function ContactPage() {
  usePageTitle('Contact FuturePath')

  return (
    <main id="main-content" tabIndex={-1} className="relative z-10">
      <section className="relative overflow-hidden pb-10 pt-10 sm:pt-14" aria-labelledby="contact-title">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="hero-grid absolute inset-x-0 top-0 h-[30rem]" />
          <div className="absolute left-[64%] top-0 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(92,168,255,0.09),transparent_68%)]" />
        </div>

        <div className="page-shell relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-lg text-[12px] font-medium text-subtle transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to home
          </Link>

          <div className="animate-rise mt-7 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Contact Us
            </div>
            <h1
              id="contact-title"
              className="mt-5 text-balance text-[clamp(2.4rem,5vw,3.9rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-ink"
            >
              Start a conversation about <span className="text-gradient">the path ahead.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
              Send a question, correction, or suggestion about FuturePath. A secure endpoint is
              used when configured; otherwise, the form prepares an email draft with the recipient,
              subject, and message already filled in.
            </p>
          </div>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-24 lg:pb-28" aria-labelledby="contact-form-title">
        <div className="page-shell grid gap-6 lg:grid-cols-[1fr_20rem] lg:items-start">
          <div className="rounded-[1.75rem] border border-white/10 bg-[#080e21]/65 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_30px_80px_-48px_rgba(0,0,0,0.95)] sm:p-7">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl border border-brand/25 bg-brand/10 text-brand-soft">
                <MessageSquareText className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div>
                <h2
                  id="contact-form-title"
                  className="text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl"
                >
                  Send a message
                </h2>
                <p className="mt-1 text-[11.5px] leading-5 text-subtle">
                  All fields are required. Without a configured contact endpoint, the form prepares
                  an email draft instead of claiming that a message was delivered.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-4" aria-label="Contact guidance">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-subtle">
                Delivery status
              </p>
              <div className="mt-3 flex items-start gap-2.5">
                {CONTACT_CONFIG.hasEndpoint ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-aqua" aria-hidden="true" />
                ) : (
                  <AlertCircle
                    className="mt-0.5 h-4 w-4 flex-none text-amber-200"
                    aria-hidden="true"
                  />
                )}
                <div>
                  <p className="text-[12.5px] font-medium text-ink">
                    {CONTACT_CONFIG.hasEndpoint
                      ? 'Contact endpoint configured'
                      : CONTACT_CONFIG.hasEmail
                        ? 'Mailto fallback configured'
                        : 'No delivery service configured'}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-5 text-subtle">
                    {CONTACT_CONFIG.hasEndpoint
                      ? 'Submissions are posted to the configured endpoint. The page only reports success when that endpoint returns a successful response.'
                      : CONTACT_CONFIG.hasEmail
                        ? 'Submitting opens a draft in your email app. FuturePath cannot confirm that the message was sent.'
                        : 'No recipient email or endpoint was supplied for this build. A valid submission is explicitly reported as not sent.'}
                  </p>
                  {CONTACT_CONFIG.hasEmail ? (
                    <a
                      href={`mailto:${CONTACT_CONFIG.email}`}
                      className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-brand-soft transition hover:text-ink"
                    >
                      {CONTACT_CONFIG.email}
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-subtle">
                Before you send
              </p>
              <ul className="mt-3 space-y-2.5">
                {[
                  'Use a subject that states your question or correction clearly.',
                  'Include the career or page name if your feedback relates to it.',
                  'Do not send passwords, identity documents, or financial details.',
                  'For admissions or recruitment, verify details with official sources.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[11px] leading-5 text-muted">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-brand-soft" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-brand/20 bg-brand/[0.06] p-5">
              <ShieldCheck className="h-4 w-4 text-brand-soft" aria-hidden="true" />
              <p className="mt-3 text-[12px] font-medium text-ink">A note on personal data</p>
              <p className="mt-1.5 text-[10.5px] leading-5 text-subtle">
                This student project collects only what you choose to type into the form. A
                production email service would still need its own privacy notice, server-side
                validation, and abuse protection.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
