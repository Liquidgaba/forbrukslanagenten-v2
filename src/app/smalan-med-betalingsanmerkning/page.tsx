import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { loanProviders } from '@/data/loans'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Smålån med betalingsanmerkning 2026 — Realistiske muligheter',
  description: 'Trenger du smålån men har betalingsanmerkning? Vi viser hva som faktisk finnes, hvilke renter du kan forvente, og hva du bør passe deg for.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/smalan-med-betalingsanmerkning' },
}

const faqs = [
  { q: 'Kan man få smålån med betalingsanmerkning?', a: 'Det er svært begrenset. Noen få aktører vurderer søknader individuelt, men forvent høy rente (20-35%) og lave beløp (under 50 000 kr). Alternativt kan du se på lån med sikkerhet i bolig, som gir bedre vilkår selv med anmerkninger.' },
  { q: 'Hva koster et smålån med betalingsanmerkning?', a: 'Renten er typisk mellom 20 og 35 prosent, og det kommer gjerne gebyrer i tillegg. Et smålån på 20 000 kr over 12 måneder med 30% rente koster deg rundt 3 500 kr i renter og gebyrer.' },
  { q: 'Er det lurt å ta smålån med anmerkning?', a: 'Vanligvis ikke. Den høye renten gjør at du risikerer å grave deg dypere ned. Vurder heller å kontakte NAV for økonomisk rådgivning, eller se om du kan refinansiere med sikkerhet i bolig.' },
]

export default function SmalanMedBetalingsanmerkning() {
  const relevantProviders = loanProviders.filter(p => p.acceptsPaymentRemarks || p.loanType === 'smalan')

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Lån med betalingsanmerkning', url: '/lan-med-betalingsanmerkning' }, { name: 'Smålån med betalingsanmerkning', url: '/smalan-med-betalingsanmerkning' }])) }} />

      <Breadcrumb items={[{ name: 'Lån med betalingsanmerkning', href: '/lan-med-betalingsanmerkning' }, { name: 'Smålån med betalingsanmerkning' }]} />
      <AffiliateDisclaimer />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Smålån med betalingsanmerkning</h1>
      
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        Du trenger penger raskt, men har en betalingsanmerkning hengende over deg. Vi skjønner frustrasjonen. Her er det du trenger å vite — uten sukkerpynt.
      </p>

      <div className="prose prose-lg max-w-none mb-8">
        <h2>La oss snakke rett ut</h2>
        <p>
          Smålån med betalingsanmerkning er et vanskelig marked. De fleste seriøse aktører sier blankt nei. Og de som sier ja? De tar seg godt betalt for risikoen.
        </p>
        <p>
          Vi ser mange nettsider som lover «smålån til alle med betalingsanmerkning» — men virkeligheten er en annen. De fleste av disse sidene driver med villedende markedsføring, eller de sender deg til aktører som egentlig bare tilbyr lån med sikkerhet.
        </p>

        <h2>Hva finnes egentlig?</h2>
        
        <h3>Ferratum og lignende mikrofinans-selskaper</h3>
        <p>
          Ferratum er et av få selskaper som historisk har vurdert søknader med anmerkninger. Men selv her er det ingen garanti. Beløpene er små (typisk 1 000 - 30 000 kr), renten er bratt (19-34%), og nedbetalingstiden kort.
        </p>
        <p>
          Et regnestykke: Låner du 20 000 kr til 30% effektiv rente over 12 måneder, betaler du tilbake rundt 23 500 kr. Det er 3 500 kr i ren rentekostnad. Ikke verdens undergang for et engangstilfelle, men det er dyrt.
        </p>

        <h3>Lån med sikkerhet — det reelle alternativet</h3>
        <p>
          Eier du bolig? Da er dette veien å gå, uten tvil. Med sikkerhet i bolig kan du låne langt mer, til mye lavere rente, selv med betalingsanmerkninger. Vi snakker 8-14% i stedet for 25-35%.
        </p>
        <p>
          Okida, Heimfinans og Varde Finans er tre solide aktører som alle vurderer søknader med anmerkninger når du kan stille sikkerhet.
        </p>

        <h2>Vårt ærlige råd</h2>
        <p>
          Før du tar et dyrt smålån, stopp opp og tenk gjennom alternativene:
        </p>
        <ul>
          <li><strong>Kan du vente?</strong> Hvis kravet som ga deg anmerkningen er lite, kanskje du kan betale det ned først. Anmerkningen slettes 1-2 måneder etter oppgjør.</li>
          <li><strong>Har du bolig?</strong> Refinansiering med sikkerhet er nesten alltid bedre enn et dyrt smålån.</li>
          <li><strong>Kontakt NAV:</strong> Gratis økonomisk rådgivning via kommunens gjeldsrådgiver er undervurdert. De kan hjelpe deg forhandle med kreditorer.</li>
          <li><strong>Snakk med kreditoren:</strong> Mange inkassobyråer tilbyr nedbetalingsplaner. Spør — det verste som skjer er at de sier nei.</li>
        </ul>

        <h2>Når smålån med anmerkning gir mening</h2>
        <p>
          Det finnes situasjoner der det kan forsvares. For eksempel: Du trenger 15 000 kr for å betale ned et inkassokrav som hindrer deg i å få et boliglån til 3 millioner. Da er rentekostnaden på smålånet en bagatell sammenlignet med gevinsten.
        </p>
        <p>
          Eller du har en akutt medisinsk utgift som ikke dekkes av det offentlige. Livet er ikke alltid sort/hvitt.
        </p>
        <p>
          Poenget er: ta aldri smålån med betalingsanmerkning av gammel vane eller for å dekke løpende forbruk. Det er en spiral som bare går én vei — nedover.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Aktører som kan hjelpe</h2>
        <div className="space-y-4">
          {relevantProviders.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks exclude="/smalan-med-betalingsanmerkning" groups={['betalingsanmerkning', 'forbrukslan']} />
    </div>
  )
}
