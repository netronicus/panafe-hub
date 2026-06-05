interface HowToStep {
  position: number
  name: string
  text: string
  url?: string
}

interface SchemaHowToProps {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string
}

const SITE_URL = 'https://panafe-hub.localto.net'

export function SchemaHowTo({ name, description, steps, totalTime = 'PT15M' }: SchemaHowToProps): JSX.Element {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'MXN',
      value: '0',
    },
    step: steps.map((s) => ({
      '@type': 'HowToStep',
      position: s.position,
      name: s.name,
      text: s.text,
      url: s.url ? `${SITE_URL}${s.url}` : undefined,
    })),
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}
