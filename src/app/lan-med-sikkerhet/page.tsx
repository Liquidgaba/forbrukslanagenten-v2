import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getSecuredProviders } from '@/data/loans'

export const metadata: Metadata = {
  title: 'Lån med sikkerhet i bolig — Lavere rente med pant 2026',
  description: 'Lån med sikkerhet i bolig gir deg rente fra 5%. Lån opptil 10 millioner. Også med betalingsanmerkning. Sammenlign tilbud her.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-med-sikkerhet' },
}

const faqs = [
  { q: 'Hva er lån med sikkerhet?', a: 'Et lån med sikkerhet betyr at du stiller bolig (eller annen eiendom) som pant. Til gjengjeld får du vesentlig lavere rente enn usikrede lån — typisk 5-12% i stedet for 8-24%.' },
  { q: 'Kan jeg miste boligen?', a: 'I teorien ja — hvis du ikke betaler, kan banken tvangsselge eiendommen. Men dette er siste utvei og skjer sjelden. Bankene ønsker løsninger, ikke tvangssalg.' },
  { q: 'Hvor mye kan jeg låne med sikkerhet?', a: 'Opptil 10 millioner kr hos noen tilbydere, avhengig av boligverdi og eksisterende lån. Hovedregelen er at total belåning ikke bør overstige 85% av boligens verdi.' },
  { q: 'Kan jeg få lån med sikkerhet og betalingsanmerkning?', a: 'Ja. Det er faktisk en av de viktigste fordelene — med sikkerhet kan du kvalifisere selv med anmerkninger. <a href="/lan-med-betalingsanmerkning" class="text-brand-600 underline">Les mer →</a>' },
]

export default function LanMedSikkerhet() {
  const providers = getSecuredProviders()

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <Breadcrumb items={[{ name: 'Lån med sikkerhet' }]} />
      <AffiliateDisclaimer />

      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">
        Lån med sikkerhet i bolig — lavere rente, høyere beløp
      </h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Ved å stille bolig som sikkerhet kan du låne opptil 10 millioner kr med rente fra 5%. 
        Det er den billigste måten å låne på — og en mulighet selv med betalingsanmerkninger.
      </p>

      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Beste lån med sikkerhet 2026</h2>
        <div className="space-y-3">
          {providers.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Når bør du velge lån med sikkerhet?</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>
            Lån med sikkerhet passer best når du trenger et større beløp (over 200 000 kr), ønsker lavest mulig rente, 
            eller har betalingsanmerkninger som gjør det vanskelig å få usikret lån.
          </p>
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Fordeler</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vesentlig lavere rente — typisk 5-12% vs. 8-24% usikret</li>
            <li>Høyere lånetak — opptil 10 millioner kr</li>
            <li>Mulig med betalingsanmerkninger</li>
            <li>Lengre nedbetalingstid — opptil 25 år</li>
          </ul>
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Hva bør du vurdere?</h3>
          <p>
            Husk at boligen din er stilt som pant. Det betyr lavere risiko for banken, men høyere risiko for deg. 
            Vurder nøye om du har stabil inntekt til å betjene lånet over hele løpetiden. 
            Og husk: total belåning bør ikke overstige 85% av boligverdien.
          </p>
        </div>
      </section>

      <FAQ items={faqs} />
    </div>
  )
}
