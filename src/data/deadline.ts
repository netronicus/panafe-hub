/**
 * Fecha límite oficial del registro de usuarios de telefonía móvil.
 * Centralizada para evitar valores dispersos en múltiples componentes.
 */
export const REGISTRO_DEADLINE = new Date('2026-06-30T23:59:59-06:00')

export const REGISTRO_DEADLINE_LABEL = '30 de junio de 2026'

export function getDaysLeft(): number {
  const diff = REGISTRO_DEADLINE.getTime() - Date.now()
  return Math.max(0, Math.ceil(diff / 86_400_000))
}
