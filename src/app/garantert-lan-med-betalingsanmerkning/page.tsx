import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getProvidersForRemarks } from '@/data/loans'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Garantert lån med betalingsanmerkning? — Sannheten i 2026',
  description: 'Finnes det garantert lån med betalingsanmerkning? Vi avliver mytene og viser hva som faktisk er mulig for deg med anmerkninger.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/garantert-lan-med-betalingsanmerkning' },
}

const faqs = [
  { q: 'Finnes det garantert lån med betalingsanmerkning?', a: 'Nei, det finnes ikke noe som heter «garantert lån». Alle seriøse långivere er lovpålagt å gjennomføre kredittvurdering. Aktører som lover garantert lån bryter loven eller er useriøse. Det som finnes, er långivere som <em>vurderer</em> søknaden din individuelt — selv med anmerkninger.' },
  { q: 'Hvorfor markedsfører noen «garantert lån»?', a: 'Det er dessverre en markedsføringsfrase som brukes for å tiltrekke desperate søkere. Ingen seriøs finansinstitusjon kan garantere lån uten kredittvurdering — det er ulovlig i henhold til finansavtaleloven.' },
  { q: 'Hva kan jeg gjøre i stedet?', a: 'Søk hos långivere som aktivt vurderer søknader med anmerkninger, spesielt de som tilbyr lån med sikkerhet i bolig. Okida, Varde Finans og Heimfinans er tre seriøse alternativer.' },
]

export default function GarantertLanMedBetalingsanmerkning() {
  const remarkProviders = getProvidersForRemarks()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Lån med betalingsanmerkning', url: '/lan-med-betalingsanmerkning' }, { name: 'Garantert lån med betalingsanmerkning', url: '/garantert-lan-med-betalingsanmerkning' }])) }} />

      <Breadcrumb items={[{ name: 'Lån med betalingsanmerkning', href: '/lan-med-betalingsanmerkning' }, { name: 'Garantert lån' }]} />
      <AffiliateDisclaimer />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">&ldquo;Garantert lån med betalingsanmerkning&rdquo; — Finnes det?</h1>
      
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        Kort svar: nei. Det finnes ikke noe slikt som garantert lån. Men det betyr ikke at du er helt uten muligheter. La oss forklare.
      </p>

      <div className="prose prose-lg max-w-none mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-5 not-prose mb-6">
          <h3 className="font-bold text-red-800 mb-2">⚠️ Advarsel om svindel</h3>
          <p className="text-red-700 text-sm">Nettsider som lover «garantert lån» er enten useriøse eller bryter norsk lov. Finansavtaleloven krever at alle långivere gjennomfører kredittvurdering. Aldri betal forskudd for et lån — det er alltid svindel.</p>
        </div>

        <h2>Hvorfor «garantert lån» er en myte</h2>
        <p>
          I Norge er alle banker og finansieringsselskaper forpliktet til å gjennomføre en forsvarlig kredittvurdering før de innvilger lån. Det står svart på hvitt i finansavtaleloven §&nbsp;46&nbsp;b.
        </p>
        <p>
          Kredittvurderingen innebærer blant annet å sjekke:
        </p>
        <ul>
          <li>Inntekt og gjeld</li>
          <li>Kreditthistorikk (inkludert betalingsanmerkninger)</li>
          <li>Betalingsevne fremover</li>
          <li>Eventuell sikkerhet</li>
        </ul>
        <p>
          Så nei — ingen kan <em>garantere</em> at du får lån. De kan derimot garantere at de <em>vurderer</em> søknaden din seriøst. Og det er noe helt annet.
        </p>

        <h2>Hva du faktisk kan gjøre</h2>
        
        <h3>Lån med sikkerhet i bolig</h3>
        <p>
          Eier du bolig med egenkapital? Da har du det sterkeste kortet i hånda. Med pant i boligen reduseres bankens risiko drastisk, og flere aktører vil vurdere søknaden din — anmerkning til tross.
        </p>
        <p>
          Det er ikke «garantert», men sannsynligheten er betydelig høyere enn for usikrede lån. Spesielt hvis:
        </p>
        <ul>
          <li>Boligen har god belåningsgrad (under 80% av verdi)</li>
          <li>Du har stabil inntekt</li>
          <li>Anmerkningen skyldes enkelthendelser, ikke et mønster</li>
        </ul>

        <h3>Gjør opp anmerkningen først</h3>
        <p>
          Ofte er det raskeste veien tilbake til normalen. Betal kravet, vent 1-2 måneder til anmerkningen slettes, og søk deretter vanlig lån. Da har du tilgang til alle banker igjen — og mye bedre renter.
        </p>

        <h2>Røde flagg — slik gjenkjenner du svindel</h2>
        <ul>
          <li><strong>«Garantert innvilget»</strong> — Ingen seriøs aktør kan love dette</li>
          <li><strong>Forskuddsbetaling</strong> — Du skal ALDRI betale for å få et lån</li>
          <li><strong>Kontakt via SMS/Facebook</strong> — Seriøse banker annonserer ikke via SMS</li>
          <li><strong>Utenlandske kontonumre</strong> — Norske banker har norske kontonumre</li>
          <li><strong>Mangler Finanstilsynet-lisens</strong> — Sjekk alltid på finanstilsynet.no</li>
        </ul>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Seriøse aktører som vurderer søknader med anmerkninger</h2>
        <p className="text-gray-500 mb-4">Disse kan ikke garantere lån, men de vil faktisk se på søknaden din.</p>
        <div className="space-y-4">
          {remarkProviders.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
      <InternalLinks exclude="/garantert-lan-med-betalingsanmerkning" groups={['betalingsanmerkning', 'refinansiering']} />
    </div>
  )
}
