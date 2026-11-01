import { useCallback } from 'react'
import Hero from '../components/Hero'
import FeaturedCareers from '../components/FeaturedCareers'
import RoadmapPreview from '../components/RoadmapPreview'
import StreamComparison from '../components/StreamComparison'
import ExamsPreview from '../components/ExamsPreview'
import CounselorPreview from '../components/CounselorPreview'
import { useApp } from '../context/AppContext'

const scrollBehavior = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'

export default function HomePage() {
  const { openCareer } = useApp()

  const focusCareerSearch = useCallback(() => {
    const input = document.getElementById('career-search-input')
    if (!input) return

    input.scrollIntoView({ behavior: scrollBehavior(), block: 'center' })
    window.setTimeout(() => input.focus({ preventScroll: true }), 380)
  }, [])

  return (
    <main id="main-content" tabIndex={-1} className="relative z-10">
      <Hero onSelectCareer={openCareer} onDiscoverPath={focusCareerSearch} />
      <FeaturedCareers onSelectCareer={openCareer} />
      <RoadmapPreview />
      <StreamComparison />
      <ExamsPreview />
      <CounselorPreview />
    </main>
  )
}
