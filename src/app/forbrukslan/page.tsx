import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Calculator from '@/components/Calculator'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getTopProviders } from '@/data/loans'
import { faqSchema } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Forbrukslån 2026 — Alt du trenger å vite',
  description: 'Komplett guide til forbrukslån i Norge. Renter, vilkår, krav, tips og sammenligning av de beste bankene. Oppdatert mars 2026.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/forbrukslan' },
}

const faqs = [
  { q: 'Hva er nominell vs. effektiv rente?', a: 'Nominell rente er den rene rentesatsen. Effektiv rente inkluderer alle gebyrer og kostnader og gir et riktigere bilde av hva lånet koster. Bruk alltid effektiv rente når du sammenligner tilbud.' },
  { q: 'Hvor fort får jeg pengene?', a: 'De fleste digitale banker utbetaler innen 1-3 virkedager etter godkjent søknad. Noen, som Bank Norwegian, kan utbetale samme dag. Via lånemeglere tar det gjerne 2-5 virkedager totalt.' },
  { q: 'Kan jeg betale tilbake tidlig?', a: 'Ja. Alle forbrukslån i Norge kan innfris når som helst uten ekstra gebyr. Det er lovfestet. Noen banker krever maks 30 dagers ekstra rente ved tidlig innfrielse.' },
  { q: 'Hva skjer om jeg ikke klarer å betale?', a: 'Kontakt banken umiddelbart. De fleste banker tilbyr betalingsutsettelse eller restrukturering. Unngå å la det gå til inkasso — da begynner det å rulle med gebyrer og potensielt betalingsanmerkning.' },
  { q: 'Påvirker forbrukslån boliglånet mitt?', a: 'Ja. Alle lån registreres i gjeldsregisteret og påvirker bankens vurdering av din totale gjeldsbyrde. Et forbrukslån på 200 000 kr kan redusere boliglånsrammen din med 1-2 millioner.' },
]

