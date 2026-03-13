import { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Om oss — Hvem er Forbrukslånagenten?',
  description: 'Forbrukslånagenten er en uavhengig sammenligningsportal for forbrukslån i Norge, drevet av INNOVENA AS.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/om-oss' },
}

export default function OmOss() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <Breadcrumb items={[{ name: 'Om oss' }]} />
      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">Om Forbrukslånagenten</h1>
      
      <div className="prose max-w-3xl">
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4">
          <p>
            Forbrukslånagenten er en uavhengig sammenligningsportal for forbrukslån og refinansiering i Norge. 
            Vi hjelper norske forbrukere med å finne best mulig vilkår på lån — uavhengig av livssituasjon.
          </p>
          
          <h2 className="text-[22px] font-bold text-text-primary mt-8">Vår misjon</h2>
          <p>
            Lånemarkeder er uoversiktlige. Det er vanskelig å vite hvem som gir best betingelser, og mange ender opp 
            med å betale for mye. Vi gjør jobben for deg — sammenligner renter, gebyrer og vilkår fra 20+ banker 
            og lånemeglere, slik at du kan ta informerte valg.
          </p>

          <h2 className="text-[22px] font-bold text-text-primary mt-8">Spesielt fokus på betalingsanmerkninger</h2>
          <p>
            Vi har et spesielt fokus på å hjelpe personer med betalingsanmerkninger. Mange tror det er umulig å 
            få lån med prikk på rullebladet — men det stemmer ikke. Vi har kartlagt alle tilbydere som vurderer 
            søknader med anmerkninger, og gir ærlige råd om hva som er realistisk.
          </p>

          <h2 className="text-[22px] font-bold text-text-primary mt-8">Slik tjener vi penger</h2>
          <p>
            Forbrukslånagenten er gratis å bruke. Vi tjener penger gjennom annonseprovisjon fra banker og 
            lånemeglere (affiliate-lenker). Når du klikker på en «Søk her»-knapp og søker om lån, mottar vi 
            en provisjon. Dette koster deg ingenting ekstra.
          </p>
          <p>
            <strong>Viktig:</strong> Provisjonen påvirker ikke våre vurderinger eller rangeringer. Vi anbefaler 
            produkter basert på vilkår, rente og brukeropplevelse — ikke provisjon.
          </p>

          <h2 className="text-[22px] font-bold text-text-primary mt-8">Om selskapet</h2>
          <p>
            Forbrukslånagenten drives av INNOVENA AS (org.nr. i Brønnøysundregistrene). 
            Selskapet er registrert i Norge og følger norsk lovgivning, inkludert markedsføringsloven 
            og retningslinjene fra Forbrukertilsynet.
          </p>

          <h2 className="text-[22px] font-bold text-text-primary mt-8">Kontakt oss</h2>
          <p>
            Har du spørsmål, tilbakemeldinger eller ønsker å samarbeide? Send oss en e-post på 
            kontakt@forbrukslånagenten.no.
          </p>
        </div>
      </div>
    </div>
  )
}
