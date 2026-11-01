import { useDeferredValue, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  ExternalLink,
  GraduationCap,
  Info,
  Search,
  SearchX,
  Target,
  X,
} from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle'
import {
  COLLEGE_LOCATIONS,
  COLLEGE_TYPES,
  COLLEGES,
} from '../data/colleges'
import {
  EXAM_CATEGORIES,
  EXAM_LEVELS,
  EXAM_MAP,
  EXAMS,
} from '../data/exams'
import { getCareerById } from '../data/careers'
import { STREAMS, STREAM_CODES } from '../data/streams'

const PAGE_SIZE = 10
const VALID_STREAMS = new Set(STREAM_CODES.map((code) => code.toUpperCase()))
const VALID_CATEGORIES = new Set(EXAM_CATEGORIES)
const VALID_LEVELS = new Set(EXAM_LEVELS)
const VALID_TYPES = new Set(COLLEGE_TYPES)
const VALID_LOCATIONS = new Set(COLLEGE_LOCATIONS)

const STREAM_LABELS = new Map(
  STREAMS.map((stream) => [stream.code.toUpperCase(), stream]),
)

function FilterSelect({ label, value, onChange, options, allLabel }) {
  return (
    <label className="flex items-center gap-2 text-[10.5px] text-subtle">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 rounded-xl border border-white/10 bg-[#0a1024] px-3 text-[11.5px] text-ink outline-none transition focus:border-brand/40"
      >
        <option value="">{allLabel}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

function CareerLinkList({ ids }) {
  const careers = ids.map((id) => getCareerById(id)).filter(Boolean)

  if (!careers.length) return null

  return (
    <div className="mt-4 border-t border-white/8 pt-3">
      <p className="text-[8.5px] font-semibold uppercase tracking-[0.15em] text-subtle">
        Related careers
      </p>
      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
        {careers.slice(0, 4).map((career) => (
          <Link
            key={career.id}
            to={`/careers/${career.id}`}
            className="inline-flex items-center gap-1 text-[10.5px] font-medium text-brand-soft transition hover:text-ink"
          >
            {career.name}
            <ArrowRight className="h-2.5 w-2.5" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  )
}

function ExamCard({ exam }) {
  return (
    <article className="flex flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/15 hover:bg-white/[0.04]">
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-brand/20 bg-brand/10 font-display text-[9px] font-semibold tracking-wide text-brand-soft">
          {exam.short}
        </span>
        <div className="min-w-0">
          <h2 className="text-[15px] font-semibold leading-5 tracking-[-0.02em] text-ink">
            {exam.name}
          </h2>
          <p className="mt-1 text-[9.5px] uppercase tracking-[0.12em] text-subtle">
            {exam.category} · {exam.level}
          </p>
        </div>
        <a
          href={exam.official.url}
          target="_blank"
          rel="noreferrer noopener"
          className="ml-auto grid h-8 w-8 flex-none place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-subtle transition hover:border-brand/25 hover:text-brand-soft"
          aria-label={`Open official website for ${exam.name}`}
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      <p className="mt-4 text-[12px] leading-6 text-muted">{exam.purpose}</p>

      <div className="mt-4 grid gap-3 border-t border-white/8 pt-4 sm:grid-cols-2">
        <div>
          <p className="text-[8.5px] font-semibold uppercase tracking-[0.15em] text-subtle">
            Eligibility snapshot
          </p>
          <p className="mt-1.5 text-[10.5px] leading-5 text-subtle">{exam.eligibility}</p>
        </div>
        <div>
          <p className="text-[8.5px] font-semibold uppercase tracking-[0.15em] text-subtle">
            Typical stages
          </p>
          <ol className="mt-1.5 space-y-1">
            {exam.stages.map((stage, index) => (
              <li key={stage} className="flex gap-1.5 text-[10.5px] leading-5 text-muted">
                <span className="tabular-nums text-subtle">{index + 1}.</span>
                {stage}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <CareerLinkList ids={exam.relatedCareerIds} />

      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-white/8 pt-4">
        <a
          href={exam.official.url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-brand-soft transition hover:text-ink"
        >
          {exam.official.label}
          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
        </a>
        <span className="text-[9px] text-subtle">Directory entry · verify current rules</span>
      </div>
    </article>
  )
}

function CollegeCard({ college }) {
  const exams = college.entranceExamIds.map((id) => EXAM_MAP.get(id)).filter(Boolean)

  return (
    <article className="flex flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/15 hover:bg-white/[0.04]">
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-aqua/20 bg-aqua/10 text-aqua">
          <Building2 className="h-[18px] w-[18px]" strokeWidth={1.8} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h2 className="text-[15px] font-semibold leading-5 tracking-[-0.02em] text-ink">
            {college.name}
          </h2>
          <p className="mt-1 text-[9.5px] uppercase tracking-[0.12em] text-subtle">
            {college.location}
          </p>
        </div>
        <a
          href={college.official.url}
          target="_blank"
          rel="noreferrer noopener"
          className="ml-auto grid h-8 w-8 flex-none place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-subtle transition hover:border-aqua/25 hover:text-aqua"
          aria-label={`Open official website for ${college.name}`}
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[9px] text-subtle">
          {college.type}
        </span>
        {college.streamCodes.map((code) => (
          <span
            key={code}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[9px] text-subtle"
          >
            {code}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <p className="text-[8.5px] font-semibold uppercase tracking-[0.15em] text-subtle">
          Courses in this entry
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {college.courses.map((course) => (
            <span
              key={course}
              className="rounded-full border border-white/9 bg-white/[0.035] px-2.5 py-1 text-[10px] text-white/70"
            >
              {course}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 border-t border-white/8 pt-3">
        <p className="text-[8.5px] font-semibold uppercase tracking-[0.15em] text-subtle">
          Admission pathway
        </p>
        <p className="mt-1.5 text-[10.5px] leading-5 text-muted">{college.admissionPathway}</p>
      </div>

      {exams.length ? (
        <div className="mt-3 border-t border-white/8 pt-3">
          <p className="text-[8.5px] font-semibold uppercase tracking-[0.15em] text-subtle">
            Linked entrance examinations
          </p>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
            {exams.map((exam) => (
              <Link
                key={exam.id}
                to={`/exams-colleges?tab=exams&q=${encodeURIComponent(exam.name)}`}
                className="inline-flex items-center gap-1 text-[10.5px] font-medium text-brand-soft transition hover:text-ink"
              >
                {exam.short}
                <ArrowRight className="h-2.5 w-2.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <CareerLinkList ids={college.relatedCareerIds} />

      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-white/8 pt-4">
        <a
          href={college.official.url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-brand-soft transition hover:text-ink"
        >
          {college.official.label}
          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
        </a>
        <span className="text-[9px] text-subtle">Seed entry · verify current details</span>
      </div>
    </article>
  )
}

export default function ExamsCollegesPage() {
  usePageTitle('Exams & Colleges')

  const [searchParams, setSearchParams] = useSearchParams()
  const [pagination, setPagination] = useState({ filterKey: '', visibleCount: PAGE_SIZE })

  const tab = searchParams.get('tab') === 'colleges' ? 'colleges' : 'exams'
  const query = searchParams.get('q') ?? ''
  const streamParam = (searchParams.get('stream') ?? '').toUpperCase()
  const stream = VALID_STREAMS.has(streamParam) ? streamParam : ''
  const categoryParam = searchParams.get('category') ?? ''
  const category = VALID_CATEGORIES.has(categoryParam) ? categoryParam : ''
  const levelParam = searchParams.get('level') ?? ''
  const level = VALID_LEVELS.has(levelParam) ? levelParam : ''
  const typeParam = searchParams.get('type') ?? ''
  const collegeType = VALID_TYPES.has(typeParam) ? typeParam : ''
  const locationParam = searchParams.get('location') ?? ''
  const location = VALID_LOCATIONS.has(locationParam) ? locationParam : ''

  const deferredQuery = useDeferredValue(query)
  const isPending = query !== deferredQuery
  const filterKey = [
    tab,
    stream,
    category,
    level,
    collegeType,
    location,
    deferredQuery,
  ].join('\u0000')
  const visibleCount =
    pagination.filterKey === filterKey ? pagination.visibleCount : PAGE_SIZE

  const examResults = useMemo(() => {
    const term = deferredQuery.trim().toLowerCase()

    return EXAMS.filter((exam) => {
      if (
        stream &&
        !exam.streamCodes.some((code) => code.toUpperCase() === stream)
      ) {
        return false
      }
      if (category && exam.category !== category) return false
      if (level && exam.level !== level) return false
      if (!term) return true

      const careerNames = exam.relatedCareerIds
        .map((id) => getCareerById(id)?.name ?? '')
        .join(' ')

      return [
        exam.name,
        exam.short,
        exam.category,
        exam.level,
        exam.purpose,
        exam.eligibility,
        exam.stages.join(' '),
        careerNames,
      ]
        .join(' ')
        .toLowerCase()
        .includes(term)
    })
  }, [category, deferredQuery, level, stream])

  const collegeResults = useMemo(() => {
    const term = deferredQuery.trim().toLowerCase()

    return COLLEGES.filter((college) => {
      if (
        stream &&
        !college.streamCodes.some((code) => code.toUpperCase() === stream)
      ) {
        return false
      }
      if (collegeType && college.type !== collegeType) return false
      if (location && college.location !== location) return false
      if (!term) return true

      const examNames = college.entranceExamIds
        .map((id) => EXAM_MAP.get(id)?.name ?? '')
        .join(' ')
      const careerNames = college.relatedCareerIds
        .map((id) => getCareerById(id)?.name ?? '')
        .join(' ')

      return [
        college.name,
        college.shortName,
        college.location,
        college.type,
        college.courses.join(' '),
        college.admissionPathway,
        examNames,
        careerNames,
      ]
        .join(' ')
        .toLowerCase()
        .includes(term)
    })
  }, [collegeType, deferredQuery, location, stream])

  const results = tab === 'exams' ? examResults : collegeResults
  const visibleResults = results.slice(0, visibleCount)
  const hasFilters = Boolean(query.trim() || stream || category || level || collegeType || location)

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)

    if (!value) next.delete(key)
    else next.set(key, value)

    setSearchParams(next, { replace: true })
  }

  const switchTab = (nextTab) => {
    const next = new URLSearchParams(searchParams)
    next.set('tab', nextTab)
    next.delete('category')
    next.delete('level')
    next.delete('type')
    next.delete('location')
    setSearchParams(next, { replace: true })
  }

  const clearAll = () => {
    const next = new URLSearchParams()
    next.set('tab', tab)
    setSearchParams(next, { replace: true })
  }

  return (
    <main id="main-content" tabIndex={-1} className="relative z-10">
      <section className="relative overflow-hidden pb-8 pt-10 sm:pt-14" aria-labelledby="directory-title">
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
                <Target className="h-3.5 w-3.5" aria-hidden="true" />
                Exams & colleges
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9.5px] font-medium uppercase tracking-[0.12em] text-subtle">
                {EXAMS.length} exam guides · {COLLEGES.length} seed colleges
              </span>
            </div>

            <h1
              id="directory-title"
              className="mt-4 max-w-3xl text-balance text-[clamp(2.4rem,4.8vw,3.85rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-ink"
            >
              Exams and colleges, without the <span className="text-gradient">guesswork.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
              Search entrance examinations and a starter college directory. Every entry links to an
              official website so you can verify current dates, fees, eligibility, and counselling
              rules yourself.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-subtle">
                <Info className="h-3 w-3" aria-hidden="true" />
                No dates or fees listed
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-subtle">
                <Info className="h-3 w-3" aria-hidden="true" />
                No rankings or cut-offs
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-subtle">
                <Info className="h-3 w-3" aria-hidden="true" />
                Verify on official sites
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-24" aria-labelledby="directory-results-title">
        <div className="page-shell">
          <div className="rounded-[1.75rem] border border-white/10 bg-[#080e21]/65 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_30px_80px_-48px_rgba(0,0,0,0.95)] sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div
                className="inline-flex w-fit rounded-xl border border-white/10 bg-white/[0.03] p-1"
                role="tablist"
                aria-label="Choose exams or colleges"
              >
                <button
                  type="button"
                  role="tab"
                  id="exams-tab"
                  aria-selected={tab === 'exams'}
                  aria-controls="directory-panel"
                  onClick={() => switchTab('exams')}
                  className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-[11.5px] font-medium transition ${
                    tab === 'exams'
                      ? 'bg-brand/20 text-brand-soft'
                      : 'text-subtle hover:text-ink'
                  }`}
                >
                  <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                  Entrance exams
                  <span className="text-[9px] tabular-nums opacity-70">{EXAMS.length}</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  id="colleges-tab"
                  aria-selected={tab === 'colleges'}
                  aria-controls="directory-panel"
                  onClick={() => switchTab('colleges')}
                  className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-[11.5px] font-medium transition ${
                    tab === 'colleges'
                      ? 'bg-brand/20 text-brand-soft'
                      : 'text-subtle hover:text-ink'
                  }`}
                >
                  <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Colleges
                  <span className="text-[9px] tabular-nums opacity-70">{COLLEGES.length}</span>
                </button>
              </div>

              <p className="text-[10.5px] leading-5 text-subtle">
                {tab === 'exams'
                  ? 'Exam guides describe purpose, general eligibility, and typical stages.'
                  : 'College entries are a small seed directory, not a complete or ranked list.'}
              </p>
            </div>

            <div className="mt-5">
              <div className="search-shell relative rounded-2xl border border-white/10 bg-white/[0.045]">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-subtle"
                  aria-hidden="true"
                />
                <label htmlFor="directory-search" className="sr-only">
                  {tab === 'exams' ? 'Search entrance examinations' : 'Search colleges'}
                </label>
                <input
                  id="directory-search"
                  type="search"
                  autoComplete="off"
                  value={query}
                  onChange={(event) => updateParam('q', event.target.value)}
                  placeholder={
                    tab === 'exams'
                      ? 'Search by exam, category, level, or related career...'
                      : 'Search by college, course, location, or entrance exam...'
                  }
                  className="search-input h-14 w-full rounded-2xl bg-transparent pl-12 pr-14 text-[14px] text-ink placeholder:text-subtle"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => updateParam('q', '')}
                    className="absolute right-2.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-muted transition hover:bg-white/[0.08] hover:text-ink"
                    aria-label="Clear directory search"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                ) : null}
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-subtle">
                  Filter by Intermediate stream
                </span>
                <span className="text-[10px] text-subtle">
                  {stream ? STREAM_LABELS.get(stream)?.fullName : 'All streams'}
                </span>
              </div>
              <div
                className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible"
                role="group"
                aria-label="Filter by Intermediate stream"
              >
                <button
                  type="button"
                  onClick={() => updateParam('stream', '')}
                  aria-pressed={!stream}
                  className={`flex-none rounded-full border px-3.5 py-2 text-[11.5px] font-medium transition ${
                    !stream
                      ? 'border-brand/40 bg-brand/15 text-brand-soft'
                      : 'border-white/10 bg-white/[0.03] text-muted hover:border-white/20 hover:text-ink'
                  }`}
                >
                  All streams
                </button>
                {STREAMS.map((item) => {
                  const isActive = stream === item.code

                  return (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => updateParam('stream', item.code)}
                      aria-pressed={isActive}
                      className={`flex-none rounded-full border px-3.5 py-2 text-[11.5px] font-medium transition ${
                        isActive
                          ? 'border-brand/40 bg-brand/15 text-brand-soft'
                          : 'border-white/10 bg-white/[0.03] text-muted hover:border-white/20 hover:text-ink'
                      }`}
                    >
                      {item.code}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-end justify-between gap-3 border-t border-white/8 pt-4">
              <div className="flex flex-wrap items-end gap-2">
                {tab === 'exams' ? (
                  <>
                    <FilterSelect
                      label="Exam category"
                      value={category}
                      onChange={(value) => updateParam('category', value)}
                      options={EXAM_CATEGORIES}
                      allLabel="All exam categories"
                    />
                    <FilterSelect
                      label="Exam level"
                      value={level}
                      onChange={(value) => updateParam('level', value)}
                      options={EXAM_LEVELS}
                      allLabel="All levels"
                    />
                  </>
                ) : (
                  <>
                    <FilterSelect
                      label="College type"
                      value={collegeType}
                      onChange={(value) => updateParam('type', value)}
                      options={COLLEGE_TYPES}
                      allLabel="All college types"
                    />
                    <FilterSelect
                      label="College location"
                      value={location}
                      onChange={(value) => updateParam('location', value)}
                      options={COLLEGE_LOCATIONS}
                      allLabel="All locations"
                    />
                  </>
                )}
              </div>

              {hasFilters ? (
                <button
                  type="button"
                  onClick={clearAll}
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-medium text-subtle transition-colors hover:text-ink"
                >
                  Clear all filters
                  <X className="h-3 w-3" aria-hidden="true" />
                </button>
              ) : null}
            </div>
          </div>

          <div
            id="directory-panel"
            role="tabpanel"
            aria-labelledby={tab === 'exams' ? 'exams-tab' : 'colleges-tab'}
            className="mt-8"
          >
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-subtle">
                  Directory results
                </p>
                <h2
                  id="directory-results-title"
                  className="mt-1.5 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl"
                >
                  {tab === 'exams' ? 'Entrance examinations' : 'Colleges'}
                </h2>
              </div>
              <div className="text-right">
                <p className="text-[11.5px] text-subtle" aria-live="polite" aria-atomic="true">
                  {results.length} {results.length === 1 ? 'entry' : 'entries'}
                </p>
                {results.length > PAGE_SIZE ? (
                  <p className="mt-1 text-[10px] text-subtle">
                    Showing {Math.min(visibleResults.length, results.length)} of {results.length}
                  </p>
                ) : null}
              </div>
            </div>

            {isPending ? <p className="mt-3 text-[10px] text-subtle">Updating results…</p> : null}

            {results.length ? (
              <>
                <div
                  className={`mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 ${isPending ? 'opacity-70' : ''}`}
                  aria-busy={isPending}
                >
                  {visibleResults.map((item) =>
                    tab === 'exams' ? (
                      <ExamCard key={item.id} exam={item} />
                    ) : (
                      <CollegeCard key={item.id} college={item} />
                    ),
                  )}
                </div>

                {visibleResults.length < results.length ? (
                  <div className="mt-8 flex flex-col items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setPagination({
                          filterKey,
                          visibleCount: visibleCount + PAGE_SIZE,
                        })
                      }
                      className="btn btn-secondary"
                    >
                      Show more {tab === 'exams' ? 'exams' : 'colleges'}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <p className="text-[10.5px] text-subtle">
                      {results.length - visibleResults.length} more entries available
                    </p>
                  </div>
                ) : null}
              </>
            ) : (
              <div className="mt-6 flex flex-col items-center rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-6 py-14 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-subtle">
                  <SearchX className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  No {tab === 'exams' ? 'exams' : 'colleges'} match your search
                </h3>
                <p className="mt-2 max-w-sm text-[13px] leading-6 text-subtle">
                  Try a broader term, choose a different stream, or clear your filters. The directory
                  is intentionally small and does not claim to be exhaustive.
                </p>
                <button type="button" onClick={clearAll} className="btn btn-secondary mt-6">
                  Clear filters
                </button>
              </div>
            )}
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <p className="flex items-start gap-2 text-[11px] leading-5 text-subtle">
              <Info className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
              This directory is a starting point. It deliberately does not list exam dates, fees,
              cut-offs, rankings, or guaranteed eligibility. Requirements change by year,
              institution, category, and state. Always open the official website and read the
              current information bulletin before applying.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
