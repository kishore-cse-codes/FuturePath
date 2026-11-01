import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Info, Layers3, SearchX } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { STREAMS } from '../data/streams'
import { EXAM_MAP } from '../data/exams'
import { getCareerById } from '../data/careers'

function ListCell({ items }) {
  if (!items?.length) {
    return <span className="text-[11px] text-subtle">Not listed</span>
  }

  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-[11.5px] leading-5 text-muted">
          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand-soft/70" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function CareerLinks({ ids }) {
  const careers = ids.map((id) => getCareerById(id)).filter(Boolean)

  if (!careers.length) {
    return <span className="text-[11px] text-subtle">No linked careers</span>
  }

  return (
    <ul className="space-y-1.5">
      {careers.map((career) => (
        <li key={career.id}>
          <Link
            to={`/careers/${career.id}`}
            className="inline-flex items-center gap-1 text-[11.5px] font-medium text-brand-soft transition hover:text-ink"
          >
            {career.name}
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  )
}

function ExamLinks({ ids }) {
  const exams = ids.map((id) => EXAM_MAP.get(id)).filter(Boolean)

  if (!exams.length) {
    return <span className="text-[11px] text-subtle">No linked examinations</span>
  }

  return (
    <ul className="space-y-1.5">
      {exams.map((exam) => (
        <li key={exam.id}>
          <Link
            to={`/exams-colleges?tab=exams&q=${encodeURIComponent(exam.name)}`}
            className="inline-flex items-center gap-1 text-[11.5px] font-medium text-brand-soft transition hover:text-ink"
          >
            {exam.name}
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  )
}

const ROWS = [
  { label: 'Subjects', render: (stream) => <ListCell items={stream.subjects} /> },
  { label: 'Core skills', render: (stream) => <ListCell items={stream.skills} /> },
  { label: 'Study options', render: (stream) => <ListCell items={stream.studyOptions} /> },
  { label: 'Entrance examinations', render: (stream) => <ExamLinks ids={stream.examIds} /> },
  { label: 'Example careers', render: (stream) => <CareerLinks ids={stream.sampleCareerIds} /> },
  {
    label: 'Best suited for',
    render: (stream) => (
      <p className="text-[11.5px] leading-5 text-muted">{stream.suitedFor}</p>
    ),
  },
  {
    label: 'Explore',
    render: (stream) => (
      <div className="flex flex-col gap-2">
        <Link
          to={`/careers?category=${stream.careerCategoryIds[0]}`}
          className="inline-flex items-center gap-1 text-[11.5px] font-medium text-brand-soft transition hover:text-ink"
        >
          Related careers
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </Link>
        <Link
          to={`/exams-colleges?tab=exams&stream=${stream.code}`}
          className="inline-flex items-center gap-1 text-[11.5px] font-medium text-brand-soft transition hover:text-ink"
        >
          Exams and colleges
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </Link>
        <Link
          to={`/roadmaps/${stream.sampleCareerIds[0]}`}
          className="inline-flex items-center gap-1 text-[11.5px] font-medium text-brand-soft transition hover:text-ink"
        >
          Sample roadmap
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </Link>
      </div>
    ),
  },
]

export default function StreamComparison({ hideHeading = false }) {
  const [selectedCodes, setSelectedCodes] = useState(STREAMS.map((stream) => stream.code))

  const selectedStreams = STREAMS.filter((stream) => selectedCodes.includes(stream.code))
  const allSelected = selectedCodes.length === STREAMS.length

  const toggleStream = (code) => {
    setSelectedCodes((current) =>
      current.includes(code) ? current.filter((item) => item !== code) : [...current, code],
    )
  }

  return (
    <section id="compare" className="relative py-20 sm:py-24 lg:py-28" aria-labelledby="compare-title">
      <div className="page-shell">
        {hideHeading ? null : (
          <Reveal>
            <SectionHeading
              eyebrow="Intermediate streams"
              title="Compare Streams Side by Side"
              description="Select the streams you want to compare and see how their subjects, skills, study options, entrance examinations, and career directions differ."
              titleId="compare-title"
            />
          </Reveal>
        )}

        {STREAMS.length ? (
          <>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11.5px] leading-5 text-subtle">
                Choose two or more streams for the clearest comparison.
                <span className="ml-1 text-white/70">{selectedStreams.length} selected.</span>
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCodes(STREAMS.map((stream) => stream.code))}
                  disabled={allSelected}
                  className="btn btn-secondary disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Select all
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCodes([])}
                  disabled={!selectedCodes.length}
                  className="btn btn-secondary disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Clear selection
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {STREAMS.map((stream, index) => {
                const isSelected = selectedCodes.includes(stream.code)

                return (
                  <Reveal key={stream.code} className="h-full" delay={index * 55}>
                    <article
                      className="stream-card h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
                      style={{
                        '--accent': stream.color,
                        borderColor: isSelected ? `${stream.color}66` : undefined,
                      }}
                      aria-label={`${stream.code}: ${stream.fullName}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span
                          className="rounded-xl border px-2.5 py-1.5 font-display text-[11px] font-semibold"
                          style={{
                            color: stream.color,
                            backgroundColor: `${stream.color}14`,
                            borderColor: `${stream.color}26`,
                          }}
                        >
                          {stream.code}
                        </span>
                        <button
                          type="button"
                          onClick={() => toggleStream(stream.code)}
                          aria-pressed={isSelected}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[10px] font-semibold transition ${
                            isSelected
                              ? 'border-aqua/25 bg-aqua/10 text-aqua'
                              : 'border-white/12 bg-white/[0.04] text-subtle hover:border-white/20 hover:text-ink'
                          }`}
                        >
                          {isSelected ? (
                            <Check className="h-3 w-3" aria-hidden="true" />
                          ) : null}
                          {isSelected ? 'Selected' : 'Compare'}
                        </button>
                      </div>

                      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-ink">
                        {stream.code}
                      </h3>
                      <p className="mt-1 text-[11.5px] font-medium text-brand-soft/85">
                        {stream.fullName}
                      </p>
                      <p className="mt-4 text-[13px] leading-6 text-muted">{stream.description}</p>

                      <div className="mt-5 border-t border-white/8 pt-4">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-subtle">
                          Typical areas
                        </p>
                        <p className="mt-1.5 text-[11.5px] font-medium" style={{ color: stream.color }}>
                          {stream.direction}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Link
                          to={`/careers?category=${stream.careerCategoryIds[0]}`}
                          className="inline-flex items-center gap-1 text-[10.5px] font-medium text-brand-soft transition hover:text-ink"
                        >
                          Related careers
                          <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </Link>
                        <Link
                          to={`/exams-colleges?tab=exams&stream=${stream.code}`}
                          className="inline-flex items-center gap-1 text-[10.5px] font-medium text-brand-soft transition hover:text-ink"
                        >
                          Exams
                          <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={80}>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080e21]/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_30px_80px_-48px_rgba(0,0,0,0.95)]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 px-5 py-4 sm:px-6">
                  <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
                    <Layers3 className="h-3.5 w-3.5" aria-hidden="true" />
                    Stream comparison
                  </div>
                  <span className="text-[10.5px] text-subtle">
                    {selectedStreams.length} of {STREAMS.length} streams selected
                  </span>
                </div>

                {selectedStreams.length ? (
                  <div className="overflow-x-auto" role="region" aria-label="Selected stream comparison" tabIndex={0}>
                    <table className="w-full min-w-[760px] border-separate border-spacing-0 text-left">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="sticky left-0 z-10 w-40 border-b border-white/8 bg-[#080e21] px-5 py-4 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-subtle"
                          >
                            Compare
                          </th>
                          {selectedStreams.map((stream) => (
                            <th
                              key={stream.code}
                              scope="col"
                              className="border-b border-l border-white/8 px-5 py-4"
                            >
                              <span
                                className="block font-display text-[13px] font-semibold"
                                style={{ color: stream.color }}
                              >
                                {stream.code}
                              </span>
                              <span className="mt-1 block text-[10.5px] font-normal leading-5 text-subtle">
                                {stream.shortName}
                              </span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {ROWS.map((row) => (
                          <tr key={row.label}>
                            <th
                              scope="row"
                              className="sticky left-0 z-10 border-b border-white/8 bg-[#080e21] px-5 py-4 align-top text-[10px] font-semibold uppercase tracking-[0.14em] text-subtle"
                            >
                              {row.label}
                            </th>
                            {selectedStreams.map((stream) => (
                              <td
                                key={`${row.label}-${stream.code}`}
                                className="border-b border-l border-white/8 px-5 py-4 align-top"
                              >
                                {row.render(stream)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="flex flex-col items-center px-6 py-14 text-center">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-subtle">
                      <SearchX className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-ink">
                      Select at least one stream to compare
                    </h3>
                    <p className="mt-2 max-w-md text-[12px] leading-6 text-subtle">
                      Use the compare buttons on the stream cards above. With no selection there is
                      no comparison to display.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedCodes(STREAMS.map((stream) => stream.code))}
                      className="btn btn-secondary mt-5"
                    >
                      Select all streams
                    </button>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 flex max-w-3xl items-start gap-2 text-[11px] leading-5 text-subtle">
                <Info className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
                Stream names and subject combinations vary by board, state, and school. These are
                common routes, not universal rules. Check current subject and admission requirements
                before choosing. There is no single best stream; the right choice depends on your
                interests, strengths, and goals.
              </p>
            </Reveal>
          </>
        ) : (
          <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-6 py-14 text-center">
            <Layers3 className="mx-auto h-6 w-6 text-subtle" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-ink">No stream data is available</h2>
            <p className="mt-2 text-[12.5px] leading-6 text-subtle">
              A comparison cannot be generated from the current data set. Explore the career library
              instead.
            </p>
            <Link to="/careers" className="btn btn-secondary mt-5">
              Browse careers
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
