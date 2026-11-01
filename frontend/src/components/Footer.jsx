import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import Brand from './Brand'

const EXPLORE_LINKS = [
  { label: 'Career Discovery', to: '/careers' },
  { label: 'Career Roadmap', to: '/roadmaps' },
  { label: 'Compare Paths', to: '/compare' },
]

const RESOURCE_LINKS = [
  { label: 'Exams & Colleges', to: '/exams-colleges' },
  { label: 'AI Career Counsellor', to: '/ai-counsellor' },
]

const COMPANY_LINKS = [
  { label: 'About FuturePath', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

function LinkColumn({ title, links }) {
  return (
    <div>
      <h2 className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-subtle">{title}</h2>
      <ul className="mt-3.5 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="text-[11.5px] leading-5 text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className="relative z-10 pb-4">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden="true"
      />
      <div className="page-shell pt-8">
        <div className="glass rounded-[1.75rem] px-5 py-8 sm:px-7 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.65fr_0.85fr_0.95fr_0.85fr] lg:gap-10">
            <div>
              <Brand />
              <p className="mt-4 font-display text-[12.5px] font-medium tracking-[-0.01em] text-white/80">
                Your Future. Your Choice. Your Journey.
              </p>
              <p className="mt-2.5 max-w-sm text-[11.5px] leading-5 text-subtle">
                Helping students discover meaningful career possibilities through practical
                guidance, educational roadmaps, and informed decisions.
              </p>
            </div>

            <LinkColumn title="Explore" links={EXPLORE_LINKS} />
            <LinkColumn title="Resources" links={RESOURCE_LINKS} />
            <LinkColumn title="Company" links={COMPANY_LINKS} />
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/8 pt-5 sm:flex-row sm:items-center">
            <p className="text-[10.5px] text-subtle">© 2026 FuturePath. All rights reserved.</p>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-lg text-[10.5px] text-subtle transition-colors hover:text-ink"
            >
              Back to Top
              <ArrowUp className="h-3 w-3" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
