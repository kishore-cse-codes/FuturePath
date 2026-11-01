import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Bot, Compass, ShieldCheck, Target } from 'lucide-react'
import Reveal from './Reveal'

const COUNSELOR_STEPS = [
  {
    icon: Compass,
    title: 'Understand your interests',
    description: 'Start with what you enjoy and what comes naturally.',
  },
  {
    icon: BookOpen,
    title: 'Explore your options',
    description: 'See how streams, exams, and degrees connect.',
  },
  {
    icon: Target,
    title: 'Plan your next step',
    description: 'Turn exploration into a practical pathway.',
  },
]

export default function CounselorPreview() {
  return (
    <section
      id="counselor"
      className="relative py-20 sm:py-24 lg:py-28"
      aria-labelledby="counselor-title"
    >
      <div className="page-shell">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.18),transparent_68%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-48 left-1/4 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(92,168,255,0.1),transparent_70%)]"
              aria-hidden="true"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
                    <Bot className="h-3.5 w-3.5" aria-hidden="true" />
                    AI career counsellor
                  </span>
                  <span className="rounded-full border border-aqua/25 bg-aqua/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-aqua">
                    Available now
                  </span>
                </div>

                <h2
                  id="counselor-title"
                  className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
                >
                  Not Sure Which Path Is Right for You?
                </h2>
                <p className="mt-4 max-w-lg text-[15px] leading-7 text-muted sm:text-base">
                  Talk through streams, courses, careers, entrance exams, and study plans with the
                  FuturePath AI Counsellor. It uses the site&apos;s career and roadmap data when it is
                  relevant, explains trade-offs, and tells you when a detail needs official
                  verification.
                </p>

                <Link to="/ai-counsellor" className="btn btn-primary btn-lg mt-7 w-full sm:w-auto">
                  Open the AI Counsellor
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-4 flex items-center gap-2 text-[11px] leading-5 text-subtle">
                  <ShieldCheck className="h-3.5 w-3.5 flex-none text-aqua" aria-hidden="true" />
                  An AI assistant, not a human counsellor. It does not guarantee admission or jobs.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-[390px]">
                <div
                  className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.16),transparent_70%)]"
                  aria-hidden="true"
                />
                <div className="relative rounded-3xl border border-white/11 bg-[#070d20]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_70px_-32px_rgba(0,0,0,0.95)] backdrop-blur-xl">
                  <div className="flex items-center gap-3 border-b border-white/8 pb-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand/25 bg-brand/15 text-brand-soft">
                      <Bot className="h-[18px] w-[18px]" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[12.5px] font-semibold text-ink">What the counsellor can do</p>
                      <p className="mt-0.5 text-[10px] text-subtle">Grounded in FuturePath data</p>
                    </div>
                    <span className="ml-auto rounded-full border border-aqua/25 bg-aqua/10 px-2 py-0.5 text-[8.5px] uppercase tracking-[0.12em] text-aqua">
                      Ready
                    </span>
                  </div>

                  <div className="mt-4 space-y-2.5">
                    {COUNSELOR_STEPS.map((step) => {
                      const Icon = step.icon

                      return (
                        <div
                          key={step.title}
                          className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3.5"
                        >
                          <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-xl bg-white/[0.05] text-white/70">
                            <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                          </span>
                          <div>
                            <p className="text-[11.5px] font-medium text-ink">{step.title}</p>
                            <p className="mt-0.5 text-[10.5px] leading-[1.55] text-subtle">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-4 flex items-center gap-2 border-t border-white/8 pt-4 text-[10px] text-subtle">
                    <span className="h-1.5 w-1.5 rounded-full bg-aqua/80" aria-hidden="true" />
                    Ask in English or request a Telugu explanation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
