import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CareerCard from './CareerCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { CAREER_COUNT, FEATURED_CAREERS } from '../data/careers'

export default function FeaturedCareers({ onSelectCareer }) {
  return (
    <section id="careers" className="relative py-20 sm:py-24 lg:py-28" aria-labelledby="careers-title">
      <div className="page-shell">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Career library"
              title="Explore Your Possibilities"
              description={`Discover ${CAREER_COUNT} career profiles and find paths that match your interests and ambitions.`}
              titleId="careers-title"
            />
            <Link
              to="/careers"
              className="inline-flex items-center gap-1.5 text-[12px] font-medium text-brand-soft transition-colors hover:text-ink sm:pb-1"
            >
              View all {CAREER_COUNT} careers
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {FEATURED_CAREERS.map((career, index) => (
            <CareerCard
              key={career.id}
              career={career}
              index={index}
              onSelect={onSelectCareer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
