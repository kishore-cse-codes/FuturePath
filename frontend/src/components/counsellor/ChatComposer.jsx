import { useEffect, useRef, useState } from 'react'
import { ArrowUp, Square } from 'lucide-react'

export default function ChatComposer({
  onSend,
  onStop,
  onTyping,
  isBusy,
  disabled,
  disabledReason,
}) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)
  const maxLength = 2000

  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return
    textarea.style.height = 'auto'
    textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`
  }, [value])

  const submit = () => {
    if (disabled || isBusy) return
    const trimmed = value.trim()
    if (!trimmed) return
    const sent = onSend(trimmed)
    if (sent !== false) setValue('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault()
      submit()
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value.slice(0, maxLength))
    onTyping?.()
  }

  return (
    <div className="border-t border-white/8 bg-[#070c1d]/70 p-3 sm:p-4">
      {disabled && disabledReason ? (
        <p className="mb-2 rounded-xl border border-amber-300/15 bg-amber-300/[0.06] px-3 py-2 text-[10.5px] leading-5 text-amber-100/90">
          {disabledReason}
        </p>
      ) : null}

      <div
        className={`rounded-2xl border bg-white/[0.04] transition ${
          disabled
            ? 'border-white/8 opacity-75'
            : 'border-white/10 focus-within:border-brand-soft/45 focus-within:bg-white/[0.055] focus-within:shadow-[0_0_0_3px_rgba(124,108,255,0.12)]'
        }`}
      >
        <label htmlFor="counsellor-message" className="sr-only">
          Ask the AI Counsellor a question
        </label>
        <textarea
          ref={textareaRef}
          id="counsellor-message"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          rows={1}
          maxLength={maxLength}
          placeholder={
            disabled
              ? 'Connect the local AI model to start chatting...'
              : 'Ask about streams, careers, exams, colleges, or your next step...'
          }
          className="block max-h-40 min-h-[48px] w-full resize-none bg-transparent px-4 pb-2 pt-3.5 text-[13px] leading-6 text-ink outline-none placeholder:text-subtle"
        />

        <div className="flex items-center justify-between gap-3 px-3 pb-2.5">
          <div className="min-w-0">
            <p className="truncate text-[9.5px] text-subtle">
              Enter to send · Shift + Enter for a new line
            </p>
            {value.length > maxLength - 300 ? (
              <p className="text-[9px] text-subtle">
                {value.length}/{maxLength}
              </p>
            ) : null}
          </div>

          <div className="flex flex-none items-center gap-1.5">
            {isBusy ? (
              <button
                type="button"
                onClick={onStop}
                className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-white/12 bg-white/[0.05] px-3 text-[11px] font-medium text-muted transition hover:bg-white/[0.08] hover:text-ink"
              >
                <Square className="h-3 w-3 fill-current" aria-hidden="true" />
                Stop
              </button>
            ) : null}
            <button
              type="button"
              onClick={submit}
              disabled={disabled || isBusy || !value.trim()}
              className="grid h-9 w-9 place-items-center rounded-xl bg-[linear-gradient(135deg,#8878ff,#6d79ff_46%,#56a5ff)] text-white shadow-[0_10px_24px_-12px_rgba(108,96,255,0.9)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Send message"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
