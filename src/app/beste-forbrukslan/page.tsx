import { Metadata } from 'next'
import ComparisonTable from '@/components/ComparisonTable'
import LoanCard from '@/components/LoanCard'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { getTopProviders, loanProviders } from '@/data/loans'
import { faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Beste forbrukslån 2026 — Sammenlign topp 10 banker',
  description: 'Vi har sammenlignet alle norske forbrukslån og rangert de 10 beste. Se renter, vilkår og vurderinger. Oppdatert mars 2026.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/beste-forbrukslan' },
}

const faqs = [
  { q: 'Hvem har beste rente på forbrukslån i 2026?', a: 'Per mars 2026 tilbyr Okida den laveste renten fra 5,45% (med sikkerhet). For usikrede lån tilbyr Bank Norwegian fra 7,9% og Santander fra 7,9%. Faktisk rente avhenger av kredittscore og økonomisk situasjon.' },
  { q: 'Er det lurt å bruke lånemegler?', a: 'Ja, absolutt. En lånemegler som Zensum eller Lendo sender søknaden din til opptil 25 banker. Det sparer tid og øker sjansen for å finne den laveste renten. Tjenesten er gratis for deg.' },
]

export default function BesteForbrukslan() {
  const topProviders = getTopProviders(10)
  const unsecured = loanProviders.filter(p => p.loanType === 'unsecured' || p.loanType === 'broker').sort((a, b) => (a.minRate || 99) - (b.minRate || 99))

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <Breadcrumb items={[{ name: 'Beste forbrukslån' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Beste forbrukslån i 2026 — Topp 10</h1>
      <p className="text-lg text-text-secondary mb-8">Rangert etter rente, vilkår, fleksibilitet og vår redaksjonelle vurdering. Vi oppdaterer listen hver måned.</p>

      <ComparisonTable providers={topProviders} title="Sammenligning — Alle långivere" />

      <div className="prose prose-lg max-w-none mt-8 mb-8">
        <h2>Vår vurdering</h2>
        <p>
          Vi rangerer långiverne basert på fire faktorer: rente (40%), fleksibilitet og vilkår (25%), kundeopplevelse og digital prosess (20%), og tilgjengelighet — hvem de faktisk godkjenner (15%).
        </p>
        <p>
          Bank Norwegian topper listen i 2026 takket være konkurransedyktig rente, enkel digital prosess, og at de har vært konsistente over tid. De er ikke alltid billigst på rente, men totalpakken er vanskelig å slå.
        </p>
        <p>
          Zensum og Lendo scorer også høyt fordi de er lånemeglere — de sender søknaden til mange banker og lar dem konkurrere. Det gir deg ofte bedre vilkår enn å søke direkte hos én bank.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Detaljert oversikt</h2>
        <div className="space-y-4">
          {topProviders.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
      <InternalLinks exclude="/beste-forbrukslan" />
    </div>
  )
}
