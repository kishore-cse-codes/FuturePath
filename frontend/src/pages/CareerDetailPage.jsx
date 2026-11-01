import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  GraduationCap,
  Sparkles,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import usePageTitle from '../hooks/usePageTitle'
import {
  CATEGORY_COUNTS,
  getCareerById,
  getCareerPath,
  getRelatedCareers,
} from '../data/careers'
import { getRoadmapPath, hasDetailedRoadmap } from '../data/roadmaps'
import NotFoundPage from './NotFoundPage'

export default function CareerDetailPage() {
  const { careerId } = useParams()
  const career = getCareerById(careerId)
  usePageTitle(career ? `${career.name} Career Guide` : 'Career not found')

  if (!career) return <NotFoundPage />

  const Icon = career.icon
  const relatedCareers = getRelatedCareers(career, 3)
  const categoryCount = CATEGORY_COUNTS[career.categoryId] ?? 0
  const roadmapDetailed = hasDetailedRoadmap(career.id)

  return (
    <main id="main-content" tabIndex={-1} className="relative z-10">
      <section className="relative overflow-hidden pb-10 pt-10 sm:pt-14" aria-labelledby="career-title">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="hero-grid absolute inset-x-0 top-0 h-[34rem]" />
          <div
            className="absolute left-[66%] top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${career.color}14, transparent 68%)`,
            }}
          />
        </div>

        <div className="page-shell relative z-10">
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 rounded-lg text-[12px] font-medium text-subtle transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to career discovery
          </Link>

          <div className="animate-rise mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full border px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.15em]"
                  style={{
                    color: career.color,
                    backgroundColor: `${career.color}14`,
                    borderColor: `${career.color}2e`,
                  }}
                >
                  {career.category}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9.5px] uppercase tracking-[0.12em] text-subtle">
                  Career profile
                </span>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[9.5px] uppercase tracking-[0.12em] ${
                    roadmapDetailed
                      ? 'border-aqua/25 bg-aqua/10 text-aqua'
                      : 'border-white/10 bg-white/[0.04] text-subtle'
                  }`}
                >
                  {roadmapDetailed ? 'Detailed roadmap' : 'Overview roadmap'}
                </span>
              </div>

              <div className="mt-5 flex items-start gap-4">
                <span
                  className="grid h-16 w-16 flex-none place-items-center rounded-3xl border"
                  style={{
                    color: career.color,
                    backgroundColor: `${career.color}16`,
                    borderColor: `${career.color}30`,
                  }}
                >
                  <Icon className="h-8 w-8" strokeWidth={1.65} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h1
                    id="career-title"
                    className="text-balance text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-ink"
                  >
                    {career.name}
                  </h1>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-subtle">
                    {career.categoryName}
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-[15.5px] leading-7 text-muted sm:text-[16.5px] sm:leading-8">
                {career.overview}
              </p>

              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                <Link to="/careers" className="btn btn-primary">
                  Explore all careers
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to={getRoadmapPath(career.id)} className="btn btn-secondary">
                  <Compass className="h-4 w-4" aria-hidden="true" />
                  View career roadmap
                </Link>
              </div>
            </div>

            <div className="glass rounded-[1.75rem] p-5 sm:p-6">
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-soft">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                At a glance
              </p>
              <dl className="mt-5 space-y-4">
                <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                  <dt className="text-[11px] text-subtle">Category</dt>
                  <dd className="text-right text-[12px] font-medium text-ink">{career.category}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                  <dt className="text-[11px] text-subtle">Related paths</dt>
                  <dd className="text-right text-[12px] font-medium text-ink">{categoryCount}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                  <dt className="text-[11px] text-subtle">Roadmap</dt>
                  <dd className="text-right text-[12px] font-medium text-ink">
                    {roadmapDetailed ? 'Detailed' : 'Overview'}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] text-subtle">Core skills</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {career.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/9 bg-white/[0.035] px-2.5 py-1 text-[10.5px] text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <p className="mt-5 flex items-start gap-2 rounded-xl border border-white/8 bg-white/[0.025] p-3 text-[10.5px] leading-5 text-subtle">
                <GraduationCap className="mt-0.5 h-3.5 w-3.5 flex-none text-aqua/80" aria-hidden="true" />
                Pathways vary by institution, qualification, and local rules. Use this profile as a
                starting point for further checking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-24 lg:pb-28" aria-label={`${career.name} details`}>
        <div className="page-shell grid gap-6 lg:grid-cols-[1fr_20rem] lg:items-start">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-subtle">
                  What the work can involve
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
                  A realistic starting point
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {career.dayToDay.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5 text-[12.5px] leading-6 text-muted"
                    >
                      <span className="mt-1 grid h-4 w-4 flex-none place-items-center rounded-full bg-brand/15 text-brand-soft">
                        <Check className="h-2.5 w-2.5" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-subtle">
                  Education and pathway
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
                  One possible route
                </h2>
                <p className="mt-3 max-w-2xl text-[13px] leading-6 text-muted">{career.pathway}</p>
                <ol className="relative mt-6 space-y-2.5">
                  {career.stages.map((stage, index) => (
                    <li
                      key={`${career.id}-stage-${stage}`}
                      className="relative flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5"
                    >
                      <span
                        className="grid h-7 w-7 flex-none place-items-center rounded-full border text-[10px] font-semibold"
                        style={{
                          color: career.color,
                          backgroundColor: `${career.color}14`,
                          borderColor: `${career.color}2e`,
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="pt-1 text-[12.5px] leading-5 text-white/75">{stage}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-subtle">
                  Explore further
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
                  Build the evidence, not just the title
                </h2>
                <p className="mt-3 max-w-2xl text-[13px] leading-6 text-muted">
                  Look for official course and recruitment information, talk to people doing the
                  work, and test your interest through projects, shadowing, or volunteering where
                  possible.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    to={`/careers?category=${career.categoryId}`}
                    className="btn btn-secondary"
                  >
                    More in {career.category}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link to="/contact" className="btn btn-secondary">
                    Ask a question
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24" aria-label="Related career profiles">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-subtle">
                Related careers
              </p>
              <ul className="mt-4 space-y-2">
                {relatedCareers.map((related) => {
                  const RelatedIcon = related.icon

                  return (
                    <li key={related.id}>
                      <Link
                        to={getCareerPath(related.id)}
                        className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5 transition hover:border-white/15 hover:bg-white/[0.05]"
                      >
                        <span
                          className="grid h-8 w-8 flex-none place-items-center rounded-lg border"
                          style={{
                            color: related.color,
                            backgroundColor: `${related.color}14`,
                            borderColor: `${related.color}26`,
                          }}
                        >
                          <RelatedIcon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-[12px] font-medium text-ink">
                            {related.name}
                          </span>
                          <span className="mt-0.5 block truncate text-[9.5px] text-subtle">
                            {related.category}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="ml-auto h-3.5 w-3.5 flex-none text-subtle transition group-hover:text-brand-soft"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <Link
                to={`/careers?category=${career.categoryId}`}
                className="mt-4 inline-flex items-center gap-1.5 text-[10.5px] font-medium text-brand-soft transition hover:text-ink"
              >
                View all in {career.category}
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>

            <div className="rounded-[1.75rem] border border-brand/20 bg-brand/[0.07] p-5">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
                Quick actions
              </p>
              <p className="mt-2 text-[12.5px] leading-6 text-muted">
                Compare another option or return to the complete career library.
              </p>
              <div className="mt-4 grid gap-2">
                <Link to={getRoadmapPath(career.id)} className="btn btn-primary">
                  View career roadmap
                </Link>
                <Link to="/careers" className="btn btn-secondary">
                  Browse careers
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  About FuturePath
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
