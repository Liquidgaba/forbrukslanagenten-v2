import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getTopProviders } from '@/data/loans'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Nødlån — Akutt behov for penger? Se alternativer',
  description: 'Trenger du nødlån? Se hvilke muligheter du har for raskt lån ved akutt behov. Sammenlign tilbud med rask utbetaling i 2026.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/nodlan' },
}

const faqs = [
  { q: 'Hva er et nødlån?', a: 'Et nødlån er et lån du tar opp ved akutt behov for penger — for eksempel til en uventet regning, nødvendig reparasjon eller medisinsk utgift. Det er ikke en egen låneprodukt, men vanligvis et forbrukslån eller smålån med rask utbetaling.' },
  { q: 'Kan NAV gi nødlån?', a: 'Ja, NAV kan i noen tilfeller gi nødlån (sosiallån) til personer i akutt økonomisk krise. Dette er rentefritt, men midlertidig og behovsprøvd. Kontakt ditt lokale NAV-kontor for mer informasjon.' },
  { q: 'Hvor raskt kan jeg få nødlån?', a: 'Fra private tilbydere kan du få svar på minutter og penger på konto samme dag. Fra NAV tar det vanligvis noen dager, avhengig av saksbehandlingstid.' },
  { q: 'Er nødlån dyrt?', a: 'Private nødlån (smålån) kan ha høy rente. NAVs nødlån er rentefritt men må betales tilbake. Vurder alltid om du har andre alternativer — som å be om betalingsutsettelse.' },
]

export default function Nodlan() {
  const providers = getTopProviders(6)
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Nødlån', url: '/nodlan' }])) }} />
      <Breadcrumb items={[{ name: 'Nødlån' }]} />
      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">Nødlån — hva gjør du når det haster?</h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Noen ganger oppstår det akutte behov for penger. Enten det er en uventet regning, en havarert bil eller en annen krise — det finnes alternativer. Vi ser på hva som finnes av nødlån i Norge, og hva du bør tenke på.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 sm:p-6 mb-10">
        <h2 className="text-[16px] font-semibold text-text-primary mb-3">Tre alternativer ved akutt behov</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="text-[14px] text-text-secondary"><strong className="text-text-primary block mb-1">1. NAV nødlån</strong>Rentefritt sosiallån for deg i akutt krise. Behovsprøvd — kontakt ditt lokale NAV-kontor.</div>
          <div className="text-[14px] text-text-secondary"><strong className="text-text-primary block mb-1">2. Smålån/mikrolån</strong>Raskt lån fra private tilbydere. Svar på minutter, penger på konto i dag. Høyere rente.</div>
          <div className="text-[14px] text-text-secondary"><strong className="text-text-primary block mb-1">3. Betalingsutsettelse</strong>Ring kreditor og be om utsettelse. Mange er villige til å finne løsninger — koster ingenting å spørre.</div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Raskeste lånetilbydere</h2>
        <div className="space-y-3">{providers.map((p, i) => <LoanCard key={p.id} provider={p} rank={i + 1} />)}</div>
      </section>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Når bør du IKKE ta nødlån?</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>Nødlån bør være siste utvei. Før du søker, spør deg selv: Kan dette vente? Har jeg bufferkonto eller sparepenger? Kan jeg be om betalingsutsettelse hos den jeg skylder penger? Kan familie eller venner hjelpe midlertidig?</p>
          <p>Å ta opp dyre smålån for å dekke løpende utgifter er en gjeldsspiral som bare forverrer situasjonen. Hvis du merker at dette blir et mønster, bør du vurdere <a href="/refinansiering" className="text-brand-600 underline">refinansiering</a> eller kontakte en gjeldsrådgiver (gratis via NAV eller Finanstilsynet).</p>
        </div>
      </section>
      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
    </div>
  )
}
