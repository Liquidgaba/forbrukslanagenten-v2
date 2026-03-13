import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { loanProviders } from '@/data/loans'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Refinansiering uten sikkerhet med betalingsanmerkning 2026',
  description: 'Er refinansiering uten sikkerhet mulig med betalingsanmerkning? Vi gir deg det ærlige svaret og viser alternativene som faktisk fungerer.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/refinansiering-uten-sikkerhet-med-betalingsanmerkning' },
}

const faqs = [
  { q: 'Kan man refinansiere uten sikkerhet med betalingsanmerkning?', a: 'I praksis er dette svært vanskelig. De aller fleste bankene avslår automatisk usikret refinansiering ved betalingsanmerkninger. Det beste alternativet er å refinansiere med sikkerhet i bolig, som flere aktører tilbyr.' },
  { q: 'Hva er alternativene?', a: 'Refinansiering med sikkerhet i bolig er det realistiske alternativet. Har du egenkapital i boligen, kan aktører som Okida, Varde Finans og Scoopr hjelpe deg — selv med anmerkninger. Renten blir lavere enn på usikrede lån.' },
  { q: 'Hvor mye kan jeg spare på refinansiering?', a: 'Hvis du har 300 000 kr i kredittkortgjeld til 22% rente og refinansierer til 10% med sikkerhet, sparer du rundt 36 000 kr i renter per år. Over 5 år er det nesten 180 000 kr.' },
]

export default function RefinansieringUtenSikkerhetMedBetalingsanmerkning() {
  const relevantProviders = loanProviders.filter(p => 
    p.acceptsPaymentRemarks || p.loanType === 'refinancing'
  ).sort((a, b) => (b.epc || 0) - (a.epc || 0))

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Refinansiering', url: '/refinansiering' }, { name: 'Uten sikkerhet med betalingsanmerkning', url: '/refinansiering-uten-sikkerhet-med-betalingsanmerkning' }])) }} />

      <Breadcrumb items={[{ name: 'Refinansiering', href: '/refinansiering' }, { name: 'Uten sikkerhet med betalingsanmerkning' }]} />
      <AffiliateDisclaimer />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Refinansiering uten sikkerhet med betalingsanmerkning</h1>

      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        Du vil samle dyr gjeld til ett lån med lavere rente. Men du har en anmerkning og eier ikke bolig. Hva nå? Vi gir deg det ærlige bildet.
      </p>

      <div className="prose prose-lg max-w-none mb-8">
        <h2>Den brutale sannheten</h2>
        <p>
          Refinansiering uten sikkerhet med betalingsanmerkning er nesten umulig å få til gjennom vanlige kanaler. Punktum. Det er ingen grunn til å pakke det inn.
        </p>
        <p>
          Bankene ser det sånn: Du har allerede vist at du ikke klarer å betjene gjelden din (derav anmerkningen). Og nå vil du at de skal gi deg enda mer penger, uten noen form for sikkerhet? Risikoen er for høy for de fleste långivere.
        </p>

        <h2>Men — det finnes unntak</h2>
        <p>
          I svært sjeldne tilfeller kan en lånemegler finne en løsning, spesielt hvis:
        </p>
        <ul>
          <li>Anmerkningen er liten (under 10 000 kr) og nylig oppgjort</li>
          <li>Du har stabil og god inntekt over tid</li>
          <li>Det er tydelig at anmerkningen skyldes en enkelthendelse, ikke et mønster</li>
          <li>Du kan dokumentere at resten av økonomien er under kontroll</li>
        </ul>

        <h2>Det realistiske alternativet: Sikkerhet i bolig</h2>
        <p>
          Eier du bolig — eller kan noen stille pant for deg — endrer bildet seg dramatisk. Med sikkerhet i bolig kan du refinansiere selv med anmerkninger, og renten synker fra usikret-nivå (15-25%) til et helt annet leie (5-14%).
        </p>
        <p>
          La oss ta et eksempel. Du har tre forbrukslån og kredittkortgjeld totalt 400 000 kr til snittrent 19%. Det koster deg 76 000 kr i renter per år. Refinansierer du til 10% med pant i bolig, halveres rentekostnaden til 40 000 kr. Det er 36 000 kr spart — hvert eneste år.
        </p>

        <h2>Andre veier ut av gjeldsfellen</h2>

        <h3>Gjeldsordning</h3>
        <p>
          Har du gjeld du overhodet ikke klarer å betjene? Da kan gjeldsordning gjennom namsmannen være løsningen. Det er en slags «konkurs for privatpersoner» der gjelden enten reduseres eller slettes helt etter en periode (typisk 5 år). Det er ikke lett, men det er en vei ut.
        </p>

        <h3>Kommunal gjeldsrådgivning</h3>
        <p>
          Alle kommuner i Norge er pålagt å tilby gratis økonomisk rådgivning. Disse rådgiverne kan hjelpe deg forhandle med kreditorer, sette opp budsjett, og finne løsninger du kanskje ikke visste om.
        </p>

        <h3>Betal ned anmerkningen</h3>
        <p>
          Ofte er det mest effektive å fokusere alle ressurser på å betale ned kravet som ga anmerkningen. Når den er slettet (1-2 måneder etter oppgjør), står du plutselig mye sterkere. <a href="/lan-etter-slettet-betalingsanmerkning">Les mer om muligheter etter slettet anmerkning.</a>
        </p>

        <h2>Steg-for-steg plan</h2>
        <ol>
          <li><strong>Finn ut nøyaktig hva du skylder.</strong> Be om oversikt fra kredittopplysningsbyrå (Experian, Bisnode).</li>
          <li><strong>Kontakt NAV/kommunen</strong> for gratis gjeldsrådgivning.</li>
          <li><strong>Prioriter å gjøre opp anmerkningen</strong> — betal den minste først for rask «seier».</li>
          <li><strong>Eier du bolig?</strong> Søk refinansiering med sikkerhet hos Okida, Varde Finans eller Scoopr.</li>
          <li><strong>Vent til anmerkningen er slettet</strong> og søk deretter vanlig refinansiering.</li>
        </ol>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Långivere for refinansiering (med og uten sikkerhet)</h2>
        <div className="space-y-4">
          {relevantProviders.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks exclude="/refinansiering-uten-sikkerhet-med-betalingsanmerkning" groups={['betalingsanmerkning', 'refinansiering']} />
    </div>
  )
}
