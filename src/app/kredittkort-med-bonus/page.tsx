import { Metadata } from 'next'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getCreditCardsWithBestBonus } from '@/data/creditcards'
import { faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Kredittkort med bonus 2026 | Cashback & poeng',
  description: 'Tjen penger på kjøpene dine. Sammenlign kredittkort med cashback og bonuspoeng. Bank Norwegian, Eika Gold og flere gir noe tilbake.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/kredittkort-med-bonus' },
}

const faqs = [
  { q: 'Hvilket kort gir mest cashback?', a: 'Bank Norwegian gir 1-5% i CashPoints. Eika Gold gir 0.5% på alle kjøp. SEB Selected gir bonuspoeng.' },
  { q: 'Kan jeg ta ut cashback i kontanter?', a: 'Det varierer. Bank Norwegian CashPoints kan brukes på flybilletter. Eika Gold gir reell cashback til konto.' },
  { q: 'Er det verdt bonus-kort?', a: 'Hvis du betaler regningen i tide, ja. Med 45 rentefrie dager tjener du bonus uten å betale renter.' },
]

export default function KredittkortMedBonusPage() {
  const cards = getCreditCardsWithBestBonus()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Kredittkort med bonus' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Kredittkort med bonus 2026</h1>
      <p className="text-lg text-text-secondary mb-8">
        Tjen penger på å handle. Cashback og bonuspoeng kan gi deg flere tusen kroner tilbake i året.
      </p>

      <div className="space-y-4 mb-12">
        {cards.map((card) => (
          <div key={card.id} className="fjord-card p-5 border-l-4" style={{borderLeftColor: '#e8560a'}}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">BONUS</span>
                  <h2 className="font-bold text-text-primary text-lg">{card.name}</h2>
                </div>
                {card.bonuses.map((bonus, idx) => (
                  <div key={idx} className="mb-2">
                    <div className="text-2xl font-bold" style={{color: '#e8560a'}}>{bonus.value}</div>
                    <div className="text-sm text-text-secondary">{bonus.description}</div>
                  </div>
                ))}
                <p className="text-sm text-text-secondary mt-2">{card.description}</p>
              </div>
              <div className="flex-shrink-0 sm:self-center">
                <a href={card.url} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-4 py-2 inline-block">
                  Søk nå →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/kredittkort-med-bonus" />
    </div>
  )
}
