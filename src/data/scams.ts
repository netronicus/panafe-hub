import type { ScamReport } from '../types'

export const scamReports: ScamReport[] = [
  {
    id: '1',
    pattern:
      'SMS urgente: "Su línea será suspendida hoy. Actualice sus datos en el enlace"',
    fakeUrl: 'https://panafe-urgente.com',
    reportedAt: '2026-05-28T10:00:00Z',
    isVerified: true,
  },
  {
    id: '2',
    pattern:
      'Correo falso con logo de Telcel pidiendo NIP y contraseña para "verificar identidad"',
    fakeUrl: 'https://telcel-seguridad.net',
    reportedAt: '2026-05-25T14:30:00Z',
    isVerified: true,
  },
  {
    id: '3',
    pattern:
      'Mensaje de WhatsApp ofreciendo registro "gratuito y rápido" a cambio de datos bancarios',
    reportedAt: '2026-05-20T09:15:00Z',
    isVerified: false,
  },
]
