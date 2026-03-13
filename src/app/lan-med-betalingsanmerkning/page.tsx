import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getProvidersForRemarks, loanProviders } from '@/data/loans'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Lån med betalingsanmerkning 2026 — Dine muligheter',
  description: 'Har du betalingsanmerkning og trenger lån? Vi viser hvilke långivere som faktisk vurderer søknaden din, og hva du kan gjøre for å øke sjansene.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-med-betalingsanmerkning' },
}

const faqs = [
  { q: 'Kan man få lån med betalingsanmerkning?', a: 'Ja, men det er vanskeligere. De fleste vanlige banker avslår automatisk. Enkelte långivere — spesielt de som tilbyr lån med sikkerhet i bolig — vil likevel vurdere søknaden din. Okida, Varde Finans og Heimfinans er eksempler på aktører som gjør dette.' },
  { q: 'Hva er en betalingsanmerkning?', a: 'En betalingsanmerkning er en registrering i kredittopplysningsregisteret (f.eks. Experian eller Bisnode) som viser at du har ubetalt gjeld. Den dukker opp når en inkassosak ikke blir betalt innen fristen, eller ved en rettslig avgjørelse. Anmerkningen slettes normalt 4 år etter at den ble registrert — eller tidligere hvis gjelden betales.' },
  { q: 'Hvor lenge varer en betalingsanmerkning?', a: 'En betalingsanmerkning varer normalt i 4 år fra registreringsdato. Betaler du gjelden, kan den slettes raskere — typisk 1-2 måneder etter at kravet er oppgjort. Det lønner seg alltid å betale hvis du kan.' },
  { q: 'Hva er forskjellen på betalingsanmerkning og inkasso?', a: 'Inkasso er selve inndrivingsprosessen — at et inkassobyrå prøver å kreve inn gjeld. En betalingsanmerkning kommer som en konsekvens av uoppgjort inkasso, vanligvis etter at saken har gått videre til rettslig inndrivelse. Du kan altså ha inkassosaker uten å ha betalingsanmerkning.' },
  { q: 'Hjelper det å stille sikkerhet i bolig?', a: 'Absolutt. Når du stiller pant i boligen, reduserer du risikoen for långiveren betraktelig. Derfor er det flere aktører som tilbyr lån med sikkerhet selv til søkere med betalingsanmerkninger. Renten blir også lavere enn ved usikret lån.' },
]

