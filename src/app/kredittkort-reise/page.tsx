import { Metadata } from 'next'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getCreditCards } from '@/data/creditcards'
import { faqSchema } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kredittkort reise 2026 | Beste kort for ferie og utland',
  description: 'Finn beste kredittkort for reise. Gebyrfritt uttak i utlandet, reiseforsikring, og bonus. Bank Norwegian, SEB Selected og flere. Sammenlign og søk.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/kredittkort-reise' },
}

const faqs = [
  { q: 'Hvilke kredittkort er best for reise?', a: 'Bank Norwegian er best for ferie med CashPoints. SEB Selected for forsikring. Santander Red for gebyrfritt uttak.' },
  { q: 'Hva koster det å ta ut penger i utlandet?', a: 'Mange kort koster 25-35 kr + 2% valutapåslag. Bank Norwegian og Santander Red har gebyrfritt uttak i utlandet.' },
  { q: 'Trenger jeg reiseforsikring hvis jeg har kredittkort?', a: 'Sjekk om kortet ditt har inkludert reiseforsikring. Mange premium-kort har det, men ikke alle gratiskort.' },
]

export default function KredittkortReisePage() {
  const travelCards = getCreditCards()
    .filter(c => c.features.some(f => 
      f.toLowerCase().includes('reiseforsikring') || 
      f.toLowerCase().includes('gebyrfritt') ||
      f.toLowerCase().includes('uttak i utlandet')
    ))
    .sort((a, b) => b.rating - a.rating)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Kredittkort reise' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Kredittkort for reise 2026</h1>
      <p className="text-lg text-text-secondary mb-8">
        Spare penger på ferie? Disse kortene gir gebyrfritt uttak i utlandet, inkludert reiseforsikring, 
        og bonuspoeng på reisekjøp. Perfekt til sommerferien.
      </p>

      {/* Travel benefits CTA */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <Link href="#forsikring" className="fjord-card p-5 text-center hover:shadow-md transition-shadow">
          <div className="text-3xl mb-2">🛡️</div>
          <h3 className="font-bold text-text-primary">Reiseforsikring</h3>
          <p className="text-sm text-text-secondary mt-1">Gratis forsikring med kortet</p>
        </Link>
        <Link href="#gebyr" className="fjord-card p-5 text-center hover:shadow-md transition-shadow">
          <div className="text-3xl mb-2">💱</div>
          <h3 className="font-bold text-text-primary">Gebyrfritt uttak</h3>
          <p className="text-sm text-text-secondary mt-1">Ingen gebyrer i utlandet</p>
        </Link>
        <Link href="#bonus" className="fjord-card p-5 text-center hover:shadow-md transition-shadow">
          <div className="text-3xl mb-2">✈️</div>
          <h3 className="font-bold text-text-primary">Reisebonuser</h3>
          <p className="text-sm text-text-secondary mt-1">CashPoints og rabatter</p>
        </Link>
      </div>

      {/* Best for travel */}
      <section id="forsikring" className="mb-12">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Beste reise-kredittkort 2026</h2>
        <div className="space-y-4">
          {travelCards.map((card, i) => (
            <div key={card.id} className="fjord-card p-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    {i === 0 && <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded">🏆 BEST</span>}
                    <h3 className="font-bold text-text-primary text-lg">{card.name}</h3>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{card.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {card.features.filter(f => 
                      f.toLowerCase().includes('reiseforsikring') ||
                      f.toLowerCase().includes('gebyr') ||
                      f.toLowerCase().includes('cashback') ||
                      f.toLowerCase().includes('point')
                    ).map((f, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{f}</span>
                    ))}
                  </div>

                  <div className="text-sm text-text-muted">
                    Årsavgift: <span className="font-medium">{card.annualFee === 0 ? 'Gratis' : card.annualFee + ' kr'}</span>
                  </div>
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
      </section>

      {/* Foreign fees comparison */}
      <section id="gebyr" className="mb-12">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Gebyrfritt uttak i utlandet</h2>
        <div className="bg-orange-50 rounded-xl p-6 mb-4">
          <p className="text-orange-800">
            <strong>Spare tips:</strong> Mange banker tar 25-35 kr + 2% valutapåslag for uttak i utlandet. 
            Med Bank Norwegian eller Santander Red er uttaket gebyrfritt. På en 2-ukers ferie sparer du lett 500-1000 kr.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border">
              <tr className="text-left text-text-muted">
                <th className="pb-2">Kort</th>
                <th className="pb-2">Uttaksgebyr</th>
                <th className="pb-2">Valutapåslag</th>
                <th className="pb-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border bg-green-50">
                <td className="py-3 font-medium">Bank Norwegian</td>
                <td className="py-3">0 kr</td>
                <td className="py-3">Ca. 1,75%</td>
                <td className="py-3"><span className="text-green-700 font-bold">Lavest</span></td>
              </tr>
              <tr className="border-b border-border bg-green-50">
                <td className="py-3 font-medium">Santander Red</td>
                <td className="py-3">0 kr</td>
                <td className="py-3">Ca. 2%</td>
                <td className="py-3"><span className="text-green-700 font-bold">Lav</span></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3">Standard bankkort</td>
                <td className="py-3">25-35 kr</td>
                <td className="py-3">2-3%</td>
                <td className="py-3"><span className="text-red-600">Dyrt</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <FAQ items={faqs} />

      <div className="prose prose-lg max-w-none mt-8 mb-8">
        <h2>Velge reise-kort basert på destinasjon</h2>
        
        <h3>Europa</h3>
        <p>
          For <strong>ferie i Europa</strong> er forsikring viktigst. <Link href="/kredittkort-reiseforsikring">SEB Selected</Link> gir 
          opptil 50 000 kr i avbestillingsdekning, inkludert <strong>avbestillingsforsikring</strong> som mange andre kort ikke har. 
          Perfect for pakkereiser og fly+hotell.
        </p>

        <h3>USA og Asia</h3>
        <p>
          For <strong>dyrere ferier</strong> er <strong>Bank Norwegian</strong> best. CashPoints kan brukes på flybilletter, 
          og gebyrfritt uttak sparer mye penger. 5% CashPoints på Norwegian-kjøp er gull verdt for flybillett-familier.
        </p>

        <h3>Backpacking og lengre turer</h3>
        <p>
          For<strong> lengre reiser</strong> er gebyrfritt uttak kritisk. <strong>Santander Red</strong> er gratis, 
          har gebyrfritt uttak, og dekkende forsikring. Perfekt for unge reisende.
        </p>
      </div>

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/kredittkort-reise" />
    </div>
  )
}
