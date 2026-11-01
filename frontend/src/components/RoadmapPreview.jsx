import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Info, Route } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { ROADMAP_STEPS } from '../data/homepage'
import { DETAILED_ROADMAP_COUNT, ROADMAP_COUNT } from '../data/roadmaps'

export default function RoadmapPreview() {
  return (
    <section id="roadmap" className="relative py-20 sm:py-24 lg:py-28" aria-labelledby="roadmap-title">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Career roadmap"
            title="Every Dream Has a Path"
            description="Understand the steps that can take you from your current education to your chosen career."
            titleId="roadmap-title"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-11 rounded-[2rem] border border-white/10 bg-[#080e21]/65 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_30px_80px_-48px_rgba(0,0,0,0.95)] sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-5">
              <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
                <Route className="h-3.5 w-3.5" aria-hidden="true" />
                Example pathway
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/80">
                <Code2 className="h-3.5 w-3.5 text-brand-soft" aria-hidden="true" />
                Software Engineer
              </span>
            </div>

            <div className="mt-8 hidden md:block">
              <ol className="grid grid-cols-6 gap-4">
                {ROADMAP_STEPS.map((step, index) => (
                  <li key={step.number} className="relative">
                    {index < ROADMAP_STEPS.length - 1 ? (
                      <span
                        className="absolute left-10 -right-4 top-5 h-px bg-gradient-to-r from-white/20 to-white/10"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-white/13 bg-[#0a1024] font-display text-[10px] font-semibold text-brand-soft shadow-[0_0_0_4px_#080e21]">
                      {step.number}
                    </span>
                    <h3 className="mt-4 text-[13px] font-semibold leading-5 text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-[1.65] text-subtle">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <ol className="mt-7 md:hidden">
              {ROADMAP_STEPS.map((step, index) => (
                <li key={step.number} className="relative flex gap-4 pb-7 last:pb-0">
                  {index < ROADMAP_STEPS.length - 1 ? (
                    <span
                      className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-white/15 to-white/5"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="relative z-10 grid h-10 w-10 flex-none place-items-center rounded-full border border-white/13 bg-[#0a1024] font-display text-[10px] font-semibold text-brand-soft">
                    {step.number}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-[13px] font-semibold leading-5 text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-[12px] leading-6 text-subtle">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-col gap-5 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex max-w-md items-start gap-2 text-[11px] leading-5 text-subtle">
                <Info className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
                One example pathway. The roadmap library has {DETAILED_ROADMAP_COUNT} detailed
                roadmaps and overview routes for all {ROADMAP_COUNT} careers. Your own route can look
                different.
              </p>
              <Link to="/roadmaps" className="btn btn-secondary w-full sm:w-auto">
                Explore Career Roadmaps
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
