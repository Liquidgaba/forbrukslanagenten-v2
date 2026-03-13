import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getTopProviders } from '@/data/loans'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Lån til førerkort — Finansier sertifikatet smart 2026',
  description: 'Trenger du lån til førerkort? Førerkort klasse B koster 25 000-45 000 kr. Sammenlign lån med lavest rente for å finansiere sertifikatet.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-til-forerkort' },
}

const faqs = [
  { q: 'Hva koster førerkort i Norge?', a: 'Førerkort klasse B koster typisk mellom 25 000 og 45 000 kr, avhengig av kjøreskole, antall timer og hvor i landet du bor. Oslo og Bergen er dyrere enn mindre steder.' },
  { q: 'Kan jeg ta opp lån til førerkort?', a: 'Ja. Et forbrukslån eller smålån på 25 000-50 000 kr er vanlig. Noen kjøreskoler tilbyr også egne betalingsordninger.' },
  { q: 'Er det lurt å låne til førerkort?', a: 'Det kan være en fornuftig investering — spesielt hvis sertifikatet gir deg tilgang til jobb. Velg lån med lavest mulig rente og kort nedbetalingstid (1-2 år) for å minimere rentekostnaden.' },
  { q: 'Finnes det stipend til førerkort?', a: 'Ikke direkte, men Lånekassen gir utdanningsstøtte som kan dekke førerkort hvis det er nødvendig for utdanningen din. NAV kan også dekke førerkort som arbeidsrettet tiltak.' },
]

export default function LanTilForerkort() {
  const providers = getTopProviders(6)
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Lån til førerkort', url: '/lan-til-forerkort' }])) }} />
      <Breadcrumb items={[{ name: 'Lån til førerkort' }]} />
      <AffiliateDisclaimer />
      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">Lån til førerkort — slik finansierer du sertifikatet</h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Førerkort er dyrt — mellom 25 000 og 45 000 kr for klasse B. Hvis du ikke har pengene på konto, kan et forbrukslån med lav rente være en smart investering i fremtiden din.
      </p>

      <div className="bg-surface-sunken rounded-xl p-5 sm:p-6 mb-10">
        <h2 className="text-[16px] font-semibold text-text-primary mb-3">💡 Hva koster det å låne til førerkort?</h2>
        <div className="grid sm:grid-cols-3 gap-4 text-[14px] text-text-secondary">
          <div className="bg-white rounded-lg p-3 border border-border">
            <div className="font-semibold text-text-primary">35 000 kr × 8% × 2 år</div>
            <div>Månedlig: 1 585 kr</div>
            <div>Totalkostnad: 38 040 kr</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-border">
            <div className="font-semibold text-text-primary">35 000 kr × 12% × 2 år</div>
            <div>Månedlig: 1 651 kr</div>
            <div>Totalkostnad: 39 624 kr</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-border">
            <div className="font-semibold text-text-primary">35 000 kr × 18% × 2 år</div>
            <div>Månedlig: 1 748 kr</div>
            <div>Totalkostnad: 41 952 kr</div>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Beste lån for førerkort</h2>
        <div className="space-y-3">{providers.map((p, i) => <LoanCard key={p.id} provider={p} rank={i + 1} />)}</div>
      </section>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Tips for å spare på førerkortet</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Øvelseskjøring med ledsager</strong> — Spar mange tusen på privat øvelseskjøring med foreldre/venner</li>
            <li><strong>Sammenlign kjøreskoler</strong> — Prisforskjellen kan være opptil 15 000 kr</li>
            <li><strong>Intensivkurs</strong> — Kan være billigere og raskere enn ordinært løp</li>
            <li><strong>Velg kort nedbetalingstid</strong> — 1-2 år gir lavest totalkostnad</li>
            <li><strong>Sjekk kjøreskoles betalingsordning</strong> — Noen tilbyr delbetaling uten rente</li>
          </ul>
        </div>
      </section>
      <FAQ items={faqs} />
    </div>
  )
}
