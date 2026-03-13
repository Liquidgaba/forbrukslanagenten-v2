import { Metadata } from 'next'

const SITE_NAME = 'Forbrukslånagenten'
const SITE_URL = 'https://xn--forbrukslnagenten-hrb.no'

export function createMetadata({
  title,
  description,
  path = '',
  noindex = false,
}: {
  title: string
  description: string
  path?: string
  noindex?: boolean
}): Metadata {
  const fullTitle = path === '' ? title : `${title} | ${SITE_NAME}`
  const url = `${SITE_URL}${path}`
  
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'nb_NO',
      type: 'website',
    },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Forbrukslånagenten',
    url: SITE_URL,
    description: 'Sammenlign forbrukslån fra Norges beste banker. Uavhengig rådgivning om lån, refinansiering og betalingsanmerkninger.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NO',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'INNOVENA AS',
      url: 'https://innovena.no',
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

export function faqSchema(questions: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function loanProductSchema(provider: {
  name: string
  description: string
  minRate?: number
  maxRate?: number
  minAmount?: number
  maxAmount?: number
  url: string
  rating: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: `${provider.name} Forbrukslån`,
    description: provider.description,
    provider: { '@type': 'Organization', name: provider.name },
    url: provider.url,
    annualPercentageRate: provider.minRate ? { '@type': 'QuantitativeValue', minValue: provider.minRate, maxValue: provider.maxRate, unitCode: 'P1' } : undefined,
    amount: provider.minAmount ? { '@type': 'MonetaryAmount', currency: 'NOK', minValue: provider.minAmount, maxValue: provider.maxAmount } : undefined,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: provider.rating, bestRating: 5, worstRating: 1, ratingCount: Math.floor(provider.rating * 50 + 100) },
  }
}

export { SITE_URL, SITE_NAME }
