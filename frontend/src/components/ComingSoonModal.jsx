import { ArrowRight, Info } from 'lucide-react'
import Modal from './Modal'

export default function ComingSoonModal({ content, onClose }) {
  return (
    <Modal open={Boolean(content)} onClose={onClose} labelledBy="unavailable-title">
      {content ? (
        <>
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-200">
            <Info className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-200/90">
            Unavailable in this build
          </p>
          <h2
            id="unavailable-title"
            className="mt-2 text-balance text-2xl font-semibold tracking-[-0.03em] text-ink"
          >
            {content.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">{content.description}</p>
          <div className="mt-6 flex justify-end border-t border-white/8 pt-5">
            <button type="button" onClick={onClose} className="btn btn-primary">
              Continue exploring
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </>
      ) : null}
    </Modal>
  )
}
