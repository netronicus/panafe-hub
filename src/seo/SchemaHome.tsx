const SITE_URL = 'https://panafe-hub.localto.net'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PANAFE Hub - Registro de Líneas Móviles México',
  url: `${SITE_URL}/`,
  description:
    'Guía completa para el registro obligatorio de celulares en México 2026. Enlaces oficiales, checklist de documentos y seguimiento gratuito.',
  inLanguage: 'es-MX',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/#faq?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export function SchemaHome(): JSX.Element {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}
