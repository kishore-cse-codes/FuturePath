import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <main id="main-content" tabIndex={-1} className="relative z-10">
      <section className="page-shell flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-6xl font-semibold tracking-[-0.05em] text-gradient">404</p>
        <h1 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-ink">
          This path doesn’t exist.
        </h1>
        <p className="mt-3 max-w-md text-[14px] leading-7 text-muted">
          The page you were looking for may have moved. Head back home and continue exploring.
        </p>
        <Link to="/" className="btn btn-primary mt-7">
          <ArrowLeft className="h-4 w-4" />
          Back to FuturePath
        </Link>
      </section>
    </main>
  )
}
