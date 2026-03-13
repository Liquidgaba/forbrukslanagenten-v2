import { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Forbrukslån kalkulator — Beregn månedskostnad og totalpris',
  description: 'Gratis lånekalkulator for forbrukslån. Beregn månedlig kostnad, totalpris og rentekostnad. Sammenlign ulike lånebeløp og renter.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/kalkulator' },
}

const faqs = [
  { q: 'Hvordan fungerer kalkulatoren?', a: 'Kalkulatoren beregner månedlig kostnad basert på annuitetslån — der du betaler like mye hver måned. Beløpet inkluderer både avdrag og renter. Totalkostnaden viser hva du betaler totalt over hele nedbetalingsperioden.' },
  { q: 'Er kalkulatoren nøyaktig?', a: 'Kalkulatoren gir et godt estimat, men faktisk kostnad kan variere. Banker legger til gebyrer (etablerings- og termingebyr) som ikke er inkludert her. Se alltid på effektiv rente i det faktiske lånetilbudet.' },
  { q: 'Hva er forskjellen på nominell og effektiv rente?', a: 'Nominell rente er «ren» rente. Effektiv rente inkluderer alle kostnader — gebyrer, forsikring, etc. Vår kalkulator bruker nominell rente, men faktisk kostnad er høyere pga. gebyrer.' },
  { q: 'Hvilken rente bør jeg bruke?', a: 'Bruk renten du faktisk tilbys, eller bruk gjennomsnittet for din situasjon: ~8-10% for gode kunder, ~12-16% for gjennomsnitt, ~18-24% for kunder med dårlig kredittscore.' },
]

export default function KalkulatorPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Lånekalkulator', url: '/kalkulator' }])) }} />
      <Breadcrumb items={[{ name: 'Lånekalkulator' }]} />

      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">Forbrukslån kalkulator — beregn lånet ditt</h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Bruk kalkulatoren til å finne ut hva et forbrukslån faktisk koster. Juster beløp, rente og nedbetalingstid for å se månedskostnad og totalpris.
      </p>

      <Calculator />

      <section className="mt-12 prose max-w-none">
        <h2 className="text-[22px] font-bold text-text-primary">Typiske lånekostnader i Norge 2026</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <div className="overflow-x-auto not-prose my-6">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="bg-surface-sunken">
                  <th className="text-left p-3 font-semibold text-text-primary">Beløp</th>
                  <th className="text-left p-3 font-semibold text-text-primary">Rente 8%</th>
                  <th className="text-left p-3 font-semibold text-text-primary">Rente 12%</th>
                  <th className="text-left p-3 font-semibold text-text-primary">Rente 18%</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3 text-text-primary font-medium">100 000 kr</td><td className="p-3 text-text-secondary">2 028 kr/mnd</td><td className="p-3 text-text-secondary">2 224 kr/mnd</td><td className="p-3 text-text-secondary">2 540 kr/mnd</td></tr>
                <tr><td className="p-3 text-text-primary font-medium">200 000 kr</td><td className="p-3 text-text-secondary">4 056 kr/mnd</td><td className="p-3 text-text-secondary">4 449 kr/mnd</td><td className="p-3 text-text-secondary">5 080 kr/mnd</td></tr>
                <tr><td className="p-3 text-text-primary font-medium">300 000 kr</td><td className="p-3 text-text-secondary">6 084 kr/mnd</td><td className="p-3 text-text-secondary">6 673 kr/mnd</td><td className="p-3 text-text-secondary">7 621 kr/mnd</td></tr>
                <tr><td className="p-3 text-text-primary font-medium">500 000 kr</td><td className="p-3 text-text-secondary">10 139 kr/mnd</td><td className="p-3 text-text-secondary">11 122 kr/mnd</td><td className="p-3 text-text-secondary">12 701 kr/mnd</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-text-muted">*Basert på 5 års nedbetalingstid med annuitetslån. Inkluderer ikke gebyrer.</p>
        </div>
      </section>

      <FAQ items={faqs} />
    </div>
  )
}
