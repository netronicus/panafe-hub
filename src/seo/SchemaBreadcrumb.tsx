interface BreadcrumbItem {
  name: string
  path: string
}

interface SchemaBreadcrumbProps {
  items: BreadcrumbItem[]
}

const SITE_URL = 'https://panafe-hub.localto.net'

export function SchemaBreadcrumb({ items }: SchemaBreadcrumbProps): JSX.Element {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}