export default function LanMedBetalingsanmerkning() {
  const remarkProviders = getProvidersForRemarks()
  const allForComparison = [...remarkProviders, ...loanProviders.filter(p => !p.acceptsPaymentRemarks).slice(0, 3)]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Lån med betalingsanmerkning', url: '/lan-med-betalingsanmerkning' }])) }} />

      <Breadcrumb items={[{ name: 'Lån med betalingsanmerkning' }]} />
      <AffiliateDisclaimer />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Lån med betalingsanmerkning i 2026</h1>
      
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        Du har fått en betalingsanmerkning. Det føles som en dør som smeller igjen. Men vet du hva? Det finnes fortsatt muligheter — du må bare vite hvor du skal lete.
      </p>

      <div className="prose prose-lg max-w-none mb-8">
        <h2>Sannheten om lån med betalingsanmerkning</h2>
        <p>
          La oss være ærlige med deg: de aller fleste bankene sier nei. Bank Norwegian, Santander, Komplett Bank — søknaden din blir automatisk avvist i det kredittsjekken avslører anmerkningen. Sånn er det bare.
        </p>
        <p>
          Men det betyr ikke at alle dører er lukket. Noen långivere har bygd hele forretningsmodellen sin rundt å hjelpe folk i akkurat din situasjon. Spesielt hvis du eier bolig med nok egenkapital.
        </p>

        <h2>Hvem gir lån med betalingsanmerkning?</h2>
        <p>
          Det finnes to hovedkategorier: De som tilbyr <strong>lån med sikkerhet i bolig</strong> til personer med anmerkninger, og de svært få som vurderer <strong>usikrede lån</strong> på individuell basis.
        </p>
        <p>
          Lån med sikkerhet er klart den vanligste veien. Når boligen din fungerer som pant, synker risikoen for banken dramatisk — og da åpner mulighetene seg.
        </p>

        <h3>Slik fungerer det i praksis</h3>
        <p>
          Sier du har en bolig verdt 3 millioner kroner og en boliggjeld på 2 millioner. Da har du 1 million i frigjort egenkapital. Mange långivere vil vurdere å gi deg lån med sikkerhet i denne egenkapitalen — selv med anmerkning.
        </p>
        <p>
          Renten vil typisk ligge høyere enn for en låntaker uten anmerkninger, kanskje 8-14 % i stedet for 5-8 %. Men sammenlignet med forbrukslån til 20-25 % eller kredittkortgjeld, er det fortsatt en betydelig besparelse.
        </p>
      </div>

      {/* Provider list */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Långivere som vurderer betalingsanmerkninger</h2>
        <p className="text-gray-500 mb-4">Disse aktørene har bekreftet at de vurderer søknader fra personer med betalingsanmerkninger.</p>
        <div className="space-y-4">
          {remarkProviders.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <div className="prose prose-lg max-w-none mb-8">
        <h2>Dine alternativer — steg for steg</h2>
        
        <h3>1. Refinansiering med sikkerhet i bolig</h3>
        <p>
          Den absolutt beste løsningen hvis du eier bolig. Ved å ta opp et lån med pant i boligen kan du samle dyr gjeld, inkludert inkassokrav, til ett lån med lavere rente. Aktører som <strong>Okida</strong>, <strong>Varde Finans</strong> og <strong>Heimfinans</strong> spesialiserer seg på dette.
        </p>
        <p>
          Fordelen er dobbel: du får lavere rente OG du kan bruke pengene til å gjøre opp inkassokravene — som igjen fjerner betalingsanmerkningen raskere.
        </p>

        <h3>2. Smålån med betalingsanmerkning</h3>
        <p>
          Noen få aktører tilbyr smålån selv med anmerkninger, men forvent høy rente. Ferratum er et eksempel. Beløpene er typisk under 50 000 kr, og renten kan fort havne over 20-30 %.
        </p>
        <p>
          Vår anbefaling? Bruk dette kun som siste utvei for akutte behov. <a href="/smalan-med-betalingsanmerkning">Les mer om smålån med betalingsanmerkning.</a>
        </p>

        <h3>3. Betal ned anmerkningen først</h3>
        <p>
          Hvis du kan, er det smarteste å betale ned gjelden som forårsaket anmerkningen. Når kravet er oppgjort, slettes anmerkningen typisk innen 1-2 måneder. Etter det åpner alle vanlige lånemuligheter seg igjen.
        </p>
        <p>
          <a href="/lan-etter-slettet-betalingsanmerkning">Les mer om lån etter slettet betalingsanmerkning.</a>
        </p>

        <h2>Hva du bør passe deg for</h2>
        <p>
          Når du er i en presset situasjon, er det lett å bli fristet av aktører som lover «garantert lån» eller «lån til alle». Vær skeptisk. Seriøse långivere gjennomfører alltid en kredittvurdering — det er lovpålagt.
        </p>
        <p>
          Unngå å søke hos mange banker samtidig, for hver søknad genererer et kredittsjekkoppslag som er synlig for andre långivere. Mange oppslag på kort tid ser desperat ut og kan gjøre det enda vanskeligere å få lån.
        </p>

        <h2>Tips for å styrke søknaden din</h2>
        <ul>
          <li><strong>Dokumenter inntekten din</strong> — fast jobb over tid gir trygghet</li>
          <li><strong>Vis at du har kontroll</strong> — regelmessige betalinger på andre forpliktelser teller</li>
          <li><strong>Start med å gjøre opp småkrav</strong> — hver fjernet anmerkning hjelper</li>
          <li><strong>Tilby sikkerhet</strong> — egenkapital i bolig er nøkkelen</li>
          <li><strong>Vær ærlig i søknaden</strong> — skjulte forhold oppdages uansett</li>
        </ul>
      </div>

      <FAQ items={faqs} />
      <InternalLinks exclude="/lan-med-betalingsanmerkning" groups={['betalingsanmerkning', 'refinansiering']} />
    </div>
  )
}
