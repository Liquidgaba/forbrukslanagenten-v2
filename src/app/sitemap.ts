import { MetadataRoute } from 'next'

const BASE = 'https://xn--forbrukslnagenten-hrb.no'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    // Core pages
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/forbrukslan', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/beste-forbrukslan', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/billigste-forbrukslan', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/sammenlign', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/kalkulator', priority: 0.8, changeFrequency: 'monthly' as const },

    // Betalingsanmerkning cluster
    { path: '/lan-med-betalingsanmerkning', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/smalan-med-betalingsanmerkning', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/refinansiering-med-betalingsanmerkning', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/lan-med-inkasso', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/garantert-lan-med-betalingsanmerkning', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/lan-etter-slettet-betalingsanmerkning', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/refinansiering-uten-sikkerhet-med-betalingsanmerkning', priority: 0.7, changeFrequency: 'monthly' as const },

    // Refinansiering cluster
    { path: '/refinansiering', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/samle-forbrukslan', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/refinansiering-uten-sikkerhet', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/refinansiering-inkassogjeld', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/omstartslan', priority: 0.7, changeFrequency: 'monthly' as const },

    // Loan types
    { path: '/lan-uten-sikkerhet', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/lan-med-sikkerhet', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/smalan', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/mikrolan', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/lan-pa-dagen', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/sms-lan', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/nodlan', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/lane-penger', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/lan-uten-kredittsjekk', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/lan-til-forerkort', priority: 0.6, changeFrequency: 'monthly' as const },

    // Loan purposes
    { path: '/lan-til-oppussing', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/bobil-lan', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/samlelan', priority: 0.7, changeFrequency: 'monthly' as const },

    // Informational
    { path: '/kredittsjekk', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/gjeldssanering', priority: 0.7, changeFrequency: 'monthly' as const },

    // Trust/E-E-A-T pages
    { path: '/om-oss', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/metodikk', priority: 0.5, changeFrequency: 'yearly' as const },
  ]

  return pages.map(p => ({
    url: `${BASE}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}
