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
  title: 'Lån 600 000 kr | Beste forbrukslån 2026 — Øvre grense',
  description: 'Trenger du å låne 600 000 kroner? Dette er maks for de fleste forbrukslån. Sammenlign banker som tilbyr dette beløpet. Renter fra 5,9%.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-600000' },
}

const AMOUNT = 600000
const MONTHLY_10Y = Math.round(AMOUNT * 1.50 / 120) // ~7,500 kr
const MONTHLY_15Y = Math.round(AMOUNT * 1.75 / 180) // ~5,833 kr
const MONTHLY_20Y = Math.round(AMOUNT * 2.00 / 240) // ~5,000 kr
const TOTAL_10Y_COST = Math.round(AMOUNT * 0.50)
const TOTAL_15Y_COST = Math.round(AMOUNT * 0.75)
const TOTAL_20Y_COST = Math.round(AMOUNT * 1.00)

const faqs = [
  { q: `Hva koster et lån på ${AMOUNT.toLocaleString('no-NO')} kr?`, a: `Ved 9,9% effektiv rente over 15 år betaler du rundt ${MONTHLY_15Y.toLocaleString('no-NO')} kr per måned. Total kostnad blir ca. ${TOTAL_15Y_COST.toLocaleString('no-NO')} kr i renter. 20 år gir ${MONTHLY_20Y.toLocaleString('no-NO')} kr/mnd, men total rente øker til ${TOTAL_20Y_COST.toLocaleString('no-NO')} kr.` },
  { q: 'Hvem kan få lån på 600 000 kr?', a: 'Du må ha svært god økonomi: fast inntekt på minimum 600 000 kr/år, ingen betalingsanmerkninger, lav gjeldsgrad, og god betalingshistorikk. Bankene gjør svært grundig vurdering ved dette beløpet.' },
  { q: 'Er 600 000 kr maks for forbrukslån?', a: 'Ja, de fleste norske banker har 500 000–600 000 kr som absolutt maksgrense for usikrede forbrukslån. Trenger du mer, må du vurdere sikret lån med pant i bolig.' },
  { q: 'Hvilken nedbetalingstid er best?', a: '15 år er ofte det beste kompromisset mellom månedlig belastning og totalkostnad. 20 år gir lavere månedlig, men du betaler mye mer totalt.' },
  { q: 'Kan jeg få lavere rente med sikkerhet?', a: 'Ja, med pant i bolig kan du få betydelig lavere rente. Vurder om sikret lån passer ditt behov bedre enn usikret forbrukslån.' },
]

export default function Lan600000() {
  const providers = getUnsecuredProviders()
    .filter(p => p.maxAmount && p.maxAmount >= AMOUNT)
    .sort((a, b) => (a.minRate || 99) - (b.minRate || 99))
    .slice(0, 8)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Lån 600 000 kr' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Lån {AMOUNT.toLocaleString('no-NO')} kr — Maksbeløp for forbrukslån</h1>
      <p className="text-lg text-text-secondary mb-8">{AMOUNT.toLocaleString('no-NO')} kroner er det høyeste beløpet de fleste banker tilbyr på usikret forbrukslån. Krever svært god økonomi. Sammenlign de få bankene som har så høyt tak.</p>

      {/* Quick calc box */}
      <div className="fjord-card p-6 mb-8 border-l-4" style={{ borderLeftColor: '#005f2e' }}>
        <h2 className="text-xl font-bold text-text-primary mb-4">Hva koster det å låne {AMOUNT.toLocaleString('no-NO')} kr?</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">10 år (120 mnd)</div>
            <div className="text-xl font-bold text-text-primary">~{MONTHLY_10Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Rente: ~{TOTAL_10Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
          <div className="p-4 rounded bg-[#f9f5f0] border-2 border-[#005f2e]">
            <div className="text-sm text-text-secondary mb-1">15 år (180 mnd) — Anbefalt</div>
            <div className="text-xl font-bold" style={{color: '#005f2e'}}>~{MONTHLY_15Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Rente: ~{TOTAL_15Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">20 år (240 mnd)</div>
            <div className="text-xl font-bold text-text-primary">~{MONTHLY_20Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Rente: ~{TOTAL_20Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
        </div>
        <p className="text-sm text-text-muted mt-4">* Beregnet med 10% effektiv rente. Din faktiske rente avhenger av kredittvurdering.</p>
      </div>

      {/* Warning box */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8">
        <p className="text-orange-800 font-medium">⚠️ Høyt beløp krever solid økonomi</p>
        <p className="text-orange-700 text-sm mt-1">Bankene stiller svært strenge krav ved lån på {AMOUNT.toLocaleString('no-NO')} kr. Du må ha høy inntekt, lav gjeldsgrad, og eksemplarisk betalingshistorikk.</p>
      </div>

      {/* Providers */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Banker som tilbyr {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <p className="text-text-secondary mb-4">Kun noen få banker har {AMOUNT.toLocaleString('no-NO')} kr som maksgrense. De fleste stopper på 400 000–500 000 kr.</p>
        <div className="space-y-4">
          {providers.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <div className="prose prose-lg max-w-none mt-8 mb-8">
        <h2>Når trenger man {AMOUNT.toLocaleString('no-NO')} kr?</h2>
        <ul>
          <li><strong>Større boligprosjekt</strong> — omfattende renovering, påbygg, eller nytt kjøkken/bad</li>
          <li><strong>Kjøp av annen bolig</strong> — eiendomsinvestering eller hytte</li>
          <li><strong>Refinansiering av stor gjeld</strong> — samle <Link href={"/samlelan"}>mange store lån</Link> til ett</li>
          <li><strong>Næringsetablering</strong> — oppstart av selskap med betydelig kapitalbehov</li>
          <li><strong>Bil eller båt</strong> — luksuriøse kjøretøy uten tradisjonelt pant</li>
        </ul>

        <h2>Vurder sikret lån som alternativ</h2>
        <p>Ved {AMOUNT.toLocaleString('no-NO')} kr kan det lønne seg å vurdere <Link href={"/lan-med-sikkerhet"}>sikret lån</Link> med pant i bolig. Du får som regel 2–4% lavere rente, noe som utgjør 60 000–120 000 kroner spart over lånets levetid.</p>

        <h2>Krav til deg som søker</h2>
        <ul>
          <li>Årsinntekt på minst 600 000 kr (helst 700 000+)</li>
          <li>Ingen betalingsanmerkninger siste 3–5 år</li>
          <li>Lav gjeldsgrad (under 3x bruttoinntekt totalt)</li>
          <li>Fast ansettelse eller solid næringsinntekt</li>
          <li>Norsk statsborger eller fast bosatt i Norge i minst 3 år</li>
        </ul>

        <h2>Hva koster det egentlig?</h2>
        <p>Med {TOTAL_15Y_COST.toLocaleString('no-NO')} kr i rente over 15 år, blir din totale tilbakebetaling {Math.round(AMOUNT + TOTAL_15Y_COST).toLocaleString('no-NO')} kr. Med skattefradrag (22%) får du {Math.round(TOTAL_15Y_COST * 0.22).toLocaleString('no-NO')} kr tilbake, slik at reell kostnad blir {Math.round(TOTAL_15Y_COST * 0.78).toLocaleString('no-NO')} kr.</p>
      </div>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/lan-600000" />
    </div>
  )
}
