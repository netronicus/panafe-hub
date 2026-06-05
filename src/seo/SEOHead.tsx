import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title: string
  description: string
  canonicalPath?: string
  ogImage?: string
  ogType?: string
  children: React.ReactNode
}

const SITE_URL = 'https://panafe-hub.localto.net'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

export function SEOHead({
  title,
  description,
  canonicalPath = '/',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  children,
}: SEOHeadProps): JSX.Element {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="PANAFE Hub" />
        <meta property="og:locale" content="es_MX" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      {children}
    </>
  )
}
