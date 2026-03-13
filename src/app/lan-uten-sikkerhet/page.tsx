import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getUnsecuredProviders } from '@/data/loans'

export const metadata: Metadata = {
  title: 'Lån uten sikkerhet — Sammenlign usikrede lån 2026',
  description: 'Finn beste lån uten sikkerhet. Sammenlign renter fra 7,4% til 24%. Ingen pant nødvendig. Se topp 10 tilbud for usikrede lån i Norge.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-uten-sikkerhet' },
}

const faqs = [
  { q: 'Hva er lån uten sikkerhet?', a: 'Et lån uten sikkerhet (usikret lån) er et lån der du ikke stiller noe som pant — verken bolig, bil eller andre verdier. Banken gir deg lånet basert på din inntekt, gjeld og kredittverdighet alene.' },
  { q: 'Er renten høyere uten sikkerhet?', a: 'Ja, fordi banken tar høyere risiko. Typisk rente på lån uten sikkerhet er mellom 7-24%, mens lån med sikkerhet kan gi rente fra 5%. Forskjellen kan utgjøre tusenvis av kroner over lånets løpetid.' },
  { q: 'Hvor mye kan jeg låne uten sikkerhet?', a: 'De fleste banker tilbyr opptil 600 000 kr uten sikkerhet. Noen få tilbyr opptil 800 000 kr. Beløpet du faktisk innvilges avhenger av din økonomi og gjeld.' },
  { q: 'Kan jeg refinansiere lån uten sikkerhet?', a: 'Ja. <a href="/refinansiering" class="text-brand-600 underline">Refinansiering</a> av usikrede lån er svært vanlig. Du kan enten refinansiere til et nytt usikret lån med bedre vilkår, eller gå over til sikret lån for enda lavere rente.' },
]

export default function LanUtenSikkerhet() {
  const providers = getUnsecuredProviders()

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <Breadcrumb items={[{ name: 'Lån uten sikkerhet' }]} />
      <AffiliateDisclaimer />

      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">
        Lån uten sikkerhet — sammenlign usikrede lån
      </h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Et lån uten sikkerhet gir deg frihet til å låne uten å stille bolig eller bil som pant. 
        Vi har sammenlignet de beste usikrede lånene i Norge — finn det som passer din økonomi.
      </p>

      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Beste lån uten sikkerhet 2026</h2>
        <div className="space-y-3">
          {providers.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Alt du bør vite om lån uten sikkerhet</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>
            Lån uten sikkerhet — også kalt forbrukslån eller usikret lån — er den vanligste formen for lån blant 
            nordmenn. Du trenger ikke eie bolig for å søke, og pengene kan brukes til det du vil.
          </p>
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Fordeler med usikret lån</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ingen risiko for boligen din — du kan aldri miste hjemmet ditt på grunn av lånet</li>
            <li>Rask søknadsprosess — ofte svar innen minutter</li>
            <li>Fleksibel bruk — oppussing, bil, bryllup eller refinansiering</li>
            <li>Ingen krav om egenkapital eller boligeierskap</li>
          </ul>
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Ulemper å være klar over</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Høyere rente enn sikrede lån — typisk 7-24% vs. 5-8%</li>
            <li>Lavere lånetak — maks 600 000 kr hos de fleste banker</li>
            <li>Kredittscore påvirker renten betydelig</li>
          </ul>
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Slik får du lavest mulig rente</h3>
          <p>
            Renten du tilbys er individuell og basert på din økonomi. For å oppnå best mulig vilkår bør du: 
            ha fast inntekt, lav gjeldsgrad (under 5x bruttoinntekt), ingen betalingsanmerkninger, 
            og gjerne bruke en lånemegler som sender søknaden til flere banker samtidig.
          </p>
        </div>
      </section>

      <FAQ items={faqs} />
    </div>
  )
}
