import { createContext, useContext, useCallback, type ReactNode } from 'react'
import type { LineEntry } from '../types'
import { useLocalStorage } from '../hooks/useLocalStorage'

export type TrackerContextValue = {
  entries: LineEntry[]
  addEntry: (entry: Omit<LineEntry, 'id'>) => void
  updateEntry: (id: string, updates: Partial<Omit<LineEntry, 'id'>>) => void
  deleteEntry: (id: string) => void
  getSummary: () => { total: number; registered: number; pending: number; suspended: number }
  exportToJson: () => string
  exportToCsv: () => string
}

const TrackerContext = createContext<TrackerContextValue | null>(null)

export function TrackerProvider({ children }: { children: ReactNode }): JSX.Element {
  const [entries, setEntries] = useLocalStorage<LineEntry[]>('panafe-lines', [])

  const addEntry = useCallback(
    (entry: Omit<LineEntry, 'id'>) => {
      const newEntry: LineEntry = {
        ...entry,
        id: crypto.randomUUID(),
      }
      setEntries((prev) => [...prev, newEntry])
    },
    [setEntries],
  )

  const updateEntry = useCallback(
    (id: string, updates: Partial<Omit<LineEntry, 'id'>>) => {
      setEntries((prev) =>
        prev.map((e) => (e.id === id ? { ...e, ...updates } : e)),
      )
    },
    [setEntries],
  )

  const deleteEntry = useCallback(
    (id: string) => {
      setEntries((prev) => prev.filter((e) => e.id !== id))
    },
    [setEntries],
  )

  const getSummary = useCallback(() => {
    const total = entries.length
    const registered = entries.filter((e) => e.status === 'registered').length
    const pending = entries.filter((e) => e.status === 'pending').length
    const suspended = entries.filter((e) => e.status === 'suspended').length
    return { total, registered, pending, suspended }
  }, [entries])

  const exportToJson = useCallback(() => {
    return JSON.stringify(entries, null, 2)
  }, [entries])

  const exportToCsv = useCallback(() => {
    const headers = ['phoneNumber', 'carrierId', 'status', 'registrationDate', 'notes']
    const escapeCsv = (val: string): string => `"${val.replace(/"/g, '""')}"`
    const rows = entries.map((e) =>
      [
        escapeCsv(e.phoneNumber),
        escapeCsv(e.carrierId),
        escapeCsv(e.status),
        escapeCsv(e.registrationDate ?? ''),
        escapeCsv(e.notes ?? ''),
      ].join(','),
    )
    return [headers.join(','), ...rows].join('\n')
  }, [entries])

  return (
    <TrackerContext.Provider
      value={{ entries, addEntry, updateEntry, deleteEntry, getSummary, exportToJson, exportToCsv }}
    >
      {children}
    </TrackerContext.Provider>
  )
}

export function useTracker(): TrackerContextValue {
  const context = useContext(TrackerContext)
  if (!context) {
    throw new Error('useTracker must be used within a TrackerProvider')
  }
  return context
}
