import { Link } from 'react-router-dom'

export function BrandSymbol({ className = '' }) {
  return (
    <span className={`brand-mark ${className}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" className="h-[25px] w-[25px]" fill="none">
        <path
          d="M10.4 29.6c4.2-.2 7.1-2.6 8.7-6.1 1.8-3.9 4.8-6.2 9.7-6.6"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="brand-route"
        />
        <path
          d="M24.1 14.3l6.5-2.4-2.5 6.4"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10.4" cy="29.6" r="2.15" fill="white" fillOpacity="0.95" />
        <circle cx="19.1" cy="23.5" r="1.35" fill="white" fillOpacity="0.72" />
      </svg>
    </span>
  )
}

export default function Brand({
  to = '/',
  className = '',
  markClassName = '',
  wordmarkClassName = '',
  tagline,
  onClick,
}) {
  const content = (
    <>
      <BrandSymbol className={markClassName} />
      <span className="flex min-w-0 flex-col">
        <span
          className={`font-display text-[1.05rem] font-semibold leading-none tracking-[-0.025em] text-ink ${wordmarkClassName}`}
        >
          Future<span className="brand-wordmark-accent">Path</span>
        </span>
        {tagline ? (
          <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-subtle">
            {tagline}
          </span>
        ) : null}
      </span>
    </>
  )

  const classes = `brand-lockup inline-flex items-center gap-2.5 rounded-xl ${className}`

  if (!to) {
    return (
      <span className={classes} onClick={onClick}>
        {content}
      </span>
    )
  }

  return (
    <Link to={to} className={classes} onClick={onClick} aria-label="FuturePath home">
      {content}
    </Link>
  )
}
