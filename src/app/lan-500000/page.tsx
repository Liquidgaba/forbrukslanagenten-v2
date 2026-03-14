import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getUnsecuredProviders, getSecuredProviders } from '@/data/loans'
import { faqSchema } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lån 500 000 kr | Beste forbrukslån 2026 — Maksbeløp uten sikkerhet',
  description: 'Trenger du å låne 500 000 kroner? De fleste banker maksbeløp. Sammenlign renter, vilkår og nedbetalingstid. Søk hos flere samtidig.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-500000' },
}

const AMOUNT = 500000
const MONTHLY_10Y = Math.round(AMOUNT * 1.50 / 120) // ~6,250 kr
const MONTHLY_15Y = Math.round(AMOUNT * 1.75 / 180) // ~4,861 kr
const TOTAL_10Y_COST = Math.round(AMOUNT * 0.50)
const TOTAL_15Y_COST = Math.round(AMOUNT * 0.75)

const faqs = [
  { q: `Hvem tilbyr lån på ${AMOUNT.toLocaleString('no-NO')} kr?`, a: 'Bank Norwegian, Thorn, og flere lånemeglere har 500 000–600 000 kr som maksbeløp for usikrede lån. Dette er den øvre grensen for forbrukslån uten sikkerhet i Norge.' },
  { q: `Hva koster et lån på ${AMOUNT.toLocaleString('no-NO')} kr per måned?`, a: `Over 10 år: ca. ${MONTHLY_10Y.toLocaleString('no-NO')} kr/mnd. Over 15 år: ca. ${MONTHLY_15Y.toLocaleString('no-NO')} kr/mnd. Ved 10% effektiv rente betyr det henholdsvis ~${TOTAL_10Y_COST.toLocaleString('no-NO')} kr og ~${TOTAL_15Y_COST.toLocaleString('no-NO')} kr i total rentekostnad.` },
  { q: 'Kreves det sikkerhet for så stort beløp?', a: 'Nei, men du må ha svært god kredittscore og høy inntekt. Bankene vil se betydelig lavere gjeldsgrad enn lånetilsagn. Med mindre egenkapital/likviditet kan du vurdere lån med sikkerhet i bolig for lavere rente.' },
  { q: 'Hva påvirker boliglånet mest?', a: 'En halv million i usikret gjeld kan redusere din boliglånsramme med 2–3 millioner kroner. Vurder dette nøye hvis du planlegger boligkjøp, selv flere år fremover.' },
  { q: 'Hva er alternativet til usikret lån på dette beløpet?', a: 'Vurder <Link href="/lan-med-sikkerhet">lån med sikkerhet i bolig</Link> hvis du har tilstrekkelig egenkapital. Du kan få 2–4% lavere rente, som spares 50 000–100 000+ kr over lånets levetid.' },
]

export default function Lan500000() {
  const unsecuredProviders = getUnsecuredProviders()
    .filter(p => p.maxAmount && p.maxAmount >= AMOUNT)
    .sort((a, b) => (a.minRate || 99) - (b.minRate || 99))
    .slice(0, 6)

  const securedProviders = getSecuredProviders()
    .filter(p => p.maxAmount && p.maxAmount >= AMOUNT)
    .slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Lån 500 000 kr' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Lån {AMOUNT.toLocaleString('no-NO')} kr — Maksbeløp for usikret lån</h1>
      <p className="text-lg text-text-secondary mb-8">{AMOUNT.toLocaleString('no-NO')} kroner er i praksis taket for usikrede forbrukslån i Norge. Færre banker gir lån på dette nivået, og kravene er strenge. Vurder om sikret lån kan være et bedre alternativ.</p>

      {/* Warning — critical */}
      <div className="fjord-card p-5 mb-8 border-l-4" style={{ borderLeftColor: '#dc2626', background: '#fef2f2' }}>
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{color: '#dc2626'}} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
          <div>
            <h3 className="font-bold text-text-primary mb-1">Kritisk: Stor påvirkning på fremtidig boliglån</h3>
            <p className="text-sm text-text-secondary">
              {AMOUNT.toLocaleString('no-NO')} kr i usikret gjeld kan redusere din godkjente boliglånsramme med <strong>2–3 millioner kroner.</strong> 
              Dette er et alvorlig hinder hvis du planlegger boligkjøp, selv flere år frem. Vurder <Link href="/lan-med-sikkerhet" className="font-semibold">lån med sikkerhet</Link> hvis du har egenkapital i bolig.
            </p>
          </div>
        </div>
      </div>

      {/* Calc box */}
      <div className="fjord-card p-6 mb-8 border-l-4" style={{ borderLeftColor: '#005f2e' }}>
        <h2 className="text-xl font-bold text-text-primary mb-4">Månedlig betaling for {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded bg-[#f9f5f0] border-2 border-[#005f2e]">
            <div className="text-sm text-text-secondary mb-1">10 år (anbefalt minimum)</div>
            <div className="text-xl font-bold" style={{color: '#005f2e'}}>~{MONTHLY_10Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Total rente: ~{TOTAL_10Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">15 år (lavere månedlig)</div>
            <div className="text-xl font-bold text-text-primary">~{MONTHLY_15Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Total rente: ~{TOTAL_15Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
        </div>
        <p className="text-sm text-text-muted mt-4">* Beregnet med 10% effektiv rente. Din faktiske rente kan variere 7–24%.</p>
      </div>

      {/* Unsecured providers */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Banker som tilbyr usikrede lån på {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <p className="text-text-secondary mb-4">Begrenset utvalg — kun banker med maksbeløp ≥ {AMOUNT.toLocaleString('no-NO')} kr</p>
        <div className="space-y-4">
          {unsecuredProviders.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      {/* Secured alternative */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Alternativ: Lån med sikkerhet i bolig</h2>
        <p className="text-text-secondary mb-4">Lave renter (5–9%), men krever pant i bolig. Kan spare deg 50 000–100 000+ kr.</p>
        <div className="space-y-4">
          {securedProviders.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <div className="prose prose-lg max-w-none mt-8 mb-8">
        <h2>Når er {AMOUNT.toLocaleString('no-NO')} kr fornuftig?</h2>
        <ul>
          <li><strong>Total rehabilitering av bolig</strong> — som øker verdi mer enn lånekostnad</li>
          <li><strong>Stor refinansiering</strong> — samle mange dyre lån til ett, lavere samlet rente</li>
          <li><strong>Påkrevd livsintervensjon</strong> — med klart avkastningspotensial</li>
        </ul>

        <h2>Alternative vurderinger</h2>
        <ol>
          <li><strong>Kunne du fått sikret lån?</strong> Med 2–4% lavere rente sparer du 50 000+ kr</li>
          <li><strong>Kan du redusere beløpet?</strong> 300 000–400 000 kr er langt lettere å få godkjent</li>
          <li><strong>Timingen for boligkjøp?</strong> Betal ned denne gjelden før du søker boliglån</li>
        </ol>

        <h2>Sikret vs. usikret — tallene</h2>
        <table className="w-full text-sm">
          <thead className="border-b">
            <tr>
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Rente</th>
              <th className="text-left py-2">Total kostnad (10 år)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Usikret lån</td>
              <td className="py-2">10–15%</td>
              <td className="py-2">250 000–400 000 kr</td>
            </tr>
            <tr>
              <td className="py-2">Sikret lån</td>
              <td className="py-2">5–8%</td>
              <td className="py-2">125 000–200 000 kr</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-text-muted mt-2">Differansen kan være 100 000–200 000 kroner. Vurder sikret lån seriøst.</p>
      </div>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/lan-500000" />
    </div>
  )
}
