import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Compass } from 'lucide-react'
import CareerCarousel from './CareerCarousel'
import CareerSearch from './CareerSearch'
import { CAREER_COUNT } from '../data/careers'

export default function Hero({ onSelectCareer, onDiscoverPath }) {
  return (
    <section id="home" className="relative pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-grid absolute inset-x-0 top-0 h-[46rem]" />
        <div className="absolute left-[56%] top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.11),transparent_68%)]" />
      </div>

      <div className="page-shell relative z-10 grid min-w-0 grid-cols-1 items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:gap-14">
        <div className="animate-rise min-w-0 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-brand-soft backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-soft shadow-[0_0_10px_rgba(179,167,255,0.8)]" />
            YOUR FUTURE STARTS HERE
          </div>

          <h1 className="mt-7 text-balance text-[clamp(2.8rem,5.2vw,4.55rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-ink">
            <span className="block">Your Career Journey</span>
            <span className="text-gradient block">Starts Here.</span>
          </h1>

          <p className="mt-6 max-w-lg text-[15.5px] leading-7 text-muted sm:text-[17px] sm:leading-8">
            Explore {CAREER_COUNT} career possibilities, discover educational pathways, and build a
            roadmap from Class 10 to your dream career.
          </p>

          <div className="mt-8">
            <CareerSearch onSelect={onSelectCareer} />
          </div>

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
            <Link to="/careers" className="btn btn-primary btn-lg w-full sm:w-auto">
              Explore Careers
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={onDiscoverPath}
              className="btn btn-secondary btn-lg w-full sm:w-auto"
            >
              <Compass className="h-4 w-4" />
              Discover My Path
            </button>
          </div>

          <p className="mt-5 flex items-start gap-2 text-[11.5px] leading-5 text-subtle sm:items-center">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none text-aqua/80 sm:mt-0" aria-hidden="true" />
            Explore your options. Understand your choices. Plan your next step.
          </p>
        </div>

        <div
          className="animate-rise relative mx-auto w-full min-w-0 max-w-[500px] lg:ml-auto"
          style={{ animationDelay: '120ms' }}
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 h-[33rem] w-[33rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055] sm:h-[36rem] sm:w-[36rem]" />
            <div className="absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />
            <span className="absolute left-[2%] top-[22%] h-1.5 w-1.5 rounded-full bg-brand/70" />
            <span className="absolute right-[3%] top-[14%] h-1 w-1 rounded-full bg-sky/70" />
            <span className="absolute bottom-[16%] right-[1%] h-1.5 w-1.5 rounded-full bg-aqua/60" />
          </div>

          <CareerCarousel />
        </div>
      </div>
    </section>
  )
}
