import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getSecuredProviders, getUnsecuredProviders } from '@/data/loans'

export const metadata: Metadata = {
  title: 'Samle forbrukslån — Slå sammen lån og spar penger',
  description: 'Har du flere forbrukslån? Samle alt til ett lån med lavere rente. Se hvordan du sparer opptil 5 000 kr/mnd. Sammenlign tilbud her.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/samle-forbrukslan' },
}

const faqs = [
  { q: 'Hva betyr å samle forbrukslån?', a: 'Det betyr å ta opp ett nytt lån som brukes til å betale ned alle dine eksisterende lån og kredittkort. Resultatet er én betaling per måned, ofte med vesentlig lavere rente.' },
  { q: 'Hvor mye kan jeg spare?', a: 'Det varierer, men mange sparer mellom 2 000 og 5 000 kr i måneden. Besparelsen avhenger av nåværende rente, gjeldsmengde og vilkårene du oppnår på det nye lånet.' },
  { q: 'Trenger jeg sikkerhet for å samle lån?', a: 'Ikke nødvendigvis. Du kan samle usikrede lån til et nytt usikret lån. Men med sikkerhet i bolig får du betydelig lavere rente, noe som gir størst besparelse.' },
  { q: 'Kan jeg samle lån med betalingsanmerkning?', a: 'Ja, men da kreves det som regel sikkerhet i bolig. Okida, Varde Finans og Scoopr er blant tilbyderne som vurderer dette. <a href="/refinansiering-med-betalingsanmerkning" class="text-brand-600 underline">Les mer →</a>' },
]

export default function SamleForbrukslan() {
  const secured = getSecuredProviders()
  const unsecured = getUnsecuredProviders().slice(0, 5)

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <Breadcrumb items={[{ name: 'Refinansiering', href: '/refinansiering' }, { name: 'Samle forbrukslån' }]} />

      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">
        Samle forbrukslån — én betaling, lavere rente
      </h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Sitter du med flere forbrukslån, kredittkort og smålån? Ved å samle alt til ett lån kan du spare 
        tusenvis av kroner i måneden og få bedre oversikt over økonomien.
      </p>

      {/* Example calculation */}
      <div className="bg-white border border-border rounded-xl p-5 sm:p-6 mb-10">
        <h2 className="text-[16px] font-semibold text-text-primary mb-4">📊 Eksempel: Samle 300 000 kr i gjeld</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-amber-50 rounded-lg p-4">
            <div className="text-[13px] font-medium text-amber-700 mb-2">Før — spredt gjeld</div>
            <div className="text-[14px] text-text-secondary space-y-1">
              <p>Forbrukslån 1: 150 000 kr × 18% = 3 900 kr/mnd</p>
              <p>Kredittkort: 80 000 kr × 22% = 2 200 kr/mnd</p>
              <p>Smålån: 70 000 kr × 20% = 2 100 kr/mnd</p>
              <div className="border-t border-amber-200 pt-2 mt-2 font-semibold text-amber-800">Total: 8 200 kr/mnd</div>
            </div>
          </div>
          <div className="bg-mint-50 rounded-lg p-4">
            <div className="text-[13px] font-medium text-mint-700 mb-2">Etter — samlet lån</div>
            <div className="text-[14px] text-text-secondary space-y-1">
              <p>Samlelån: 300 000 kr × 9.9%</p>
              <p>Nedbetalingstid: 5 år</p>
              <div className="border-t border-mint-200 pt-2 mt-2 font-semibold text-mint-800">Total: 6 350 kr/mnd — spar 1 850 kr</div>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Beste tilbud for å samle lån</h2>
        <div className="space-y-3">
          {secured.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Slik samler du forbrukslån</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>
            Prosessen er enklere enn mange tror. Du søker om et refinansieringslån som dekker all eksisterende gjeld. 
            Når lånet innvilges, brukes pengene til å betale ned alle de gamle lånene og kredittkortene dine. 
            Deretter har du kun én månedlig betaling å forholde deg til.
          </p>
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Steg for steg</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Lag oversikt over all gjeld — beløp, rente og månedlig kostnad</li>
            <li>Beregn totalbeløpet du trenger å låne</li>
            <li>Sammenlign tilbud fra flere banker (bruk en lånemegler for enkleste prosess)</li>
            <li>Velg tilbudet med lavest effektiv rente</li>
            <li>Banken innfrir de gamle lånene direkte — du trenger ikke gjøre det selv</li>
          </ol>
        </div>
      </section>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
    </div>
  )
}
