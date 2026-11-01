import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Compass,
  GraduationCap,
  Info,
  Map,
  RotateCcw,
  Route,
  Sparkles,
  Target,
  WandSparkles,
} from 'lucide-react'

function Chip({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[10px] text-white/70">
      {children}
    </span>
  )
}

function Label({ icon: Icon, children }) {
  return (
    <p className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-subtle">
      <Icon className="h-3 w-3" aria-hidden="true" />
      {children}
    </p>
  )
}

function RecommendationCard({ recommendation }) {
  const {
    career,
    reason,
    challenges,
    skills,
    pathway,
    exams,
    colleges,
    nextSteps,
    href,
    roadmapHref,
    hasDetailedRoadmap,
  } = recommendation

  return (
    <article
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4"
      style={{ borderLeftColor: `${career.color}80`, borderLeftWidth: 3 }}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p
            className="text-[8.5px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: career.color }}
          >
            {career.category}
          </p>
          <h3 className="mt-1 text-[15px] font-semibold text-ink">{career.name}</h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Link
            to={href}
            className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1.5 text-[9.5px] font-medium text-muted transition hover:text-ink"
          >
            <Map className="h-3 w-3" aria-hidden="true" />
            Profile
          </Link>
          <Link
            to={roadmapHref}
            className="inline-flex items-center gap-1 rounded-lg border border-brand/25 bg-brand/10 px-2 py-1.5 text-[9.5px] font-medium text-brand-soft transition hover:text-white"
          >
            <Route className="h-3 w-3" aria-hidden="true" />
            {hasDetailedRoadmap ? 'Roadmap' : 'Overview route'}
          </Link>
        </div>
      </div>

      <p className="mt-3 text-[11.5px] leading-5.5 text-muted">{reason}</p>

      <div className="mt-3.5">
        <Label icon={Sparkles}>Skills to build</Label>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {skills.slice(0, 5).map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>
      </div>

      <div className="mt-3.5">
        <Label icon={GraduationCap}>Education pathway</Label>
        <p className="mt-1 text-[10.5px] leading-5 text-muted">{pathway}</p>
      </div>

      {exams.length ? (
        <div className="mt-3.5">
          <Label icon={ClipboardList}>Entrance exams to research</Label>
          <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1.5">
            {exams.map((exam) => (
              <Link
                key={exam.id}
                to={exam.href}
                className="inline-flex items-center gap-1 text-[10px] font-medium text-brand-soft hover:text-white"
              >
                {exam.name}
                <ArrowUpRight className="h-2.5 w-2.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {colleges.length ? (
        <div className="mt-3.5">
          <Label icon={BookOpen}>College directory entries</Label>
          <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1.5">
            {colleges.map((college) => (
              <Link
                key={college.id}
                to={college.href}
                className="inline-flex items-center gap-1 text-[10px] font-medium text-muted hover:text-ink"
              >
                {college.name}
                <ArrowUpRight className="h-2.5 w-2.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-3.5 rounded-xl border border-amber-300/12 bg-amber-300/[0.045] px-3 py-2.5">
        <Label icon={AlertTriangle}>Potential challenge</Label>
        <p className="mt-1 text-[10.5px] leading-5 text-amber-50/75">{challenges}</p>
      </div>

      <div className="mt-3.5">
        <Label icon={Target}>Suggested next steps</Label>
        <ul className="mt-1.5 space-y-1.5">
          {nextSteps.slice(0, 3).map((step) => (
            <li key={step} className="flex gap-2 text-[10.5px] leading-5 text-muted">
              <CheckCircle2
                className="mt-0.5 h-3 w-3 flex-none text-aqua/80"
                aria-hidden="true"
              />
              {step}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function AssessmentReport({ report, onDiscuss, onRetake, onBackToChat, canDiscuss = true }) {
  const { profile, matches, explore, skills, exams, colleges, courses, nextSteps, disclaimer } =
    report

  return (
    <div className="h-full overflow-y-auto overscroll-contain">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-aqua">
              <WandSparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Your assessment report
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-ink">
              Starting points to explore
            </h2>
            <p className="mt-2 max-w-xl text-[12.5px] leading-6 text-muted">
              These suggestions come from your answers and the FuturePath dataset. They are
              possibilities to investigate, not a diagnosis or a prediction.
            </p>
          </div>
          <button type="button" onClick={onRetake} className="btn btn-secondary px-3 py-2 text-[10.5px]">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Retake
          </button>
        </div>

        <div className="mt-4 rounded-2xl border border-amber-300/15 bg-amber-300/[0.05] px-4 py-3">
          <p className="flex items-start gap-2 text-[10.5px] leading-5 text-amber-50/75">
            <Info className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
            {disclaimer}
          </p>
        </div>

        {profile.summaryTags.length || profile.constraints ? (
          <div className="mt-5 rounded-2xl border border-white/9 bg-white/[0.03] p-4">
            <Label icon={Compass}>Your context</Label>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {profile.educationLevel ? <Chip>{profile.educationLevel}</Chip> : null}
              {profile.summaryTags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
            {profile.constraints ? (
              <p className="mt-3 border-t border-white/8 pt-3 text-[10.5px] leading-5 text-muted">
                <span className="font-medium text-white/75">Constraint noted:</span>{' '}
                {profile.constraints}
              </p>
            ) : null}
          </div>
        ) : null}

        <section className="mt-6" aria-labelledby="strong-matches-title">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-subtle">
                Strong starting points
              </p>
              <h3
                id="strong-matches-title"
                className="mt-1 text-[15px] font-semibold tracking-[-0.02em] text-ink"
              >
                Closest to your selections
              </h3>
            </div>
            <span className="text-[9.5px] text-subtle">Suggestions, not guarantees</span>
          </div>

          <div className="mt-3 space-y-3">
            {matches.map((recommendation) => (
              <RecommendationCard key={recommendation.career.id} recommendation={recommendation} />
            ))}
          </div>
        </section>

        {explore.length ? (
          <section className="mt-6" aria-labelledby="explore-title">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-subtle">
              Worth exploring further
            </p>
            <h3 id="explore-title" className="mt-1 text-[15px] font-semibold text-ink">
              Adjacent options to compare
            </h3>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {explore.map((recommendation) => (
                <div
                  key={recommendation.career.id}
                  className="rounded-2xl border border-white/9 bg-white/[0.025] p-3.5"
                >
                  <p
                    className="text-[8.5px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: recommendation.career.color }}
                  >
                    {recommendation.career.category}
                  </p>
                  <p className="mt-1 text-[12.5px] font-semibold text-ink">
                    {recommendation.career.name}
                  </p>
                  <p className="mt-1.5 line-clamp-3 text-[10.5px] leading-5 text-subtle">
                    {recommendation.reason}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    <Link
                      to={recommendation.href}
                      className="inline-flex items-center gap-1 text-[9.5px] font-medium text-brand-soft hover:text-white"
                    >
                      Profile
                      <ArrowUpRight className="h-2.5 w-2.5" aria-hidden="true" />
                    </Link>
                    <Link
                      to={recommendation.roadmapHref}
                      className="inline-flex items-center gap-1 text-[9.5px] font-medium text-muted hover:text-ink"
                    >
                      Roadmap
                      <ArrowUpRight className="h-2.5 w-2.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {skills.length ? (
          <section className="mt-6 rounded-2xl border border-white/9 bg-white/[0.03] p-4">
            <Label icon={Sparkles}>Skills to develop across these options</Label>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </section>
        ) : null}

        {exams.length ? (
          <section className="mt-4 rounded-2xl border border-white/9 bg-white/[0.03] p-4">
            <Label icon={ClipboardList}>Entrance exams and routes to research</Label>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {exams.map((exam) => (
                <Link
                  key={exam.id}
                  to={exam.href}
                  className="group flex items-start justify-between gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2.5 transition hover:border-white/15 hover:bg-white/[0.04]"
                >
                  <span>
                    <span className="block text-[11px] font-medium text-ink">{exam.name}</span>
                    <span className="mt-0.5 block text-[9px] text-subtle">{exam.level}</span>
                  </span>
                  <ArrowUpRight
                    className="mt-0.5 h-3 w-3 flex-none text-subtle group-hover:text-brand-soft"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
            <p className="mt-2.5 text-[9.5px] leading-4 text-subtle">
              Verify dates, eligibility, and application rules on the official exam website. This
              directory does not track deadlines.
            </p>
          </section>
        ) : null}

        {courses.length || colleges.length ? (
          <section className="mt-4 rounded-2xl border border-white/9 bg-white/[0.03] p-4">
            <Label icon={GraduationCap}>Courses and college records</Label>
            {courses.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {courses.map((course) => (
                  <Chip key={course}>{course}</Chip>
                ))}
              </div>
            ) : null}
            {colleges.length ? (
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-white/8 pt-3">
                {colleges.map((college) => (
                  <Link
                    key={college.id}
                    to={college.href}
                    className="inline-flex items-center gap-1 text-[10px] font-medium text-muted hover:text-ink"
                  >
                    {college.name}
                    <ArrowUpRight className="h-2.5 w-2.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            ) : null}
            <p className="mt-2.5 text-[9.5px] leading-4 text-subtle">
              The college directory is a small seed list, not a ranking. It does not include fees,
              cut-offs, or placement statistics.
            </p>
          </section>
        ) : null}

        <section className="mt-4 rounded-2xl border border-brand/20 bg-brand/[0.06] p-4">
          <Label icon={Target}>Your next-step plan</Label>
          <ol className="mt-2.5 space-y-2">
            {nextSteps.map((step, index) => (
              <li key={step} className="flex gap-2.5 text-[11px] leading-5 text-muted">
                <span className="grid h-5 w-5 flex-none place-items-center rounded-full border border-brand/25 bg-brand/10 text-[8.5px] font-semibold text-brand-soft">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-6 flex flex-col gap-2.5 border-t border-white/8 pt-5 sm:flex-row sm:flex-wrap">
          <button type="button" onClick={onDiscuss} className="btn btn-primary">
            Discuss this with the AI Counsellor
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <button type="button" onClick={onBackToChat} className="btn btn-secondary">
            Back to chat
          </button>
        </div>

        <p className="mt-4 text-[9.5px] leading-4 text-subtle">
          This report uses only the information you chose to share and the FuturePath data. It does
          not assess mental health, diagnose a learning difficulty, or predict career success.
        </p>
      </div>
    </div>
  )
}
