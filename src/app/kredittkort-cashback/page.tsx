import { Metadata } from 'next'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getCreditCards } from '@/data/creditcards'
import { faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Kredittkort cashback 2026 | Tjen penger på kjøp',
  description: 'Cashback kredittkort gir 0.5-5% tilbake på kjøp. Bank Norwegian, Eika Gold og flere. Se hvor mye du kan tjene i året. Sammenlign og søk.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/kredittkort-cashback' },
}

const faqs = [
  { q: 'Hva er cashback på kredittkort?', a: 'Cashback betyr at du får penger tilbake på kjøp. Typisk 0.5-1% på alle kjøp, opptil 5% hos spesifikke butikker eller på Norwegian-fly.' },
  { q: 'Hvilket kort gir mest cashback?', a: 'Bank Norwegian gir 1-5% i CashPoints på Norwegian-kjøp. Eika Gold gir 0.5% på alt. SEB gir bonuspoeng.' },
  { q: 'Er cashback skattefritt?', a: 'Ja, cashback og bonuspoeng på norske kredittkort er som regel skattefrie når det er rabatt/kjøpsfordeler.' },
]

export default function KredittkortCashbackPage() {
  const cards = getCreditCards()
    .filter(c => c.bonuses.some(b => b.type === 'cashback'))
    .sort((a, b) => {
      const aVal = parseFloat(a.bonuses[0]?.value || '0')
      const bVal = parseFloat(b.bonuses[0]?.value || '0')
      return bVal - aVal
    })

  const calculateYearly = (percent: number) => {
    const monthlySpend = 15000 // 15k per month
    return Math.round(monthlySpend * 12 * percent / 100)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Kredittkort cashback' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Kredittkort cashback 2026</h1>
      <p className="text-lg text-text-secondary mb-8">
        Tjen penger på å handle! Cashback betyr at du får 0.5-5% tilbake på alt du kjøper. 
        Med 15 000 kr/mnd i forbruk kan du tjene 900-9000 kr/år.
      </p>

      {/* Cashback calculator */}
      <div className="bg-green-50 rounded-xl p-6 mb-8">
        <h2 className="font-bold text-green-900 mb-4">💰 Din årlige cashback (ved 15 000 kr/mnd forbruk)</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-700">900 kr</div>
            <div className="text-sm text-green-600">ved 0.5% (Eika Gold)</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-700">1 800 kr</div>
            <div className="text-sm text-green-600">ved 1% (Bank Norwegian)</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-700">9 000 kr</div>
            <div className="text-sm text-green-600">ved 5% (Norwegian-kjøp)</div>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-12">
        {cards.map((card) => {
          const percent = parseFloat(card.bonuses[0]?.value || '0')
          return (
            <div key={card.id} className="fjord-card p-5 border-l-4 border-green-500">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">CASHBACK {percent}%</span>
                    <h2 className="font-bold text-text-primary text-lg">{card.name}</h2>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{card.description}</p>
                  
                  <div className="bg-green-50 rounded-lg p-3 mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-green-700">{card.bonuses[0].value}</span>
                      <span className="text-sm text-green-600">{card.bonuses[0].description}</span>
                    </div>
                    <div className="text-xs text-green-600 mt-1">
                      ≈ {calculateYearly(percent).toLocaleString()} kr/år ved 15 000 kr/mnd
                    </div>
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
          )
        })}
      </div>

      <FAQ items={faqs} />

      <div className="prose prose-lg max-w-none mb-8">
        <h2>Hvordan maksimere cashback?</h2>
        <ol>
          <li><strong>Bruk kortet til alt:</strong> Cashback gjelder alle kjøp, også dagligvarer</li>
          <li><strong>Betal fullt:</strong> Unngå renter ved å betale innen 45 dager</li>
          <li><strong>Velg riktig kort:</strong> Reiser du mye med Norwegian? Bank Norwegian gir 5% der</li>
          <li><strong>Ha flere kort:</strong> Ett for daglig kjøp, ett for reise, ett for spesifikke butikker</li>
        </ol>

        <h2>Cashback vs. rabattkort</h2>
        <p>
          Cashback er bedre enn rabattkort fordi det gjelder <strong>alle kjøp</strong>, ikke bare én butikk. 
          Du tjener penger på mat, drivstoff, regninger — alt. Det er ekte penger tilbake, ikke poeng som 
          begrenses til én kjede.
        </p>
      </div>

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/kredittkort-cashback" />
    </div>
  )
}
