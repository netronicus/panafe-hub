import { PanaFeLink } from './PanaFeLink'

/**
 * Helper to replace "PANAFE" occurrences in a string with interactive PanaFeLink components.
 * Returns an array of React nodes that can be rendered inline.
 */
export function renderWithPanaFe(text: string): React.ReactNode[] {
  const parts = text.split(/(PANAFE)/g)
  return parts.map((part, i) => (part === 'PANAFE' ? <PanaFeLink key={i} /> : part))
}
