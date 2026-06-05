import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'panafe-hub:clarification-dismissed'

export function useDismissible(): [boolean, () => void] {
  const [dismissed, setDismissed] = useState<boolean>(() => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === 'true'
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      setDismissed(stored === 'true')
    } catch {
      // Silently ignore localStorage errors
    }
  }, [])

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Silently ignore
    }
    setDismissed(true)
  }, [])

  return [dismissed, dismiss]
}
