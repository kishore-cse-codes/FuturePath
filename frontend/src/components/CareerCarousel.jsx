import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Route,
  Sparkles,
} from 'lucide-react'
import { CAROUSEL_CAREERS, getCareerPath } from '../data/careers'
import { getRoadmapPath } from '../data/roadmaps'

const AUTOPLAY_MS = 6500

export default function CareerCarousel({ careers = CAROUSEL_CAREERS }) {
  const [index, setIndex] = useState(0)
  const [manualPaused, setManualPaused] = useState(false)
  const [interactionPaused, setInteractionPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const touchStart = useRef(null)
  const count = careers.length

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(query.matches)

    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  const goTo = useCallback(
    (nextIndex) => {
      if (!count) return
      setIndex(((nextIndex % count) + count) % count)
    },
    [count],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const previous = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (!count || manualPaused || interactionPaused || reducedMotion) return undefined

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [count, interactionPaused, manualPaused, reducedMotion, index])

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      previous()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      next()
    }
  }

  const handleTouchStart = (event) => {
    const touch = event.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
    setInteractionPaused(true)
  }

  const handleTouchEnd = (event) => {
    const start = touchStart.current
    touchStart.current = null
    setInteractionPaused(false)

    if (!start) return

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - start.x
    const deltaY = touch.clientY - start.y

    if (Math.abs(deltaX) > 44 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) next()
      else previous()
    }
  }

  if (!count) return null

  const activeCareer = careers[index]
  const statusLabel = `${index + 1} of ${count}: ${activeCareer.name}`

  return (
    <section
      className="glass relative overflow-hidden rounded-[1.9rem] p-4 sm:p-5"
      aria-roledescription="carousel"
      aria-label="Featured career pathways"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setInteractionPaused(false)
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-soft">
            <Route className="h-3.5 w-3.5" aria-hidden="true" />
            Career carousel
          </span>
          <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-subtle sm:inline">
            {count} paths
          </span>
        </div>

        <div className="flex flex-none items-center gap-1.5">
          {!reducedMotion ? (
            <button
              type="button"
              onClick={() => setManualPaused((current) => !current)}
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-subtle transition hover:bg-white/[0.08] hover:text-ink"
              aria-label={manualPaused ? 'Resume automatic career carousel' : 'Pause automatic career carousel'}
            >
              {manualPaused ? (
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
          ) : null}
          <button
            type="button"
            onClick={previous}
            className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-muted transition hover:bg-white/[0.08] hover:text-ink"
            aria-label="Previous career"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-muted transition hover:bg-white/[0.08] hover:text-ink"
            aria-label="Next career"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025]">
        <div
          className={`flex ${reducedMotion ? '' : 'transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]'}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {careers.map((career, slideIndex) => {
            const Icon = career.icon
            const isActive = slideIndex === index

            return (
              <article
                key={career.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${slideIndex + 1} of ${count}: ${career.name}`}
                aria-hidden={!isActive}
                inert={!isActive}
                className="flex min-h-[30rem] w-full flex-none flex-col p-4 sm:min-h-[30.5rem] sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="grid h-12 w-12 flex-none place-items-center rounded-2xl border"
                    style={{
                      color: career.color,
                      backgroundColor: `${career.color}16`,
                      borderColor: `${career.color}2e`,
                    }}
                  >
                    <Icon className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-subtle">
                      {career.category}
                    </p>
                    <h2 className="mt-1.5 font-display text-[1.35rem] font-semibold leading-tight tracking-[-0.035em] text-ink">
                      {career.carouselTitle ?? career.name}
                    </h2>
                  </div>
                  <span className="ml-auto flex-none rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[9.5px] tabular-nums text-subtle">
                    {String(slideIndex + 1).padStart(2, '0')} / {count}
                  </span>
                </div>

                <p className="mt-4 text-[13px] leading-6 text-muted">{career.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {career.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/9 bg-white/[0.035] px-2.5 py-1 text-[10px] text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-subtle">
                    <Sparkles className="h-3 w-3 text-brand-soft/80" aria-hidden="true" />
                    Example route
                  </p>
                  <ol className="mt-2.5 grid grid-cols-2 gap-1.5">
                    {career.stages.map((stage, stageIndex) => (
                      <li
                        key={`${career.id}-${stage}`}
                        className="flex min-w-0 items-start gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-2.5 py-2"
                      >
                        <span
                          className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full text-[8px] font-semibold"
                          style={{
                            color: career.color,
                            backgroundColor: `${career.color}18`,
                          }}
                        >
                          {stageIndex + 1}
                        </span>
                        <span className="line-clamp-2 text-[10px] leading-4 text-white/70">
                          {stage}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-white/8 pt-4">
                  <span className="text-[10.5px] text-subtle">One of many possible paths</span>
                  <div className="flex items-center gap-3">
                    <Link
                      to={getRoadmapPath(career.id)}
                      tabIndex={isActive ? 0 : -1}
                      className="inline-flex items-center gap-1 rounded-lg text-[10.5px] font-medium text-subtle transition hover:text-ink"
                    >
                      Roadmap
                    </Link>
                    <Link
                      to={getCareerPath(career.id)}
                      tabIndex={isActive ? 0 : -1}
                      className="inline-flex items-center gap-1.5 rounded-lg text-[11.5px] font-semibold text-brand-soft transition hover:text-ink"
                    >
                      Explore career
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5" role="group" aria-label="Choose career slide">
          {careers.map((career, dotIndex) => {
            const isActive = dotIndex === index

            return (
              <button
                key={career.id}
                type="button"
                onClick={() => goTo(dotIndex)}
                aria-label={`Show ${career.name}`}
                aria-current={isActive ? 'true' : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-5 bg-brand-soft'
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            )
          })}
        </div>
        <p className="sr-only" aria-live={manualPaused || interactionPaused ? 'polite' : 'off'}>
          {statusLabel}
        </p>
        <p className="hidden text-[10px] text-subtle sm:block">Swipe or use arrow keys</p>
      </div>
    </section>
  )
}
