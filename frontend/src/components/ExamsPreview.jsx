import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Info } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { EXAMS, EXAM_MAP } from '../data/exams'
import { COLLEGES } from '../data/colleges'

const PREVIEW_EXAM_IDS = [
  'jee-main',
  'neet-ug',
  'clat',
  'cuet-ug',
  'upsc-cse',
  'nata',
]

const CATEGORY_COLORS = {
  Engineering: '#7fb6ff',
  Medical: '#7de3d2',
  Law: '#f3a8c7',
  University: '#ffd18a',
  Government: '#b3a7ff',
  Defence: '#9fd18a',
  Design: '#f0a6ff',
  Commerce: '#ffc28a',
  Management: '#8fd8ff',
  Teaching: '#d6c38f',
}

export default function ExamsPreview() {
  const previewExams = PREVIEW_EXAM_IDS.map((id) => EXAM_MAP.get(id)).filter(Boolean)

  return (
    <section id="exams" className="relative py-20 sm:py-24 lg:py-28" aria-labelledby="exams-title">
      <div className="page-shell">
        <div className="grid gap-11 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Exams & colleges"
              title="Know What Comes Next"
              description="Explore entrance examinations and a starter directory of institutions, then follow official links for current details."
              titleId="exams-title"
            />
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/exams-colleges" className="btn btn-secondary w-full sm:w-auto">
                Explore Exams & Colleges
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/exams-colleges?tab=colleges"
                className="btn btn-ghost w-full sm:w-auto"
              >
                <Building2 className="h-4 w-4" aria-hidden="true" />
                Browse colleges
              </Link>
            </div>
            <p className="mt-4 flex max-w-sm items-start gap-2 text-[11px] leading-5 text-subtle">
              <Info className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
              {EXAMS.length} exam guides and {COLLEGES.length} seed college entries. No dates, fees,
              cut-offs, or rankings are listed. Verify every current detail on the official website.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-2">
              {previewExams.map((exam) => {
                const color = CATEGORY_COLORS[exam.category] ?? '#b3a7ff'

                return (
                  <Link
                    key={exam.id}
                    to={`/exams-colleges?tab=exams&q=${encodeURIComponent(exam.name)}`}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.045]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="grid h-10 w-10 flex-none place-items-center rounded-xl border font-display text-[9px] font-semibold tracking-wide"
                        style={{
                          color,
                          backgroundColor: `${color}14`,
                          borderColor: `${color}26`,
                        }}
                      >
                        {exam.short}
                      </span>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-subtle">
                        {exam.category}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[13.5px] font-semibold text-ink">{exam.name}</h3>
                    <p className="mt-1.5 line-clamp-2 text-[11.5px] leading-5 text-subtle">
                      {exam.purpose}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-brand-soft">
                      {exam.level}
                      <ArrowRight
                        className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
