import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Lån uten kredittsjekk — Finnes det? Sannheten 2026',
  description: 'Kan du få lån uten kredittsjekk i Norge? Vi avslører sannheten og viser realistiske alternativer for deg med dårlig kreditt.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-uten-kredittsjekk' },
}

const faqs = [
  { q: 'Finnes lån uten kredittsjekk i Norge?', a: 'Nei, ikke lovlig. Alle seriøse långivere er pålagt å gjøre kredittsjekk etter norsk lov. Tilbydere som reklamerer med «lån uten kredittsjekk» er enten useriøse eller misvisende.' },
  { q: 'Hva kan jeg gjøre med dårlig kredittscore?', a: 'Søk hos tilbydere som spesialiserer seg på kunder med betalingsanmerkninger — spesielt de som tilbyr lån med sikkerhet i bolig. <a href="/lan-med-betalingsanmerkning" class="text-brand-600 underline">Se våre anbefalinger →</a>' },
  { q: 'Hvorfor krever alle kredittsjekk?', a: 'Finanstilsynet pålegger det for å beskytte forbrukere mot overbelåning. Etter innføringen av gjeldsregisteret i 2019 har alle långivere plikt til å sjekke din totale gjeldssituasjon.' },
]

export default function LanUtenKredittsjekk() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Lån uten kredittsjekk', url: '/lan-uten-kredittsjekk' }])) }} />
      <Breadcrumb items={[{ name: 'Lån uten kredittsjekk' }]} />
      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">Lån uten kredittsjekk — finnes det?</h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Mange søker etter «lån uten kredittsjekk» — men sannheten er at dette ikke finnes hos seriøse norske långivere. Her forklarer vi hvorfor, og viser deg hva du faktisk kan gjøre.
      </p>

      <div className="bg-warm-50 border border-warm-200 rounded-xl p-5 sm:p-6 mb-10">
        <h2 className="text-[16px] font-semibold text-text-primary mb-2">⚠️ Advarsel om useriøse tilbydere</h2>
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Nettsider som lover «lån uten kredittsjekk» er enten: 1) Misvisende (de gjør en forenklet sjekk), 2) Utenlandske aktører uten norsk konsesjon, eller 3) Svindel. Gå aldri inn på slike tilbud. Alle norske långivere er pålagt å gjøre kredittvurdering.
        </p>
      </div>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Realistiske alternativer</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>Selv om du ikke kan omgå kredittsjekken, finnes det tilbydere som er mer fleksible enn vanlige banker:</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 not-prose my-6">
          <Link href="/lan-med-betalingsanmerkning" className="block bg-white rounded-xl border border-border p-5 hover:border-brand-200 transition-all">
            <h3 className="text-[15px] font-semibold text-text-primary mb-1">🔓 Lån med betalingsanmerkning</h3>
            <p className="text-[13px] text-text-secondary">Tilbydere som vurderer søknader selv med anmerkninger</p>
          </Link>
          <Link href="/lan-med-sikkerhet" className="block bg-white rounded-xl border border-border p-5 hover:border-brand-200 transition-all">
            <h3 className="text-[15px] font-semibold text-text-primary mb-1">🏠 Lån med sikkerhet</h3>
            <p className="text-[13px] text-text-secondary">Lavere krav med bolig som pant</p>
          </Link>
          <Link href="/omstartslan" className="block bg-white rounded-xl border border-border p-5 hover:border-brand-200 transition-all">
            <h3 className="text-[15px] font-semibold text-text-primary mb-1">🔄 Omstartslån</h3>
            <p className="text-[13px] text-text-secondary">Refinansiering for deg i vanskelig situasjon</p>
          </Link>
          <Link href="/gjeldssanering" className="block bg-white rounded-xl border border-border p-5 hover:border-brand-200 transition-all">
            <h3 className="text-[15px] font-semibold text-text-primary mb-1">📋 Gjeldssanering</h3>
            <p className="text-[13px] text-text-secondary">Siste utvei når gjelden er uhåndterbar</p>
          </Link>
        </div>
      </section>
      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
    </div>
  )
}
