import { Metadata } from 'next'
import Link from 'next/link'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getTopProviders } from '@/data/loans'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Låne penger — Komplett guide til lån i Norge 2026',
  description: 'Skal du låne penger? Se alle alternativene — forbrukslån, smålån, lån med sikkerhet. Sammenlign renter og finn beste tilbud.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lane-penger' },
}

const faqs = [
  { q: 'Hvor kan jeg låne penger?', a: 'Du kan låne i banker (forbrukslån, boliglån), via lånemeglere (som sammenligner mange banker), eller fra spesialbanker. I noen tilfeller kan du også få lån fra NAV.' },
  { q: 'Kan jeg låne penger med betalingsanmerkning?', a: 'Ja, men utvalget er begrenset. Med sikkerhet i bolig er sjansene bedre. <a href="/lan-med-betalingsanmerkning" class="text-brand-600 underline">Les vår guide om lån med betalingsanmerkning →</a>' },
  { q: 'Hva koster det å låne penger?', a: 'Kostnaden avhenger av rente, gebyrer og lånebeløp. Et forbrukslån på 200 000 kr over 5 år til 10% rente koster ca. 55 000 kr i renter. Bruk <a href="/#kalkulator" class="text-brand-600 underline">lånekalkulator</a> for å beregne.' },
  { q: 'Hvor raskt kan jeg låne penger?', a: 'Fra noen minutter (smålån) til noen dager (større forbrukslån). <a href="/lan-pa-dagen" class="text-brand-600 underline">Lån på dagen</a> er mulig hos mange tilbydere.' },
]

export default function LanePenger() {
  const providers = getTopProviders(8)
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Låne penger', url: '/lane-penger' }])) }} />
      <Breadcrumb items={[{ name: 'Låne penger' }]} />
      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">Låne penger — hvilken type lån passer for deg?</h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Det finnes mange måter å låne penger på i Norge. Hvilken som er best avhenger av hvor mye du trenger, hva pengene skal brukes til, og din økonomiske situasjon.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {[
          { href: '/forbrukslan', title: 'Forbrukslån', desc: '10 000 – 600 000 kr. Ingen sikkerhet. Rente 7-24%.', emoji: '💰' },
          { href: '/smalan', title: 'Smålån', desc: '1 000 – 100 000 kr. Rask utbetaling. Høyere rente.', emoji: '⚡' },
          { href: '/lan-med-sikkerhet', title: 'Lån med sikkerhet', desc: 'Opptil 10 mill. Lav rente fra 5%. Krever bolig som pant.', emoji: '🏠' },
          { href: '/refinansiering', title: 'Refinansiering', desc: 'Samle eksisterende lån. Spar på renten.', emoji: '🔄' },
          { href: '/lan-pa-dagen', title: 'Lån på dagen', desc: 'Raskt svar og utbetaling. Penger i dag.', emoji: '🕐' },
          { href: '/lan-med-betalingsanmerkning', title: 'Med anmerkning', desc: 'Muligheter selv med betalingsanmerkning.', emoji: '🔓' },
        ].map(c => (
          <Link key={c.href} href={c.href} className="group flex items-start gap-3 bg-white rounded-xl border border-border p-4 hover:border-brand-200 hover:shadow-sm transition-all">
            <span className="text-[20px] mt-0.5">{c.emoji}</span>
            <div>
              <h3 className="text-[14px] font-semibold text-text-primary group-hover:text-brand-600 transition-colors">{c.title}</h3>
              <p className="text-[13px] text-text-secondary mt-0.5">{c.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Populære lånetilbydere i Norge</h2>
        <div className="space-y-3">{providers.map((p, i) => <LoanCard key={p.id} provider={p} rank={i + 1} />)}</div>
      </section>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Slik velger du riktig lån</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>Det viktigste er å finne et lån som passer din situasjon. Ikke bare se på renten — vurder også gebyrer, fleksibilitet og nedbetalingstid. Et lån med litt høyere rente men ingen gebyrer kan faktisk bli billigere totalt sett.</p>
          <p><strong>Tips:</strong> Bruk alltid en lånemegler (som Zensum, Klikklån eller Lendo) for å sammenligne tilbud fra flere banker med én søknad. Det gir deg det beste tilbudet uten å påvirke kredittvurderingen negativt.</p>
        </div>
      </section>
      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
    </div>
  )
}