export default function Forbrukslan() {
  const topProviders = getTopProviders(10)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Forbrukslån' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Forbrukslån i Norge — Den komplette guiden for 2026</h1>
      <p className="text-lg text-text-secondary mb-8">Alt du trenger å vite om forbrukslån. Fra hvordan det fungerer, til hva det koster, til hvilke banker som gir best vilkår. Rett på sak, uten tåkeprat.</p>

      <Calculator />

      <div className="prose prose-lg max-w-none mt-8 mb-8">
        <h2>Hva er et forbrukslån, egentlig?</h2>
        <p>
          Et forbrukslån er et lån uten sikkerhet. Du trenger ikke stille bolig, bil eller noe annet som pant. Banken gir deg penger basert på tilliten til at du kan betale tilbake — og den tilliten koster. Derfor er renten høyere enn på boliglån.
        </p>
        <p>
          Typisk kan du låne fra 10 000 til 600 000 kroner, med nedbetalingstid fra 1 til 15 år. Renten varierer fra rundt 7% for de med best kredittscore, opp til 24% for de med svakere profil.
        </p>
        <p>
          Du kan bruke pengene til hva du vil. Oppussing av badet, samle dyre kredittkortgjeld, fikse bilen, eller dekke en uventet regning. Banken spør sjelden hva pengene skal brukes til.
        </p>

        <h2>Hva koster et forbrukslån?</h2>
        <p>
          La oss ta et konkret eksempel. Du låner 200 000 kr til 9,9% nominell rente over 5 år (60 måneder):
        </p>
        <ul>
          <li><strong>Månedlig betaling:</strong> ca. 4 249 kr</li>
          <li><strong>Total tilbakebetaling:</strong> ca. 254 940 kr</li>
          <li><strong>Rentekostnad:</strong> ca. 54 940 kr</li>
        </ul>
        <p>
          Altså betaler du nesten 55 000 kr bare i renter. Korter du ned til 3 år, synker rentekostnaden til ca. 32 000 kr — men da stiger den månedlige betalingen til ca. 6 450 kr. Det er en avveining mellom månedlig belastning og totalkostnad.
        </p>

        <h2>Nominell vs. effektiv rente — hva betyr det?</h2>
        <p>
          Nominell rente er selve rentesatsen. Effektiv rente inkluderer <em>alle</em> kostnader — etableringsgebyr, termingebyr, og andre kostnader. Det er den effektive renten du bør sammenligne, for den forteller hva lånet faktisk koster.
        </p>
        <p>
          Eksempel: En bank tilbyr 8,9% nominell rente, men har 900 kr i etableringsgebyr og 45 kr per termin. Den effektive renten kan da bli 10,2%. En annen bank tilbyr 9,5% nominell men uten gebyrer — effektiv rente 9,5%. Den andre banken er faktisk billigere.
        </p>

        <h2>Hvem kan få forbrukslån?</h2>
        <p>Grunnkravene er de samme hos de fleste banker:</p>
        <ul>
          <li><strong>Alder:</strong> Minimum 18 år (noen krever 20 eller 23)</li>
          <li><strong>Inntekt:</strong> Fast inntekt, typisk minimum 120 000 – 200 000 kr/år</li>
          <li><strong>Bosted:</strong> Folkeregistrert i Norge</li>
          <li><strong>Kredittscore:</strong> Ingen betalingsanmerkninger (med noen <Link href="/lan-med-betalingsanmerkning">unntak</Link>)</li>
          <li><strong>Gjeldsbyrde:</strong> Total gjeld bør ikke overstige 5x brutto årsinntekt</li>
        </ul>

        <h2>Slik sammenligner du forbrukslån riktig</h2>
        <ol>
          <li><strong>Se på effektiv rente</strong> — ikke nominell. Effektiv rente er ditt reelle sammenligningsgrunnlag.</li>
          <li><strong>Sjekk gebyrer.</strong> Etableringsgebyr (engangs) og termingebyr (per betaling) varierer mye.</li>
          <li><strong>Fleksibilitet.</strong> Kan du utsette betalinger? Endre nedbetalingsplan? Innfri uten gebyr?</li>
          <li><strong>Bruk lånemeglere.</strong> Tjenester som Zensum, Lendo og Sambla sender søknaden til mange banker og lar bankene konkurrere om deg.</li>
          <li><strong>Ikke ta det første tilbudet.</strong> Søk hos minst 2-3 forskjellige for å se spredningen.</li>
        </ol>

        <h2>Forbrukslån vs. kredittkort vs. boliglån</h2>
        <p>
          Forbrukslån er et mellomprodukt. Dyrere enn boliglån (der sikkerhet gir lav rente), men billigere enn kredittkort (som gjerne har 20-25% rente på rullerende saldo).
        </p>
        <p>
          Tommelfingerregel: Trenger du over 50 000 kr, er forbrukslån nesten alltid billigere enn kredittkort. Under 50 000 kr kan det lønne seg med kredittkort du betaler ned innen 30-60 dager (da slipper du renter).
        </p>

        <h2>Når bør du IKKE ta forbrukslån?</h2>
        <ul>
          <li>For å dekke løpende utgifter du egentlig ikke har råd til</li>
          <li>For å betale ned annen gjeld uten å endre forbruksmønsteret</li>
          <li>Hvis gjelden din allerede er over 3x bruttoinntekt</li>
          <li>For investeringer med usikkert utfall (krypto, aksjer)</li>
          <li>Når du planlegger boligkjøp innen 1-2 år (gjelden reduserer lånerammen)</li>
        </ul>

        <h2>Forbrukslån og skatt</h2>
        <p>
          Gode nyheter: Rentekostnader på forbrukslån er fradragsberettiget i selvangivelsen, akkurat som boliglånsrenter. Skattefradraget er 22% av rentekostnaden.
        </p>
        <p>
          Eksempel: Betaler du 30 000 kr i renter per år, får du 6 600 kr tilbake på skatten. Det reduserer den reelle kostnaden.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Topp 10 forbrukslån mars 2026</h2>
        <div className="space-y-4">
          {topProviders.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/forbrukslan" />
    </div>
  )
}
