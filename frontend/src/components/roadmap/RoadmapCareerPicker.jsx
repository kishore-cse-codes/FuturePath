import { useDeferredValue, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Compass, Search, SearchX, X } from 'lucide-react'
import { CAREER_CATEGORIES } from '../../data/careers'
import { DETAILED_ROADMAP_COUNT, ROADMAP_CHOICES, ROADMAP_COUNT, getRoadmapPath } from '../../data/roadmaps'

const PAGE_SIZE = 12

const CATEGORY_OPTIONS = CAREER_CATEGORIES.map((category) => ({
  ...category,
  count: ROADMAP_CHOICES.filter((roadmap) => roadmap.categoryId === category.id).length,
})).filter((category) => category.count > 0)

export default function RoadmapCareerPicker() {
  const [query, setQuery] = useState('')
  const [categoryId, setCategoryId] = useState('all')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const deferredQuery = useDeferredValue(query)

  const results = useMemo(() => {
    const term = deferredQuery.trim().toLowerCase()

    return ROADMAP_CHOICES.filter((roadmap) => {
      if (categoryId !== 'all' && roadmap.categoryId !== categoryId) return false
      if (!term) return true

      return [roadmap.title, roadmap.category, roadmap.categoryName, roadmap.intro]
        .join(' ')
        .toLowerCase()
        .includes(term)
    })
  }, [categoryId, deferredQuery])

  const visibleResults = results.slice(0, visibleCount)
  const isPending = query !== deferredQuery

  const updateQuery = (value) => {
    setQuery(value)
    setVisibleCount(PAGE_SIZE)
  }

  const selectCategory = (id) => {
    setCategoryId(id)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <section className="relative pb-20 sm:pb-24" aria-labelledby="roadmap-picker-title">
      <div className="page-shell">
        <div className="rounded-[1.75rem] border border-white/10 bg-[#080e21]/65 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_30px_80px_-48px_rgba(0,0,0,0.95)] sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
                <Compass className="h-3.5 w-3.5" aria-hidden="true" />
                Choose a destination
              </p>
              <h2
                id="roadmap-picker-title"
                className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-ink"
              >
                Explore career roadmaps
              </h2>
            </div>
            <p className="max-w-sm text-[11.5px] leading-5 text-subtle">
              {DETAILED_ROADMAP_COUNT} fully detailed pathways and overview routes for all{' '}
              {ROADMAP_COUNT} careers. Detailed routes include more stages, exams, and sources.
            </p>
          </div>

          <div className="search-shell relative mt-5 rounded-2xl border border-white/10 bg-white/[0.045]">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-subtle"
              aria-hidden="true"
            />
            <label htmlFor="roadmap-search" className="sr-only">
              Search all career roadmaps
            </label>
            <input
              id="roadmap-search"
              type="search"
              autoComplete="off"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Escape' && query) updateQuery('')
              }}
              placeholder="Search all career roadmaps..."
              className="search-input h-14 w-full rounded-2xl bg-transparent pl-12 pr-14 text-[14px] text-ink placeholder:text-subtle"
            />
            {query ? (
              <button
                type="button"
                onClick={() => updateQuery('')}
                className="absolute right-2.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-muted transition hover:bg-white/[0.08] hover:text-ink"
                aria-label="Clear roadmap search"
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
                {results.length} {results.length === 1 ? 'roadmap' : 'roadmaps'}
              </span>
            </div>
            <div
              className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible"
              role="group"
              aria-label="Filter roadmaps by category"
            >
              <button
                type="button"
                onClick={() => selectCategory('all')}
                className={`category-chip ${categoryId === 'all' ? 'category-chip-active' : ''}`}
                aria-pressed={categoryId === 'all'}
              >
                All
                <span className="ml-1.5 tabular-nums opacity-60">{ROADMAP_CHOICES.length}</span>
              </button>
              {CATEGORY_OPTIONS.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => selectCategory(category.id)}
                  className={`category-chip ${categoryId === category.id ? 'category-chip-active' : ''}`}
                  aria-pressed={categoryId === category.id}
                >
                  {category.label}
                  <span className="ml-1.5 tabular-nums opacity-60">{category.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div
            className={`mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3 ${isPending ? 'opacity-70' : ''}`}
            aria-live="polite"
            aria-busy={isPending}
          >
            {visibleResults.map((roadmap) => (
              <Link
                key={roadmap.id}
                to={getRoadmapPath(roadmap.id)}
                className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:bg-white/[0.05]"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-60 transition-opacity group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, ${roadmap.color}16, transparent 70%)`,
                  }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="rounded-full border px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.13em]"
                      style={{
                        color: roadmap.color,
                        backgroundColor: `${roadmap.color}12`,
                        borderColor: `${roadmap.color}2c`,
                      }}
                    >
                      {roadmap.category}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 text-subtle transition group-hover:translate-x-0.5 group-hover:text-brand-soft"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold tracking-[-0.02em] text-ink">
                    {roadmap.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[11.5px] leading-5 text-muted">
                    {roadmap.intro}
                  </p>
                  <p className="mt-4 border-t border-white/7 pt-3 text-[9.5px] uppercase tracking-[0.1em] text-subtle">
                    {roadmap.stageCount} stages ·{' '}
                    {roadmap.isDetailed ? 'Detailed route' : 'Overview route'}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {!results.length ? (
            <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-white/12 bg-white/[0.02] px-5 py-10 text-center">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-subtle">
                <SearchX className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-ink">No matching roadmap</h3>
              <p className="mt-1.5 max-w-md text-[12px] leading-6 text-subtle">
                Try another search or category. Every career profile also links to its roadmap.
              </p>
              <Link to="/careers" className="btn btn-secondary mt-5">
                Browse all careers
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ) : null}

          {visibleCount < results.length ? (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                className="btn btn-secondary"
              >
                Show more roadmaps
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
