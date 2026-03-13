import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getSmallLoanProviders } from '@/data/loans'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'SMS-lån — Lån via mobilen raskt og enkelt 2026',
  description: 'SMS-lån gir deg raskt lån via mobilen. Sammenlign SMS-lån tilbydere i Norge. Se renter, vilkår og alternativer som kan være billigere.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/sms-lan' },
}

const faqs = [
  { q: 'Hva er SMS-lån?', a: 'SMS-lån var opprinnelig lån du kunne søke om ved å sende en SMS. I dag brukes begrepet løst om alle typer smålån med enkel digital søknad og rask utbetaling.' },
  { q: 'Finnes SMS-lån fortsatt?', a: 'De opprinnelige SMS-lånene (der du sendte en tekstmelding for å søke) er stort sett borte. I dag søker du via nettside eller app, men prosessen er like rask — ofte svar på minutter.' },
  { q: 'Er SMS-lån lovlig i Norge?', a: 'Ja, men regulert. Finanstilsynet fører tilsyn med alle långivere. Etter innstramminger i 2019 er det strengere krav til kredittvurdering, noe som beskytter forbrukerne mot useriøse aktører.' },
  { q: 'Hva koster SMS-lån?', a: 'SMS-lån (smålån) har typisk effektiv rente fra 15-35%. For små beløp og kort løpetid kan renten virke lav i kroner, men den prosentmessige kostnaden er høy. Sammenlign alltid med vanlige forbrukslån.' },
]

export default function SmsLan() {
  const providers = getSmallLoanProviders()
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'SMS-lån', url: '/sms-lan' }])) }} />
      <Breadcrumb items={[{ name: 'Smålån', href: '/smalan' }, { name: 'SMS-lån' }]} />
      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">SMS-lån — raskt lån via mobilen</h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        SMS-lån har utviklet seg fra enkle tekstmeldinger til moderne digitale søknader. Konseptet er det samme: rask tilgang til små beløp. Men er det det billigste alternativet? Vi sammenligner.
      </p>
      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Moderne «SMS-lån»-tilbydere</h2>
        <div className="space-y-3">{providers.map((p, i) => <LoanCard key={p.id} provider={p} rank={i + 1} />)}</div>
      </section>
      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">SMS-lån vs. vanlig forbrukslån</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>Den største forskjellen er beløpet og renten. SMS-lån (smålån) er typisk mellom 1 000 og 50 000 kr med kort løpetid og høyere rente. Vanlige forbrukslån er 10 000–600 000 kr med lavere rente og lenger nedbetalingstid.</p>
          <p>Vårt råd: Trenger du mer enn 10 000 kr? Søk et vanlig <a href="/forbrukslan" className="text-brand-600 underline">forbrukslån</a> i stedet. Trenger du mindre? Vurder om du virkelig trenger å låne, eller om det finnes andre løsninger.</p>
        </div>
      </section>
      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
    </div>
  )
}
