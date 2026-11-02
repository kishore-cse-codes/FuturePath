import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import ComingSoonModal from './components/ComingSoonModal'
import AppProvider from './context/AppProvider'
import { useApp } from './context/AppContext'

const HomePage = lazy(() => import('./pages/HomePage'))
const CareerDiscoveryPage = lazy(() => import('./pages/CareerDiscoveryPage'))
const CareerDetailPage = lazy(() => import('./pages/CareerDetailPage'))
const RoadmapsPage = lazy(() => import('./pages/RoadmapsPage'))
const RoadmapDetailPage = lazy(() => import('./pages/RoadmapDetailPage'))
const StreamComparePage = lazy(() => import('./pages/StreamComparePage'))
const ExamsCollegesPage = lazy(() => import('./pages/ExamsCollegesPage'))
const AICounsellorPage = lazy(() => import('./pages/AICounsellorPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const CareerDetailModal = lazy(() => import('./components/CareerDetailModal'))

function AppShell() {
  const { selectedCareer, comingSoon, closeCareer, closeComingSoon } = useApp()

  return (
    <div id="top" className="relative min-h-screen overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-canvas"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="ambient-orb ambient-orb-violet" />
        <div className="ambient-orb ambient-orb-blue" />
        <div className="ambient-orb ambient-orb-aqua" />
      </div>

      <Navbar />

      <Suspense fallback={<main className="relative z-10 p-8 text-center text-muted" role="status">Loading page…</main>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<CareerDiscoveryPage />} />
          <Route path="/careers/:careerId" element={<CareerDetailPage />} />
          <Route path="/roadmaps" element={<RoadmapsPage />} />
          <Route path="/roadmaps/:careerId" element={<RoadmapDetailPage />} />
          <Route path="/compare" element={<StreamComparePage />} />
          <Route path="/exams-colleges" element={<ExamsCollegesPage />} />
          <Route path="/ai-counsellor" element={<AICounsellorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />

      {selectedCareer ? (
        <Suspense fallback={null}>
          <CareerDetailModal career={selectedCareer} onClose={closeCareer} />
        </Suspense>
      ) : null}
      <ComingSoonModal content={comingSoon} onClose={closeComingSoon} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ScrollManager />
        <AppShell />
      </AppProvider>
    </BrowserRouter>
  )
}

