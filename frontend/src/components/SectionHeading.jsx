export default function SectionHeading({ eyebrow, title, description, titleId }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-soft">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] text-ink sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
