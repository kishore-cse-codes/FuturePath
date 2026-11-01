import { ShieldAlert, Trash2 } from 'lucide-react'
import Modal from '../Modal'

export default function ClearChatDialog({ open, hasAssessment, onClose, onConfirm }) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="clear-chat-title">
      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-rose-300/20 bg-rose-300/10 text-rose-200">
        <Trash2 className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-200/90">
        Reset session
      </p>
      <h2
        id="clear-chat-title"
        className="mt-2 text-balance text-2xl font-semibold tracking-[-0.03em] text-ink"
      >
        Clear this conversation?
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted">
        This removes the chat messages{hasAssessment ? ' and assessment report' : ''} from this
        browser tab. FuturePath does not keep a copy. You can start again immediately.
      </p>

      <div className="mt-4 flex items-start gap-2 rounded-xl border border-amber-300/15 bg-amber-300/[0.05] px-3 py-2.5 text-[10.5px] leading-5 text-amber-50/75">
        <ShieldAlert className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
        If you want to keep any advice, copy it before clearing the session.
      </div>

      <div className="mt-6 flex flex-col-reverse gap-2 border-t border-white/8 pt-5 sm:flex-row sm:justify-end">
        <button type="button" onClick={onClose} className="btn btn-secondary">
          Keep conversation
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="btn border border-rose-300/25 bg-rose-300/12 text-rose-100 hover:bg-rose-300/18"
        >
          Clear session
          <Trash2 className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </Modal>
  )
}
