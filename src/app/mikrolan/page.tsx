import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getSmallLoanProviders } from '@/data/loans'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Mikrolån — Lån fra 1 000 til 30 000 kr raskt',
  description: 'Trenger du et mikrolån? Lån fra 1 000 kr med rask utbetaling. Sammenlign mikrolån-tilbud i Norge 2026. Se vilkår og renter.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/mikrolan' },
}

const faqs = [
  { q: 'Hva er et mikrolån?', a: 'Et mikrolån er et lite lån — typisk fra 1 000 til 30 000 kr — med kort nedbetalingstid. Det er ment for å dekke akutte, mindre utgifter.' },
  { q: 'Hvor raskt får jeg pengene?', a: 'De fleste mikrolån-tilbydere utbetaler innen timer, noen til og med på minutter. Forutsetningen er at du søker innenfor bankens åpningstider.' },
  { q: 'Er mikrolån dyrt?', a: 'Ja, mikrolån har generelt høyere effektiv rente enn vanlige forbrukslån. Etableringsgebyrer og termingebyrer utgjør en stor andel av et lite lånebeløp. Vurder alltid alternativer først.' },
  { q: 'Kan jeg få mikrolån med betalingsanmerkning?', a: 'Noen få tilbydere vurderer søknader med anmerkninger, men utvalget er begrenset og renten høyere. Les mer om <a href="/smalan-med-betalingsanmerkning" class="text-brand-600 underline">smålån med betalingsanmerkning</a>.' },
]

export default function Mikrolan() {
  const providers = getSmallLoanProviders()
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Mikrolån', url: '/mikrolan' }])) }} />
      <Breadcrumb items={[{ name: 'Smålån', href: '/smalan' }, { name: 'Mikrolån' }]} />
      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">Mikrolån — raskt lån av små beløp</h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Et mikrolån gir deg tilgang til små beløp raskt — typisk mellom 1 000 og 30 000 kr. Perfekt for uventede regninger, men vær oppmerksom på at rentene ofte er høyere enn for vanlige forbrukslån.
      </p>
      <div className="bg-warm-50 border border-warm-200 rounded-xl p-5 sm:p-6 mb-10">
        <h2 className="text-[16px] font-semibold text-text-primary mb-2">⚠️ Før du tar mikrolån</h2>
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Mikrolån bør kun brukes til akutte behov. Effektiv rente kan være svært høy — opptil 30-40% for de minste beløpene. Sjekk alltid om du kan løse det på andre måter først (bruke bufferkonto, be om betalingsutsettelse, etc.).
        </p>
      </div>
      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Mikrolån-tilbydere i Norge 2026</h2>
        <div className="space-y-3">{providers.map((p, i) => <LoanCard key={p.id} provider={p} rank={i + 1} />)}</div>
      </section>
      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Hva er forskjellen på mikrolån, smålån og forbrukslån?</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>I praksis er grensene flytende, men generelt: <strong>Mikrolån</strong> er 1 000–30 000 kr, <strong>smålån</strong> er 5 000–100 000 kr, og <strong>forbrukslån</strong> er 10 000–600 000 kr. Jo mindre beløp, desto høyere blir effektiv rente fordi gebyrene utgjør en større del av totalkostnaden.</p>
          <p>Vår anbefaling: Trenger du mer enn 10 000 kr? Da bør du vurdere et vanlig forbrukslån — renten er nesten alltid lavere enn for mikrolån.</p>
        </div>
      </section>
      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
    </div>
  )
}
