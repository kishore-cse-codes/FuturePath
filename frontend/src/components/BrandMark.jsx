export default function BrandMark({ className = '' }) {
  return (
    <span className={`brand-mark ${className}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" className="h-[22px] w-[22px]" fill="none">
        <path
          d="M12.5 29V11.5h14"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 20.4h9"
          stroke="white"
          strokeOpacity="0.92"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle cx="27.4" cy="29" r="2.2" fill="white" fillOpacity="0.92" />
      </svg>
    </span>
  )
}
