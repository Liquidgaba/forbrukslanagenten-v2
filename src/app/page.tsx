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

      {/* Hero — Warm Nordic, editorial feel */}
      <section style={{background: 'linear-gradient(160deg, #f0f4f9 0%, #fdfcfb 60%)'}}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-14 sm:pt-22 pb-14 sm:pb-18">
          <div className="text-center max-w-2xl mx-auto">
            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cta-500 flex-shrink-0"></span>
              <span className="text-[13px] font-medium text-text-secondary">Uavhengig • Oppdatert mars 2026 • 20+ banker</span>
            </div>

            <h1 className="fjord-heading text-[38px] sm:text-[52px] text-text-primary mb-5">
              Finn billigste<br className="hidden sm:block" /> forbrukslån i Norge
            </h1>
            <p className="text-[18px] text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
              Sammenlign renter og vilkår fra 20+ norske banker. Gratis, uavhengig og uten påvirkning på kredittscore.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#topp-lan" className="fjord-btn-cta w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[16px]">
                Se beste lån nå
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </Link>
              <Link href="#kalkulator" className="fjord-btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[16px]">
                Beregn månedskostnad
              </Link>
            </div>

            {/* Social proof row — human, not stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <span className="text-[20px]">🏦</span>
                <span className="text-[14px] text-text-secondary"><strong className="text-text-primary font-semibold">20+</strong> banker sammenlignet</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[20px]">⚡</span>
                <span className="text-[14px] text-text-secondary">Svar på <strong className="text-text-primary font-semibold">2 min</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[20px]">🔒</span>
                <span className="text-[14px] text-text-secondary"><strong className="text-text-primary font-semibold">Gratis</strong> og trygt</span>
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
            <h2 className="text-[22px] sm:text-[26px] font-bold text-text-primary">Topp 10 forbrukslån i 2026</h2>
            <p className="text-[15px] text-text-secondary mt-2">Rangert etter rente, vilkår og kundetilfredshet. Oppdatert mars 2026.</p>
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
