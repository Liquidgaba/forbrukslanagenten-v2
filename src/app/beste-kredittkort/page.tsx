import { Metadata } from 'next'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getCreditCards } from '@/data/creditcards'
import { faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Beste kredittkort 2026 | Topplisten fra Forbrukslånagenten',
  description: 'Se topp 10 kredittkort i Norge 2026. Rangert etter fordeler, kostnader og brukervennlighet. Finner du beste kredittkort for din bruk.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/beste-kredittkort' },
}

const faqs = [
  { q: 'Hva er det beste kredittkortet i Norge?', a: 'Basert på vår vurdering er SEB Selected det beste premium-kortet (reiseforsikring + lounge), Santander Red beste gratis-kortet, og Bank Norwegian beste for reiseentusiaster (CashPoints).' },
  { q: 'Hva koster det beste kortet?', a: 'De beste kortene med reiseforsikring koster 0-395 kr/år. Premium-kort med lounge-tilgang kan koste mer. Mange gode alternativer er helt gratis.' },
  { q: 'Får alle samme rente på kredittkort?', a: 'Nei, renten settes etter kredittvurdering. Den laveste annonserte renten er 20-22%, men ved svak økonomi kan den være opptil 25-27%.' },
]

export default function BesteKredittkortPage() {
  const cards = getCreditCards().sort((a, b) => b.rating - a.rating)

  const getBadge = (index: number) => {
    if (index === 0) return '🥇 Beste premium'
    if (index === 1) return '🥈 Beste gratis'
    if (index === 2) return '🥉 Beste reise'
    return `#${index + 1}`
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Beste kredittkort' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">De 5 beste kredittkortene i 2026</h1>
      <p className="text-lg text-text-secondary mb-8">
        Vi har testet og rangert alle norske kredittkort. Her er våre best rangerte kort basert på 
        fordeler, kostnader, og brukeropplevelse. Oppdatert mars 2026.
      </p>

      <div className="space-y-6">
        {cards.map((card, i) => (
          <div key={card.id} className="fjord-card p-6 relative">
            {i < 3 && (
              <div className="absolute -top-3 left-6 bg-[#e8560a] text-white text-xs font-bold px-3 py-1 rounded-full">
                {getBadge(i)}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">
                <span className="text-2xl font-bold" style={{color: '#005f2e'}}>{i + 1}</span>
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h2 className="text-xl font-bold text-text-primary">{card.name}</h2>
                  {card.annualFee === 0 && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      Gratis kort
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-sm font-medium" style={{color: '#e8560a'}}>
                    {'★'.repeat(Math.round(card.rating))}
                    <span className="text-gray-400 ml-1">{card.rating}/5</span>
                  </span>
                </div>
                
                <p className="text-text-secondary mb-4">{card.description}</p>

                <div className="grid sm:grid-cols-3 gap-3 mb-4">
                  <div className="bg-[#fdf0e6] rounded-lg p-3">
                    <div className="text-xs text-text-secondary">Årsavgift</div>
                    <div className="font-semibold text-text-primary">{card.annualFee === 0 ? 'Gratis' : card.annualFee + ' kr'}</div>
                  </div>
                  <div className="bg-[#fdf0e6] rounded-lg p-3">
                    <div className="text-xs text-text-secondary">Rentefrie dager</div>
                    <div className="font-semibold text-text-primary">{card.interestFreeDays} dager</div>
                  </div>
                  <div className="bg-[#fdf0e6] rounded-lg p-3">
                    <div className="text-xs text-text-secondary">Maks kreditt</div>
                    <div className="font-semibold text-text-primary">{card.maxCredit.toLocaleString('no-NO')} kr</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {card.features.slice(0, 4).map((f, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">{f}</span>
                  ))}
                </div>

                {card.bonuses.length > 0 && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-orange-800">Bonus: {card.bonuses[0].value}</div>
                    <div className="text-xs text-orange-700">{card.bonuses[0].description}</div>
                  </div>
                )}
              </div>
              <div className="flex-shrink-0 sm:self-center">
                <a 
                  href={card.affiliateUrl || card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block text-center whitespace-nowrap"
                >
                  Søk om {card.name.split(' ')[0]}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FAQ items={faqs} />

      <div className="prose prose-lg max-w-none mt-8 mb-8">
        <h2>Slik har vi vurdert kredittkortene</h2>
        <p>
          Vi bruker følgende kriterier for å rangere kredittkort:
        </p>
        <ol>
          <li><strong>Kostnad:</strong> Årsavgift, termingebyrer, og rentesats</li>
          <li><strong>Fordeler:</strong> Bonus, cashback, forsikringer</li>
          <li><strong>Fleksibilitet:</strong> Rentefrie dager og maks kredittramme</li>
          <li><strong>Brukeropplevelse:</strong> App, nettbank, kundeservice</li>
          <li><strong>Sikkerhet:</strong> Kjøpsforsikring, ID-tyveriforsikring</li>
        </ol>
        <p>
          Vurderingene er basert på offentlig informasjon, tester, og brukeranmeldelser. 
          Vi oppdaterer rangeringen kvartalsvis.
        </p>
      </div>

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/beste-kredittkort" />
    </div>
  )
}
