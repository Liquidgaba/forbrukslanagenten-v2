import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getProvidersForRemarks } from '@/data/loans'
import { faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Lån med inkasso 2026 — Muligheter og realistiske råd',
  description: 'Har du inkassosaker og lurer på om du kan få lån? Vi forklarer forskjellen på inkasso og betalingsanmerkning, og hva du faktisk kan gjøre.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-med-inkasso' },
}

const faqs = [
  { q: 'Kan man få lån med aktive inkassosaker?', a: 'Inkasso alene er ikke det samme som betalingsanmerkning, men de fleste banker ser negativt på aktive inkassosaker. Noen långivere med sikkerhet i bolig kan vurdere søknaden, men det er vanskelig.' },
  { q: 'Hva er forskjellen på inkasso og betalingsanmerkning?', a: 'Inkasso er prosessen der et byrå prøver å kreve inn ubetalt gjeld. Betalingsanmerkning kommer først når saken er eskalert rettslig. Du kan altså ha inkasso uten anmerkning, men sjelden anmerkning uten inkasso.' },
]

export default function LanMedInkasso() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Lån med betalingsanmerkning', href: '/lan-med-betalingsanmerkning' }, { name: 'Lån med inkasso' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Lån med inkasso</h1>
      <p className="text-lg text-gray-600 mb-8">Du har fått brev fra et inkassobyrå. Det er ubehagelig, men det trenger ikke bety at alle dører er stengt. Her forklarer vi hva som gjelder.</p>

      <div className="prose prose-lg max-w-none mb-8">
        <h2>Inkasso vs. betalingsanmerkning — det er en viktig forskjell</h2>
        <p>Mange blander sammen inkasso og betalingsanmerkning, men det er to forskjellige ting. Inkasso er selve inndrivingsprosessen — et byrå prøver å få deg til å betale. En betalingsanmerkning er en formell registrering som skjer først når saken har gått til rettslig inndrivelse via namsmannen.</p>
        <p>Har du «bare» inkasso (altså før det er blitt en formell anmerkning), er mulighetene dine faktisk bedre. Ikke gode, men bedre.</p>

        <h2>Hva bankene ser ved kredittsjekken</h2>
        <p>Ved kredittvurdering henter banken informasjon fra Experian og/eller Bisnode. Der vises betalingsanmerkninger, men ikke nødvendigvis alle inkassosaker. Noen banker gjør imidlertid egne oppslag mot gjeldsregisteret, som viser all registrert gjeld.</p>
        <p>Poenget er: selv om inkassosaken ikke dukker opp som formell anmerkning, kan gjelden den representerer bli synlig gjennom gjeldsregisteret.</p>

        <h2>Dine muligheter</h2>
        <h3>1. Gjør opp inkassokravet</h3>
        <p>Det aller beste du kan gjøre. Ring inkassobyrået, forhandel om et oppgjør (mange aksepterer nedbetalingsplaner eller redusert beløp), og betal. Når kravet er gjort opp, forbedres profilen din umiddelbart.</p>

        <h3>2. Lån med sikkerhet i bolig</h3>
        <p>Eier du bolig? Da kan du ta opp lån med sikkerhet for å gjøre opp inkassokravene. Aktører som Okida og Varde Finans er vant til å håndtere denne typen saker.</p>

        <h3>3. Bruk lånemegler</h3>
        <p>Hvis inkassosaken ennå ikke har blitt til en betalingsanmerkning, kan det lønne seg å bruke en lånemegler. De sender søknaden til mange banker, og noen av dem kan godkjenne deg tross inkassoen.</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Aktører som kan hjelpe</h2>
        <div className="space-y-4">
          {getProvidersForRemarks().map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/lan-med-inkasso" groups={['betalingsanmerkning', 'refinansiering']} />
    </div>
  )
}
