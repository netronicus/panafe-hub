import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer?: any[]
  }
}

const GA_ID = 'G-XT398E0LJD'

export function gtagPageView(path: string, title?: string): void {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('config', GA_ID, {
    page_path: path,
    page_title: title,
  })
}

export function gtagEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
): void {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', eventName, params)
}

export function GTagTracker(): JSX.Element | null {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname + location.search + location.hash
    gtagPageView(path, document.title)
  }, [location])

  return null
}
