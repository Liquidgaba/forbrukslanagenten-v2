import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { loanProviders } from '@/data/loans'

export const metadata: Metadata = {
  title: 'Billigste forbrukslån 2026 — Laveste rente i Norge',
  description: 'Finn billigste forbrukslån med lavest effektiv rente. Sammenlign tilbud fra 20+ banker sortert på pris. Spar tusenvis på riktig valg.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/billigste-forbrukslan' },
}

const faqs = [
  { q: 'Hva er det billigste forbrukslånet i Norge?', a: 'Per mars 2026 tilbyr Okida og Instabank de laveste rentene (fra 5,0-5,5%), men dette krever sikkerhet i bolig. Uten sikkerhet starter rentene fra rundt 7,4% hos Lendo og 7,9% hos Bank Norwegian.' },
  { q: 'Hvordan finner jeg lavest mulig rente?', a: 'Bruk en lånemegler som sender søknaden til flere banker. Renten er individuell og basert på din økonomi — kredittscore, gjeld, inntekt og eventuelle betalingsanmerkninger påvirker tilbudet.' },
  { q: 'Er laveste nominelle rente alltid billigst?', a: 'Nei. Se alltid på effektiv rente, som inkluderer gebyrer. Et lån med 8% nominell rente og 0 kr i gebyr kan være billigere enn et med 7% rente men 950 kr i etableringsgebyr.' },
]

export default function BilligsteForbrukslan() {
  const sorted = [...loanProviders]
    .filter(p => p.minRate)
    .sort((a, b) => (a.minRate || 99) - (b.minRate || 99))
    .slice(0, 10)

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <Breadcrumb items={[{ name: 'Billigste forbrukslån' }]} />
      <AffiliateDisclaimer />

      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">
        Billigste forbrukslån 2026 — sortert på rente
      </h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Vi har sortert alle forbrukslån etter laveste rente. Finn det billigste alternativet for din situasjon — 
        enten du søker med eller uten sikkerhet.
      </p>

      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Laveste renter — mars 2026</h2>
        <div className="space-y-3">
          {sorted.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Slik finner du billigste forbrukslån</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>
            Det «billigste» lånet er ikke nødvendigvis det med lavest rente i reklamen. For å finne det virkelig 
            billigste alternativet må du se på effektiv rente — som inkluderer alle kostnader som etableringsgebyr 
            og termingebyr.
          </p>
          <p>
            Viktig: Rentene som reklameres er som regel «fra»-priser som kun de beste kundene får. 
            Din faktiske rente avhenger av kredittscore, inntekt og gjeld. Derfor lønner det seg å 
            søke hos flere banker og sammenligne de konkrete tilbudene du mottar.
          </p>
        </div>
      </section>

      <FAQ items={faqs} />
    </div>
  )
}
