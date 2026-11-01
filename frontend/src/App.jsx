import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import CareerDetailModal from './components/CareerDetailModal'
import ComingSoonModal from './components/ComingSoonModal'
import HomePage from './pages/HomePage'
import CareerDiscoveryPage from './pages/CareerDiscoveryPage'
import CareerDetailPage from './pages/CareerDetailPage'
import RoadmapsPage from './pages/RoadmapsPage'
import RoadmapDetailPage from './pages/RoadmapDetailPage'
import StreamComparePage from './pages/StreamComparePage'
import ExamsCollegesPage from './pages/ExamsCollegesPage'
import AICounsellorPage from './pages/AICounsellorPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import AppProvider from './context/AppProvider'
import { useApp } from './context/AppContext'

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

      <Footer />

      <CareerDetailModal career={selectedCareer} onClose={closeCareer} />
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
