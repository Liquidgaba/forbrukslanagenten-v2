import { Metadata } from 'next'
import Link from 'next/link'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getTopCreditCards, getCreditCardsWithoutAnnualFee } from '@/data/creditcards'
import { faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Kredittkort 2026 | Sammenlign de beste kredittkortene',
  description: 'Sammenlign kredittkort fra norske banker. Finn kort uten årsavgift, med bonus, eller med reiseforsikring. Søk direkte til de beste tilbudene.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/kredittkort' },
}

const faqs = [
  { q: 'Hva er et kredittkort?', a: 'Et kredittkort gir deg mulighet til å kjøpe nå og betale senere. De fleste kort har 45 rentefrie dager, noen har cashback eller bonuspoeng, og mange inkluderer reiseforsikring.' },
  { q: 'Hvilket kredittkort er best?', a: 'Det avhenger av dine behov. Uten årsavgift: Santander Red eller Bank Norwegian. Med reiseforsikring: SEB Selected. Med cashback: Eika Gold.' },
  { q: 'Kan jeg ha flere kredittkort?', a: 'Ja, mange har 2-3 kort for ulike formål. Ett for daglig bruk med cashback, ett for reise med forsikring. Pass på å ikke bruke mer enn du kan betale tilbake.' },
  { q: 'Hva er rentefrie dager?', a: 'Det er perioden fra kjøp til forfall hvor du ikke betaler rente. De fleste norske kort har 45 rentefrie dager. Betaler du hele regningen innen fristen, betaler du kun gebyr, ikke renter.' },
]

export default function KredittkortPage() {
  const topCards = getTopCreditCards(5)
  const noFeeCards = getCreditCardsWithoutAnnualFee()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Kredittkort' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Kredittkort 2026 — Finn det beste kortet for deg</h1>
      <p className="text-lg text-text-secondary mb-8">
        Sammenlign kredittkort fra norske banker. Noen gir cashback, andre har reiseforsikring. 
        Vi har samlet de beste alternativene slik at du enkelt kan finne kortet som passer lommeboken din.
      </p>

      {/* Quick categories */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <Link href="/kredittkort-uten-arsavgift" className="fjord-card p-5 hover:shadow-md transition-shadow border-l-4" style={{ borderLeftColor: '#005f2e' }}>
          <div className="text-2xl mb-2">💳</div>
          <h3 className="font-bold text-text-primary">Uten årsavgift</h3>
          <p className="text-sm text-text-secondary mt-2">Gratis kort som Santander Red og Bank Norwegian</p>
        </Link>
        <Link href="/beste-kredittkort" className="fjord-card p-5 hover:shadow-md transition-shadow border-l-4" style={{ borderLeftColor: '#005f2e' }}>
          <div className="text-2xl mb-2">⭐</div>
          <h3 className="font-bold text-text-primary">Topp 10</h3>
          <p className="text-sm text-text-secondary mt-2">Våre best rangerte kort etter vurdering</p>
        </Link>
        <Link href="/kredittkort-med-bonus" className="fjord-card p-5 hover:shadow-md transition-shadow border-l-4" style={{ borderLeftColor: '#005f2e' }}>
          <div className="text-2xl mb-2">🎁</div>
          <h3 className="font-bold text-text-primary">Med bonus</h3>
          <p className="text-sm text-text-secondary mt-2">Cashback og bonuspoeng på kjøp</p>
        </Link>
      </div>

      {/* Top 5 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Top 5 kredittkort 2026</h2>
        <div className="space-y-4">
          {topCards.map((card, i) => (
            <div key={card.id} className="fjord-card p-5 flex flex-col sm:flex-row gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-2xl font-bold" style={{color: '#005f2e'}}>{i + 1}</span>
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-bold text-text-primary">{card.name}</h3>
                  {card.annualFee === 0 && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Gratis</span>}
                  {card.bonuses.length > 0 && <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Bonus</span>}
                </div>
                <p className="text-sm text-text-secondary mb-3">{card.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-gray-100 px-2 py-1 rounded">Årsavgift: {card.annualFee === 0 ? 'Gratis' : card.annualFee + ' kr'}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Rentefrie dager: {card.interestFreeDays}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Rente: {card.interestRate}%</span>
                </div>
              </div>
              <div className="flex-shrink-0 sm:self-center">
                <a href={card.affiliateUrl || card.url} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-4 py-2 inline-block">
                  Søk nå →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* No annual fee section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Kredittkort uten årsavgift</h2>
        <p className="text-text-secondary mb-4">Disse kortene koster ingenting å eie, men gir deg fortsatt full fleksibilitet:</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {noFeeCards.map(card => (
            <div key={card.id} className="fjord-card p-5">
              <h3 className="font-bold text-text-primary mb-2">{card.name}</h3>
              <p className="text-sm text-text-secondary mb-3">{card.description}</p>
              <ul className="text-sm space-y-1 mb-4">
                {card.features.slice(0, 3).map((f, i) => <li key={i} className="flex items-center gap-2">✓ {f}</li>)}
              </ul>
              <a href={card.affiliateUrl || card.url} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm px-4 py-2 inline-block">
                Les mer
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SEO content */}
      <div className="prose prose-lg max-w-none mb-12">
        <h2>Hvordan velge riktig kredittkort?</h2>
        <p>
          Det finnes ingen «beste kredittkort for alle» — det kommer an på dine behov. Her er de viktigste 
          spørsmålene å stille seg selv før du søker:
        </p>
        <ul>
          <li><strong>Skal du reise mye?</strong> Velg kort med inkludert reiseforsikring som SEB Selected</li>
          <li><strong>Vil du ha noe tilbake?</strong> Cashback-kort som Bank Norwegian eller Eika Gold gir penger tilbake</li>
          <li><strong>Vil du unngå gebyrer?</strong> Santander Red og Bank Norwegian har ingen årsavgift</li>
          <li><strong>Trenger du høy kredittgrense?</strong> SEB og Santander tilbyr opptil 200 000 kr</li>
        </ul>

        <h2>Kredittkort eller forbrukslån?</h2>
        <p>
          Et kredittkort passer til daglig bruk og mindre kjøp hvor du kan betale innen 45 dager. 
          Skal du finansiere større ting som oppussing eller bil, er <Link href="/forbrukslan">forbrukslån</Link> ofte billigere. 
          Kredittkort har vanligvis høyere rente etter de rentefrie dagene.
        </p>

        <h2>Sikkerhet med kredittkort</h2>
        <p>
          De fleste norske kredittkort inkluderer kjøpsforsikring (ofte opptil 90 dager) og ID-tyveriforsikring. 
          Ved nettkjøp gir kredittkort bedre kjøpsvern enn debetkort. Har du først mistet penger til svindel, 
          er det lettere å få dem tilbake med kredittkort enn debetkort.
        </p>
      </div>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/kredittkort" />
    </div>
  )
}
