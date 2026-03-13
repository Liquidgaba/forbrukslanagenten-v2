import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getProvidersForRemarks } from '@/data/loans'

export const metadata: Metadata = {
  title: 'Omstartslån — Ny start med refinansiering 2026',
  description: 'Omstartslån gir deg muligheten til å samle all gjeld, selv med betalingsanmerkninger. Se hvordan du kvalifiserer og sammenlign tilbud.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/omstartslan' },
}

const faqs = [
  { q: 'Hva er et omstartslån?', a: 'Et omstartslån er et refinansieringslån med sikkerhet i bolig, designet for å hjelpe folk med gjeldsproblemer. Det lar deg samle all gjeld — inkludert inkassosaker og lån med betalingsanmerkninger — til ett lån med lavere rente.' },
  { q: 'Kan jeg få omstartslån med betalingsanmerkning?', a: 'Ja, det er nettopp poenget med omstartslån. Men du trenger sikkerhet i bolig (eller annen fast eiendom) med tilstrekkelig egenkapital.' },
  { q: 'Hva kreves for å kvalifisere?', a: 'Du trenger: 1) Eiendom med nok egenkapital, 2) Fast inntekt som tåler den nye nedbetalingen, 3) Vilje til å rydde opp i økonomien. Kravene varierer mellom tilbydere.' },
  { q: 'Er omstartslån dyrt?', a: 'Renten er høyere enn vanlige boliglån (typisk 5-12%), men vesentlig lavere enn usikret gjeld med betalingsanmerkninger. Totalkostnaden er nesten alltid lavere enn å fortsette med eksisterende gjeld.' },
]

export default function Omstartslan() {
  const providers = getProvidersForRemarks()

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <Breadcrumb items={[{ name: 'Refinansiering', href: '/refinansiering' }, { name: 'Omstartslån' }]} />
      <AffiliateDisclaimer />

      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">
        Omstartslån — en ny sjanse for økonomien
      </h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Et omstartslån kan gi deg muligheten til å samle all gjeld til ett lån med sikkerhet i bolig — 
        selv med betalingsanmerkninger og inkassosaker. Det handler om å få kontroll tilbake.
      </p>

      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Tilbydere som tilbyr omstartslån</h2>
        <div className="space-y-3">
          {providers.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Slik fungerer omstartslån</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>
            Et omstartslån er i praksis et refinansieringslån med sikkerhet i bolig, men det skiller seg ut 
            ved at det er tilpasset personer i en vanskelig økonomisk situasjon. Bankene som tilbyr dette 
            vet at kundene har betalingsanmerkninger — og har priset risikoen inn i renten.
          </p>
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Steg for steg</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Få oversikt over all gjeld — inkludert inkassosaker</li>
            <li>Sjekk verdien på boligen din og beregn tilgjengelig egenkapital</li>
            <li>Søk hos en eller flere spesialbanker (se listen ovenfor)</li>
            <li>Banken innfrir alle eksisterende lån og kreditorer direkte</li>
            <li>Du sitter igjen med ett lån, én betaling, og vesentlig lavere totalkostnad</li>
          </ol>
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Hvem passer omstartslån for?</h3>
          <p>
            Omstartslån er primært for deg som: har betalingsanmerkninger eller inkassosaker, eier bolig med 
            egenkapital, og ønsker å rydde opp i økonomien. Det er ikke en «quick fix» — det krever disiplin 
            å unngå ny gjeld etter at du har refinansiert.
          </p>
        </div>
      </section>

      <FAQ items={faqs} />
    </div>
  )
}
