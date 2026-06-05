import type { FAQItem } from '../types'
import { REGISTRO_DEADLINE_LABEL } from './deadline'

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: `¿Qué pasa si no registro mi línea antes del ${REGISTRO_DEADLINE_LABEL}?`,
    answer:
      `Si no registras tu línea móvil antes del ${REGISTRO_DEADLINE_LABEL}, tu línea será suspendida a partir del 1 de julio de 2026. Esto significa que no podrás hacer ni recibir llamadas, enviar mensajes ni usar datos móviles. Para reactivarla, tendrás que completar el registro.`,
  },
  {
    id: '2',
    question: '¿Puedo registrar mi línea si soy turista extranjero?',
    answer:
      'Sí. Si eres extranjero, puedes registrar tu línea móvil usando tu pasaporte vigente. No necesitas CURP ni INE. Cada operadora tiene un proceso específico para extranjeros; consulta el portal oficial de tu compañía.',
  },
  {
    id: '3',
    question: '¿Cuántas líneas puede registrar una sola persona?',
    answer:
      'Una persona física puede registrar hasta 10 líneas móviles a su nombre. Si necesitas más, deberás justificar el uso y, en algunos casos, registrarte como persona moral.',
  },
  {
    id: '4',
    question: '¿Qué es el Registro de Usuarios de Telefonía Móvil?',
    answer:
      'El Registro de Usuarios de Telefonía Móvil (también conocido como Registro Nacional de Usuarios de Telecomunicaciones) es el registro obligatorio de líneas móviles en México. Su objetivo es combatir el delito de extorsión telefónica y mejorar la seguridad de los usuarios.',
  },
  {
    id: '5',
    question: '¿Mis datos están seguros?',
    answer:
      'El registro está regulado por el IFT y las operadoras deben cumplir con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Sin embargo, nunca compartas tu información por SMS, correos o enlaces no solicitados. Ve siempre al portal oficial de tu compañía.',
  },
]
