import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getProvidersForRemarks } from '@/data/loans'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Refinansiering av inkassogjeld — Samle og rydd opp',
  description: 'Har du inkassogjeld? Refinansiering kan hjelpe deg å samle alt til ett lån med lavere rente. Se tilbydere som godtar inkasso 2026.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/refinansiering-inkassogjeld' },
}

const faqs = [
  { q: 'Kan jeg refinansiere inkassogjeld?', a: 'Ja, med sikkerhet i bolig. Noen spesialbanker tilbyr refinansiering der de innfrir alle inkassosaker direkte, slik at du sitter igjen med én betaling til lavere rente.' },
  { q: 'Hva skjer med inkassoen etter refinansiering?', a: 'Når det nye lånet innvilges, betaler banken direkte til inkassobyråene. Sakene lukkes, og eventuelle utleggstrekk i lønn fjernes. Betalingsanmerkningene slettes når kravene er innfridd.' },
  { q: 'Hvor mye egenkapital trenger jeg?', a: 'Som hovedregel kreves at total belåning ikke overstiger 85% av boligverdien. Noen tilbydere godtar opptil 90% i spesielle tilfeller.' },
  { q: 'Hva er renten?', a: 'Typisk 5-12% med sikkerhet i bolig — vesentlig lavere enn inkassogebyrene og forsinkelsesrentene du betaler i dag (som ofte er 8-15% pluss salærer og gebyrer).' },
]

export default function RefinansieringInkassogjeld() {
  const providers = getProvidersForRemarks()
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Refinansiering', url: '/refinansiering' }, { name: 'Inkassogjeld', url: '/refinansiering-inkassogjeld' }])) }} />
      <Breadcrumb items={[{ name: 'Refinansiering', href: '/refinansiering' }, { name: 'Inkassogjeld' }]} />
      <AffiliateDisclaimer />
      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">Refinansiering av inkassogjeld</h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Inkassogjeld vokser raskt på grunn av forsinkelsesrenter, salærer og gebyrer. Ved å refinansiere med sikkerhet i bolig kan du stoppe kostnadsspiralen og samle alt til én overkommelig betaling.
      </p>

      <div className="bg-warm-50 border border-warm-200 rounded-xl p-5 sm:p-6 mb-10">
        <h2 className="text-[16px] font-semibold text-text-primary mb-2">📊 Eksempel: Spar på å refinansiere</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="text-[14px] text-text-secondary">
            <strong className="text-warm-800">Før (inkassogjeld):</strong><br />
            200 000 kr i inkasso × ~15% forsinkelsesrente + salærer<br />
            = ca. 5 500 kr/mnd (og voksende)
          </div>
          <div className="text-[14px] text-text-secondary">
            <strong className="text-mint-800">Etter (refinansiering m/sikkerhet):</strong><br />
            200 000 kr × 7% rente, 10 år nedbetaling<br />
            = ca. 2 330 kr/mnd (fast og synkende)
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Tilbydere som refinansierer inkassogjeld</h2>
        <div className="space-y-3">{providers.map((p, i) => <LoanCard key={p.id} provider={p} rank={i + 1} />)}</div>
      </section>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Slik refinansierer du inkassogjeld</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Samle oversikt</strong> — List opp all inkassogjeld med beløp og kreditor. Sjekk gjeldsregisteret for komplett bilde.</li>
            <li><strong>Beregn boligverdi</strong> — Finn ut hva boligen er verdt og hvor mye du allerede har i lån med pant.</li>
            <li><strong>Søk hos spesialbanker</strong> — Tilbyderne ovenfor behandler søknader med inkassogjeld.</li>
            <li><strong>Banken innfrir gjelden</strong> — Ved godkjenning betaler banken direkte til inkassobyråene.</li>
            <li><strong>Én betaling</strong> — Du sitter igjen med ett lån, én faktura, lavere rente.</li>
          </ol>
        </div>
      </section>
      <FAQ items={faqs} />
    </div>
  )
}
