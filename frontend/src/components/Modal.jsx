import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export default function Modal({ open, onClose, labelledBy, children }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return undefined

    if (open && !dialog.open) {
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    }

    if (!open && dialog.open) {
      dialog.close()
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby={labelledBy}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
    >
      {open ? (
        <div className="modal-panel glass-strong relative rounded-[1.75rem] p-6 sm:p-8">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-muted transition hover:bg-white/[0.08] hover:text-ink"
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </button>
          {children}
        </div>
      ) : null}
    </dialog>
  )
}
