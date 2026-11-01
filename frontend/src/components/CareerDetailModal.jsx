import { Link } from 'react-router-dom'
import { ArrowRight, Check, Route, UserRound } from 'lucide-react'
import Modal from './Modal'
import { getCareerPath } from '../data/careers'
import { getRoadmapPath } from '../data/roadmaps'

export default function CareerDetailModal({ career, onClose }) {
  const Icon = career?.icon

  return (
    <Modal open={Boolean(career)} onClose={onClose} labelledBy="career-detail-title">
      {career ? (
        <>
          <div className="flex items-start gap-4 pr-10">
            <span
              className="grid h-12 w-12 flex-none place-items-center rounded-2xl border"
              style={{
                color: career.color,
                backgroundColor: `${career.color}14`,
                borderColor: `${career.color}26`,
              }}
            >
              <Icon className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-subtle">
                {career.category}
              </p>
              <h2
                id="career-detail-title"
                className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-ink"
              >
                {career.name}
              </h2>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-muted">{career.overview}</p>

          <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
              A possible pathway
            </p>
            <p className="mt-2 text-sm leading-6 text-white/80">{career.pathway}</p>
          </div>

          <div className="mt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
              What you might do
            </p>
            <ul className="mt-3 space-y-2.5">
              {career.dayToDay.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-muted">
                  <span className="mt-1 grid h-4 w-4 flex-none place-items-center rounded-full bg-brand/15 text-brand-soft">
                    <Check className="h-2.5 w-2.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
              Skills to build
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {career.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/9 bg-white/[0.035] px-2.5 py-1 text-[10.5px] text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-5 text-[11px] leading-5 text-subtle">
            Every pathway is different. This is a starting point to explore, not a fixed rule.
          </p>

          <div className="mt-6 flex flex-col-reverse gap-2.5 border-t border-white/8 pt-5 sm:flex-row sm:justify-end">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Close
            </button>
            <Link
              to={getCareerPath(career.id)}
              onClick={onClose}
              className="btn btn-secondary"
            >
              <UserRound className="h-4 w-4" aria-hidden="true" />
              View full profile
            </Link>
            <Link
              to={getRoadmapPath(career.id)}
              onClick={onClose}
              className="btn btn-primary"
            >
              <Route className="h-4 w-4" aria-hidden="true" />
              View roadmap
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </>
      ) : null}
    </Modal>
  )
}
