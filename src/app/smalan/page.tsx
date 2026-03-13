import { Metadata } from 'next'
import Link from 'next/link'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getSmallLoanProviders } from '@/data/loans'

export const metadata: Metadata = {
  title: 'Smålån — Lån fra 1 000 til 100 000 kr raskt 2026',
  description: 'Sammenlign smålån i Norge. Lån fra 1 000 til 100 000 kr med rask utbetaling. Også smålån med betalingsanmerkning. Se beste tilbud.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/smalan' },
}

const faqs = [
  { q: 'Hva er et smålån?', a: 'Et smålån er typisk et lån på mellom 1 000 og 100 000 kr med kort nedbetalingstid (1-5 år). De er designet for å dekke mindre, uventede utgifter uten at du trenger å ta opp et stort forbrukslån.' },
  { q: 'Er smålån dyrere enn vanlige forbrukslån?', a: 'Ja, generelt sett har smålån høyere effektiv rente. Det skyldes at de faste kostnadene (gebyrer) utgjør en større andel av et lite lånebeløp. Vurder alltid om et vanlig forbrukslån er mer fornuftig.' },
  { q: 'Kan jeg få smålån med betalingsanmerkning?', a: 'Noen tilbydere vurderer søknader med anmerkninger. <a href="/smalan-med-betalingsanmerkning" class="text-brand-600 underline">Les vår guide om smålån med betalingsanmerkning →</a>' },
  { q: 'Hvor raskt kan jeg få et smålån?', a: 'Mange tilbydere gir svar på minutter og utbetaler samme dag. Ferratum og Motty Smålån er blant de raskeste.' },
]

export default function Smalan() {
  const providers = getSmallLoanProviders()

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <Breadcrumb items={[{ name: 'Smålån' }]} />

      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">
        Smålån — borrow smart, even small amounts
      </h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Trenger du et mindre beløp raskt? Smålån gir deg 1 000 til 100 000 kr med kort nedbetalingstid. 
        Vi har sammenlignet de beste tilbudene for deg.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 sm:p-6 mb-10">
        <h2 className="text-[16px] font-semibold text-text-primary mb-2">⚠️ Tenk deg om før du låner</h2>
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Smålån har ofte høyere effektiv rente enn vanlige forbrukslån. Trenger du mer enn 50 000 kr? 
          Da kan et <Link href="/forbrukslan" className="text-brand-600 underline">vanlig forbrukslån</Link> være billigere totalt sett.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Beste smålån 2026</h2>
        <div className="space-y-3">
          {providers.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Alt om smålån i Norge</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>
            Smålån har blitt et populært alternativ for nordmenn som trenger et mindre beløp til uventede utgifter. 
            Enten det gjelder en reparasjon, en tannlegeregning eller en annen uforutsett kostnad — et smålån 
            kan gi deg pusterommet du trenger.
          </p>
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Forskjellen på smålån og forbrukslån</h3>
          <p>
            I praksis er et smålån bare et forbrukslån med lavere beløp (typisk under 100 000 kr). 
            Forskjellen er at smålån ofte har kortere nedbetalingstid og enklere søknadsprosess. 
            Noen tilbydere spesialiserer seg på mikrolån helt ned til 1 000 kr.
          </p>
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Smålån med betalingsanmerkning</h3>
          <p>
            Har du betalingsanmerkning er det vanskeligere, men ikke umulig. Noen tilbydere vurderer søknader 
            uavhengig av kredittstatus, spesielt for mindre beløp. Les vår dedikerte guide om{' '}
            <Link href="/smalan-med-betalingsanmerkning" className="text-brand-600 underline">
              smålån med betalingsanmerkning
            </Link>{' '}
            for full oversikt.
          </p>
        </div>
      </section>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
    </div>
  )
}
