import { useCallback, useEffect, useRef, useState } from 'react'
import { AI_CONFIG } from '../config/ai'
import { fetchAIStatus, friendlyAIError } from '../services/aiClient'

function deriveState(data) {
  const provider = data?.provider === 'groq' ? 'groq' : ''
  const model = String(data?.model ?? '')
  const configured = Boolean(data?.configured)
  const ready = Boolean(data?.ready)
  const error = String(data?.error ?? '')

  let status = 'online'
  if (!configured) status = 'unconfigured'


  return {
    status,
    provider,
    models: [],
    model,
    configured,
    ready,
    error,
    modelReady: ready,
    lastChecked: new Date(),
  }
}

export default function useAIConnection() {
  const [state, setState] = useState({
    status: 'checking',
    provider: '',
    models: [],
    model: '',
    configured: false,
    ready: false,
    error: '',
    modelReady: false,
    lastChecked: null,
  })
  const requestRef = useRef(null)

  const refresh = useCallback(async () => {
    requestRef.current?.abort()
    const controller = new AbortController()
    requestRef.current = controller

    setState((current) => ({ ...current, status: 'checking', error: '' }))

    try {
      const data = await fetchAIStatus({
        baseUrl: AI_CONFIG.apiBaseUrl,
        timeoutMs: AI_CONFIG.connectionTimeoutMs,
        signal: controller.signal,
      })

      if (controller.signal.aborted) return
      setState(deriveState(data))
    } catch (error) {
      if (error?.code === 'aborted') return
      setState((current) => ({
        ...current,
        status: 'offline',
        error: friendlyAIError(error),
        lastChecked: new Date(),
      }))
    }
  }, [])

  useEffect(() => {
    refresh()
    return () => requestRef.current?.abort()
  }, [refresh])


  return {
    ...state,
    refresh,
  }
}
