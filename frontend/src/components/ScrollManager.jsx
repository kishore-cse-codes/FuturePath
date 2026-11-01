import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const frame = window.requestAnimationFrame(() => {
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({
            behavior: prefersReducedMotion() ? 'auto' : 'smooth',
            block: 'start',
          })
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        }
      })

      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return undefined
  }, [pathname, hash, key])

  return null
}
