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
  title: 'Lån 300 000 kr | Beste forbrukslån 2026 — Sammenlign renter',
  description: 'Trenger du å låne 300 000 kroner? Sammenlign de beste forbrukslånene. Renter fra 5,9%, gode vilkår hos flere norske banker. Søk gratis hos flere samtidig.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-300000' },
}

const AMOUNT = 300000
const MONTHLY_3Y = Math.round(AMOUNT * 1.15 / 36) // ~9,583 kr
const MONTHLY_5Y = Math.round(AMOUNT * 1.25 / 60) // ~6,250 kr
const MONTHLY_7Y = Math.round(AMOUNT * 1.35 / 84) // ~4,821 kr
const MONTHLY_10Y = Math.round(AMOUNT * 1.45 / 120) // ~3,625 kr
const TOTAL_3Y_COST = Math.round(AMOUNT * 0.15)
const TOTAL_5Y_COST = Math.round(AMOUNT * 0.25)
const TOTAL_7Y_COST = Math.round(AMOUNT * 0.35)
const TOTAL_10Y_COST = Math.round(AMOUNT * 0.45)

const faqs = [
  { q: `Hva koster et lån på ${AMOUNT.toLocaleString('no-NO')} kr?`, a: `Ved 9,9% effektiv rente over 5 år betaler du rundt ${MONTHLY_5Y.toLocaleString('no-NO')} kr per måned. Total kostnad blir ca. ${TOTAL_5Y_COST.toLocaleString('no-NO')} kr i renter. Korter du til 3 år, stiger månedlig betaling til ca. ${MONTHLY_3Y.toLocaleString('no-NO')} kr, men total rentekostnad faller til ca. ${TOTAL_3Y_COST.toLocaleString('no-NO')} kr.` },
  { q: 'Hvem kan få lån på 300 000 kr?', a: 'Du må være over 18 år, ha fast inntekt, og være folkeregistrert i Norge. For et lån på 300 000 kroner krever de fleste banker minimumsinntekt rundt 250 000–300 000 kr i året. Enkelte banker tilbyr også lån mot medlåntaker (kausjonist). Du må ikke ha betalingsanmerkninger.' },
  { q: 'Kan jeg få 10 år nedbetalingstid?', a: 'Ja, flere banker tilbyr opptil 10 år nedbetalingstid for større lån. Men husk at jo lengre løpetid, desto totalt mer rente betaler du. En 10-årig nedbetalingstid gir lav månedlig belastning (~3 625 kr/mnd) men betydelig høyere total kostnad (~135 000 kr i renter).' },
  { q: 'Hvor fort får jeg pengene?', a: 'Digitale banker gir ofte svar samme dag. Utbetaling skjer vanligvis innen 1–5 virkedager etter godkjent søknad. For et lån på 300 000 kr kan bankene gjennomføre ekstra sikkerhetskontroll.' },
  { q: 'Bør jeg velge med eller uten sikkerhet?', a: 'Usikrede lån (forbrukslån) har høyere rente men ingen risiko for å miste eiendeler. Sikrede lån (boliglån/boligkreditt) har lavere rente men krever pant i bolig. Les mer om <Link href={\"/lan-med-sikkerhet\">lån med sikkerhet her</Link>.' },
]

