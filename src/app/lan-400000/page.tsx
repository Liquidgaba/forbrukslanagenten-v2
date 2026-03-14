import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getUnsecuredProviders } from '@/data/loans'
import { faqSchema } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lån 400 000 kr | Beste forbrukslån 2026 — Sammenlign renter',
  description: 'Trenger du å låne 400 000 kroner? Sammenlign de beste forbrukslånene. Renter fra 5,9%, svartid 1-2 dager. Søk gratis hos flere banker samtidig.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-400000' },
}

const AMOUNT = 400000
const MONTHLY_5Y = Math.round(AMOUNT * 1.25 / 60) // ~8,333 kr
const MONTHLY_10Y = Math.round(AMOUNT * 1.50 / 120) // ~5,000 kr
const MONTHLY_15Y = Math.round(AMOUNT * 1.75 / 180) // ~3,889 kr
const TOTAL_5Y_COST = Math.round(AMOUNT * 0.25)
const TOTAL_10Y_COST = Math.round(AMOUNT * 0.50)
const TOTAL_15Y_COST = Math.round(AMOUNT * 0.75)

const faqs = [
  { q: `Hva koster et lån på ${AMOUNT.toLocaleString('no-NO')} kr?`, a: `Ved 9,9% effektiv rente over 10 år betaler du rundt ${MONTHLY_10Y.toLocaleString('no-NO')} kr per måned. Total kostnad blir ca. ${TOTAL_10Y_COST.toLocaleString('no-NO')} kr i renter. Velger du 15 år, synker månedlig betaling til ca. ${MONTHLY_15Y.toLocaleString('no-NO')} kr.` },
  { q: 'Hvem kan få lån på 400 000 kr?', a: 'Du må være over 23 år, ha fast inntekt på minimum 400 000–500 000 kr/år, og ikke ha betalingsanmerkninger. Total gjeldsbyrde må være under 5x bruttoinntekt. Bankene gjør grundig kredittvurdering.' },
  { q: 'Hvilken nedbetalingstid anbefales?', a: '10–15 år er vanlig for dette beløpet. 10 år gir lavere totalkostnad. 15 år gir mer håndterlig månedlig belastning. Vurder din inntekt og andre utgifter nøye.' },
  { q: 'Er 400 000 kr maks for forbrukslån?', a: 'De fleste banker har 400 000–500 000 kr som maksgrense for usikrede forbrukslån. Trenger du mer, må du vurdere sikret lån med pant i eiendom.' },
  { q: 'Hva påvirker renten ved såpass høyt beløp?', a: 'Inntekt, kredittscore, gjeldsgrad, betalingshistorikk, og samlet finansiell situasjon. Bankene er konservative ved høye beløp. Kun søkere med sterkest profil får lavest rente.' },
]

export default function Lan400000() {
  const providers = getUnsecuredProviders()
    .filter(p => p.maxAmount && p.maxAmount >= AMOUNT)
    .sort((a, b) => (a.minRate || 99) - (b.minRate || 99))
    .slice(0, 8)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Lån 400 000 kr' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Lån {AMOUNT.toLocaleString('no-NO')} kr — De beste forbrukslånene i 2026</h1>
      <p className="text-lg text-text-secondary mb-8">{AMOUNT.toLocaleString('no-NO')} kroner gir deg betydelig økonomisk handlefrihet. Enten det er større oppussing, bilkjøp, eller refinansiering — sammenlign renter fra ledende banker før du søker.</p>

      {/* Quick calc box */}
      <div className="fjord-card p-6 mb-8 border-l-4" style={{ borderLeftColor: '#005f2e' }}>
        <h2 className="text-xl font-bold text-text-primary mb-4">Hva koster det å låne {AMOUNT.toLocaleString('no-NO')} kr?</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">5 år (60 mnd)</div>
            <div className="text-xl font-bold text-text-primary">~{MONTHLY_5Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Rente: ~{TOTAL_5Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
          <div className="p-4 rounded bg-[#f9f5f0] border-2 border-[#005f2e]">
            <div className="text-sm text-text-secondary mb-1">10 år (120 mnd) — Mest populær</div>
            <div className="text-xl font-bold" style={{color: '#005f2e'}}>~{MONTHLY_10Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Rente: ~{TOTAL_10Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">15 år (180 mnd)</div>
            <div className="text-xl font-bold text-text-primary">~{MONTHLY_15Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Rente: ~{TOTAL_15Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
        </div>
        <p className="text-sm text-text-muted mt-4">* Beregnet med 10% effektiv rente. Din faktiske rente avhenger av kredittvurdering.</p>
      </div>

      {/* Providers */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Beste forbrukslån for {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <p className="text-text-secondary mb-4">Ikke alle banker tilbyr {AMOUNT.toLocaleString('no-NO')} kr. Under ser du de som har høyt nok tak.</p>
        <div className="space-y-4">
          {providers.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <div className="prose prose-lg max-w-none mt-8 mb-8">
        <h2>Populære bruksområder for {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <ul>
          <li><strong>Total boligoppussing</strong> — større renovering av flere rom</li>
          <li><strong>Kjøp av bil eller bobil</strong> — uten pant, raskere enn billån</li>
          <li><strong>Større refinansiering</strong> — samle <Link href={"/samlelan"}>mange lån</Link> til ett</li>
          <li><strong>Etablering av selskap</strong> — oppstartskapital for næring</li>
          <li><strong>Feriebolig eller hytte</strong> — delbetaling eller renovering</li>
        </ul>

        <h2>Spesielle vurderinger ved lån på {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <p>Ved såpass høye beløp er renteforskjellene svært betydningsfulle. 1% forskjell utgjør 20 000 kroner over tid. Bankene er også strengere med godkjenning. Tips:</p>
        <ol>
          <li>Sjekk kredittscore før du søker</li>
          <li>Søk hos flere banker samtidig via <Link href={"/sammenlign"}>lånemeglere</Link></li>
          <li>Beregn månedlig betalingsevne nøye</li>
          <li>Vurder om sikret lån (med pant) kan gi bedre rente</li>
        </ol>

        <h2>Refinansiering med {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <p>Har du mange smålån og kredittkortgjeld? {AMOUNT.toLocaleString('no-NO')} kr kan <Link href={"/refinansiering"}>samle all gjeld</Link> til ett lån med lavere rente. Dette kan spare deg for titusenvis av kroner.</p>

        <h2>Skattefradrag</h2>
        <p>Med 22% fradrag på rente, får du tilbake {Math.round(TOTAL_10Y_COST * 0.22).toLocaleString('no-NO')} kr på skatten over 10 år. Dette reduserer reell kostnad betydelig.</p>
      </div>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/lan-400000" />
    </div>
  )
}
