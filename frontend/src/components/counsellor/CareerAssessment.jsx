import {
  ArrowLeft,
  ArrowRight,
  Check,
  ClipboardCheck,
  LockKeyhole,
  SkipForward,
} from 'lucide-react'
import {
  ASSESSMENT_QUESTIONS,
  isAnswerPresent,
} from '../../services/assessment'
import AssessmentReport from './AssessmentReport'

function AssessmentToolbar({ step, total, report, onBackToChat }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 px-4 py-3 sm:px-5">
      <div className="flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-xl border border-aqua/20 bg-aqua/10 text-aqua">
          <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[11.5px] font-semibold text-ink">Career assessment</p>
          <p className="mt-0.5 text-[9.5px] text-subtle">
            {report ? 'Your report is ready' : `Question ${step + 1} of ${total}`}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onBackToChat}
        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[10.5px] font-medium text-muted transition hover:bg-white/[0.08] hover:text-ink"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        Back to chat
      </button>
    </div>
  )
}

function OptionButton({ option, selected, disabled, multiple, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      aria-disabled={disabled}
      className={`group flex w-full items-start gap-2.5 rounded-xl border p-3 text-left transition ${
        selected
          ? 'border-brand/45 bg-brand/12 text-ink'
          : disabled
            ? 'cursor-not-allowed border-white/7 bg-white/[0.015] text-subtle opacity-55'
            : 'border-white/10 bg-white/[0.03] text-muted hover:border-white/20 hover:bg-white/[0.055] hover:text-ink'
      }`}
    >
      <span
        className={`mt-0.5 grid h-4 w-4 flex-none place-items-center border transition ${
          multiple ? 'rounded-[5px]' : 'rounded-full'
        } ${
          selected
            ? 'border-brand-soft bg-brand text-white'
            : 'border-white/20 bg-transparent text-transparent group-hover:border-white/35'
        }`}
        aria-hidden="true"
      >
        <Check className="h-2.5 w-2.5" strokeWidth={3} />
      </span>
      <span className="min-w-0">
        <span className="block text-[11.5px] font-medium leading-5">{option.label}</span>
        {option.description ? (
          <span className="mt-0.5 block text-[10px] leading-4.5 text-subtle">
            {option.description}
          </span>
        ) : null}
      </span>
    </button>
  )
}