export default function Lan300000() {
  const providers = getUnsecuredProviders()
    .filter(p => p.maxAmount && p.maxAmount >= AMOUNT)
    .sort((a, b) => (a.minRate || 99) - (b.minRate || 99))
    .slice(0, 8)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Lån 300 000 kr' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Lån {AMOUNT.toLocaleString('no-NO')} kr — De beste forbrukslånene i 2026</h1>
      <p className="text-lg text-text-secondary mb-8">Trenger du {AMOUNT.toLocaleString('no-NO')} kroner? Dette er et av de mest populære større lånebeløpene — perfekt for refinansiering, bilkjøp eller omfattende oppussing. Sammenlign renter og vilkår blant norske banker.</p>

      {/* Quick calc box */}
      <div className="fjord-card p-6 mb-8 border-l-4" style={{ borderLeftColor: '#005f2e' }}>
        <h2 className="text-xl font-bold text-text-primary mb-4">Hva koster det å låne {AMOUNT.toLocaleString('no-NO')} kr?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">Over 3 år (36 mnd)</div>
            <div className="text-xl font-bold text-text-primary">ca. {MONTHLY_3Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Total rente: ~{TOTAL_3Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">Over 5 år (60 mnd)</div>
            <div className="text-xl font-bold text-text-primary">ca. {MONTHLY_5Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Total rente: ~{TOTAL_5Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">Over 7 år (84 mnd)</div>
            <div className="text-xl font-bold text-text-primary">ca. {MONTHLY_7Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Total rente: ~{TOTAL_7Y_COST.toLocaleString('no-NO')} kr</div>
          </div>
          <div className="p-4 rounded bg-[#f9f5f0]">
            <div className="text-sm text-text-secondary mb-1">Over 10 år (120 mnd)</div>
            <div className="text-xl font-bold text-text-primary">ca. {MONTHLY_10Y.toLocaleString('no-NO')} kr/mnd</div>
            <div className="text-sm text-text-muted mt-1">Total rente: ~{TOTAL_10Y_COST.toLocaleString('no-NO')} kr</div>
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
        <h2>Når passer et lån på {AMOUNT.toLocaleString('no-NO')} kr?</h2>
        <p>Et lån på tre hundre tusen kroner er et solid beløp som passer for betydelige økonomiske behov. Her er typiske situasjoner der dette beløpet er ideelt:</p>
        
        <h3>1. Refinansiering av dyr gjeld</h3>
        <p>Har du flere smålån, kredittkortgjeld eller forbrukslån med høy rente? Å samle alt i ett lån på {AMOUNT.toLocaleString('no-NO')} kr kan senke månedlige kostnader betydelig. Betaler du i dag 15–20% på én eller flere lån, kan du spare <strong>30 000–60 000 kroner</strong> i renter ved å refinansiere til lavere rente.</p>
        
        <h3>2. Bil- eller bobilkjøp</h3>
        <p>Ved kjøp av bruktbil (opp til 300–400 000 kr) er et usikret forbrukslån et fleksibelt alternativ til billån. Du slipper å stille sikkerhet i bilen, og kan selge den når du vil.</p>
        
        <h3>3. Omfattende oppussing</h3>
        <p>Kjøkken, bad, eller totalrenovering av bolig? {AMOUNT.toLocaleString('no-NO')} kr dekker de fleste mellomstore oppussingsprosjekter.</p>

        <h2>Tips før du søker lån på {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <ol>
          <li><strong>Sjekk din kredittscore først.</strong> Du får én gratis utskrift per år hos Experian. Vurder å forbedre scoren før du søker — en bedre score gir lavere rente.</li>
          <li><strong>Beregn maksimal nedbetalingstid.</strong> Lengre løpetid = lavere månedlig belastning, men du betaler mer total rente. Finn balansen som passer din økonomi.</li>
          <li><strong>Sammenlign effektiv rente, ikke nominell.</strong> En nominell rente på 6% kan ha 12% effektiv rente etter gebyrer. Sammenlign alltid <i>effektiv</i> rente.</li>
          <li><strong>Vurder lånemeglere.</strong> Zensum og Klikklån sender én søknad til 15–25 banker og lar dem konkurrere. Det er gratis for deg og gir ofte bedre tilbud enn å søke én etter én.</li>
          <li><strong>Sjekk om du trenger medlåntaker.</strong> Har du lav inntekt men god soliditet hos familie? En medlåntaker øker godkjenningsmuligheten betydelig.</li>
        </ol>

        <h2>Hvilke banker låner ut {AMOUNT.toLocaleString('no-NO')} kr?</h2>
        <p>De fleste etablerte banker og finansieringsselskap har tak opptil 500 000–600 000 kr. For {AMOUNT.toLocaleString('no-NO')} kr er godkjenningsraten høy hos disse:</p>
        <ul>
          <li><strong>Bank Norwegian:</strong> Lån opptil 500 000 kr, konkurransedyktig rente</li>
          <li><strong>Santander:</strong> Opptil 500 000 kr, solid bank med god kundeservice</li>
          <li><strong>Zensum / Klikklån:</strong> Lånemeglere som sammenligner opptil 25 banker for deg</li>
          <li><strong>Okida:</strong> Lån opptil 500 000 kr med sikkerhet i bolig</li>
        </ul>

        <h2>Sikret vs usikret lån på {AMOUNT.toLocaleString('no-NO')} kr</h2>
        <p>Ved større beløp som {AMOUNT.toLocaleString('no-NO')} kr kan det lønne seg å vurdere <Link href={"/lan-med-sikkerhet"}>lån med sikkerhet</Link>:</p>
        <table className="w-full text-sm my-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">Rentenivå</th>
              <th className="p-2 text-left">Krav</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">Forbrukslån (usikret)</td>
              <td className="p-2">8–25%</td>
              <td className="p-2">Ingen sikkerhet</td>
            </tr>
            <tr>
              <td className="p-2">Boliglån / boligkreditt</td>
              <td className="p-2">5–7%</td>
              <td className="p-2">Pant i egen bolig</td>
            </tr>
          </tbody>
        </table>
        <p>Har du egen bolig med tilstrekkelig egenkapital, kan du spare <strong>50 000–100 000 kr</strong> i renter ved å velge sikret lån.</p>
      </div>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/lan-300000" />
    </div>
  )
}
