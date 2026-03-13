import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Gjeldssanering — Slik fungerer det i Norge 2026',
  description: 'Alt om gjeldssanering i Norge. Hvem kan søke, hvordan fungerer prosessen, og hva er alternativene? Komplett guide oppdatert 2026.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/gjeldssanering' },
}

const faqs = [
  { q: 'Hva er gjeldssanering?', a: 'Gjeldssanering er en lovregulert ordning der du får en betalingsplan over typisk 5 år. I denne perioden lever du på et minimumsbudsjett og betaler det du kan til kreditorene. Etter perioden slettes restgjelden.' },
  { q: 'Hvem kan søke gjeldssanering?', a: 'Du kan søke hvis du er varig ute av stand til å betjene gjelden din. Du må ha forsøkt å løse problemene selv først. Namsmannen behandler søknaden og vurderer om vilkårene er oppfylt.' },
  { q: 'Hvor lang tid tar gjeldssanering?', a: 'Selve gjeldsordningsperioden er vanligvis 5 år. Søknadsprosessen tar typisk 3-6 måneder. I denne perioden kan det innføres midlertidige tiltak (betalingsstopp).' },
  { q: 'Kan jeg beholde boligen?', a: 'I mange tilfeller ja, forutsatt at det er rimelig og at kreditorer ikke taper uforholdsmessig. Namsmannen vurderer dette individuelt. Dyr bolig kan måtte selges.' },
  { q: 'Hva er alternativene?', a: 'Før gjeldssanering bør du vurdere: <a href="/refinansiering" class="text-brand-600 underline">Refinansiering</a>, <a href="/omstartslan" class="text-brand-600 underline">omstartslån</a>, frivillig gjeldsordning med kreditorer, eller gratis gjeldsrådgivning via NAV.' },
]

export default function Gjeldssanering() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Gjeldssanering', url: '/gjeldssanering' }])) }} />
      <Breadcrumb items={[{ name: 'Gjeldssanering' }]} />

      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">Gjeldssanering — en ny start når gjelden er uhåndterbar</h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Gjeldssanering er en siste utvei for deg som ikke klarer å betale gjelden din, selv etter å ha forsøkt alle andre løsninger. Her forklarer vi prosessen, vilkårene og alternativene.
      </p>

      <div className="bg-mint-50 border border-mint-200 rounded-xl p-5 sm:p-6 mb-10">
        <h2 className="text-[16px] font-semibold text-text-primary mb-3">Prøv dette først</h2>
        <p className="text-[14px] text-text-secondary leading-relaxed mb-3">Gjeldssanering bør være siste utvei. Mange klarer å løse gjeldsproblemene med enklere tiltak:</p>
        <div className="grid sm:grid-cols-3 gap-3">
          <Link href="/refinansiering" className="block bg-white rounded-lg p-3 border border-mint-200 hover:border-brand-300 transition-colors">
            <div className="text-[14px] font-semibold text-text-primary">Refinansiering</div>
            <div className="text-[13px] text-text-secondary">Samle gjeld til lavere rente</div>
          </Link>
          <Link href="/omstartslan" className="block bg-white rounded-lg p-3 border border-mint-200 hover:border-brand-300 transition-colors">
            <div className="text-[14px] font-semibold text-text-primary">Omstartslån</div>
            <div className="text-[13px] text-text-secondary">Selv med betalingsanmerkning</div>
          </Link>
          <Link href="/lan-med-betalingsanmerkning" className="block bg-white rounded-lg p-3 border border-mint-200 hover:border-brand-300 transition-colors">
            <div className="text-[14px] font-semibold text-text-primary">Lån med anmerkning</div>
            <div className="text-[13px] text-text-secondary">Se alle muligheter</div>
          </Link>
        </div>
      </div>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Slik fungerer gjeldssanering steg for steg</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">1. Vurder om du kvalifiserer</h3>
          <p>For å få gjeldssanering må du oppfylle disse vilkårene: Du er varig ute av stand til å betjene gjelden, du har forsøkt å løse problemene selv, du ikke har fått gjeldssanering de siste 10 årene, og gjelden din er ikke et resultat av straffbare handlinger.</p>
          
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">2. Søk om gjeldssanering</h3>
          <p>Søknaden sendes til namsmannen i din kommune. Du trenger full oversikt over all gjeld, inntekt, utgifter og formue. Namsmannen hjelper deg med å fylle ut søknaden, og tjenesten er gratis.</p>
          
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">3. Gjeldsordningsperioden</h3>
          <p>Normalt varer perioden 5 år. I denne tiden lever du på et stramt budsjett (SIFO-satser), og alt overskudd går til kreditorer. Du kan ikke ta opp ny gjeld eller gjøre vesentlige disposisjoner uten samtykke.</p>
          
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">4. Etter gjeldssanering</h3>
          <p>Når perioden er over, slettes restgjelden. Du starter med blanke ark — men betalingsanmerkningene blir stående i ytterligere 3 år etter avsluttet periode. Det betyr at det tar totalt ~8 år fra start til du er helt «clean».</p>

          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Konsekvenser av gjeldssanering</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Du lever på minimumsbudsjett i 5 år</li>
            <li>Kreditorer kan ikke kreve inn gjeld i perioden</li>
            <li>Du kan ikke ta opp ny gjeld uten samtykke</li>
            <li>Boligen kan måtte selges hvis den er for dyr</li>
            <li>Betalingsanmerkninger står i 3 år etter avsluttet periode</li>
            <li>Restgjelden slettes etter endt periode</li>
          </ul>
        </div>
      </section>

      <FAQ items={faqs} />
    </div>
  )
}
