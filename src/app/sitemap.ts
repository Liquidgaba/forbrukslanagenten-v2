import { MetadataRoute } from 'next'

const BASE = 'https://xn--forbrukslnagenten-hrb.no'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/forbrukslan', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/beste-forbrukslan', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/billigste-forbrukslan', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/sammenlign', priority: 0.8, changeFrequency: 'weekly' as const },
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
    { path: '/omstartslan', priority: 0.7, changeFrequency: 'monthly' as const },
    // Låntyper
    { path: '/lan-uten-sikkerhet', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/lan-med-sikkerhet', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/smalan', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/lan-pa-dagen', priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  return pages.map(p => ({
    url: `${BASE}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}
