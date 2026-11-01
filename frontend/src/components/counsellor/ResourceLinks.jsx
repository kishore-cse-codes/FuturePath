import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  GraduationCap,
  Map,
  Route,
} from 'lucide-react'

function ResourceLink({ href, children, external = false }) {
  const className =
    'inline-flex items-center gap-1 rounded-lg text-[10.5px] font-medium text-brand-soft transition-colors hover:text-white'

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        aria-label={`${children} (opens in a new tab)`}
      >
        {children}
        <ExternalLink className="h-3 w-3" aria-hidden="true" />
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {children}
      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
    </Link>
  )
}

export default function ResourceLinks({ resources }) {
  if (!resources?.length) return null

  return (
    <div className="mt-4 border-t border-white/8 pt-3.5">
      <p className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-subtle">
        <BookOpen className="h-3 w-3" aria-hidden="true" />
        FuturePath resources
      </p>

      <div className="mt-2.5 space-y-2">
        {resources.map((resource) => {
          if (resource.type === 'career') {
            return (
              <div
                key={`career-${resource.id}`}
                className="rounded-xl border border-white/9 bg-white/[0.03] px-3 py-2.5"
                style={{ borderLeftColor: resource.color, borderLeftWidth: 2 }}
              >
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <p className="text-[11.5px] font-semibold text-ink">{resource.name}</p>
                  <span className="rounded-full border border-white/10 px-1.5 py-0.5 text-[8.5px] uppercase tracking-[0.1em] text-subtle">
                    {resource.category}
                  </span>
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <ResourceLink href={resource.href}>
                    <Map className="h-3 w-3" aria-hidden="true" />
                    Career profile
                  </ResourceLink>
                  <ResourceLink href={resource.roadmapHref}>
                    <Route className="h-3 w-3" aria-hidden="true" />
                    {resource.hasDetailedRoadmap ? 'Detailed roadmap' : 'Overview roadmap'}
                  </ResourceLink>
                </div>
              </div>
            )
          }

          if (resource.type === 'exam') {
            return (
              <div
                key={`exam-${resource.id}`}
                className="rounded-xl border border-white/9 bg-white/[0.03] px-3 py-2.5"
              >
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <p className="text-[11.5px] font-semibold text-ink">{resource.name}</p>
                  <span className="text-[9.5px] text-subtle">{resource.level}</span>
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <ResourceLink href={resource.href}>
                    <GraduationCap className="h-3 w-3" aria-hidden="true" />
                    Exam guide
                  </ResourceLink>
                  {resource.official ? (
                    <ResourceLink href={resource.official.url} external>
                      {resource.official.label}
                    </ResourceLink>
                  ) : null}
                </div>
              </div>
            )
          }

          return (
            <div
              key={`college-${resource.id}`}
              className="rounded-xl border border-white/9 bg-white/[0.03] px-3 py-2.5"
            >
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <p className="text-[11.5px] font-semibold text-ink">{resource.name}</p>
                <span className="text-[9.5px] text-subtle">{resource.location}</span>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <ResourceLink href={resource.href}>
                  <GraduationCap className="h-3 w-3" aria-hidden="true" />
                  College record
                </ResourceLink>
                {resource.official ? (
                  <ResourceLink href={resource.official.url} external>
                    {resource.official.label}
                  </ResourceLink>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
