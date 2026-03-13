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
  { href: '/lan-med-betalingsanmerkning', title: 'Lån med anmerkning', desc: 'Muligheter selv med prikk på rullebladet', icon: '🔓' },
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

      {/* Hero — light, spacious, human */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 sm:pt-20 pb-12 sm:pb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint-50 text-[13px] text-mint-700 font-medium mb-5 border border-mint-200">
                <span className="w-1.5 h-1.5 bg-mint-500 rounded-full" />
                Oppdatert mars 2026
              </div>
              <h1 className="text-[30px] sm:text-[44px] font-bold text-text-primary leading-[1.15] tracking-tight mb-5">
                Sammenlign forbrukslån<br className="hidden sm:block" /> og spar tusenvis
              </h1>
              <p className="text-[16px] sm:text-[18px] text-text-secondary leading-relaxed mb-8 max-w-lg">
                Vi sammenligner renter fra 20+ banker — slik at du slipper. Finn laveste rente, beregn hva lånet koster, og søk direkte.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#topp-lan" className="inline-flex items-center px-6 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl text-[15px] transition-colors shadow-sm">
                  Se beste lån →
                </Link>
                <Link href="#kalkulator" className="inline-flex items-center px-6 py-3.5 bg-surface-sunken hover:bg-gray-100 text-text-primary font-semibold rounded-xl text-[15px] transition-colors border border-border">
                  Beregn lånet ditt
                </Link>
              </div>
            </div>

            {/* Right side — quick stats cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: '20+', label: 'Banker sammenlignet', icon: '🏦' },
                { value: 'fra 5,45%', label: 'Laveste effektive rente', icon: '📉' },
                { value: '600 000 kr', label: 'Maks uten sikkerhet', icon: '💰' },
                { value: '~2 min', label: 'Søknadstid', icon: '⚡' },
              ].map(s => (
                <div key={s.label} className="bg-surface-sunken rounded-xl p-4 sm:p-5 border border-border">
                  <span className="text-[20px]">{s.icon}</span>
                  <div className="text-[20px] font-bold text-text-primary mt-2">{s.value}</div>
                  <div className="text-[13px] text-text-muted mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="py-10">
          <AffiliateDisclaimer />
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
        <section className="mt-16 bg-warm-50 border border-warm-200 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-shrink-0 w-12 h-12 bg-warm-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-warm-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-[18px] font-bold text-text-primary mb-1">Har du betalingsanmerkning?</h2>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                Det finnes faktisk muligheter — selv med anmerkninger på kredittsjekken. 
                Noen långivere spesialiserer seg på dette, spesielt med sikkerhet i bolig.
              </p>
            </div>
            <Link href="/lan-med-betalingsanmerkning" className="inline-flex items-center px-5 py-2.5 bg-warm-600 hover:bg-warm-700 text-white font-semibold rounded-lg text-[14px] transition-colors whitespace-nowrap flex-shrink-0">
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
