import { useDeferredValue, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Search,
  SearchX,
  Sparkles,
  X,
} from 'lucide-react'
import CareerCard from '../components/CareerCard'
import Reveal from '../components/Reveal'
import {
  CAREER_CATEGORIES,
  CAREER_COUNT,
  CATEGORY_COUNTS,
  searchCareers,
} from '../data/careers'
import { useApp } from '../context/AppContext'

const PAGE_SIZE = 24
const VALID_CATEGORY_IDS = new Set(CAREER_CATEGORIES.map((category) => category.id))

export default function CareerDiscoveryPage() {
  const { openCareer } = useApp()
  const [searchParams, setSearchParams] = useSearchParams()
  const [pagination, setPagination] = useState({ filterKey: '', visibleCount: PAGE_SIZE })
  const searchInputRef = useRef(null)

  const query = searchParams.get('q') ?? ''
  const categoryParam =
    searchParams.get('category') ?? searchParams.get('field') ?? 'all'
  const activeCategory = VALID_CATEGORY_IDS.has(categoryParam) ? categoryParam : 'all'
  const deferredQuery = useDeferredValue(query)
  const isQueryPending = query !== deferredQuery
  const filterKey = `${activeCategory}\u0000${deferredQuery}`

  const results = useMemo(
    () => searchCareers(deferredQuery, { categoryId: activeCategory }),
    [activeCategory, deferredQuery],
  )

  const visibleCount =
    pagination.filterKey === filterKey ? pagination.visibleCount : PAGE_SIZE
  const visibleResults = results.slice(0, visibleCount)
  const activeCategoryLabel =
    activeCategory === 'all'
      ? 'All categories'
      : (CAREER_CATEGORIES.find((category) => category.id === activeCategory)?.label ??
        'All categories')
  const hasFilters = query.trim().length > 0 || activeCategory !== 'all'
  const resultsHeading = query.trim()
    ? `Results for “${query.trim()}”`
    : activeCategory === 'all'
      ? 'All career paths'
      : activeCategoryLabel
  const resultCountLabel = `${results.length} ${
    results.length === 1 ? 'career path' : 'career paths'
  }`

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)

    if (key === 'category') next.delete('field')

    if (!value || (key === 'category' && value === 'all')) {
      next.delete(key)
    } else {
      next.set(key, value)
    }

    setSearchParams(next, { replace: true })
  }

  const clearSearch = () => {
    updateParam('q', '')
    searchInputRef.current?.focus()
  }

  const clearAll = () => {
    setSearchParams({}, { replace: true })
    searchInputRef.current?.focus()
  }

  return (
    <main id="main-content" tabIndex={-1} className="relative z-10">
      <section
        className="relative overflow-hidden pb-10 pt-10 sm:pt-14"
        aria-labelledby="discovery-title"
      >
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
                <Compass className="h-3.5 w-3.5" aria-hidden="true" />
                Career discovery
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9.5px] font-medium uppercase tracking-[0.12em] text-subtle">
                {CAREER_COUNT} paths · {CAREER_CATEGORIES.length} categories
              </span>
            </div>

            <h1
              id="discovery-title"
              className="mt-4 max-w-3xl text-balance text-[clamp(2.4rem,4.8vw,3.85rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-ink"
            >
              Find a career that <span className="text-gradient">fits you.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
              Search by career, subject, or interest, filter across {CAREER_CATEGORIES.length}{' '}
              categories, and open a full profile for pathways, skills, and day-to-day work.
            </p>
          </div>

          <div
            className="animate-rise mt-8 rounded-[1.75rem] border border-white/10 bg-[#080e21]/65 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_30px_80px_-48px_rgba(0,0,0,0.95)] sm:p-4"
            style={{ animationDelay: '80ms' }}
          >
            <div className="search-shell relative rounded-2xl border border-white/10 bg-white/[0.045]">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-subtle"
                aria-hidden="true"
              />
              <label htmlFor="discovery-search-input" className="sr-only">
                Search career paths
              </label>
              <input
                ref={searchInputRef}
                id="discovery-search-input"
                type="text"
                autoComplete="off"
                spellCheck="false"
                value={query}
                onChange={(event) => updateParam('q', event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Escape' && query) clearSearch()
                }}
                placeholder="Search by career, subject, or interest..."
                className="search-input h-14 w-full rounded-2xl bg-transparent pl-12 pr-14 text-[15px] text-ink placeholder:text-subtle"
              />
              {query ? (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-2.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-muted transition hover:bg-white/[0.08] hover:text-ink"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : null}
            </div>

            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-subtle">
                  Filter by category
                </span>
                <span className="text-[10px] text-subtle">
                  {activeCategory === 'all'
                    ? `${CAREER_COUNT} paths`
                    : `${CATEGORY_COUNTS[activeCategory] ?? 0} paths`}
                </span>
              </div>
              <div
                className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible"
                role="group"
                aria-label="Filter careers by category"
              >
                <button
                  type="button"
                  onClick={() => updateParam('category', 'all')}
                  aria-pressed={activeCategory === 'all'}
                  className={`flex-none rounded-full border px-3.5 py-2 text-[11.5px] font-medium transition ${
                    activeCategory === 'all'
                      ? 'border-brand/40 bg-brand/15 text-brand-soft'
                      : 'border-white/10 bg-white/[0.03] text-muted hover:border-white/20 hover:text-ink'
                  }`}
                >
                  All
                  <span className="ml-1.5 text-[9.5px] opacity-65">{CAREER_COUNT}</span>
                </button>
                {CAREER_CATEGORIES.map((category) => {
                  const isActive = activeCategory === category.id

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => updateParam('category', category.id)}
                      aria-pressed={isActive}
                      className={`flex-none rounded-full border px-3.5 py-2 text-[11.5px] font-medium transition ${
                        isActive
                          ? 'border-brand/40 bg-brand/15 text-brand-soft'
                          : 'border-white/10 bg-white/[0.03] text-muted hover:border-white/20 hover:text-ink'
                      }`}
                    >
                      {category.label}
                      <span className="ml-1.5 text-[9.5px] opacity-65">
                        {CATEGORY_COUNTS[category.id] ?? 0}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {hasFilters ? (
              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={clearAll}
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-medium text-subtle transition-colors hover:text-ink"
                >
                  Clear all filters
                  <X className="h-3 w-3" aria-hidden="true" />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section
        className="relative pb-20 sm:pb-24 lg:pb-28"
        aria-labelledby="discovery-results"
      >
        <div className="page-shell">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-subtle">
                Discovery results
              </p>
              <h2
                id="discovery-results"
                className="mt-1.5 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl"
              >
                {resultsHeading}
              </h2>
            </div>
            <div className="text-right">
              <p
                className="text-[11.5px] text-subtle"
                aria-live="polite"
                aria-atomic="true"
              >
                {resultCountLabel}
              </p>
              {results.length > PAGE_SIZE ? (
                <p className="mt-1 text-[10px] text-subtle">
                  Showing {Math.min(visibleResults.length, results.length)} of {results.length}
                </p>
              ) : null}
            </div>
          </div>

          {isQueryPending ? (
            <p className="mt-3 text-[10px] text-subtle">Updating results…</p>
          ) : null}

          {results.length ? (
            <>
              <div className="mt-7 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleResults.map((career, index) => (
                  <CareerCard
                    key={career.id}
                    career={career}
                    index={index}
                    onSelect={openCareer}
                  />
                ))}
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
                    Show more careers
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <p className="text-[10.5px] text-subtle">
                    {results.length - visibleResults.length} more paths available
                  </p>
                </div>
              ) : null}
            </>
          ) : (
            <div className="mt-8 flex flex-col items-center rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-6 py-14 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-subtle">
                <SearchX className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">No careers match your search</h3>
              <p className="mt-2 max-w-sm text-[13px] leading-6 text-subtle">
                Try a broader term, choose a different category, or clear your filters to see all
                career paths.
              </p>
              <button type="button" onClick={clearAll} className="btn btn-secondary mt-6">
                Clear filters
              </button>
            </div>
          )}

          <Reveal delay={60}>
            <div className="glass relative mt-12 overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-10">
              <div
                className="pointer-events-none absolute -right-24 -top-32 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.16),transparent_68%)]"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Need a starting point?
                </p>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl">
                  Not sure which path is right for you?
                </h2>
                <p className="mt-3 max-w-xl text-[13.5px] leading-6 text-muted">
                  Browse the roadmap library for a stage-by-stage route, or talk through your
                  options with the FuturePath AI Counsellor.
                </p>
              </div>
              <div className="relative mt-6 flex flex-col gap-2.5 sm:flex-row lg:mt-0 lg:flex-none">
                <Link to="/roadmaps" className="btn btn-secondary">
                  Explore career roadmaps
                </Link>
                <Link to="/ai-counsellor" className="btn btn-primary">
                  Open the AI Counsellor
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
