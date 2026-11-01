import {
  AlertCircle,
  Cpu,
  CheckCircle2,
  Loader2,
  RefreshCw,
  Server,
  ShieldCheck,
  Terminal,
} from 'lucide-react'
import { AI_CONFIG, BACKEND_SETUP_COMMAND } from '../../config/ai'

function StatusPill({ status, modelReady }) {
  if (status === 'checking') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-subtle">
        <Loader2 className="h-3 w-3 animate-spin" aria-hidden="true" />
        Checking
      </span>
    )
  }

  if (status === 'offline') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-300/20 bg-rose-300/10 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-rose-200">
        <AlertCircle className="h-3 w-3" aria-hidden="true" />
        Offline
      </span>
    )
  }

  if (status === 'unconfigured') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/20 bg-amber-300/10 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-amber-200">
        <AlertCircle className="h-3 w-3" aria-hidden="true" />
        Not configured
      </span>
    )
  }

  if (!modelReady) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/20 bg-amber-300/10 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-amber-200">
        <AlertCircle className="h-3 w-3" aria-hidden="true" />
        Model missing
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-aqua/25 bg-aqua/10 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-aqua">
      <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
      Ready
    </span>
  )
}

export default function ConnectionPanel({ connection }) {
  const { status, model, modelReady, error, refresh } = connection
  const providerLabel = 'Groq'

  return (
    <section className="glass rounded-2xl p-4 sm:p-5" aria-labelledby="ai-engine-title">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p
            id="ai-engine-title"
            className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-subtle"
          >
            <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
            AI connection
          </p>
          <p className="mt-1.5 text-[12.5px] font-semibold text-ink">{providerLabel}</p>
        </div>
        <StatusPill status={status} modelReady={modelReady} />
      </div>

      <div className="mt-4 space-y-3">
        <div className="rounded-xl border border-white/9 bg-white/[0.03] px-3 py-2.5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-subtle">
            Configured model
          </p>
          <p className="mt-1 font-mono text-[11.5px] text-white/80">{model || 'Not configured'}</p>
        </div>

        {status === 'offline' ? (
          <div className="rounded-xl border border-rose-300/15 bg-rose-300/[0.05] px-3 py-2.5">
            <p className="text-[10.5px] leading-5 text-rose-100/90">{error}</p>
            <div className="mt-2 space-y-1.5 text-[9.5px] leading-4 text-subtle">
              <p className="flex items-start gap-1.5">
                <Terminal className="mt-0.5 h-3 w-3 flex-none" aria-hidden="true" />
                <span>
                  Backend: <code className="break-all">{BACKEND_SETUP_COMMAND}</code>
                </span>
              </p>
            </div>
          </div>
        ) : null}

        {status === 'unconfigured' ? (
          <div className="rounded-xl border border-amber-300/15 bg-amber-300/[0.05] px-3 py-2.5">
            <p className="text-[10.5px] leading-5 text-amber-100/90">{error}</p>
            <div className="mt-2 flex items-start gap-1.5 text-[9.5px] leading-4 text-subtle">
              <Terminal className="mt-0.5 h-3 w-3 flex-none" aria-hidden="true" />
              <span>
                Edit <code>backend/.env</code>, then restart the backend. See{' '}
                <code>backend/.env.example</code>.
              </span>
            </div>
          </div>
        ) : null}

        {status === 'online' && !modelReady ? (
          <div className="rounded-xl border border-amber-300/15 bg-amber-300/[0.05] px-3 py-2.5">
            <p className="text-[10.5px] leading-5 text-amber-100/90">{error}</p>
          </div>
        ) : null}

        <div className="space-y-1.5 text-[9.5px] leading-4 text-subtle">
          <p className="flex items-start gap-1.5">
            <Server className="mt-0.5 h-3 w-3 flex-none" aria-hidden="true" />
            <span className="break-all">{AI_CONFIG.apiBaseUrl}</span>
          </p>
          <p className="flex items-start gap-1.5">
            <ShieldCheck className="mt-0.5 h-3 w-3 flex-none" aria-hidden="true" />
            <span>
              Requests go through the FuturePath backend. Any provider API key stays on the server and
              is never sent to this browser.
            </span>
          </p>
          {status === 'online' && modelReady ? (
            <p>
              AI responses can still be wrong. Verify eligibility, dates, fees, and official rules
              before making decisions.
            </p>
          ) : null}
        </div>

        <button
          type="button"
          onClick={refresh}
          disabled={status === 'checking'}
          className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] text-[10.5px] font-medium text-muted transition hover:bg-white/[0.08] hover:text-ink disabled:opacity-50"
        >
          <RefreshCw
            className={`h-3.5 w-3.5 ${status === 'checking' ? 'animate-spin' : ''}`}
            aria-hidden="true"
          />
          {status === 'checking' ? 'Checking connection...' : 'Check connection again'}
        </button>
      </div>
    </section>
  )
}
