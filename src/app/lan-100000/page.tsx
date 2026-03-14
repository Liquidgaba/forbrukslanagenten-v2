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
  title: 'Lån 100 000 kr | Beste forbrukslån 2026 — Sammenlign renter',
  description: 'Trenger du å låne 100 000 kroner? Sammenlign de beste forbrukslånene. Renter fra 5,9%, svartid 1-2 dager. Søk gratis hos flere banker samtidig.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-100000' },
}

const AMOUNT = 100000
const MONTHLY_3Y = Math.round(AMOUNT * 1.15 / 36) // ~3,194 kr
const MONTHLY_5Y = Math.round(AMOUNT * 1.25 / 60) // ~2,083 kr
const MONTHLY_10Y = Math.round(AMOUNT * 1.50 / 120) // ~1,250 kr
const TOTAL_3Y_COST = Math.round(AMOUNT * 0.15)
const TOTAL_5Y_COST = Math.round(AMOUNT * 0.25)
const TOTAL_10Y_COST = Math.round(AMOUNT * 0.50)

const faqs = [
  { q: `Hva koster et lån på ${AMOUNT.toLocaleString('no-NO')} kr?`, a: `Ved 9,9% effektiv rente over 5 år betaler du rundt ${MONTHLY_5Y.toLocaleString('no-NO')} kr per måned. Total kostnad blir ca. ${TOTAL_5Y_COST.toLocaleString('no-NO')} kr i renter. Velger du 10 år, synker månedlig betaling til ca. ${MONTHLY_10Y.toLocaleString('no-NO')} kr, men total rentekostnad øker til ca. ${TOTAL_10Y_COST.toLocaleString('no-NO')} kr.` },
  { q: 'Hvem kan få lån på 100 000 kr?', a: 'Du må være over 18 år (de fleste banker krever 20 eller 23), ha fast inntekt på minimum 200 000–250 000 kr/år, og ikke ha betalingsanmerkninger. Total gjeldsbyrde bør ikke overstige 5x bruttoinntekt.' },
  { q: 'Hvilken nedbetalingstid bør jeg velge?', a: '5 år er den vanligste. Kortere (3 år) = lavere totalkostnad, men høyere månedlig belastning. Lengre (10 år) = lavere månedlig, men du betaler mye mer i renter totalt. Velg det du har råd til per måned uten å presse budsjettet.' },
  { q: 'Kan jeg betale tilbake tidligere?', a: 'Ja, alle forbrukslån kan innfris når som helst uten ekstra gebyr. Du sparer resterende renter, men noen banker krever 30 dagers ekstra rente ved tidlig innfrielse.' },
  { q: 'Hva påvirker renten jeg får?', a: 'Din inntekt, kredittscore, gjeldsgrad, og betalingshistorikk. De med best profil får lavest rente (7–10%). De med svakere profil kan få opptil 20–24%.' },
]

export default function Lan100000() {
  const providers = getUnsecuredProviders()
    .filter(p => p.maxAmount && p.maxAmount >= AMOUNT)
    .sort((a, b) => (a.minRate || 99) - (b.minRate || 99))
    .slice(0, 8)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Lån 100 000 kr' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Lån {AMOUNT.toLocaleString('no-NO')} kr — De beste forbrukslånene i 2026</h1>
      <p className="text-lg text-text-secondary mb-8">{AMOUNT.toLocaleString('no-NO')} kroner er et populært lånebeløp i Norge. Passer til oppussing, refinansiering, eller større kjøp. Sammenlign renter og vilkår fra ledende banker — søk hos flere samtidig.</p>

      {/* Quick calc box */}
      <div className="fjord-card p-6 mb-8 border-l-4" style={{ borderLeftColor: '#005f2e' }}>
        <h2 className="text-xl font-bold text-text-primary mb-4">Hva koster det å låne {AMOUNT.toLocaleString('no-NO')} kr?</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">3 år (36 mnd)</div>
            <div className="text-xl font-bold text-text-primary">~{MONTHLY_3Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Rente: ~{TOTAL_3Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
          <div className="p-4 rounded bg-[#f9f5f0] border-2 border-[#005f2e]">
            <div className="text-sm text-text-secondary mb-1">5 år (60 mnd) — Mest populær</div>
            <div className="text-xl font-bold" style={{color: '#005f2e'}}>~{MONTHLY_5Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Rente: ~{TOTAL_5Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">10 år (120 mnd)</div>
            <div className="text-xl font-bold text-text-primary">~{MONTHLY_10Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Rente: ~{TOTAL_10Y_COST.toLocaleString('no-NO')} kr</div>
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
          <li><strong>Totaloppussing</strong> — bad, kjøkken, eller flere rom</li>
          <li><strong>Refinansiering</strong> — samle <Link href={"/samlelan"}>flere smålån</Link> med høy rente til ett med lav rente</li>
          <li><strong>Ferie eller reise</strong> — drømmeferien til Asia, USA, eller syden</li>
          <li><strong>Bil eller MC</strong> — kjøp uten omfattende pantelån</li>
          <li><strong>Hage eller terrasse</strong> — uteareal som øker boligverdien</li>
        </ul>

        <h2>Hva skal du passe på ved lån på {AMOUNT.toLocaleString('no-NO')} kr?</h2>
        <p>Med større beløp blir renteforskjellene viktigere. En forskjell på bare 2% i effektiv rente utgjør over 10 000 kroner på 5 år. Derfor er det kritisk å:</p>
        <ol>
          <li>Sammenligne minst 3 tilbud</li>
          <li>Bruke lånemeglere som <Link href={"/sammenlign"}>sammenligner for deg</Link></li>
          <li>Sjekke gebyrstruktur — etableringsgebyr + termingebyr</li>
          <li>Velge riktig nedbetalingstid</li>
        </ol>

        <h2>Refinansiering vs. nytt lån</h2>
        <p>Har du allerede dyr gjeld? {AMOUNT.toLocaleString('no-NO')} kr kan brukes til å <Link href={"/refinansiering"}>refinansiere</Link> flere smålån til ett. Du betaler ned én regning i stedet for mange, og får ofte bedre rente ved å samle lånene.</p>

        <h2>Skattefradrag på rente</h2>
        <p>Du får 22% fradrag på rentekostnader i selvangivelsen. Med {TOTAL_5Y_COST.toLocaleString('no-NO')} kr i rente over lånets levetid, får du omtrent {Math.round(TOTAL_5Y_COST * 0.22).toLocaleString('no-NO')} kr tilbake på skatten. Dette reduserer den reelle kostnaden betraktelig.</p>
      </div>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/lan-100000" />
    </div>
  )
}
