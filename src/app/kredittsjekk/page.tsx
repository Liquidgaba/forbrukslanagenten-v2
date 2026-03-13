import { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Kredittsjekk — Hva er det og hvordan påvirker det deg?',
  description: 'Alt om kredittsjekk i Norge. Hva sjekkes, hvem kan gjøre det, og hvordan påvirker det lånesøknaden din? Komplett guide 2026.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/kredittsjekk' },
}

const faqs = [
  { q: 'Hva er en kredittsjekk?', a: 'En kredittsjekk er en vurdering av din økonomiske situasjon. Banken sjekker inntekt, gjeld, betalingshistorikk og eventuelle betalingsanmerkninger for å vurdere om du kan betjene et lån.' },
  { q: 'Hvem kan kredittsjekke meg?', a: 'Bedrifter med saklig grunn kan gjøre kredittsjekk — som banker ved lånesøknad, utleiere ved boligsøknad, eller teleselskap ved abonnement. Du får alltid varsel når du blir kredittvurdert.' },
  { q: 'Påvirker mange kredittsjekker kredittscore?', a: 'I Norge har vi ikke et poengbasert kredittscore-system som i USA. Men mange kredittsøknader i kort tid kan signalisere finansielle problemer. Bruk heller lånemeglere som sender én søknad til mange banker.' },
  { q: 'Hvordan sjekker jeg min egen kredittstatus?', a: 'Du kan sjekke gratis hos kredittopplysningsbyråene: Bisnode (Dun & Bradstreet), Experian, eller Creditsafe. Der ser du eventuelle betalingsanmerkninger og registrert gjeld.' },
  { q: 'Hva er forskjellen på kredittsjekk og kredittscore?', a: 'En kredittsjekk er selve handlingen der noen vurderer din økonomi. Kredittscore er en tallverdi som noen kredittvurderingsbyråer beregner. I Norge er det ingen universell kredittscore — hvert byrå har sin egen modell.' },
]

export default function Kredittsjekk() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hjem', url: '/' }, { name: 'Kredittsjekk', url: '/kredittsjekk' }])) }} />
      <Breadcrumb items={[{ name: 'Kredittsjekk' }]} />

      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">Kredittsjekk — alt du trenger å vite</h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Når du søker lån, gjør banken alltid en kredittsjekk. Men hva innebærer det egentlig? Og hvordan kan du forbedre sjansene for å bli godkjent? Her er den komplette guiden.
      </p>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Hva sjekkes i en kredittvurdering?</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>Når banken gjør en kredittsjekk, ser de på flere faktorer:</p>
          
          <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
            {[
              { title: 'Inntekt', desc: 'Fast inntekt fra jobb, pensjon eller ytelser. Høyere inntekt gir bedre vilkår.' },
              { title: 'Gjeld', desc: 'All registrert gjeld — boliglån, billån, forbrukslån, kredittkort. Gjeldsgrad (gjeld/inntekt) er viktig.' },
              { title: 'Betalingsanmerkninger', desc: 'Ubetalte krav som har gått til inkasso eller rettslig inndriving. Stor negativ effekt.' },
              { title: 'Gjeldsregisteret', desc: 'Oversikt over all usikret gjeld du har. Innført i 2019 for å forhindre overbelåning.' },
            ].map(item => (
              <div key={item.title} className="bg-surface-sunken rounded-lg p-4">
                <div className="text-[14px] font-semibold text-text-primary mb-1">{item.title}</div>
                <div className="text-[13px] text-text-secondary">{item.desc}</div>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Slik forbedrer du sjansene</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Betal ned kredittkort</strong> — reduser brukt kreditt til under 50% av rammen</li>
            <li><strong>Unngå mange søknader</strong> — bruk lånemeglere i stedet for å søke hos mange banker enkeltvis</li>
            <li><strong>Sjekk gjeldsregisteret</strong> — sørg for at informasjonen stemmer</li>
            <li><strong>Vent med søknaden</strong> — hvis du nylig har fått avslag, vent minst 30 dager</li>
            <li><strong>Vurder medsøker</strong> — en person med god økonomi kan styrke søknaden</li>
          </ul>

          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Kredittopplysningsbyråer i Norge</h3>
          <p>De tre største er Bisnode (Dun & Bradstreet), Experian og Creditsafe. Alle tilbyr gratis innsyn i egne data. Du har rett til å se hva som er registrert om deg, og du kan klage hvis noe er feil.</p>
        </div>
      </section>

      <FAQ items={faqs} />
    </div>
  )
}
