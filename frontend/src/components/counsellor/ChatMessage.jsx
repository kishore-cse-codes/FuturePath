import { Bot, CircleStop, Sparkles, UserRound } from 'lucide-react'
import MessageContent from './MessageContent'
import ResourceLinks from './ResourceLinks'

function ThinkingBubble() {
  return (
    <div className="flex items-center gap-2.5 py-0.5" role="status" aria-live="polite">
      <span className="flex items-center gap-1" aria-hidden="true">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-soft"
            style={{ animationDelay: `${index * 160}ms`, animationDuration: '1s' }}
          />
        ))}
      </span>
      <span className="text-[11.5px] text-subtle">
        Thinking through your options. A local model may take a few seconds.
      </span>
    </div>
  )
}

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'
  const isStreamingEmpty = !isUser && !message.content && message.streaming
  const time = message.createdAt
    ? new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : ''

  if (isUser) {
    return (
      <article className="flex justify-end gap-3" aria-label="Your message">
        <div className="max-w-[86%] sm:max-w-[76%]">
          <div className="mb-1.5 flex items-center justify-end gap-2 text-[9px] uppercase tracking-[0.14em] text-subtle">
            <span>You</span>
            {time ? <span className="tracking-normal text-white/25">{time}</span> : null}
          </div>
          <div className="rounded-[1.35rem] rounded-tr-md border border-brand/25 bg-brand/15 px-4 py-3 text-[13px] leading-6 text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <p className="whitespace-pre-wrap break-words">{message.content}</p>
          </div>
        </div>
        <span className="mt-5 grid h-8 w-8 flex-none place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-muted">
          <UserRound className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
        </span>
      </article>
    )
  }

  return (
    <article className="flex gap-3" aria-label="AI Counsellor message">
      <span className="mt-5 grid h-8 w-8 flex-none place-items-center rounded-xl border border-brand/25 bg-brand/15 text-brand-soft">
        <Bot className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <div className="min-w-0 max-w-[92%] flex-1 sm:max-w-[84%]">
        <div className="mb-1.5 flex flex-wrap items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-subtle">
          <span>AI Counsellor</span>
          {message.streaming ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-brand/25 bg-brand/10 px-1.5 py-0.5 tracking-[0.08em] text-brand-soft">
              <Sparkles className="h-2.5 w-2.5" aria-hidden="true" />
              {message.content ? 'Writing' : 'Thinking'}
            </span>
          ) : null}
          {message.stopped ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/20 bg-amber-300/10 px-1.5 py-0.5 tracking-[0.08em] text-amber-200">
              <CircleStop className="h-2.5 w-2.5" aria-hidden="true" />
              Stopped
            </span>
          ) : null}
          {message.incomplete ? (
            <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-1.5 py-0.5 tracking-[0.08em] text-amber-200">
              Incomplete
            </span>
          ) : null}
          {time && !message.streaming ? (
            <span className="tracking-normal text-white/25">{time}</span>
          ) : null}
        </div>

        <div className="rounded-[1.35rem] rounded-tl-md border border-white/10 bg-white/[0.045] px-4 py-3.5 text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          {isStreamingEmpty ? <ThinkingBubble /> : null}
          {message.content ? (
            <div className={message.streaming ? 'counsellor-streaming' : undefined}>
              <MessageContent content={message.content} />
            </div>
          ) : null}
          {message.streaming && message.content ? (
            <span
              className="mt-1 inline-block h-3.5 w-[2px] animate-pulse rounded-full bg-brand-soft align-middle"
              aria-hidden="true"
            />
          ) : null}
          <ResourceLinks resources={message.resources} />
        </div>
      </div>
    </article>
  )
}
