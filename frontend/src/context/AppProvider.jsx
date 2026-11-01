import { useCallback, useMemo, useState } from 'react'
import { COMING_SOON } from '../data/homepage'
import { AppContext } from './AppContext'

export default function AppProvider({ children }) {
  const [selectedCareer, setSelectedCareer] = useState(null)
  const [comingSoon, setComingSoon] = useState(null)

  const openCareer = useCallback((career) => setSelectedCareer(career), [])
  const closeCareer = useCallback(() => setSelectedCareer(null), [])
  const openComingSoon = useCallback((key) => setComingSoon(COMING_SOON[key] ?? null), [])
  const closeComingSoon = useCallback(() => setComingSoon(null), [])

  const value = useMemo(
    () => ({
      selectedCareer,
      comingSoon,
      openCareer,
      closeCareer,
      openComingSoon,
      closeComingSoon,
    }),
    [selectedCareer, comingSoon, openCareer, closeCareer, openComingSoon, closeComingSoon],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
