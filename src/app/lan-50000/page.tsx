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
  title: 'Lån 50 000 kr | Beste forbrukslån 2026 — Sammenlign renter',
  description: 'Trenger du å låne 50 000 kroner? Sammenlign de beste forbrukslånene. Renter fra 5,9%, svartid 1-2 dager. Søk gratis hos flere banker samtidig.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-50000' },
}

const AMOUNT = 50000
const MONTHLY_3Y = Math.round(AMOUNT * 1.15 / 36) // ~1,597 kr
const MONTHLY_5Y = Math.round(AMOUNT * 1.25 / 60) // ~1,042 kr
const TOTAL_3Y_COST = Math.round(AMOUNT * 0.15)
const TOTAL_5Y_COST = Math.round(AMOUNT * 0.25)

const faqs = [
  { q: `Hva koster et lån på ${AMOUNT.toLocaleString('no-NO')} kr?`, a: `Ved 9,9% effektiv rente over 5 år betaler du rundt ${MONTHLY_5Y.toLocaleString('no-NO')} kr per måned. Total kostnad blir ca. ${TOTAL_5Y_COST.toLocaleString('no-NO')} kr i renter. Korter du til 3 år, stiger månedlig betaling til ca. ${MONTHLY_3Y.toLocaleString('no-NO')} kr, men total rentekostnad faller til ca. ${TOTAL_3Y_COST.toLocaleString('no-NO')} kr.` },
  { q: 'Hvem kan få lån på 50 000 kr?', a: 'Du må være over 18 år, ha fast inntekt (minimum ca. 120 000–200 000 kr/år), og være folkeregistrert i Norge. De fleste banker krever også at du ikke har betalingsanmerkninger.' },
  { q: 'Hvor fort får jeg pengene?', a: 'Digitale banker som Instabank, Bank Norwegian og Thorn gir ofte svar samme dag. Utbetaling skjer vanligvis innen 1–3 virkedager etter godkjent søknad.' },
  { q: 'Kan jeg ha flere lån samtidig?', a: 'Ja, men din totale gjeldsbyrde kan ikke overstige 5x brutto årsinntekt. Bankene sjekker gjeldsregisteret før de godkjenner nye lån.' },
  { q: 'Hva er forskjellen på nominell og effektiv rente?', a: 'Nominell rente er rentesatsen alene. Effektiv rente inkluderer også etableringsgebyr, termingebyr og andre kostnader. Sammenlign alltid effektiv rente — det er det reelle prisen på lånet.' },
]

export default function Lan50000() {
  const providers = getUnsecuredProviders()
    .filter(p => p.maxAmount && p.maxAmount >= AMOUNT)
    .sort((a, b) => (a.minRate || 99) - (b.minRate || 99))
    .slice(0, 8)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Lån 50 000 kr' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Lån {AMOUNT.toLocaleString('no-NO')} kr — De beste forbrukslånene i 2026</h1>
      <p className="text-lg text-text-secondary mb-8">Trenger du {AMOUNT.toLocaleString('no-NO')} kroner? Her ser du banker som tilbyr lån i akkurat dette beløpet. Sammenlign renter, gebyrer og vilkår — søk hos flere samtidig for å få best tilbud.</p>

      {/* Quick calc box */}
      <div className="fjord-card p-6 mb-8 border-l-4" style={{ borderLeftColor: '#005f2e' }}>
        <h2 className="text-xl font-bold text-text-primary mb-4">Hva koster det å låne {AMOUNT.toLocaleString('no-NO')} kr?</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">Over 3 år (36 mnd)</div>
            <div className="text-2xl font-bold text-text-primary">ca. {MONTHLY_3Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Total rente: ~{TOTAL_3Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">Over 5 år (60 mnd)</div>
            <div className="text-2xl font-bold text-text-primary">ca. {MONTHLY_5Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Total rente: ~{TOTAL_5Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
        </div>
        <p className="text-sm text-text-muted mt-4">* Beregnet med 10% effektiv rente. Din faktiske rente kan bli høyere eller lavere avhengig av kredittscore.</p>
      </div>

      {/* Providers for this amount */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Beste forbrukslån for {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <div className="space-y-4">
          {providers.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <div className="prose prose-lg max-w-none mt-8 mb-8">
        <h2>Tips før du søker lån på {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <ol>
          <li><strong>Sjekk din kredittscore først.</strong> Du får én gratis utskrift per år hos Experian. Jo bedre score, jo lavere rente.</li>
          <li><strong>Sammenlign minst 3 banker.</strong> Spredningen i rente kan være flere prosent, noe som utgjør tusenvis av kroner over lånets løpetid.</li>
          <li><strong>Se på effektiv rente, ikke nominell.</strong> Gebyrer kan øke kostnaden betydelig selv med lav nominell rente.</li>
          <li><strong>Beregn månedlig inntekt vs. utgift.</strong> Lånet skal ikke belaste økonomien mer enn nødvendig.</li>
          <li><strong>Vurder om du trenger <Link href={"/refinansiering"}>refinansiering</Link> i stedet.</strong> Har du eksisterende dyr gjeld, kan det lønne seg å samle alt i ett lån.</li>
        </ol>

        <h2>Hvilke banker låner ut {AMOUNT.toLocaleString('no-NO')} kr?</h2>
        <p>De fleste norske banker har {AMOUNT.toLocaleString('no-NO')}–600 000 kr som standard låneområde for usikrede forbrukslån. Blant våre samarbeidspartnere finner du:</p>
        <ul>
          <li><strong>Bank Norwegian:</strong> Renter fra 7,9%, høy godkjenningsrate</li>
          <li><strong>Santander:</strong> Solid bank, gode betingelser</li>
          <li><strong>Zensum / Klikklån:</strong> Lånemeglere som sammenligner flere banker for deg</li>
          <li><strong>Thorn:</strong> Rask behandling, fleksible vilkår</li>
        </ul>

        <h2>Populære bruksområder for {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <ul>
          <li>Oppussing av bad eller kjøkken</li>
          <li>Refinansiering av <Link href={"/smalan"}>dyre smålån</Link> eller kredittkortgjeld</li>
          <li>Kjøp av nytt kjøkken eller hvitevarer</li>
          <li>Uforutsette utgifter (bilreparasjon, helse)</li>
          <li><Link href={"/lan-til-forerkort"}>Førerkort</Link> eller kurs</li>
        </ul>

        <h2>Kan jeg få lån med betalingsanmerkning?</h2>
        <p>Med betalingsanmerkning blir det vanskeligere, men ikke umulig. Noen banker vurderer søknader fra personer med gamle anmerkninger dersom du har tilstrekkelig inntekt. <Link href={"/lan-med-betalingsanmerkning"}>Les mer om betalingsanmerkning og lån her</Link>.</p>

        <h2>Skal du refinansiere?</h2>
        <p>Har du allerede lån med høy rente? {AMOUNT.toLocaleString('no-NO')} kr kan være perfekt for å <Link href={"/refinansiering-uten-sikkerhet"}>samle gjeld</Link> og få bedre vilkår. Du kan spare 10 000–20 000 kroner i rente over lånets løpetid.</p>
      </div>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/lan-50000" />
    </div>
  )
}
