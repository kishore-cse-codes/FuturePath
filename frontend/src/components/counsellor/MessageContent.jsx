function renderInline(text, keyPrefix) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={key} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code
          key={key}
          className="rounded-md border border-white/10 bg-white/[0.05] px-1.5 py-0.5 font-mono text-[0.85em] text-white/85"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    return <span key={key}>{part}</span>
  })
}

function InlineText({ text, keyPrefix }) {
  return <>{renderInline(text, keyPrefix)}</>
}

export default function MessageContent({ content }) {
  const lines = String(content ?? '').split(/\r?\n/)
  const blocks = []
  let paragraph = []
  let list = null
  let listType = 'ul'

  const flushParagraph = () => {
    if (!paragraph.length) return
    blocks.push({ type: 'paragraph', text: paragraph.join(' ') })
    paragraph = []
  }

  const flushList = () => {
    if (!list?.length) {
      list = null
      return
    }
    blocks.push({ type: listType, items: list })
    list = null
  }

  const flushAll = () => {
    flushParagraph()
    flushList()
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (!line) {
      flushAll()
      continue
    }

    const heading = line.match(/^#{1,4}\s+(.+)$/)
    if (heading) {
      flushAll()
      blocks.push({ type: 'heading', text: heading[1] })
      continue
    }

    if (/^[-*]\s+/.test(line)) {
      flushParagraph()
      if (list && listType !== 'ul') flushList()
      listType = 'ul'
      list = list ?? []
      list.push(line.replace(/^[-*]\s+/, ''))
      continue
    }

    const ordered = line.match(/^\d+[.)]\s+(.+)$/)
    if (ordered) {
      flushParagraph()
      if (list && listType !== 'ol') flushList()
      listType = 'ol'
      list = list ?? []
      list.push(ordered[1])
      continue
    }

    if (/^>\s+/.test(line)) {
      flushAll()
      blocks.push({ type: 'quote', text: line.replace(/^>\s+/, '') })
      continue
    }

    if (/^---+$/.test(line)) {
      flushAll()
      blocks.push({ type: 'divider' })
      continue
    }

    if (list) flushList()
    paragraph.push(line)
  }

  flushAll()

  if (!blocks.length) return null

  return (
    <div className="space-y-3">
      {blocks.map((block, index) => {
        const key = `block-${index}`

        if (block.type === 'heading') {
          return (
            <p key={key} className="pt-1 text-[13px] font-semibold leading-5 text-ink">
              <InlineText text={block.text} keyPrefix={key} />
            </p>
          )
        }

        if (block.type === 'ul') {
          return (
            <ul key={key} className="space-y-1.5 pl-0.5">
              {block.items.map((item, itemIndex) => (
                <li key={`${key}-${itemIndex}`} className="flex gap-2.5 text-[13px] leading-6">
                  <span
                    className="mt-[9px] h-1 w-1 flex-none rounded-full bg-brand-soft/80"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    <InlineText text={item} keyPrefix={`${key}-${itemIndex}`} />
                  </span>
                </li>
              ))}
            </ul>
          )
        }

        if (block.type === 'ol') {
          return (
            <ol key={key} className="space-y-1.5">
              {block.items.map((item, itemIndex) => (
                <li key={`${key}-${itemIndex}`} className="flex gap-2.5 text-[13px] leading-6">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[9px] font-semibold text-brand-soft">
                    {itemIndex + 1}
                  </span>
                  <span className="min-w-0">
                    <InlineText text={item} keyPrefix={`${key}-${itemIndex}`} />
                  </span>
                </li>
              ))}
            </ol>
          )
        }

        if (block.type === 'quote') {
          return (
            <blockquote
              key={key}
              className="border-l-2 border-brand/40 pl-3 text-[12.5px] leading-6 text-muted"
            >
              <InlineText text={block.text} keyPrefix={key} />
            </blockquote>
          )
        }

        if (block.type === 'divider') {
          return <hr key={key} className="border-white/8" />
        }

        return (
          <p key={key} className="text-[13px] leading-6.5">
            <InlineText text={block.text} keyPrefix={key} />
          </p>
        )
      })}
    </div>
  )
}
