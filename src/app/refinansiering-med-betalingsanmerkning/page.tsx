import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { loanProviders } from '@/data/loans'
import { faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Refinansiering med betalingsanmerkning 2026 — Slik gjør du det',
  description: 'Refinansiering med betalingsanmerkning er mulig — spesielt med sikkerhet i bolig. Vi viser hvilke aktører som hjelper og hva du kan forvente.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/refinansiering-med-betalingsanmerkning' },
}

const faqs = [
  { q: 'Kan man refinansiere med betalingsanmerkning?', a: 'Ja, primært gjennom lån med sikkerhet i bolig. Aktører som Okida, Varde Finans, Scoopr og Heimfinans vurderer refinansiering med pant selv om du har anmerkninger. Usikret refinansiering er derimot svært vanskelig.' },
  { q: 'Hva slags rente kan jeg forvente?', a: 'Med sikkerhet i bolig: 7-14% avhengig av belåningsgrad og anmerkningens alvorlighetsgrad. Uten sikkerhet (der det er mulig): 15-25%. Til sammenligning har kredittkort typisk 20-25% rente.' },
  { q: 'Hvor mye kan jeg spare?', a: 'En typisk besparelse ved å refinansiere 300 000 kr fra kredittkort (22%) til sikret lån (10%) er 36 000 kr per år i renter. Over 5 år snakker vi nesten 180 000 kr.' },
]

export default function RefinansieringMedBetalingsanmerkning() {
  const providers = loanProviders.filter(p => 
    p.acceptsPaymentRemarks || p.loanType === 'refinancing'
  ).sort((a, b) => (b.epc || 0) - (a.epc || 0))

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Refinansiering', href: '/refinansiering' }, { name: 'Med betalingsanmerkning' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Refinansiering med betalingsanmerkning</h1>

      <p className="text-lg text-text-secondary mb-8">
        Du sitter med dyr gjeld spredd utover kredittkort, smålån og kanskje en inkassosak eller to. Renten spiser opp alt. Refinansiering er veien ut — og ja, det er mulig selv med anmerkning.
      </p>

      <div className="prose prose-lg max-w-none mb-8">
        <h2>Sånn fungerer refinansiering med anmerkning</h2>
        <p>
          Refinansiering betyr rett og slett å ta opp ett nytt lån for å betale ned alle de gamle. I stedet for fem forskjellige lån med hver sin rente og forfall, får du ett lån, én rente, og én betaling per måned.
        </p>
        <p>
          Med betalingsanmerkning er nøkkelen nesten alltid <strong>sikkerhet i bolig</strong>. Uten sikkerhet er døren så godt som lukket.
        </p>

        <h2>Hva du trenger</h2>
        <ul>
          <li><strong>Bolig med egenkapital:</strong> Boligverdi minus gjenstående lån = egenkapital. Du trenger gjerne 15-30% frie midler i boligen.</li>
          <li><strong>Fast inntekt:</strong> De fleste krever fast jobb eller stabil inntekt over tid.</li>
          <li><strong>Oversikt over gjelden:</strong> Klar dokumentasjon over alle lån som skal refinansieres.</li>
        </ul>

        <h2>Eksempel: Slik kan det se ut</h2>
        <div className="bg-surface-muted rounded-lg p-5 not-prose mb-4">
          <h3 className="font-bold text-text-primary mb-3">Før refinansiering:</h3>
          <ul className="space-y-1 text-sm text-text-secondary">
            <li>Kredittkort 1: 80 000 kr til 21,9% rente = 17 520 kr/år i renter</li>
            <li>Kredittkort 2: 45 000 kr til 23,4% rente = 10 530 kr/år i renter</li>
            <li>Forbrukslån: 150 000 kr til 16% rente = 24 000 kr/år i renter</li>
            <li>Inkassokrav: 25 000 kr + forsinkelsesrente</li>
            <li><strong>Totalt: 300 000 kr, ~52 000 kr/år i renter</strong></li>
          </ul>
          <h3 className="font-bold text-text-primary mb-3 mt-4">Etter refinansiering med sikkerhet:</h3>
          <ul className="space-y-1 text-sm text-text-secondary">
            <li>Nytt lån: 300 000 kr til 10% rente = 30 000 kr/år i renter</li>
            <li><strong>Besparelse: 22 000 kr per år</strong></li>
          </ul>
        </div>

        <h2>De beste aktørene for refinansiering med anmerkning</h2>
        <p>
          Vi har gjort research og snakket med flere av disse aktørene. Her er de vi mener er best egnet:
        </p>
        <ul>
          <li><strong>Okida</strong> — Spesialist på refinansiering med pant i bolig. God erfaring med anmerkninger. Inntil 10 millioner kr.</li>
          <li><strong>Varde Finans</strong> — Fokuserer utelukkende på refinansiering med sikkerhet. Tydelige vilkår og rask behandling.</li>
          <li><strong>Scoopr</strong> — Tilbyr både sikret og usikret refinansiering. Fleksibel tilnærming.</li>
          <li><strong>Heimfinans</strong> — Lån med sikkerhet opp til 10 millioner. Vurderer anmerkninger case by case.</li>
        </ul>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Sammenlign refinansiering</h2>
        <div className="space-y-4">
          {providers.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/refinansiering-med-betalingsanmerkning" groups={['betalingsanmerkning', 'refinansiering']} />
    </div>
  )
}
