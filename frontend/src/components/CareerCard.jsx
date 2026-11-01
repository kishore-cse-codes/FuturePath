import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CareerCard({ career, onSelect, index = 0 }) {
  const Icon = career.icon

  return (
    <Reveal className="h-full" delay={(index % 4) * 55}>
      <button
        type="button"
        onClick={() => onSelect(career)}
        className="career-card glass group flex h-full w-full flex-col rounded-3xl p-5 text-left sm:p-6"
        style={{ '--accent': career.color }}
        aria-label={`Explore ${career.name}`}
      >
        <span
          className="grid h-12 w-12 place-items-center rounded-2xl border transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.04]"
          style={{
            color: career.color,
            backgroundColor: `${career.color}14`,
            borderColor: `${career.color}26`,
          }}
        >
          <Icon className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden="true" />
        </span>

        <span className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
          {career.category}
        </span>
        <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.025em] text-ink">{career.name}</h3>
        <p className="mt-2.5 text-[13.5px] leading-6 text-muted">{career.description}</p>

        <span className="mt-auto flex items-center gap-1.5 pt-6 text-[12.5px] font-medium text-white/85">
          Explore career
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </button>
    </Reveal>
  )
}
