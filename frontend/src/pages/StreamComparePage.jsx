import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, GitCompare, Info } from 'lucide-react'
import StreamComparison from '../components/StreamComparison'
import usePageTitle from '../hooks/usePageTitle'
import { STREAMS } from '../data/streams'
import { CAREER_COUNT } from '../data/careers'

export default function StreamComparePage() {
  usePageTitle('Compare Intermediate Streams')

  return (
    <main id="main-content" tabIndex={-1} className="relative z-10">
      <section className="relative overflow-hidden pb-8 pt-10 sm:pt-14" aria-labelledby="compare-page-title">
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
                <GitCompare className="h-3.5 w-3.5" aria-hidden="true" />
                Compare paths
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9.5px] font-medium uppercase tracking-[0.12em] text-subtle">
                {STREAMS.length} Intermediate streams
              </span>
            </div>

            <h1
              id="compare-page-title"
              className="mt-4 max-w-3xl text-balance text-[clamp(2.4rem,4.8vw,3.85rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-ink"
            >
              Compare streams, not <span className="text-gradient">assumptions.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
              See how common Intermediate streams differ in subjects, skills, study options, entrance
              examinations, and the career directions they support. Select any combination to compare.
            </p>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <Link to="/careers" className="btn btn-primary">
                Explore {CAREER_COUNT} careers
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/exams-colleges" className="btn btn-secondary">
                Browse exams and colleges
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StreamComparison hideHeading />

      <section className="relative pb-20 sm:pb-24">
        <div className="page-shell">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <p className="flex items-start gap-2 text-[11px] leading-5 text-subtle">
              <Info className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
              There is no single best stream. Subject availability, board rules, and admission
              requirements vary. Use this comparison to understand trade-offs, then check current
              requirements for the courses and careers you are considering.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
