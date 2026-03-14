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
  title: 'Lån 200 000 kr | Beste forbrukslån 2026 — Sammenlign renter',
  description: 'Trenger du å låne 200 000 kroner? Sammenlign de beste forbrukslånene. Renter fra 5,9%, nedbetaling 5–15 år. Søk hos flere banker samtidig.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-200000' },
}

const AMOUNT = 200000
const MONTHLY_5Y = Math.round(AMOUNT * 1.25 / 60) // ~4,167 kr
const MONTHLY_10Y = Math.round(AMOUNT * 1.50 / 120) // ~2,500 kr
const MONTHLY_15Y = Math.round(AMOUNT * 1.75 / 180) // ~1,944 kr
const TOTAL_5Y_COST = Math.round(AMOUNT * 0.25)
const TOTAL_10Y_COST = Math.round(AMOUNT * 0.50)
const TOTAL_15Y_COST = Math.round(AMOUNT * 0.75)

const faqs = [
  { q: `Hva koster et lån på ${AMOUNT.toLocaleString('no-NO')} kr?`, a: `Over 5 år (60 mnd): ca. ${MONTHLY_5Y.toLocaleString('no-NO')} kr/mnd med ~25% total rentekostnad. Over 10 år: ca. ${MONTHLY_10Y.toLocaleString('no-NO')} kr/mnd. Over 15 år: ca. ${MONTHLY_15Y.toLocaleString('no-NO')} kr/mnd, men total rente øker til ~${TOTAL_15Y_COST.toLocaleString('no-NO')} kr.` },
  { q: 'Kan jeg få lån på 200 000 uten sikkerhet?', a: 'Ja. De fleste norske banker tilbyr usikrede forbrukslån opptil 500 000–600 000 kr. Du trenger ikke pant i bolig, bil eller annet. Renten er høyere enn med sikkerhet, men lavere enn kredittkort.' },
  { q: 'Hvilken nedbetalingstid passer best?', a: '5–7 år er ideelt for mange. Kortere = lavere totalkostnad. Lengre = bedre månedlig cash-flow, men du betaler mer totalt. Velg kortest mulig periode der månedlig betaling ikke knebler budsjettet.' },
  { q: 'Vil dette påvirke boliglånet mitt?', a: 'Ja. {AMOUNT.toLocaleString("no-NO")} kr i usikret gjeld kan redusere din godkjente boliglånsramme med 800 000–1 200 000 kr. Vurder nøye hvis du planlegger boligkjøp innen 1–2 år.' },
  { q: 'Hva er den laveste renten jeg kan få?', a: 'Med god inntekt, lav gjeldsgrad og høy kredittscore kan du få effektiv rente ned mot 7–8%. De fleste får 9–14%. Dårligere profil = opp mot 20–24%.' },
]

export default function Lan200000() {
  const providers = getUnsecuredProviders()
    .filter(p => p.maxAmount && p.maxAmount >= AMOUNT)
    .sort((a, b) => (a.minRate || 99) - (b.minRate || 99))
    .slice(0, 8)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Lån 200 000 kr' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Lån {AMOUNT.toLocaleString('no-NO')} kr — Større forbrukslån i 2026</h1>
      <p className="text-lg text-text-secondary mb-8">{AMOUNT.toLocaleString('no-NO')} kroner er en betraktelig sum som åpner mange muligheter — men også krever ansvarlig vurdering. Sammenlign renter og velg riktig nedbetalingstid.</p>

      {/* Calc box */}
      <div className="fjord-card p-6 mb-8 border-l-4" style={{ borderLeftColor: '#005f2e' }}>
        <h2 className="text-xl font-bold text-text-primary mb-4">Månedlig betaling for {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">5 år</div>
            <div className="text-xl font-bold text-text-primary">~{MONTHLY_5Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Total rente: ~{TOTAL_5Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
          <div className="p-4 rounded bg-[#f9f5f0] border-2 border-[#005f2e]">
            <div className="text-sm text-text-secondary mb-1">10 år — Anbefalt</div>
            <div className="text-xl font-bold" style={{color: '#005f2e'}}>~{MONTHLY_10Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Total rente: ~{TOTAL_10Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">15 år</div>
            <div className="text-xl font-bold text-text-primary">~{MONTHLY_15Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Total rente: ~{TOTAL_15Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
        </div>
        <p className="text-sm text-text-muted mt-4">* Beregnet med 10% effektiv rente. Din rente varierer.</p>
      </div>

      {/* Warning box */}
      <div className="fjord-card p-5 mb-8 border-l-4" style={{ borderLeftColor: '#b45309', background: '#fffbeb' }}>
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{color: '#b45309'}} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
          <div>
            <h3 className="font-bold text-text-primary mb-1">Viktig: Påvirker boliglånet ditt</h3>
            <p className="text-sm text-text-secondary">
              {AMOUNT.toLocaleString('no-NO')} kr i usikret gjeld kan redusere din godkjente boliglånsramme med 800 000–1 200 000 kr. 
              Vurder om du bør vente med lånet hvis du planlegger å kjøpe bolig innen 1–2 år.
            </p>
          </div>
        </div>
      </div>

      {/* Providers */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Banker som tilbyr lån på {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <div className="space-y-4">
          {providers.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <div className="prose prose-lg max-w-none mt-8 mb-8">
        <h2>Når er det fornuftig å låne {AMOUNT.toLocaleString('no-NO')} kr?</h2>
        <ul>
          <li><strong>Totalrenovering av bolig</strong> — som øker verdi mer enn lånekostnaden</li>
          <li><strong>Refinansiering</strong> — samle dyr gjeld med samlet rente over 15%</li>
          <li><strong>Oppsplitting av verdipapir</strong> — nødvendig likviditet i en periode</li>
          <li><strong>Viktig livshendelse</strong> — der alternativene er dyrere</li>
        </ul>

        <h2>Når bør du IKKE ta lån på {AMOUNT.toLocaleString('no-NO')} kr?</h2>
        <ul>
          <li>For å finansiere løpende forbruk du egentlig ikke har råd til</li>
          <li>Investeringer med høy risiko (krypto, spekulative aksjer)</li>
          <li>Hvis du allerede har mer enn 3x bruttoinntekt i gjeld</li>
          <li>Hvis boligkjøp er innen 2 år (påvirker lånerammen)</li>
          <li>For å betale ned annen gjeld uten å endre forbruksmønster</li>
        </ul>

        <h2>Refinansiering med {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <p>Har du flere kredittkort, smålån, eller dyr forbruksgjeld? {AMOUNT.toLocaleString('no-NO')} kr kan brukes til å <Link href={"/refinansiering-uten-sikkerhet"}>samle all gjeld</Link> i ett lån med lavere rente. Du sparer både på renter og får færre regninger å forholde deg til.</p>

        <h2>Skal du vurdere sikret lån i stedet?</h2>
        <p>Hvis du har bolig med tilstrekkelig egenkapital, kan <Link href={"/lan-med-sikkerhet"}>lån med sikkerhet i bolig</Link> gi 2–4% lavere rente. Dette utgjør 20 000–40 000 kroner spart over lånets levetid. Vurder dette før du velger usikret lån.</p>
      </div>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/lan-200000" />
    </div>
  )
}
