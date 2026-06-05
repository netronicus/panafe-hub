export type UserType = 'national' | 'foreigner' | 'company'

export type DocumentType =
  | 'curp'
  | 'ine'
  | 'passport'
  | 'cedula'
  | 'rfc'
  | 'constitutive'

export type RegistrationMethod = 'online' | 'in-person' | 'both'

export type Carrier = {
  id: string
  name: string
  logo: string
  registrationUrl: string
  requiredDocuments: DocumentType[]
  methods: RegistrationMethod[]
  isOfficial: boolean
}

export type LineStatus = 'registered' | 'pending' | 'suspended'

export type LineEntry = {
  id: string
  phoneNumber: string
  carrierId: string
  status: LineStatus
  registrationDate?: string
  notes?: string
}

export type DocumentCheck = {
  id: string
  label: string
  requiredFor: UserType[]
  isChecked: boolean
}

export type ScamReport = {
  id: string
  pattern: string
  fakeUrl?: string
  reportedAt: string
  isVerified: boolean
}

export type FAQItem = {
  id: string
  question: string
  answer: string
}
