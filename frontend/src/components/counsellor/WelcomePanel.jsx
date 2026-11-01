import { ArrowRight, BookOpen, Bot, ClipboardCheck, Compass, LockKeyhole, Sparkles, Target } from 'lucide-react'

const CAPABILITIES = [
  {
    icon: Compass,
    title: 'Explore direction',
    description: 'Compare streams, subjects, and study routes without pretending one path fits everyone.',
  },
  {
    icon: BookOpen,
    title: 'Connect the details',
    description: 'Use the FuturePath career, roadmap, exam, and college data while you talk.',
  },
  {
    icon: Target,
    title: 'Plan a next step',
    description: 'Turn a broad interest into one or two practical actions you can verify.',
  },
]

export default function WelcomePanel({ suggestions, onSuggestion, onStartAssessment }) {
  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col justify-center px-1 py-8 sm:px-4">
      <div className="animate-rise">
        <span className="grid h-14 w-14 place-items-center rounded-2xl border border-brand/25 bg-[linear-gradient(145deg,rgba(140,124,255,0.24),rgba(95,157,255,0.12))] text-brand-soft shadow-[0_16px_40px_-24px_rgba(124,108,255,0.9)]">
          <Bot className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
        </span>

        <p className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Your career thinking partner
        </p>
        <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-[1.9rem]">
          Hello! Where would you like to start?
        </h2>
        <p className="mt-3 max-w-xl text-[13.5px] leading-6.5 text-muted">
          I can help you understand your options, compare streams and careers, plan study steps, and
          find relevant FuturePath roadmaps, exams, and colleges. I will ask for context only when it
          changes the advice. Ask in English, or ask for a Telugu explanation.
        </p>

        <div className="mt-6 grid gap-2.5 sm:grid-cols-3">
          {CAPABILITIES.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/9 bg-white/[0.035] p-3.5"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-brand-soft">
                  <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p className="mt-2.5 text-[11.5px] font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-[10.5px] leading-5 text-subtle">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-subtle">
            Try a question
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {suggestions.slice(0, 4).map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => onSuggestion(question)}
                className="group inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-left text-[11px] leading-4 text-muted transition hover:border-brand/35 hover:bg-brand/10 hover:text-ink"
              >
                <span className="min-w-0">{question}</span>
                <ArrowRight
                  className="h-3 w-3 flex-none text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-brand-soft"
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/9 bg-white/[0.025] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-2.5">
            <ClipboardCheck className="mt-0.5 h-4 w-4 flex-none text-aqua" aria-hidden="true" />
            <div>
              <p className="text-[11.5px] font-semibold text-ink">Prefer a guided starting point?</p>
              <p className="mt-0.5 text-[10.5px] leading-5 text-subtle">
                Take the optional 7-question assessment. Skip anything you do not want to answer.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onStartAssessment}
            className="btn btn-secondary flex-none px-3.5 py-2.5 text-[11px]"
          >
            Start assessment
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-4 flex items-start gap-2 text-[10px] leading-5 text-subtle">
          <LockKeyhole className="mt-0.5 h-3 w-3 flex-none" aria-hidden="true" />
          This conversation is kept in this browser tab only and is not saved to a database. Messages
          are sent through the FuturePath backend to the AI provider configured by the site owner.
          Do not share identity numbers, addresses, or other sensitive personal information.
        </p>
      </div>
    </div>
  )
}
