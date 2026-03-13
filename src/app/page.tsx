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

      {/* Hero — human, trustworthy, action-oriented */}
      <section className="bg-gradient-to-b from-white to-[#f8fafc] border-b border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 sm:pt-16 pb-10 sm:pb-14">
          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8 text-[13px] text-text-muted">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-mint-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Uavhengig sammenligning
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-mint-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Oppdatert mars 2026
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-mint-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              20+ banker
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[32px] sm:text-[48px] font-bold text-text-primary leading-[1.1] tracking-tight mb-5">
              Finn det billigste forbrukslånet
            </h1>
            <p className="text-[17px] sm:text-[19px] text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Sammenlign renter fra Norges banker — se hva du kan spare, og søk direkte. 
              <span className="text-text-primary font-medium"> 100% gratis.</span>
            </p>

            {/* Quick input CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
              <Link href="#topp-lan" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl text-[16px] transition-all shadow-lg shadow-brand-600/20 hover:shadow-xl hover:shadow-brand-600/25 hover:-translate-y-0.5">
                Se dagens beste lån
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" /></svg>
              </Link>
              <Link href="#kalkulator" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-white hover:bg-gray-50 text-text-primary font-medium rounded-xl text-[16px] transition-colors border border-border">
                <svg className="w-5 h-5 mr-2 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                Beregn månedskostnad
              </Link>
            </div>

            {/* Key stats — cleaner row */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[14px] text-text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-[22px]">📉</span>
                <span>Fra <strong className="text-text-primary">5,45%</strong> eff. rente</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[22px]">💰</span>
                <span>Opptil <strong className="text-text-primary">600 000 kr</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[22px]">⚡</span>
                <span>Svar på <strong className="text-text-primary">~2 min</strong></span>
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
