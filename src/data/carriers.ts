import type { Carrier } from '../types'

export const carriers: Carrier[] = [
  {
    id: 'telcel',
    name: 'Telcel',
    logo: 'telcel',
    registrationUrl: 'https://registro.telcel.com/vinculatulinea/',
    requiredDocuments: ['curp', 'ine'],
    methods: ['online', 'in-person'],
    isOfficial: true,
  },
  {
    id: 'att',
    name: 'AT&T',
    logo: 'att',
    registrationUrl: 'https://www.att.com.mx/vinculatulinearegistro/',
    requiredDocuments: ['curp', 'ine', 'passport'],
    methods: ['online', 'in-person'],
    isOfficial: true,
  },
  {
    id: 'movistar',
    name: 'Movistar',
    logo: 'movistar',
    registrationUrl: 'https://registro-telefonica-movistar.hubox.com/registro',
    requiredDocuments: ['curp', 'ine'],
    methods: ['online', 'in-person'],
    isOfficial: true,
  },
  {
    id: 'bait',
    name: 'Bait',
    logo: 'bait',
    registrationUrl: 'https://rnu.altanredes.com/bait/vinculatulinea',
    requiredDocuments: ['curp', 'ine', 'passport'],
    methods: ['online'],
    isOfficial: true,
  },
  {
    id: 'altan',
    name: 'Altán Redes',
    logo: 'altan',
    registrationUrl: 'https://rnu.altanredes.com/altan/vinculatulinea',
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
    registrationUrl: 'https://miflash.mx/vinculatulinea',
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
