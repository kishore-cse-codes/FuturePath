import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, CornerDownLeft, Search, X } from 'lucide-react'
import { CAREER_COUNT, CAROUSEL_CAREERS, searchCareers } from '../data/careers'

const DEFAULT_CAREERS = CAROUSEL_CAREERS.slice(0, 6)

export default function CareerSearch({ onSelect }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const wrapperRef = useRef(null)
  const listId = useId()
  const resultPrefix = `${listId}-option`

  const { options, matchCount } = useMemo(() => {
    const normalizedQuery = query.trim()

    if (!normalizedQuery) {
      return { options: DEFAULT_CAREERS, matchCount: DEFAULT_CAREERS.length }
    }

    const matches = searchCareers(normalizedQuery)
    return { options: matches.slice(0, 6), matchCount: matches.length }
  }, [query])

  useEffect(() => {
    if (!open) return undefined

    const handlePointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [open])

  useEffect(() => {
    if (!open) return
    const activeOption = document.getElementById(`${resultPrefix}-${activeIndex}`)
    activeOption?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, open, resultPrefix])

  const chooseCareer = (career) => {
    setQuery(career.name)
    setOpen(false)
    onSelect(career)
  }

  const clearSearch = () => {
    setQuery('')
    setActiveIndex(0)
    setOpen(true)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setOpen(true)
      setActiveIndex((current) => (options.length ? (current + 1) % options.length : 0))
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setOpen(true)
      setActiveIndex((current) =>
        options.length ? (current - 1 + options.length) % options.length : 0,
      )
      return
    }

    if (event.key === 'Enter' && open) {
      event.preventDefault()
      if (options[activeIndex]) chooseCareer(options[activeIndex])
      return
    }

    if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const discoveryHref = query.trim()
    ? `/careers?q=${encodeURIComponent(query.trim())}`
    : '/careers'

  return (
    <div ref={wrapperRef} className="relative z-30 w-full max-w-xl">
      <div className="search-shell relative rounded-2xl border border-white/10 bg-white/[0.045]">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-subtle"
          aria-hidden="true"
        />
        <label htmlFor="career-search-input" className="sr-only">
          Search careers
        </label>
        <input
          id="career-search-input"
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={listId}
          aria-activedescendant={
            open && options.length ? `${resultPrefix}-${activeIndex}` : undefined
          }
          autoComplete="off"
          spellCheck="false"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setActiveIndex(0)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search careers, subjects, or interests..."
          className="search-input h-14 w-full rounded-2xl bg-transparent pl-12 pr-14 text-[15px] text-ink placeholder:text-subtle sm:pr-24"
        />
        {query ? (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-subtle transition hover:bg-white/[0.08] hover:text-ink sm:right-[4.65rem]"
            aria-label="Clear career search"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        ) : null}
        <div className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-subtle sm:flex">
          <CornerDownLeft className="h-3 w-3" aria-hidden="true" />
          Enter
        </div>
      </div>

      {open ? (
        <div
          id={listId}
          role="listbox"
          aria-label="Career search results"
          className="search-panel absolute left-0 right-0 top-[calc(100%+0.65rem)] overflow-hidden rounded-2xl"
        >
          <div className="flex items-center justify-between gap-3 px-4 pb-2 pt-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-subtle">
              {query.trim() ? 'Top matches' : 'Popular careers'}
            </p>
            <p className="text-[10px] text-subtle">
              {query.trim()
                ? `${options.length} of ${matchCount}`
                : `${CAREER_COUNT} paths total`}
            </p>
          </div>

          {options.length ? (
            <ul className="max-h-[19rem] overflow-y-auto px-2 pb-2">
              {options.map((career, index) => {
                const Icon = career.icon
                const isActive = index === activeIndex

                return (
                  <li key={career.id}>
                    <button
                      id={`${resultPrefix}-${index}`}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onMouseDown={(event) => event.preventDefault()}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => chooseCareer(career)}
                      className={`flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition ${
                        isActive ? 'search-option-active' : ''
                      }`}
                    >
                      <span
                        className="grid h-9 w-9 flex-none place-items-center rounded-xl border"
                        style={{
                          color: career.color,
                          backgroundColor: `${career.color}14`,
                          borderColor: `${career.color}26`,
                        }}
                      >
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium text-ink">
                          {career.name}
                        </span>
                        <span className="mt-0.5 block truncate text-[11px] text-subtle">
                          {career.category}
                        </span>
                      </span>
                      <ArrowUpRight className="ml-auto h-4 w-4 flex-none text-subtle" aria-hidden="true" />
                    </button>
                  </li>
                )
              })}
            </ul>
          ) : (
            <div className="px-4 pb-5 pt-2">
              <p className="text-sm font-medium text-ink">No careers found</p>
              <p className="mt-1 text-xs leading-5 text-subtle">
                Try a broader term like &ldquo;technology&rdquo;, &ldquo;health&rdquo;, or
                &ldquo;government&rdquo;.
              </p>
            </div>
          )}

          <Link
            to={discoveryHref}
            onClick={() => setOpen(false)}
            className="flex items-center justify-between border-t border-white/8 px-4 py-3 text-[11px] font-medium text-brand-soft transition hover:bg-white/[0.04] hover:text-ink"
          >
            {query.trim() ? 'View these results in Career Discovery' : 'Browse all career paths'}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          <div className="hidden border-t border-white/8 px-4 py-2.5 text-[10px] text-subtle sm:block">
            Use ↑ ↓ to navigate, Enter to select, Esc to close
          </div>
        </div>
      ) : null}
    </div>
  )
}
