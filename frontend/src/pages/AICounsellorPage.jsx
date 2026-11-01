import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Bot,
  ClipboardCheck,
  Eraser,
  Info,
  MessageSquarePlus,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle'
import useAIConnection from '../hooks/useAIConnection'
import useCounsellorChat from '../hooks/useCounsellorChat'
import { SUGGESTED_QUESTIONS } from '../services/counsellorContext'
import {
  ASSESSMENT_QUESTIONS,
  buildAssessmentReport,
  buildReportChatPrompt,
  createEmptyAnswers,
} from '../services/assessment'
import WelcomePanel from '../components/counsellor/WelcomePanel'
import ChatMessage from '../components/counsellor/ChatMessage'
import ChatComposer from '../components/counsellor/ChatComposer'
import ConnectionPanel from '../components/counsellor/ConnectionPanel'
import ClearChatDialog from '../components/counsellor/ClearChatDialog'
import CareerAssessment from '../components/counsellor/CareerAssessment'

function providerSummary(connection) {
  if (connection.status === 'checking') return 'Checking the AI connection...'
  if (connection.provider === 'groq') {
    return `Groq${connection.model ? ` · ${connection.model}` : ''}`
  }
  return 'AI connection'
}

export default function AICounsellorPage() {
  usePageTitle('AI Counsellor')

  const [view, setView] = useState('chat')
  const [clearOpen, setClearOpen] = useState(false)
  const [answers, setAnswers] = useState(createEmptyAnswers)
  const [step, setStep] = useState(0)
  const [report, setReport] = useState(null)

  const connection = useAIConnection()
  const chat = useCounsellorChat({ profile: report?.profile ?? null })

  const scrollRef = useRef(null)

  const configError = (() => {
    if (connection.status === 'checking') return 'Checking the AI connection...'
    if (connection.status === 'offline' || connection.status === 'unconfigured') {
      return connection.error || 'The AI service is not available yet.'
    }
    if (!connection.modelReady) {
      return connection.error || 'Groq is not configured yet.'
    }
    return ''
  })()

  useEffect(() => {
    if (view !== 'chat') return
    const element = scrollRef.current
    if (!element) return
    element.scrollTop = element.scrollHeight
  }, [chat.messages, chat.status, view])

  const handleSuggestion = useCallback(
    (question) => {
      if (configError) return
      chat.sendMessage(question)
    },
    [chat, configError],
  )

  const startAssessment = useCallback(() => {
    setView('assessment')
    setStep(0)
  }, [])

  const handleAnswerChange = useCallback((questionId, value) => {
    setAnswers((current) => ({ ...current, [questionId]: value }))
  }, [])

  const handleStepChange = useCallback((nextStep) => {
    setStep(Math.max(0, Math.min(nextStep, ASSESSMENT_QUESTIONS.length - 1)))
  }, [])

  const handleFinish = useCallback(() => {
    setReport(buildAssessmentReport(answers))
  }, [answers])

  const handleRestart = useCallback(() => {
    setReport(null)
    setAnswers(createEmptyAnswers())
    setStep(0)
  }, [])

  const handleDiscuss = useCallback(() => {
    if (!report) return
    setView('chat')
    const prompt = buildReportChatPrompt(report)
    window.setTimeout(() => chat.sendMessage(prompt), 0)
  }, [chat, report])

  const handleNewChat = useCallback(() => {
    chat.clear()
    setView('chat')
  }, [chat])

  const handleClearHistory = useCallback(() => {
    chat.clear()
    setReport(null)
    setAnswers(createEmptyAnswers())
    setStep(0)
    setView('chat')
    setClearOpen(false)
  }, [chat])

  return (
    <main id="main-content" tabIndex={-1} className="relative z-10">
      <section className="relative overflow-hidden pb-8 pt-8 sm:pt-12" aria-labelledby="ai-counsellor-title">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="hero-grid absolute inset-x-0 top-0 h-[26rem]" />
          <div className="absolute left-[68%] top-0 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.12),transparent_68%)]" />
        </div>

        <div className="page-shell relative z-10">
          <div className="animate-rise max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              AI career counsellor
            </div>
            <h1
              id="ai-counsellor-title"
              className="mt-5 text-balance text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-ink"
            >
              Think through your next step with <span className="text-gradient">clear guidance.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[14.5px] leading-7 text-muted sm:text-[16px] sm:leading-8">
              Ask about streams, courses, careers, entrance exams, study plans, skills, or confidence.
              The counsellor uses FuturePath career, roadmap, exam, and college data when it is
              relevant, and explains when a detail needs official verification.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10.5px] text-subtle">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-aqua" aria-hidden="true" />
                AI assistant, not a human counsellor
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Info className="h-3.5 w-3.5" aria-hidden="true" />
                Verify dates, fees, and eligibility on official websites
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-16 sm:pb-20" aria-label="AI Counsellor chat">
        <div className="page-shell">
          <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-5">
            <div className="glass flex h-[calc(100svh-7rem)] max-h-[880px] min-h-[600px] flex-col overflow-hidden rounded-[1.75rem]">
              <header className="flex flex-wrap items-center justify-between gap-2 border-b border-white/8 px-4 py-3 sm:px-5">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="grid h-9 w-9 flex-none place-items-center rounded-xl border border-brand/25 bg-brand/15 text-brand-soft">
                    <Bot className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-semibold text-ink">AI Counsellor</p>
                    <p className="truncate text-[9.5px] text-subtle">{providerSummary(connection)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleNewChat}
                    className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 text-[10px] font-medium text-muted transition hover:bg-white/[0.08] hover:text-ink"
                    aria-label="Start a new chat"
                  >
                    <MessageSquarePlus className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="hidden sm:inline">New chat</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setClearOpen(true)}
                    className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 text-[10px] font-medium text-muted transition hover:bg-white/[0.08] hover:text-ink"
                    aria-label="Clear chat history"
                  >
                    <Eraser className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="hidden sm:inline">Clear history</span>
                  </button>
                  <button
                    type="button"
                    onClick={startAssessment}
                    className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-aqua/25 bg-aqua/10 px-2.5 text-[10px] font-medium text-aqua transition hover:bg-aqua/15"
                  >
                    <ClipboardCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="hidden sm:inline">Assessment</span>
                  </button>
                </div>
              </header>

              {view === 'assessment' ? (
                <div className="min-h-0 flex-1">
                  <CareerAssessment
                    step={step}
                    answers={answers}
                    report={report}
                    onAnswerChange={handleAnswerChange}
                    onStepChange={handleStepChange}
                    onFinish={handleFinish}
                    onRestart={handleRestart}
                    onDiscuss={handleDiscuss}
                    onBackToChat={() => setView('chat')}
                  />
                </div>
              ) : (
                <div className="flex min-h-0 flex-1 flex-col">
                  <div
                    ref={scrollRef}
                    className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-5 sm:px-5"
                    role="log"
                    aria-live="polite"
                    aria-relevant="additions text"
                    aria-label="Conversation"
                  >
                    {chat.messages.length === 0 ? (
                      <WelcomePanel
                        suggestions={SUGGESTED_QUESTIONS}
                        onSuggestion={handleSuggestion}
                        onStartAssessment={startAssessment}
                      />
                    ) : (
                      <div className="mx-auto max-w-3xl space-y-5">
                        {chat.messages.map((message) => (
                          <ChatMessage key={message.id} message={message} />
                        ))}
                      </div>
                    )}
                  </div>

                  {chat.failure ? (
                    <div
                      className="mx-3 mb-2 flex flex-wrap items-start justify-between gap-2 rounded-xl border border-rose-300/20 bg-rose-300/[0.06] px-3 py-2.5 sm:mx-4"
                      role="alert"
                    >
                      <p className="flex min-w-0 items-start gap-2 text-[10.5px] leading-5 text-rose-100/90">
                        <TriangleAlert className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
                        <span>{chat.failure.message}</span>
                      </p>
                      <button
                        type="button"
                        onClick={chat.retry}
                        disabled={chat.isBusy}
                        className="inline-flex h-7 flex-none items-center gap-1 rounded-lg border border-white/15 bg-white/[0.06] px-2.5 text-[10px] font-medium text-ink transition hover:bg-white/[0.1] disabled:opacity-50"
                      >
                        Retry
                      </button>
                    </div>
                  ) : null}

                  <ChatComposer
                    onSend={chat.sendMessage}
                    onStop={chat.stop}
                    isBusy={chat.isBusy}
                    disabled={Boolean(configError)}
                    disabledReason={configError}
                  />
                </div>
              )}
            </div>

            <aside className="space-y-4">
              <ConnectionPanel connection={connection} />

              <section className="rounded-2xl border border-white/9 bg-white/[0.03] p-4">
                <p className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-subtle">
                  <Info className="h-3.5 w-3.5" aria-hidden="true" />
                  How this works
                </p>
                <ul className="mt-3 space-y-2.5 text-[10.5px] leading-5 text-subtle">
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-1 w-1 flex-none rounded-full bg-brand-soft/80" aria-hidden="true" />
                    <span>
                      Career answers prefer the FuturePath career, roadmap, exam, and college data.
                      General guidance is labelled separately.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-1 w-1 flex-none rounded-full bg-brand-soft/80" aria-hidden="true" />
                    <span>
                      The counsellor does not guarantee admission, exam results, jobs, or salaries.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-1 w-1 flex-none rounded-full bg-brand-soft/80" aria-hidden="true" />
                    <span>
                      Conversations stay in this browser tab and are not saved to a database.
                      Refreshing the page clears them.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-1 w-1 flex-none rounded-full bg-brand-soft/80" aria-hidden="true" />
                    <span>
                      For serious personal concerns, talk to a trusted adult or a qualified
                      professional. In immediate danger, contact local emergency services.
                    </span>
                  </li>
                </ul>
              </section>

              <section className="rounded-2xl border border-brand/20 bg-brand/[0.06] p-4">
                <p className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-brand-soft">
                  <ClipboardCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Not sure where to begin?
                </p>
                <p className="mt-2 text-[10.5px] leading-5 text-muted">
                  The optional assessment asks about subjects, interests, strengths, and goals. It
                  suggests starting points to explore, not a final decision.
                </p>
                <button
                  type="button"
                  onClick={startAssessment}
                  className="btn btn-secondary mt-3 w-full px-3 py-2.5 text-[10.5px]"
                >
                  Start the assessment
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </section>

              <section className="rounded-2xl border border-white/9 bg-white/[0.03] p-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-subtle">
                  Prefer to browse?
                </p>
                <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-2">
                  <Link
                    to="/careers"
                    className="inline-flex items-center gap-1 text-[10.5px] font-medium text-brand-soft hover:text-white"
                  >
                    Career library
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/roadmaps"
                    className="inline-flex items-center gap-1 text-[10.5px] font-medium text-brand-soft hover:text-white"
                  >
                    Roadmaps
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/exams-colleges"
                    className="inline-flex items-center gap-1 text-[10.5px] font-medium text-brand-soft hover:text-white"
                  >
                    Exams &amp; colleges
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </section>

      <ClearChatDialog
        open={clearOpen}
        hasAssessment={Boolean(report)}
        onClose={() => setClearOpen(false)}
        onConfirm={handleClearHistory}
      />
    </main>
  )
}
