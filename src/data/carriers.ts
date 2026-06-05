import type { Carrier } from '../types'

export const carriers: Carrier[] = [
  {
    id: 'telcel',
    name: 'Telcel',
    logo: 'telcel',
    registrationUrl: 'https://www.telcel.com/personas/telefonia/registro-panafe',
    requiredDocuments: ['curp', 'ine'],
    methods: ['online', 'in-person'],
    isOfficial: true,
  },
  {
    id: 'att',
    name: 'AT&T',
    logo: 'att',
    registrationUrl: 'https://www.att.com.mx/registro-panafe',
    requiredDocuments: ['curp', 'ine', 'passport'],
    methods: ['online', 'in-person'],
    isOfficial: true,
  },
  {
    id: 'movistar',
    name: 'Movistar',
    logo: 'movistar',
    registrationUrl: 'https://www.movistar.com.mx/atencion/registro-panafe',
    requiredDocuments: ['curp', 'ine'],
    methods: ['online', 'in-person'],
    isOfficial: true,
  },
  {
    id: 'bait',
    name: 'Bait',
    logo: 'bait',
    registrationUrl: 'https://www.bait.com.mx/registro',
    requiredDocuments: ['curp', 'ine', 'passport'],
    methods: ['online'],
    isOfficial: true,
  },
  {
    id: 'altan',
    name: 'Altán Redes',
    logo: 'altan',
    registrationUrl: 'https://www.altanredes.com',
    requiredDocuments: ['curp', 'ine'],
    methods: ['online', 'in-person'],
    isOfficial: true,
  },
  {
    id: 'virgin',
    name: 'Virgin Mobile',
    logo: 'virgin',
    registrationUrl: 'https://virginmobile.mx/vinculatulinea/',
    requiredDocuments: ['curp', 'ine'],
    methods: ['online'],
    isOfficial: true,
  },
  {
    id: 'flash',
    name: 'Flash Mobile',
    logo: 'flash',
    registrationUrl: 'https://www.flashmobile.mx/registro',
    requiredDocuments: ['curp', 'ine', 'passport'],
    methods: ['online'],
    isOfficial: true,
  },
]

export const documentLabels: Record<string, string> = {
  curp: 'CURP',
  ine: 'INE',
  passport: 'Pasaporte',
  cedula: 'Cédula Profesional',
  rfc: 'RFC',
  constitutive: 'Acta Constitutiva',
}

export const methodLabels: Record<string, string> = {
  online: 'En línea',
  'in-person': 'Presencial',
  both: 'En línea y presencial',
}
