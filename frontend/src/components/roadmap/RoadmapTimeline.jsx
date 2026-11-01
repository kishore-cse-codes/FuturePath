function StageDetails({ stage, color }) {
  return (
    <div className="min-w-0">
      {stage.duration ? (
        <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-subtle">
          {stage.duration}
        </p>
      ) : null}
      <h3 className="mt-1.5 text-[13.5px] font-semibold leading-5 tracking-[-0.015em] text-ink">
        {stage.title}
      </h3>
      {stage.description ? (
        <p className="mt-2 text-[11.5px] leading-[1.7] text-muted">{stage.description}</p>
      ) : null}
      {stage.focus?.length ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {stage.focus.map((item) => (
            <span
              key={item}
              className="rounded-full border px-2 py-1 text-[9px] font-medium"
              style={{
                color: `${color}dd`,
                backgroundColor: `${color}0d`,
                borderColor: `${color}24`,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default function RoadmapTimeline({ stages, color, detailed }) {
  const horizontal = detailed && stages.length >= 3 && stages.length <= 5

  return (
    <>
      {horizontal ? (
        <div className="hidden lg:block">
          <ol
            className="grid gap-3"
            style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))` }}
            aria-label="Career roadmap stages"
          >
            {stages.map((stage, index) => (
              <li key={stage.title} className="min-w-0">
                <div className="relative mb-4 h-10">
                  <span
                    className="relative z-10 grid h-10 w-10 place-items-center rounded-full border font-display text-[10px] font-semibold shadow-[0_0_0_5px_#080e21]"
                    style={{
                      color,
                      backgroundColor: '#0a1024',
                      borderColor: `${color}3d`,
                    }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {index < stages.length - 1 ? (
                    <span
                      className="absolute left-10 right-0 top-5 h-px bg-gradient-to-r from-white/20 via-white/12 to-white/5"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <div className="h-full rounded-[1.35rem] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-4">
                  <StageDetails stage={stage} color={color} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      <ol
        className={`relative space-y-0 ${horizontal ? 'lg:hidden' : ''}`}
        aria-label="Career roadmap stages"
      >
        {stages.map((stage, index) => (
          <li
            key={stage.title}
            className="relative flex items-start gap-4 pb-5 last:pb-0"
          >
            {index < stages.length - 1 ? (
              <span
                className="absolute bottom-0 left-5 top-10 w-px bg-gradient-to-b from-white/18 to-white/5"
                aria-hidden="true"
              />
            ) : null}
            <span
              className="relative z-10 grid h-10 w-10 flex-none place-items-center rounded-full border bg-[#0a1024] font-display text-[10px] font-semibold"
              style={{ color, borderColor: `${color}3d` }}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0 flex-1 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
              <StageDetails stage={stage} color={color} />
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}
