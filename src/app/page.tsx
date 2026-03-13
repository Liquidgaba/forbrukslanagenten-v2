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
  { q: 'Hva er et forbrukslån?', a: 'Et forbrukslån er et lån uten sikkerhet som du kan bruke til hva du vil — oppussing, bilkjøp, refinansiering eller uventede utgifter. Du trenger ikke stille bolig eller bil som pant. Typisk lånebeløp er fra 10 000 til 600 000 kr.' },
  { q: 'Hvor mye kan jeg låne?', a: 'De fleste banker tilbyr forbrukslån fra 10 000 til 600 000 kr. Hvor mye du faktisk får innvilget avhenger av inntekt, gjeld og kredittscore. Har du god økonomi og fast jobb, får du gjerne bedre vilkår.' },
  { q: 'Kan jeg få lån med betalingsanmerkning?', a: 'Ja, noen långivere vurderer søknader selv med betalingsanmerkninger — spesielt hvis du kan tilby sikkerhet i bolig. <a href="/lan-med-betalingsanmerkning" class="text-primary-600 underline">Les vår komplette guide om lån med betalingsanmerkning.</a>' },
  { q: 'Hva er forskjellen på nominell og effektiv rente?', a: 'Nominell rente er selve rentesatsen på lånet. Effektiv rente inkluderer i tillegg alle gebyrer (etableringsgebyr, termingebyr osv.). Effektiv rente gir det mest riktige bildet av hva lånet faktisk koster deg.' },
  { q: 'Hvor lang tid tar det å få svar på søknaden?', a: 'De fleste digitale långivere gir svar innen minutter til noen timer. Ved bruk av lånemeglere som sender søknaden til flere banker, kan det ta 1-2 virkedager å motta alle tilbud.' },
]

export default function Home() {
  const topProviders = getTopProviders(10)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }])) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
              Sammenlign forbrukslån<br />fra Norges beste banker
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl">
              Vi har gjort jobben for deg. Finn laveste rente, beregn hva lånet faktisk koster, og søk direkte hos banken — alt på ett sted.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/sammenlign" className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors">
                Sammenlign nå →
              </Link>
              <Link href="/kalkulator" className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20">
                Beregn lånet ditt
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <AffiliateDisclaimer />

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Banker sammenlignet', value: '20+' },
            { label: 'Laveste rente', value: 'fra 5,45 %' },
            { label: 'Maks lånebeløp', value: '10 mill kr' },
            { label: 'Svar på', value: 'Minutter' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Calculator */}
        <div className="mb-12">
          <Calculator />
        </div>

        {/* Top 10 */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Topp 10 forbrukslån i 2026</h2>
          <p className="text-gray-500 mb-6">Rangert etter rente, vilkår og kundetilfredshet. Oppdatert mars 2026.</p>
          <div className="space-y-4">
            {topProviders.map((p, i) => (
              <LoanCard key={p.id} provider={p} rank={i + 1} />
            ))}
          </div>
        </section>

        {/* Payment remarks CTA */}
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Har du betalingsanmerkning?</h2>
          <p className="text-gray-600 mb-4">
            Det finnes faktisk muligheter — selv med anmerkninger på kredittsjekken. Noen långivere spesialiserer seg på dette, spesielt hvis du kan stille sikkerhet. Vi har samlet alt du trenger å vite.
          </p>
          <Link href="/lan-med-betalingsanmerkning" className="inline-flex items-center px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors text-sm">
            Se muligheter med anmerkning →
          </Link>
        </section>

        {/* Category links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Utforsk etter kategori</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: '/forbrukslan', title: 'Forbrukslån', desc: 'Alt om forbrukslån — renter, vilkår og tips' },
              { href: '/refinansiering', title: 'Refinansiering', desc: 'Senk renten ved å samle lån' },
              { href: '/lan-med-betalingsanmerkning', title: 'Lån med anmerkning', desc: 'Muligheter når kreditten svikter' },
              { href: '/lan-uten-sikkerhet', title: 'Lån uten sikkerhet', desc: 'Usikrede lån uten pant i bolig' },
              { href: '/lan-med-sikkerhet', title: 'Lån med sikkerhet', desc: 'Lavere rente med pant i bolig' },
              { href: '/samle-forbrukslan', title: 'Samle forbrukslån', desc: 'Slå sammen flere smålån til ett' },
            ].map(c => (
              <Link key={c.href} href={c.href} className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-primary-300 transition-all">
                <h3 className="font-semibold text-gray-900 mb-1">{c.title}</h3>
                <p className="text-sm text-gray-500">{c.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <FAQ items={faqs} />
      </div>
    </>
  )
}