function QuestionView({
  step,
  answers,
  onAnswerChange,
  onNext,
  onBack,
  onFinish,
}) {
  const question = ASSESSMENT_QUESTIONS[step]
  const value = answers[question.id]
  const selectedValues =
    question.type === 'multi' ? (Array.isArray(value) ? value : []) : value ? [value] : []
  const atMax =
    question.type === 'multi' &&
    Boolean(question.max) &&
    selectedValues.length >= question.max
  const answered = isAnswerPresent(question, value)
  const isLast = step === ASSESSMENT_QUESTIONS.length - 1

  const toggleOption = (optionId) => {
    if (question.type === 'multi') {
      if (selectedValues.includes(optionId)) {
        onAnswerChange(
          question.id,
          selectedValues.filter((id) => id !== optionId),
        )
        return
      }
      if (atMax) return
      onAnswerChange(question.id, [...selectedValues, optionId])
      return
    }

    onAnswerChange(question.id, optionId)
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="border-b border-white/8 px-4 py-3 sm:px-6">
        <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-[linear-gradient(90deg,#8d7bff,#62a7ff)] transition-all duration-300"
            style={{ width: `${((step + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6 sm:py-6">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-subtle">
              {question.type === 'multi' ? 'Choose any' : question.type === 'single' ? 'Choose one' : 'Optional note'}
            </span>
            {question.optional ? (
              <span className="text-[9.5px] text-subtle">You can skip this question</span>
            ) : null}
          </div>

          <h2 className="mt-3 text-balance text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
            {question.title}
          </h2>
          <p className="mt-2 max-w-xl text-[12px] leading-6 text-muted">{question.description}</p>

          {question.type === 'text' ? (
            <div className="mt-5">
              <label htmlFor="assessment-constraints" className="sr-only">
                {question.title}
              </label>
              <textarea
                id="assessment-constraints"
                value={value ?? ''}
                onChange={(event) =>
                  onAnswerChange(question.id, event.target.value.slice(0, question.maxLength))
                }
                rows={4}
                maxLength={question.maxLength}
                placeholder={question.placeholder}
                className="contact-input min-h-[112px] resize-y"
              />
              <div className="mt-1.5 flex justify-between gap-3 text-[9.5px] text-subtle">
                <span>Do not include identity numbers, addresses, or medical records.</span>
                <span>
                  {(value ?? '').length}/{question.maxLength}
                </span>
              </div>
            </div>
          ) : (
            <fieldset className="mt-5">
              <legend className="sr-only">{question.title}</legend>
              <div
                className={`grid gap-2 ${
                  question.options.length > 6 ? 'sm:grid-cols-2' : 'sm:grid-cols-2'
                }`}
              >
                {question.options.map((option) => {
                  const selected = selectedValues.includes(option.id)
                  return (
                    <OptionButton
                      key={option.id}
                      option={option}
                      selected={selected}
                      disabled={atMax && !selected}
                      multiple={question.type === 'multi'}
                      onSelect={() => toggleOption(option.id)}
                    />
                  )
                })}
              </div>
              {question.max ? (
                <p className="mt-2.5 text-[10px] text-subtle">
                  Choose up to {question.max}. Selected: {selectedValues.length}.
                </p>
              ) : null}
            </fieldset>
          )}

          <p className="mt-5 flex items-start gap-2 rounded-xl border border-white/8 bg-white/[0.025] px-3 py-2.5 text-[9.5px] leading-4.5 text-subtle">
            <LockKeyhole className="mt-0.5 h-3 w-3 flex-none" aria-hidden="true" />
            Answers stay in this browser tab and are used only to build this report and chat context.
            Nothing is saved to a database.
          </p>
        </div>
      </div>

      <div className="border-t border-white/8 px-4 py-3 sm:px-5">
        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {step > 0 ? (
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[10.5px] font-medium text-subtle transition hover:text-ink"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Back
              </button>
            ) : null}
            <button
              type="button"
              onClick={isLast ? onFinish : onNext}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[10.5px] font-medium text-subtle transition hover:text-ink"
            >
              <SkipForward className="h-3.5 w-3.5" aria-hidden="true" />
              {isLast ? 'Skip to report' : 'Skip this question'}
            </button>
          </div>

          <div className="flex items-center gap-2">
            {answered ? (
              <span className="hidden items-center gap-1 text-[9.5px] text-aqua sm:inline-flex">
                <Check className="h-3 w-3" aria-hidden="true" />
                Answer recorded
              </span>
            ) : null}
            <button
              type="button"
              onClick={isLast ? onFinish : onNext}
              className="btn btn-primary px-4 py-2.5 text-[11px]"
            >
              {isLast ? 'See my report' : 'Continue'}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CareerAssessment({
  step,
  answers,
  report,
  onAnswerChange,
  onStepChange,
  onFinish,
  onRestart,
  onDiscuss,
  onBackToChat,
}) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <AssessmentToolbar
        step={step}
        total={ASSESSMENT_QUESTIONS.length}
        report={report}
        onBackToChat={onBackToChat}
      />

      {report ? (
        <div className="min-h-0 flex-1">
          <AssessmentReport
            report={report}
            onDiscuss={onDiscuss}
            onRetake={onRestart}
            onBackToChat={onBackToChat}
          />
        </div>
      ) : (
        <QuestionView
          step={step}
          answers={answers}
          onAnswerChange={onAnswerChange}
          onNext={() => onStepChange(step + 1)}
          onBack={() => onStepChange(Math.max(0, step - 1))}
          onFinish={onFinish}
        />
      )}
    </div>
  )
}
