import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Eye,
  IdCard,
  Mail,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import Brand from '../components/Brand'
import Reveal from '../components/Reveal'
import usePageTitle from '../hooks/usePageTitle'
import { TEAM_MEMBERS } from '../data/team'

export default function AboutPage() {
  usePageTitle('About FuturePath')

  return (
    <main id="main-content" tabIndex={-1} className="relative z-10">
      <section className="relative overflow-hidden pb-14 pt-10 sm:pt-14" aria-labelledby="about-title">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="hero-grid absolute inset-x-0 top-0 h-[34rem]" />
          <div className="absolute left-[64%] top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.11),transparent_68%)]" />
        </div>

        <div className="page-shell relative z-10">
          <div className="animate-rise max-w-3xl">
            <Brand tagline="Discover your direction" className="mb-7" />
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Our story
            </div>
            <h1
              id="about-title"
              className="mt-5 text-balance text-[clamp(2.5rem,5.2vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-ink"
            >
              Clearer choices for the path <span className="text-gradient">ahead.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-[15.5px] leading-7 text-muted sm:text-[17px] sm:leading-8">
              FuturePath is a student-focused career discovery project built around a simple idea:
              exploring options should feel clear, practical, and grounded in information students
              can actually use.
            </p>
            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <Link to="/careers" className="btn btn-primary">
                Explore careers
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact the team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-16 sm:pb-20" aria-labelledby="about-story-title">
        <div className="page-shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-subtle">
              About FuturePath
            </p>
            <h2
              id="about-story-title"
              className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl"
            >
              Built to make the options easier to see.
            </h2>
            <div className="mt-4 space-y-4 text-[13.5px] leading-7 text-muted">
              <p>
                Students are often asked to make important education decisions while career
                information is scattered across many places. FuturePath brings career descriptions,
                possible pathways, and practical next steps into one consistent experience.
              </p>
              <p>
                This build focuses on exploration rather than prediction. It does not claim to know
                which career is right for every student, and it does not replace official
                admission, licensing, or recruitment information.
              </p>
              <p>
                The career library is structured so it can grow over time. New profiles can be
                added in the same format and become available to search, discovery, and related
                career suggestions automatically.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-brand/20 bg-brand/[0.06] p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand-soft">
                <Target className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-semibold tracking-[-0.025em] text-ink">Our mission</h2>
              <p className="mt-2 text-[13px] leading-6 text-muted">
                Help students discover meaningful career possibilities through practical guidance,
                educational roadmaps, and informed decisions.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-aqua/20 bg-aqua/10 text-aqua">
                <Eye className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-semibold tracking-[-0.025em] text-ink">Our vision</h2>
              <p className="mt-2 text-[13px] leading-6 text-muted">
                A future where students can explore career options with clarity, confidence, and
                access to guidance that respects their own interests and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-16 sm:pb-20" aria-labelledby="about-team-title">
        <div className="page-shell">
          <div className="glass rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
                  <Users className="h-3.5 w-3.5" aria-hidden="true" />
                  Our CSP project team
                </p>
                <h2
                  id="about-team-title"
                  className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl"
                >
                  The people behind FuturePath
                </h2>
              </div>
              <p className="max-w-md text-[11.5px] leading-5 text-subtle">
                Meet the four members of the CSP project team behind FuturePath.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM_MEMBERS.map((member, index) => {
                const initials = member.name
                  .split(/[\s.]+/)
                  .filter(Boolean)
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join('')

                return (
                  <Reveal key={member.id} delay={index * 90}>
                    <div className="group relative h-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025)_58%,rgba(124,108,255,0.06))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition duration-500 ease-out hover:-translate-y-2 hover:scale-[1.025] hover:border-brand/40 hover:shadow-[0_24px_55px_-25px_rgba(124,108,255,0.75)] motion-reduce:transform-none motion-reduce:transition-none">
                    <div
                      className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.28),transparent_70%)] opacity-60 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-3">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-brand/25 bg-[linear-gradient(145deg,rgba(124,108,255,0.24),rgba(92,168,255,0.09))] text-[13px] font-semibold tracking-[0.08em] text-brand-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-500 group-hover:rotate-3 group-hover:scale-110">
                          {initials}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.035] px-2 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-subtle">
                          <BadgeCheck className="h-2.5 w-2.5" aria-hidden="true" />
                          {member.teamCode}
                        </span>
                      </div>

                      <h3 className="mt-5 text-[15px] font-semibold tracking-[-0.02em] text-ink">
                        {member.name}
                      </h3>

                      <div className="mt-4 rounded-xl border border-white/8 bg-black/10 px-3 py-2.5">
                        <p className="text-[8.5px] font-semibold uppercase tracking-[0.16em] text-subtle">
                          B.Tech in
                        </p>
                        <p className="mt-1 text-[10.5px] leading-5 text-white/80">
                          {member.specialization}
                        </p>
                      </div>

                      <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-white/8 bg-black/15 px-3 py-2.5">
                        <IdCard className="h-4 w-4 flex-none text-brand-soft" aria-hidden="true" />
                        <div className="min-w-0">
                          <p className="text-[8.5px] font-semibold uppercase tracking-[0.16em] text-subtle">
                            Registration no.
                          </p>
                          <p className="mt-0.5 truncate text-[11.5px] font-medium tabular-nums tracking-[0.04em] text-white/85">
                            {member.registrationNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-24 lg:pb-28" aria-labelledby="about-contact-title">
        <div className="page-shell">
          <div className="relative overflow-hidden rounded-[2rem] border border-brand/20 bg-brand/[0.07] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-32 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.18),transparent_68%)]" aria-hidden="true" />
            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
                Questions or feedback
              </p>
              <h2
                id="about-contact-title"
                className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl"
              >
                Help us make FuturePath clearer.
              </h2>
              <p className="mt-2 max-w-xl text-[13px] leading-6 text-muted">
                Share a question, correction, or suggestion. The form prepares an email draft to the
                project team, or uses a secure endpoint when one is configured.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary relative mt-6 lg:mt-0">
              Contact Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

