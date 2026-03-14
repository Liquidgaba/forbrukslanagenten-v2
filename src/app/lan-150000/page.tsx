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
  title: 'Lån 150 000 kr | Beste forbrukslån 2026 — Sammenlign renter',
  description: 'Trenger du å låne 150 000 kroner? Sammenlign de beste forbrukslånene. Renter fra 5,9%, svartid 1-2 dager. Søk gratis hos flere banker samtidig.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-150000' },
}

const AMOUNT = 150000
const MONTHLY_5Y = Math.round(AMOUNT * 1.25 / 60) // ~3,125 kr
const MONTHLY_10Y = Math.round(AMOUNT * 1.50 / 120) // ~1,875 kr
const MONTHLY_15Y = Math.round(AMOUNT * 1.75 / 180) // ~1,458 kr
const TOTAL_5Y_COST = Math.round(AMOUNT * 0.25)
const TOTAL_10Y_COST = Math.round(AMOUNT * 0.50)
const TOTAL_15Y_COST = Math.round(AMOUNT * 0.75)

const faqs = [
  { q: `Hva koster et lån på ${AMOUNT.toLocaleString('no-NO')} kr?`, a: `Ved 9,9% effektiv rente over 5 år betaler du rundt ${MONTHLY_5Y.toLocaleString('no-NO')} kr per måned. Total kostnad blir ca. ${TOTAL_5Y_COST.toLocaleString('no-NO')} kr i renter. Velger du 10 år, synker månedlig betaling til ca. ${MONTHLY_10Y.toLocaleString('no-NO')} kr, men total rentekostnad øker til ca. ${TOTAL_10Y_COST.toLocaleString('no-NO')} kr.` },
  { q: 'Hvem kan få lån på 150 000 kr?', a: 'Du må være over 20 år (de fleste banker krever 23), ha fast inntekt på minimum 250 000–300 000 kr/år, og ikke ha betalingsanmerkninger. Total gjeldsbyrde bør ikke overstige 5x bruttoinntekt.' },
  { q: 'Hvilken nedbetalingstid passer best?', a: '5–10 år er vanlig for dette beløpet. 5 år gir lavest totalkostnad. 10 år gir lavere månedlig belastning. 15 år er mulig hos noen banker, men totalkostnaden blir høy.' },
  { q: 'Kan jeg bruke lånet til refinansiering?', a: 'Ja, 150 000 kr er perfekt for å samle flere smålån og kredittkortgjeld til ett lån med lavere rente. Du sparer penger og får bedre oversikt.' },
  { q: 'Hva påvirker renten jeg får?', a: 'Din inntekt, kredittscore, gjeldsgrad, og betalingshistorikk. For beløp over 100 000 kr gjør bankene grundigere vurdering. De med best profil får lavest rente (7–10%).' },
]

export default function Lan150000() {
  const providers = getUnsecuredProviders()
    .filter(p => p.maxAmount && p.maxAmount >= AMOUNT)
    .sort((a, b) => (a.minRate || 99) - (b.minRate || 99))
    .slice(0, 8)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Lån 150 000 kr' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Lån {AMOUNT.toLocaleString('no-NO')} kr — De beste forbrukslånene i 2026</h1>
      <p className="text-lg text-text-secondary mb-8">{AMOUNT.toLocaleString('no-NO')} kroner gir deg mulighet til større investeringer i hjemmet, bil, eller refinansiering. Sammenlign renter og vilkår fra ledende banker — søk hos flere samtidig for beste tilbud.</p>

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
        <div className="space-y-4">
          {providers.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <div className="prose prose-lg max-w-none mt-8 mb-8">
        <h2>Populære bruksområder for {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <ul>
          <li><strong>Større oppussing</strong> — totalrenovering av kjøkken, bad, eller flere rom</li>
          <li><strong>Refinansiering</strong> — samle <Link href={"/samlelan"}>flere lån</Link> med høy rente til ett med lav rente</li>
          <li><strong>Bil eller campingvogn</strong> — kjøp uten pant, raskere prosess</li>
          <li><strong>Hage og uteareal</strong> — terrasse, hagestue, eller garasje</li>
          <li><strong>Uforutsette større utgifter</strong> — reparasjoner, helse, eller annet</li>
        </ul>

        <h2>Hva skal du passe på ved lån på {AMOUNT.toLocaleString('no-NO')} kr?</h2>
        <p>Med større beløp blir små renteforskjeller store penger. En forskjell på bare 1% utgjør 7 500 kroner over lånets levetid. Derfor:</p>
        <ol>
          <li>Sammenlign minst 3 tilbud før du velger</li>
          <li>Bruk lånemeglere som <Link href={"/sammenlign"}>sammenligner for deg</Link></li>
          <li>Sjekk total kostnad — ikke bare månedlig beløp</li>
          <li>Vurder nedbetalingstid nøye</li>
        </ol>

        <h2>Refinansiering med {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <p>Har du flere smålån med høy rente? {AMOUNT.toLocaleString('no-NO')} kr kan <Link href={"/refinansiering"}>samle gjeld</Link> og gi deg ett lån med bedre vilkår. Du sparer penger, får bedre oversikt, og én faktura å forholde deg til.</p>

        <h2>Skattefradrag på rente</h2>
        <p>Du får 22% fradrag på rentekostnader. Med {TOTAL_10Y_COST.toLocaleString('no-NO')} kr i rente over 10 år, får du omtrent {Math.round(TOTAL_10Y_COST * 0.22).toLocaleString('no-NO')} kr tilbake på skatten. Dette reduserer den reelle kostnaden betraktelig.</p>
      </div>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/lan-150000" />
    </div>
  )
}
