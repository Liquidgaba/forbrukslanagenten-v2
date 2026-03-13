import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getUnsecuredProviders } from '@/data/loans'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Refinansiering uten sikkerhet — Samle lån uten pant',
  description: 'Refinansier forbrukslån uten å stille sikkerhet. Sammenlign tilbud fra banker som tilbyr usikret refinansiering i Norge 2026.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/refinansiering-uten-sikkerhet' },
}

const faqs = [
  { q: 'Kan jeg refinansiere uten sikkerhet?', a: 'Ja. Du tar opp et nytt usikret forbrukslån og bruker det til å betale ned eksisterende lån. Du trenger ikke eie bolig. Men renten blir høyere enn med sikkerhet.' },
  { q: 'Hvem tilbyr refinansiering uten sikkerhet?', a: 'De fleste banker og lånemeglere tilbyr dette. Lendo, Zensum, Klikklån og Sambla er populære valg som sender søknaden til mange banker.' },
  { q: 'Hva er renten?', a: 'Typisk 8-20% effektiv rente, avhengig av din kredittscore. Med sikkerhet i bolig kan du få 5-8%, men det krever at du eier bolig med nok egenkapital.' },
]

export default function RefinansieringUtenSikkerhet() {
  const providers = getUnsecuredProviders()
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Refinansiering', url: '/refinansiering' }, { name: 'Uten sikkerhet', url: '/refinansiering-uten-sikkerhet' }])) }} />
      <Breadcrumb items={[{ name: 'Refinansiering', href: '/refinansiering' }, { name: 'Uten sikkerhet' }]} />
      <AffiliateDisclaimer />
      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">Refinansiering uten sikkerhet</h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Eier du ikke bolig, men ønsker å samle dyre lån? Refinansiering uten sikkerhet lar deg slå sammen forbrukslån og kredittkort til ett lån — uten å stille pant.
      </p>
      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Tilbydere for usikret refinansiering</h2>
        <div className="space-y-3">{providers.map((p, i) => <LoanCard key={p.id} provider={p} rank={i + 1} />)}</div>
      </section>
      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Når lønner seg refinansiering uten sikkerhet?</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>Usikret refinansiering lønner seg når: du har kredittkortgjeld med høy rente (20%+), du har flere smålån du ønsker å samle, eller du vil ha enklere økonomistyring med én betaling. Besparelsen er størst for deg med mye kredittkortgjeld.</p>
          <p>Hovedforskjellen fra sikret refinansiering er renten. Uten sikkerhet betaler du typisk 8-20%, mens med sikkerhet kan du komme ned til 5-8%. Men du risikerer heller ikke boligen din.</p>
        </div>
      </section>
      <FAQ items={faqs} />
    </div>
  )
}
