import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Compass,
  ExternalLink,
  GraduationCap,
  Info,
  Route,
  Sparkles,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import RoadmapTimeline from '../components/roadmap/RoadmapTimeline'
import usePageTitle from '../hooks/usePageTitle'
import { getCareerPath } from '../data/careers'
import { getRoadmap, getRoadmapPath } from '../data/roadmaps'
import NotFoundPage from './NotFoundPage'

function PillList({ items, empty = 'Not listed for this route.' }) {
  if (!items?.length) {
    return <p className="text-[11.5px] leading-5 text-subtle">{empty}</p>
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/9 bg-white/[0.035] px-2.5 py-1 text-[10.5px] text-white/70"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

function BulletList({ items, empty = 'Not listed for this route.' }) {
  if (!items?.length) {
    return <p className="text-[11.5px] leading-5 text-subtle">{empty}</p>
  }

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-[12px] leading-5 text-muted">
          <span className="mt-1.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-brand/15 text-brand-soft">
            <Check className="h-2.5 w-2.5" strokeWidth={2.5} aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function RoadmapDetailPage() {
  const { careerId } = useParams()
  const roadmap = getRoadmap(careerId)
  usePageTitle(roadmap ? `${roadmap.title} Roadmap` : 'Roadmap not found')

  if (!roadmap) return <NotFoundPage />

  const { career, related } = roadmap
  const detailed = roadmap.isDetailed

  return (
    <main id="main-content" tabIndex={-1} className="relative z-10">
      <section
        className="relative overflow-hidden pb-10 pt-10 sm:pt-14"
        aria-labelledby="roadmap-title"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="hero-grid absolute inset-x-0 top-0 h-[34rem]" />
          <div
            className="absolute left-[66%] top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${roadmap.color}14, transparent 68%)`,
            }}
          />
        </div>

        <div className="page-shell relative z-10">
          <Link
            to="/roadmaps"
            className="inline-flex items-center gap-1.5 rounded-lg text-[12px] font-medium text-subtle transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to all roadmaps
          </Link>

          <div className="animate-rise mt-7 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full border px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.15em]"
                  style={{
                    color: roadmap.color,
                    backgroundColor: `${roadmap.color}14`,
                    borderColor: `${roadmap.color}2e`,
                  }}
                >
                  {roadmap.category}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[9.5px] uppercase tracking-[0.12em] ${
                    detailed
                      ? 'border-aqua/25 bg-aqua/10 text-aqua'
                      : 'border-white/10 bg-white/[0.04] text-subtle'
                  }`}
                >
                  {detailed ? 'Detailed roadmap' : 'Overview route'}
                </span>
              </div>

              <h1
                id="roadmap-title"
                className="mt-4 text-balance text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-ink"
              >
                {roadmap.title}
              </h1>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-subtle">
                {roadmap.categoryName}
              </p>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
                {roadmap.intro}
              </p>

              <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                <div>
                  <dt className="text-[9px] font-semibold uppercase tracking-[0.15em] text-subtle">
                    Typical duration
                  </dt>
                  <dd className="mt-1 text-[12px] font-medium text-white/80">{roadmap.duration}</dd>
                </div>
                <div>
                  <dt className="text-[9px] font-semibold uppercase tracking-[0.15em] text-subtle">
                    Stages
                  </dt>
                  <dd className="mt-1 text-[12px] font-medium text-white/80">
                    {roadmap.stages.length}
                  </dd>
                </div>
                <div>
                  <dt className="text-[9px] font-semibold uppercase tracking-[0.15em] text-subtle">
                    Detail level
                  </dt>
                  <dd className="mt-1 text-[12px] font-medium text-white/80">
                    {detailed ? 'Detailed' : 'Overview'}
                  </dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                <Link to={getCareerPath(career.id)} className="btn btn-primary">
                  View career profile
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/compare" className="btn btn-secondary">
                  Compare Intermediate streams
                </Link>
              </div>
            </div>

            <div className="glass rounded-[1.75rem] p-5 sm:p-6">
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-soft">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                How to use this route
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-2.5 text-[12px] leading-6 text-muted">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand-soft/70" aria-hidden="true" />
                  Follow the stages in order, but treat them as a common route rather than a fixed
                  rule.
                </li>
                <li className="flex gap-2.5 text-[12px] leading-6 text-muted">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand-soft/70" aria-hidden="true" />
                  Check current course, examination, licensing, or recruitment requirements before
                  acting.
                </li>
                <li className="flex gap-2.5 text-[12px] leading-6 text-muted">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand-soft/70" aria-hidden="true" />
                  Use projects, shadowing, or volunteering to test your interest alongside
                  qualifications.
                </li>
              </ul>
              {!detailed ? (
                <p className="mt-4 flex items-start gap-2 rounded-xl border border-amber-300/15 bg-amber-300/[0.05] p-3 text-[10.5px] leading-5 text-amber-100/75">
                  <Info className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
                  This career has an overview route built from its career profile. It does not yet
                  have a fully detailed roadmap with exam and source lists.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-24 lg:pb-28" aria-label={`${roadmap.title} roadmap details`}>
        <div className="page-shell grid gap-6 lg:grid-cols-[1fr_20rem] lg:items-start">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-[1.75rem] border border-white/10 bg-[#080e21]/65 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_30px_80px_-48px_rgba(0,0,0,0.95)] sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-subtle">
                      Stage by stage
                    </p>
                    <h2 className="mt-1.5 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
                      One possible route
                    </h2>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-subtle">
                    <Route className="h-3.5 w-3.5" aria-hidden="true" />
                    {roadmap.stages.length} stages
                  </span>
                </div>
                <div className="mt-6">
                  <RoadmapTimeline
                    stages={roadmap.stages}
                    color={roadmap.color}
                    detailed={detailed}
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    Subjects and study
                  </p>
                  <div className="mt-4">
                    <PillList items={roadmap.subjects} />
                  </div>
                  {roadmap.streamNote ? (
                    <p className="mt-4 text-[11px] leading-5 text-subtle">{roadmap.streamNote}</p>
                  ) : null}
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
                    <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                    Qualifications
                  </p>
                  <div className="mt-4">
                    <BulletList
                      items={roadmap.qualifications}
                      empty="No specific qualification list is attached to this overview route."
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-subtle">
                  Skills and practical experience
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
                  Build evidence, not just a plan
                </h2>
                <div className="mt-5">
                  <PillList items={roadmap.skills} />
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-subtle">
                      Practical exposure
                    </h3>
                    <div className="mt-3">
                      <BulletList
                        items={roadmap.practical}
                        empty="Look for projects, shadowing, or volunteering related to this field."
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-subtle">
                      Licensing or regulation
                    </h3>
                    <div className="mt-3">
                      <BulletList
                        items={roadmap.licensing}
                        empty="No specific licensing note is attached to this overview route. Check official requirements for the exact role."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-subtle">
                  Entry routes and alternatives
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
                  There is more than one way in
                </h2>
                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-subtle">
                      Entry routes
                    </h3>
                    <div className="mt-3">
                      <BulletList items={roadmap.entryRoutes} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-subtle">
                      Alternatives to explore
                    </h3>
                    {roadmap.alternatives?.length ? (
                      <ul className="mt-3 space-y-2">
                        {roadmap.alternatives.map((alternative) => (
                          <li key={alternative}>
                            <Link
                              to={`/careers?q=${encodeURIComponent(alternative)}`}
                              className="inline-flex items-center gap-1 text-[11.5px] font-medium text-brand-soft transition hover:text-ink"
                            >
                              {alternative}
                              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-[11.5px] text-subtle">No alternatives listed.</p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24" aria-label="Roadmap resources">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="flex items-center gap-2 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-subtle">
                <Compass className="h-3.5 w-3.5" aria-hidden="true" />
                At a glance
              </p>
              <dl className="mt-4 space-y-3">
                <div className="flex items-start justify-between gap-3 border-b border-white/8 pb-3">
                  <dt className="text-[11px] text-subtle">Category</dt>
                  <dd className="text-right text-[11.5px] font-medium text-ink">
                    {roadmap.category}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-3 border-b border-white/8 pb-3">
                  <dt className="text-[11px] text-subtle">Route type</dt>
                  <dd className="text-right text-[11.5px] font-medium text-ink">
                    {detailed ? 'Detailed' : 'Overview'}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] text-subtle">Typical duration</dt>
                  <dd className="mt-1 text-[11.5px] leading-5 text-white/80">{roadmap.duration}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-subtle">
                Entrance examinations
              </p>
              {roadmap.exams?.length ? (
                <ul className="mt-4 space-y-3">
                  {roadmap.exams.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={`/exams-colleges?tab=exams&q=${encodeURIComponent(item.name)}`}
                        className="group block rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 transition hover:border-white/15 hover:bg-white/[0.05]"
                      >
                        <span className="flex items-start justify-between gap-2 text-[11.5px] font-medium text-ink">
                          {item.name}
                          <ArrowUpRight
                            className="mt-0.5 h-3 w-3 flex-none text-subtle transition group-hover:text-brand-soft"
                            aria-hidden="true"
                          />
                        </span>
                        {item.note ? (
                          <span className="mt-1 block text-[10px] leading-4 text-subtle">
                            {item.note}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-[11px] leading-5 text-subtle">
                  No specific entrance examination is listed for this overview route. Check the
                  official course or recruitment requirements.
                </p>
              )}
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-subtle">
                Official sources
              </p>
              {roadmap.sources?.length ? (
                <ul className="mt-4 space-y-2.5">
                  {roadmap.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-start gap-1.5 text-[11px] leading-5 text-brand-soft transition hover:text-ink"
                      >
                        {source.label}
                        <ExternalLink className="mt-0.5 h-3 w-3 flex-none" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-[11px] leading-5 text-subtle">
                  No source list is attached to this overview route. Verify requirements with the
                  relevant official authority.
                </p>
              )}
            </div>

            {related?.length ? (
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-subtle">
                  Related roadmaps
                </p>
                <ul className="mt-4 space-y-2">
                  {related.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={getRoadmapPath(item.id)}
                        className="group flex items-center gap-2 rounded-lg text-[11.5px] text-muted transition hover:text-ink"
                      >
                        <span
                          className="h-1.5 w-1.5 flex-none rounded-full"
                          style={{ backgroundColor: item.color }}
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                        <ArrowRight
                          className="ml-auto h-3 w-3 flex-none text-subtle transition group-hover:text-brand-soft"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="rounded-[1.75rem] border border-brand/20 bg-brand/[0.07] p-5">
              <p className="flex items-center gap-2 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
                <Info className="h-3.5 w-3.5" aria-hidden="true" />
                Important
              </p>
              <p className="mt-2 text-[11px] leading-5 text-muted">{roadmap.note}</p>
              <p className="mt-3 text-[10px] leading-5 text-subtle">
                This roadmap is an exploration aid, not admission, licensing, or recruitment advice.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
