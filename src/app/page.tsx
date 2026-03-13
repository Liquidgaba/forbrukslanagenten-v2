import { Metadata } from 'next'
import Link from 'next/link'
import LoanCard from '@/components/LoanCard'
import Calculator from '@/components/Calculator'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getTopProviders } from '@/data/loans'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Forbrukslånagenten — Sammenlign forbrukslån i Norge 2026',
  description: 'Sammenlign forbrukslån fra 20+ banker. Finn laveste rente på sekunder, beregn månedskostnad, og søk direkte. Også hjelp med lån ved betalingsanmerkning.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no' },
}

const faqs = [
  { q: 'Hva er et forbrukslån?', a: 'Et forbrukslån er et lån uten sikkerhet som du kan bruke til det du ønsker — oppussing, bilkjøp, refinansiering eller uventede utgifter. Du trenger ikke stille bolig eller bil som pant. Typisk lånebeløp er fra 10 000 til 600 000 kr.' },
  { q: 'Hvor mye kan jeg låne?', a: 'De fleste banker tilbyr forbrukslån fra 10 000 til 600 000 kr. Hvor mye du faktisk får innvilget avhenger av inntekt, gjeld og kredittscore. Har du god økonomi og fast jobb, får du gjerne bedre vilkår.' },
  { q: 'Kan jeg få lån med betalingsanmerkning?', a: 'Ja, noen långivere vurderer søknader selv med betalingsanmerkninger — spesielt hvis du kan stille sikkerhet i bolig. <a href="/lan-med-betalingsanmerkning" class="text-brand-600 underline hover:text-brand-700">Les vår komplette guide om lån med betalingsanmerkning.</a>' },
  { q: 'Hva er forskjellen på nominell og effektiv rente?', a: 'Nominell rente er selve rentesatsen på lånet. Effektiv rente inkluderer i tillegg alle gebyrer (etableringsgebyr, termingebyr osv.). Effektiv rente gir det mest riktige bildet av hva lånet faktisk koster deg.' },
  { q: 'Hvor lang tid tar det å få svar på søknaden?', a: 'De fleste digitale långivere gir svar innen minutter til noen timer. Ved bruk av lånemeglere som sender søknaden til flere banker, kan det ta 1-2 virkedager å motta alle tilbud.' },
]

const categories = [
  { href: '/forbrukslan', title: 'Forbrukslån', desc: 'Alt om forbrukslån — renter, vilkår og tips', icon: '📊' },
  { href: '/refinansiering', title: 'Refinansiering', desc: 'Senk renten ved å samle lån', icon: '🔄' },
  { href: '/lan-med-betalingsanmerkning', title: 'Lån med anmerkning', desc: 'Muligheter selv med betalingsanmerkning', icon: '🔓' },
  { href: '/lan-uten-sikkerhet', title: 'Lån uten sikkerhet', desc: 'Usikrede lån uten pant i bolig', icon: '🏠' },
  { href: '/smalan', title: 'Smålån', desc: 'Mindre beløp — raskt utbetalt', icon: '⚡' },
  { href: '/samle-forbrukslan', title: 'Samle forbrukslån', desc: 'Slå sammen flere dyre lån til ett', icon: '📦' },
]

