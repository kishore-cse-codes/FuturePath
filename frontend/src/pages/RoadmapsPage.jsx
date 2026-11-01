import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Compass, Info, Layers3, Route } from 'lucide-react'
import RoadmapCareerPicker from '../components/roadmap/RoadmapCareerPicker'
import usePageTitle from '../hooks/usePageTitle'
import { DETAILED_ROADMAP_COUNT, ROADMAP_COUNT } from '../data/roadmaps'

const HIGHLIGHTS = [
  {
    icon: Route,
    title: 'Stage-by-stage routes',
    description: 'See the common education, examination, and experience steps for a career.',
  },
  {
    icon: Layers3,
    title: 'Two levels of detail',
    description:
      'Detailed roadmaps include exams and official sources. Overview routes use the career profile to map the main stages.',
  },
  {
    icon: Compass,
    title: 'Explore, then verify',
    description:
      'Use each roadmap as a starting point. Requirements change by institution, state, and year.',
  },
]

export default function RoadmapsPage() {
  usePageTitle('Career Roadmaps')

  return (
    <main id="main-content" tabIndex={-1} className="relative z-10">
      <section className="relative overflow-hidden pb-10 pt-10 sm:pt-14" aria-labelledby="roadmaps-title">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="hero-grid absolute inset-x-0 top-0 h-[32rem]" />
          <div className="absolute left-[62%] top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.1),transparent_68%)]" />
        </div>

        <div className="page-shell relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-lg text-[12px] font-medium text-subtle transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to home
          </Link>

          <div className="animate-rise mt-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
                <Route className="h-3.5 w-3.5" aria-hidden="true" />
                Career roadmaps
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9.5px] font-medium uppercase tracking-[0.12em] text-subtle">
                {ROADMAP_COUNT} careers · {DETAILED_ROADMAP_COUNT} detailed
              </span>
            </div>

            <h1
              id="roadmaps-title"
              className="mt-4 max-w-3xl text-balance text-[clamp(2.4rem,4.8vw,3.85rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-ink"
            >
              A path for every <span className="text-gradient">direction.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
              Start with a career and follow its common milestones. Every career in the library has a
              route; {DETAILED_ROADMAP_COUNT} have fully detailed roadmaps with exams and sources.
            </p>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <Link to="/careers" className="btn btn-primary">
                Explore all careers
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/compare" className="btn btn-secondary">
                Compare Intermediate streams
              </Link>
            </div>
          </div>

          <div className="animate-rise mt-9 grid gap-3 sm:grid-cols-3" style={{ animationDelay: '80ms' }}>
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-brand/20 bg-brand/10 text-brand-soft">
                    <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h2 className="mt-3 text-[12.5px] font-semibold text-ink">{item.title}</h2>
                  <p className="mt-1.5 text-[11px] leading-5 text-subtle">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <RoadmapCareerPicker />

      <section className="relative pb-20 sm:pb-24">
        <div className="page-shell">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <p className="flex items-start gap-2 text-[11px] leading-5 text-subtle">
              <Info className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
              Roadmaps describe common routes, not guarantees. Entrance exams, eligibility,
              licensing, and recruitment rules can change. Verify current requirements with official
              sources before making a decision.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
