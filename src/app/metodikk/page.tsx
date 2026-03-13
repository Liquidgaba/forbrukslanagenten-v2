import { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Vår metodikk — Slik vurderer vi lån',
  description: 'Les om hvordan Forbrukslånagenten vurderer og rangerer forbrukslån. Vår metodikk er transparent og basert på objektive kriterier.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/metodikk' },
}

export default function Metodikk() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <Breadcrumb items={[{ name: 'Metodikk' }]} />
      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">Vår metodikk</h1>
      
      <div className="prose max-w-3xl">
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4">
          <p>
            Transparens er viktig for oss. Her forklarer vi nøyaktig hvordan vi vurderer, sammenligner og 
            rangerer lånetilbud på Forbrukslånagenten.
          </p>

          <h2 className="text-[22px] font-bold text-text-primary mt-8">Rangeringskriterier</h2>
          <p>Vi vurderer hvert lån basert på fem hovedkriterier:</p>
          
          <div className="not-prose my-6 space-y-3">
            {[
              { title: 'Effektiv rente (40%)', desc: 'Den viktigste faktoren. Vi ser på fra-renten, men også gjennomsnittlig rente som reelle kunder oppnår.' },
              { title: 'Gebyrer (20%)', desc: 'Etableringsgebyr, termingebyr, og eventuelle skjulte kostnader. Lavere gebyrer gir høyere score.' },
              { title: 'Fleksibilitet (15%)', desc: 'Kan du betale ekstra uten gebyr? Tilbys avdragsfrihet? Kan du endre nedbetalingsplan?' },
              { title: 'Kundeopplevelse (15%)', desc: 'Søknadsprosess, kundeservice, Trustpilot-vurderinger og brukervennlighet.' },
              { title: 'Vilkår (10%)', desc: 'Maks/min beløp, nedbetalingstid, alderskrav, og eventuelle ekstra fordeler.' },
            ].map(item => (
              <div key={item.title} className="bg-surface-sunken rounded-lg p-4">
                <div className="text-[14px] font-semibold text-text-primary mb-1">{item.title}</div>
                <div className="text-[13px] text-text-secondary">{item.desc}</div>
              </div>
            ))}
          </div>

          <h2 className="text-[22px] font-bold text-text-primary mt-8">Datakildene våre</h2>
          <p>Informasjonen vi presenterer er hentet fra:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Bankenes egne nettsider og lånevilkår</li>
            <li>Adtraction (affiliate-nettverk) — for oppdatert provisjonsdata</li>
            <li>Finanstilsynets register over godkjente långivere</li>
            <li>Trustpilot og andre anmeldelsesplattformer</li>
            <li>Direkte kontakt med bankene</li>
          </ul>

          <h2 className="text-[22px] font-bold text-text-primary mt-8">Oppdateringsfrekvens</h2>
          <p>Vi oppdaterer informasjonen jevnlig — minst én gang i måneden for renter og vilkår, og umiddelbart hvis vi blir kjent med vesentlige endringer. Sist oppdatert: Mars 2026.</p>

          <h2 className="text-[22px] font-bold text-text-primary mt-8">Annonseinnhold og uavhengighet</h2>
          <p>
            Vi mottar provisjon fra bankene og lånemeglerne vi lenker til. Denne provisjonen påvirker IKKE 
            rangeringene. Vi har testet dette internt: tilbydere med høy provisjon men dårlige vilkår 
            rangeres lavere enn tilbydere med lav provisjon men gode vilkår.
          </p>
        </div>
      </div>
    </div>
  )
}
