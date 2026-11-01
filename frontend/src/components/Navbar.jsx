import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import Brand from './Brand'

const NAV_LINKS = [
  { label: 'Home', to: '/#home', section: 'home' },
  { label: 'Discover Careers', to: '/careers', section: null },
  { label: 'Career Roadmap', to: '/roadmaps', section: null },
  { label: 'Compare Paths', to: '/compare', section: null },
  { label: 'Exams & Colleges', to: '/exams-colleges', section: null },
  { label: 'AI Counsellor', to: '/ai-counsellor', section: null },
  { label: 'About', to: '/about', section: null },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!onHome) return undefined

    const sections = NAV_LINKS.map((link) =>
      link.section ? document.getElementById(link.section) : null,
    ).filter(Boolean)
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-42% 0px -52% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [onHome])

  useEffect(() => {
    if (!mobileOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }

    const handleResize = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  const handleGetStarted = () => {
    closeMobile()
    navigate('/careers')
  }

  const isLinkActive = (link) => {
    if (link.section) return onHome && activeSection === link.section
    if (link.to === '/careers') {
      return location.pathname === '/careers' || location.pathname.startsWith('/careers/')
    }
    if (link.to === '/roadmaps') {
      return location.pathname === '/roadmaps' || location.pathname.startsWith('/roadmaps/')
    }
    return location.pathname === link.to
  }

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled || mobileOpen
            ? 'border-white/10 bg-canvas/78 shadow-[0_18px_60px_-36px_rgba(0,0,0,0.9)] backdrop-blur-xl'
            : 'border-transparent bg-canvas/35 backdrop-blur-md'
        }`}
      >
        <nav className="page-shell" aria-label="Primary navigation">
          <div className="flex h-[72px] items-center justify-between gap-5">
            <Brand onClick={closeMobile} />

            <div className="hidden items-center gap-0.5 xl:flex">
              {NAV_LINKS.map((link) => {
                const isActive = isLinkActive(link)

                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleGetStarted}
                className="btn btn-primary hidden sm:inline-flex"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen((current) => !current)}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-ink transition hover:bg-white/[0.08] xl:hidden"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {mobileOpen ? (
        <>
          <div
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 bg-[#02050f]/72 backdrop-blur-sm xl:hidden"
            onClick={closeMobile}
            aria-hidden="true"
          />
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full z-50 max-h-[calc(100svh-72px)] overflow-y-auto border-b border-white/10 bg-[#060a1a]/96 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl xl:hidden"
          >
            <nav className="page-shell py-5" aria-label="Mobile navigation">
              <div className="space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = isLinkActive(link)

                  return (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={closeMobile}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? 'bg-white/[0.07] text-ink'
                          : 'text-muted hover:bg-white/[0.04] hover:text-ink'
                      }`}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 text-subtle" />
                    </Link>
                  )
                })}
              </div>
              <button
                type="button"
                onClick={handleGetStarted}
                className="btn btn-primary btn-lg mt-4 w-full"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-4 px-1 text-center text-[11px] text-subtle">
                Explore your options. Understand your choices. Plan your next step.
              </p>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  )
}
