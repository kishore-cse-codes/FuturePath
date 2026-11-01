import { useCallback, useEffect, useRef, useState } from 'react'
import { AI_CONFIG } from '../config/ai'
import { buildCounsellorRequest, resolveFuturePathResources } from '../services/counsellorContext'
import { friendlyAIError, streamChat } from '../services/aiClient'

function createId(prefix) {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return `${prefix}-${crypto.randomUUID()}`
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

export default function useCounsellorChat({ profile }) {
  const [messages, setMessages] = useState([])
  const [status, setStatus] = useState('idle')
  const [failure, setFailure] = useState(null)
  const messagesRef = useRef([])
  const profileRef = useRef(profile)
  const abortRef = useRef(null)
  const busyRef = useRef(false)
  const turnRef = useRef(0)

  useEffect(() => {
    profileRef.current = profile
  }, [profile])

  const syncMessages = useCallback((updater) => {
    setMessages((current) => {
      const next = updater(current)
      messagesRef.current = next
      return next
    })
  }, [])

  const runTurn = useCallback(
    async ({ history, userMessage }) => {
      const turnId = ++turnRef.current
      busyRef.current = true
      setFailure(null)
      setStatus('thinking')

      const assistantMessage = {
        id: createId('assistant'),
        role: 'assistant',
        content: '',
        resources: [],
        streaming: true,
        createdAt: Date.now(),
      }

      syncMessages(() => [...history, userMessage, assistantMessage])

      const controller = new AbortController()
      abortRef.current = controller
      let content = ''
      let gotFirstToken = false

      try {
        const request = buildCounsellorRequest({
          messages: [...history, userMessage],
          profile: profileRef.current,
        })

        await streamChat({
          baseUrl: AI_CONFIG.apiBaseUrl,
          messages: request.messages,
          context: request.context,
          signal: controller.signal,
          timeoutMs: AI_CONFIG.requestTimeoutMs,
          onToken: (token) => {
            if (turnRef.current !== turnId) return
            content += token
            if (!gotFirstToken) {
              gotFirstToken = true
              setStatus('streaming')
            }
            syncMessages((current) =>
              current.map((message) =>
                message.id === assistantMessage.id
                  ? { ...message, content, streaming: true }
                  : message,
              ),
            )
          },
        })

        if (turnRef.current !== turnId) return

        const finalContent = content.trim()
        const resources = resolveFuturePathResources(finalContent)
        syncMessages((current) =>
          current.map((message) =>
            message.id === assistantMessage.id
              ? { ...message, content: finalContent, resources, streaming: false }
              : message,
          ),
        )
        setStatus('idle')
      } catch (error) {
        if (turnRef.current !== turnId) return

        if (error?.code === 'aborted') {
          if (!content.trim()) {
            syncMessages((current) =>
              current.filter((message) => message.id !== assistantMessage.id),
            )
          } else {
            syncMessages((current) =>
              current.map((message) =>
                message.id === assistantMessage.id
                  ? {
                      ...message,
                      content: content.trim(),
                      resources: resolveFuturePathResources(content),
                      streaming: false,
                      stopped: true,
                    }
                  : message,
              ),
            )
          }
          setStatus('idle')
          return
        }

        const friendlyMessage = friendlyAIError(error)

        if (!content.trim()) {
          syncMessages((current) =>
            current.filter((message) => message.id !== assistantMessage.id),
          )
        } else {
          syncMessages((current) =>
            current.map((message) =>
              message.id === assistantMessage.id
                ? {
                    ...message,
                    content: content.trim(),
                    resources: resolveFuturePathResources(content),
                    streaming: false,
                    incomplete: true,
                  }
                : message,
            ),
          )
        }

        setFailure({ history, userMessage, message: friendlyMessage })
        setStatus('idle')
      } finally {
        if (abortRef.current === controller) abortRef.current = null
        if (turnRef.current === turnId) {
          busyRef.current = false
          setStatus((current) => (current === 'thinking' || current === 'streaming' ? 'idle' : current))
        }
      }
    },
    [syncMessages],
  )

  const sendMessage = useCallback(
    (text) => {
      const trimmed = String(text ?? '').trim()
      if (!trimmed || busyRef.current) return false

      const userMessage = {
        id: createId('user'),
        role: 'user',
        content: trimmed,
        createdAt: Date.now(),
      }

      const history = messagesRef.current.filter((message) => message.role === 'user' || message.role === 'assistant')
      runTurn({ history, userMessage })
      return true
    },
    [runTurn],
  )

  const retry = useCallback(() => {
    if (!failure || busyRef.current) return
    const { history, userMessage } = failure
    runTurn({ history, userMessage })
  }, [failure, runTurn])

  const stop = useCallback(() => {
    abortRef.current?.abort()
  }, [])

  const clear = useCallback(() => {
    turnRef.current += 1
    abortRef.current?.abort()
    abortRef.current = null
    busyRef.current = false
    setStatus('idle')
    setFailure(null)
    syncMessages(() => [])
  }, [syncMessages])

  return {
    messages,
    status,
    failure,
    isBusy: status === 'thinking' || status === 'streaming',
    sendMessage,
    retry,
    stop,
    clear,
  }
}
