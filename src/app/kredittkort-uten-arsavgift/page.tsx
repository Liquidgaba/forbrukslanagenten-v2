import { Metadata } from 'next'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getCreditCardsWithoutAnnualFee } from '@/data/creditcards'
import { faqSchema } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kredittkort uten årsavgift 2026 | Gratis kredittkort',
  description: 'Sammenlign kredittkort uten årsavgift. Santander Red og Bank Norwegian er helt gratis. Se fordeler og søk direkte.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/kredittkort-uten-arsavgift' },
}

const faqs = [
  { q: 'Hvilke kredittkort er gratis?', a: 'Santander Red, Bank Norwegian Komplett Mastercard og flere fintech-kort har ingen årsavgift. Du betaler kun hvis du ikke betaler innen de rentefrie dagene.' },
  { q: 'Hva er ulempen med gratis kort?', a: 'Gratis kort har ofte færre forsikringer og bonuser enn betalte kort. Men for daglig bruk og som backup er de perfekte.' },
  { q: 'Kan jeg ha flere gratis kort?', a: 'Ja, mange har 2-3 gratis kort for ulike situasjoner. Ett for daglig kjøp, ett for reise (utenlandske gebyrer).' },
]

export default function KredittkortUtenArsavgiftPage() {
  const cards = getCreditCardsWithoutAnnualFee()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Kredittkort uten årsavgift' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Kredittkort uten årsavgift 2026</h1>
      <p className="text-lg text-text-secondary mb-8">
        Vil du ha et kredittkort som koster ingenting å eie? Her er de beste gratis alternativene. 
        Du betaler kun renter hvis du ikke betaler innen de rentefrie dagene.
      </p>

      <div className="space-y-4 mb-12">
        {cards.map((card, i) => (
          <div key={card.id} className="fjord-card p-5 border-l-4 border-green-600">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">GRATIS</span>
                  <h2 className="font-bold text-text-primary text-lg">{card.name}</h2>
                </div>
                <p className="text-sm text-text-secondary mb-3">{card.description}</p>
                <ul className="text-sm space-y-1">
                  {card.features.slice(0, 4).map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">✓ {f}</li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 sm:self-center">
                <a href={card.url} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-4 py-2 inline-block">
                  Søk gratis →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 rounded-xl p-6 mb-12">
        <h2 className="font-bold text-green-800 mb-2">💡 Tips: Kombiner flere gratis kort</h2>
        <p className="text-green-700 text-sm">
          Mange bruker ett kort for daglig kjøp (Bank Norwegian for CashPoints) og ett for reise 
          (Santander for kjøpsforsikring). Da får du fordeler fra flere uten å betale årsavgift.
        </p>
      </div>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/kredittkort-uten-arsavgift" />
    </div>
  )
}
