import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getTopProviders } from '@/data/loans'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Lån etter slettet betalingsanmerkning — Dine muligheter i 2026',
  description: 'Betalingsanmerkningen er endelig slettet. Nå lurer du på om du kan få lån igjen. Svaret er ja — men det er noen ting du bør vite først.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-etter-slettet-betalingsanmerkning' },
}

const faqs = [
  { q: 'Kan man få lån rett etter slettet betalingsanmerkning?', a: 'Ja, i prinsippet kan du søke lån med en gang anmerkningen er slettet. Men noen banker har interne regler om karantenetid, typisk 3-12 måneder. Lånemeglere som Zensum og Lendo er gode valg fordi de sender søknaden til mange banker samtidig.' },
  { q: 'Hvor lang tid tar det å slette en betalingsanmerkning?', a: 'Anmerkningen slettes automatisk 4 år etter registrering. Betaler du kravet, slettes den typisk 1-2 måneder etterpå. Send dokumentasjon på betaling til kredittopplysningsbyrået for raskere behandling.' },
  { q: 'Får man like gode vilkår som før anmerkningen?', a: 'Ikke nødvendigvis med en gang. Noen banker vekter historikken din, og en nylig slettet anmerkning kan gi noe høyere rente. Men etter 6-12 måneder uten anmerkninger normaliserer vilkårene seg.' },
]

export default function LanEtterSlettetBetalingsanmerkning() {
  const topProviders = getTopProviders(8)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Lån med betalingsanmerkning', url: '/lan-med-betalingsanmerkning' }, { name: 'Etter slettet anmerkning', url: '/lan-etter-slettet-betalingsanmerkning' }])) }} />

      <Breadcrumb items={[{ name: 'Lån med betalingsanmerkning', href: '/lan-med-betalingsanmerkning' }, { name: 'Etter slettet anmerkning' }]} />
      <AffiliateDisclaimer />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Lån etter slettet betalingsanmerkning</h1>

      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        Gratulerer! Anmerkningen er borte. Det er en milepæl. Nå handler det om å gjøre de smarte valgene fremover — og det starter med å forstå hva bankene faktisk ser.
      </p>

      <div className="prose prose-lg max-w-none mb-8">
        <h2>Det bankene ser etter anmerkningen er borte</h2>
        <p>
          Når betalingsanmerkningen slettes fra kredittregisteret, forsvinner den fra den offentlige oversikten. Det betyr at nye långivere teknisk sett ikke ser den når de gjør kredittsjekk.
        </p>
        <p>
          Men — og dette er viktig — <strong>noen banker har lengre hukommelse enn andre</strong>. Banker du tidligere har hatt lån hos, eller som har sjekket kreditten din mens anmerkningen sto, kan ha intern historikk. Det varierer fra bank til bank.
        </p>

        <h2>Praktiske tips for å søke lån etter slettet anmerkning</h2>

        <h3>Bruk en lånemegler</h3>
        <p>
          Dette er gullstandarden etter slettet anmerkning. En lånemegler som Zensum, Lendo eller Sambla sender søknaden din til opptil 25 banker. Noen av disse bankene vil ha intern historikk, andre ikke. Ved å nå mange samtidig øker du sjansen for å finne en bank som vurderer deg på nåværende situasjon.
        </p>

        <h3>Vent litt om du kan</h3>
        <p>
          Har du ikke hastverk, vent gjerne 3-6 måneder etter slettingen. I denne perioden bygger du «ren» kreditthistorikk som styrker profilen din. Betal alle regninger i tide, hold kredittkortforbruket lavt, og unngå å ta opp ny gjeld.
        </p>

        <h3>Sjekk kredittrapporten din</h3>
        <p>
          Før du søker, bestill gratis kredittrapport fra Experian og Bisnode. Verifiser at anmerkningen faktisk er slettet fra begge registrene. Det hender at den forsvinner fra ett register før det andre.
        </p>

        <h2>Forventning vs. virkelighet</h2>
        <p>
          Noen forventer å få nøyaktig samme vilkår som før anmerkningen. Sannheten er at du kanskje får litt høyere rente de første 6-12 månedene, spesielt hos banker som bruker historisk data tungt i sine modeller.
        </p>
        <p>
          Typisk scenario: Du fikk 8,9% rente før anmerkningen. Rett etter sletting kan du forvente 10-14% hos de bankene som godkjenner deg. Etter 6-12 måneder med plettefri betalingshistorikk, kan du refinansiere til bedre rente.
        </p>

        <h2>Slik bygger du opp kreditten igjen</h2>
        <ol>
          <li><strong>Start med ett lite lån</strong> — gjerne 20-50 000 kr som du betaler punktlig</li>
          <li><strong>Få et kredittkort</strong> — bruk det til små kjøp og betal fullt hver måned</li>
          <li><strong>Aldri bruk mer enn 30% av kredittrammen</strong> — dette hjelper kredittscoren</li>
          <li><strong>Automatiser alle betalinger</strong> — aldri betal noe for sent igjen</li>
          <li><strong>Etter 6-12 måneder:</strong> søk refinansiering for å få ned renten</li>
        </ol>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Anbefalte långivere etter slettet anmerkning</h2>
        <p className="text-gray-500 mb-4">Disse bankene og meglerne er gode utgangspunkt for å søke lån etter at anmerkningen er fjernet.</p>
        <div className="space-y-4">
          {topProviders.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks exclude="/lan-etter-slettet-betalingsanmerkning" groups={['betalingsanmerkning', 'forbrukslan']} />
    </div>
  )
}
