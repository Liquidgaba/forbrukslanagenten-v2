import { Metadata } from 'next'
import Link from 'next/link'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getCreditCards } from '@/data/creditcards'
import { faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Kredittkort med reiseforsikring 2026 | Inkludert forsikring',
  description: 'Sammenlign kredittkort med gratis reiseforsikring. SEB Selected, Eika Gold og flere inkluderer avbestilling, forsinkelse og sykdom. Spar penger på reiseforsikring.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/kredittkort-reiseforsikring' },
}

const faqs = [
  { q: 'Hvilke kredittkort har reiseforsikring?', a: 'SEB Selected, Eika Gold Mastercard, og SEB Private Banking har omfattende reiseforsikring inkludert. Dekker avbestilling, forsinkelse, sykdom og tap av bagasje.' },
  { q: 'Hva dekker kredittkort reiseforsikring?', a: 'De fleste dekker: avbestilling ved sykdom, forsinket fly, tapt bagasje, nødhjelp, og ofte familie. Sjekk vilkår for beløpsgrenser.' },
  { q: 'Er det verdt årsavgiften for forsikringen?', a: 'Ja! En separat reiseforsikring koster ofte 2 000-3 000 kr/år. Kredittkort med årsavgift 395 kr gir samme dekning.' },
]

export default function KredittkortReiseforsikringPage() {
  const cardsWithInsurance = getCreditCards()
    .filter(c => c.features.some(f => f.toLowerCase().includes('reiseforsikring') || f.toLowerCase().includes('forsikring')))
    .sort((a, b) => b.rating - a.rating)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Kredittkort med reiseforsikring' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Kredittkort med reiseforsikring 2026</h1>
      <p className="text-lg text-text-secondary mb-8">
        Spar 2 000-3 000 kr på reiseforsikring! Disse kortene inkluderer omfattende reiseforsikring 
        som dekker avbestilling, forsinkelse, sykdom og tapt bagasje — helt gratis.
      </p>

      {/* Insurance value prop */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
        <h2 className="font-bold text-blue-900 mb-2">💡 Spar penger på reiseforsikring</h2>
        <p className="text-blue-800 text-sm mb-2">
          En separat reiseforsikring koster ofte 2 000-3 000 kr/år. Med kredittkort får du 
          <strong> samme dekning fra 0-395 kr/år</strong>.
        </p>
        <p className="text-blue-700 text-sm">
          Gjelder når minst 50% av reisen betales med kortet. Familie inkludert hos flere banker.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {cardsWithInsurance.map((card, i) => (
          <div key={card.id} className="fjord-card p-5 border-l-4 border-blue-500">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">REISEFORSIKRING</span>
                  <h2 className="font-bold text-text-primary text-lg">{card.name}</h2>
                </div>
                <p className="text-sm text-text-secondary mb-3">{card.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <div className="text-xs font-semibold text-gray-700 mb-1">Forsikringsdekning:</div>
                  <ul className="text-sm space-y-1">
                    <li>✓ Avbestilling (opptil 50 000 kr)</li>
                    <li>✓ Forsinket avreise (fra 4 timer)</li>
                    <li>✓ Tapt/forsinket bagasje</li>
                    {card.features.includes('avbestillingsforsikring') && <li>✓ Avbestillingsforsikring</li>}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-gray-100 px-2 py-1 rounded">Årsavgift: {card.annualFee === 0 ? 'Gratis' : card.annualFee + ' kr'}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Rentefrie dager: {card.interestFreeDays}</span>
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

      {/* Compare with standalone insurance */}
      <div className="fjord-card p-6 mb-8">
        <h2 className="font-bold text-text-primary mb-4">Sammenligning: Kredittkort vs. Tradisjonell reiseforsikring</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr className="text-left">
                <th className="pb-2">Type</th>
                <th className="pb-2">Pris/år</th>
                <th className="pb-2">Avbestilling</th>
                <th className="pb-2">Forsinkelse</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 font-medium">SEB Selected</td>
                <td className="py-3">395 kr</td>
                <td className="py-3">Opptil 50 000 kr</td>
                <td className="py-3">Fra 4 timer</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-medium">Eika Gold</td>
                <td className="py-3">395 kr</td>
                <td className="py-3">Opptil 30 000 kr</td>
                <td className="py-3">Fra 4 timer</td>
              </tr>
              <tr className="border-b bg-green-50">
                <td className="py-3 font-medium">Santander Red</td>
                <td className="py-3 font-bold text-green-700">Gratis</td>
                <td className="py-3">Opptil 25 000 kr</td>
                <td className="py-3">Fra 4 timer</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-3">Gjensidige Reiseforsikring</td>
                <td className="py-3">~2 500 kr</td>
                <td className="py-3">Ja</td>
                <td className="py-3">Ja</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <FAQ items={faqs} />

      <div className="prose prose-lg max-w-none mb-8">
        <h2>Når gjelder forsikringen?</h2>
        <p>
          Reiseforsikringen kredittkortet gjelder som regel når{' '}
          <strong>minst 50% av reisens kostnad</strong> betales med kortet. Noen kort krever også at 
          returen er bestilt. Familie (ektefelle/samboer, barn under 25) er ofte inkludert ved siden av 
          kortinnehaveren.
        </p>

        <h2>Hva dekker forsikringen IKKE?</h2>
        <ul>
          <li>Ekstremsport og farlige aktiviteter (ofte)</li>
          <li>Reiser til krigsområder</li>
          <li>Avbestilling ved økonomiske problemer</li>
          <li>Reiser lenger enn 90 dager</li>
        </ul>

        <h2>Kredittkort for reise vs. daglig bruk</h2>
        <p>
          Mange har to kort: Ett med reiseforsikring til reiser, og et uten årsavgift til daglig bruk. 
          På ferien betaler du med reisekortet, hjemme med gratiskortet. Du får fordeler fra begge 
          uten å betale for mye.
        </p>
      </div>

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/kredittkort-reiseforsikring" />
    </div>
  )
}