export default function Home() {
  const topProviders = getTopProviders(10)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }])) }} />

      {/* Hero — Fjordkraft-style: warm cream, two-column, rounded card */}
      <section style={{background: '#fdf8f4', paddingTop: '2rem', paddingBottom: '2.5rem'}}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Hero card — warm peach background, rounded, like Fjordkraft */}
          <div className="rounded-2xl overflow-hidden" style={{background: '#fdf0e6', border: '1px solid #e8ddd5'}}>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: text */}
              <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
                <p className="text-[13px] font-semibold uppercase mb-5" style={{color: '#7a5c45', letterSpacing: '0.08em'}}>
                  Uavhengig sammenligning · Mars 2026
                </p>
                <h1 className="heading-xl text-[38px] sm:text-[50px] mb-5" style={{color: '#1a0800'}}>
                  Finn billigste<br />forbrukslån
                </h1>
                <ul className="space-y-3 mb-8">
                  {[
                    'Sammenlign 20+ norske banker',
                    'Ingen påvirkning på kredittscore',
                    'Gratis og helt uavhengig',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#e8560a'}}>
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[15px] font-medium" style={{color: '#3d2010'}}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="#topp-lan" className="btn-primary text-[15px] px-7 py-3.5">
                    Se beste lån nå
                  </Link>
                  <Link href="#kalkulator" className="btn-outline text-[15px] px-7 py-3.5">
                    Beregn kostnad
                  </Link>
                </div>
              </div>

              {/* Right: stats panel */}
              <div className="hidden lg:flex flex-col justify-center p-14 gap-5" style={{background: '#fceee6'}}>
                {[
                  { num: '5,45 %', label: 'Laveste rente vi har funnet' },
                  { num: '600 000 kr', label: 'Maks lånebeløp uten sikkerhet' },
                  { num: '~2 min', label: 'Og du har svar fra banken' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-5" style={{border: '1px solid #e8ddd5'}}>
                    <div className="text-[30px] font-black mb-1" style={{color: '#e8560a'}}>{item.num}</div>
                    <div className="text-[14px] font-medium" style={{color: '#7a5c45'}}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="pt-10">
        </div>

        {/* Calculator */}
        <Calculator />

        {/* Top 10 */}
        <section id="topp-lan" className="mt-16">
          <div className="mb-8">
            <h2 className="heading-lg text-[28px] sm:text-[34px] text-text-primary">Topp 10 forbrukslån i 2026</h2>
            <p className="text-[16px] text-text-secondary mt-3">Rangert etter rente, vilkår og kundetilfredshet. Oppdatert mars 2026.</p>
          </div>
          <div className="space-y-3">
            {topProviders.map((p, i) => (
              <LoanCard key={p.id} provider={p} rank={i + 1} />
            ))}
          </div>
        </section>

        {/* Payment remarks CTA */}
        <section className="mt-16 rounded-2xl p-6 sm:p-8 overflow-hidden" style={{background: 'linear-gradient(135deg, #f0f4f9 0%, #e8eef5 100%)', border: '1px solid #d9e5f0'}}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-[24px]">
              🔓
            </div>
            <div className="flex-grow">
              <h2 className="text-[18px] font-bold text-text-primary mb-1">Har du betalingsanmerkning?</h2>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                Det finnes muligheter — selv med anmerkninger på kredittsjekken. 
                Noen långivere spesialiserer seg på dette, spesielt med sikkerhet i bolig.
              </p>
            </div>
            <Link href="/lan-med-betalingsanmerkning" className="fjord-btn-primary inline-flex items-center gap-2 text-[14px] whitespace-nowrap flex-shrink-0">
              Les mer →
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="mt-16">
          <h2 className="text-[22px] sm:text-[26px] font-bold text-text-primary mb-6">Utforsk etter kategori</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map(c => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex items-start gap-4 bg-white rounded-xl border border-border p-5 hover:border-brand-200 hover:shadow-[0_2px_12px_rgba(0,107,207,0.06)] transition-all duration-200"
              >
                <span className="text-[22px] flex-shrink-0 mt-0.5">{c.icon}</span>
                <div>
                  <h3 className="text-[15px] font-semibold text-text-primary group-hover:text-brand-600 transition-colors">{c.title}</h3>
                  <p className="text-[13px] text-text-secondary mt-1 leading-relaxed">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <FAQ items={faqs} />

        <div className="mt-12">
          <AffiliateDisclaimer />
        </div>

        {/* Bottom SEO content */}
        <section className="mt-16 prose prose-gray max-w-none">
          <h2 className="text-[22px] font-bold text-text-primary">Slik sammenligner du forbrukslån</h2>
          <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
            <p>
              Å finne det rette forbrukslånet handler ikke bare om renten. Du bør også vurdere etableringsgebyr, 
              termingebyr, fleksibilitet i nedbetalingstiden, og om banken tilbyr avdragsfrihet eller mulighet for ekstra 
              innbetalinger uten gebyr.
            </p>
            <p>
              Vi har testet og sammenlignet over 20 banker og lånemeglere som tilbyr forbrukslån i Norge. 
              Vurderingene våre er basert på effektiv rente, vilkår, kundeopplevelse og fleksibilitet. 
              Alle tallene oppdateres jevnlig for å gi deg det mest nøyaktige bildet.
            </p>
            <p>
              Bruker du en lånemegler som Lendo, Zensum eller Klikklån, sender du én søknad som behandles av 
              flere banker samtidig. Det gir deg muligheten til å sammenligne flere tilbud uten at det påvirker 
              kredittscore å søke via en megler.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
