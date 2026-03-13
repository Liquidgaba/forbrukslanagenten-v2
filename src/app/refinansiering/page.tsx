import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getSecuredProviders } from '@/data/loans'

export const metadata: Metadata = {
  title: 'Refinansiering av lån — Spar tusenvis på å samle gjeld',
  description: 'Refinansier forbrukslån og kredittkortgjeld. Sammenlign refinansieringstilbud fra 15+ banker. Spar opptil 50% på månedlige utgifter.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/refinansiering' },
}

const faqs = [
  { q: 'Hva betyr refinansiering?', a: 'Refinansiering betyr at du tar opp et nytt lån for å betale ned ett eller flere eksisterende lån. Målet er som regel å få lavere rente, lavere månedlige utgifter, eller begge deler.' },
  { q: 'Kan jeg refinansiere med betalingsanmerkning?', a: 'Ja, men da kreves det som regel sikkerhet i bolig. Noen spesialbanker som Okida, Varde Finans og Scoopr tilbyr refinansiering til personer med betalingsanmerkninger. <a href="/refinansiering-med-betalingsanmerkning" class="text-brand-600 underline">Les mer om refinansiering med anmerkning →</a>' },
  { q: 'Hvor mye kan jeg spare på refinansiering?', a: 'Det avhenger av nåværende rente og gjeldsmengde. Mange sparer mellom 2 000 og 5 000 kr i måneden ved å samle dyr kredittkortgjeld og smålån til ett lån med lavere rente.' },
  { q: 'Er det gebyr for å refinansiere?', a: 'Det kan påløpe etableringsgebyr for det nye lånet, men du slipper gebyrer for å innfri de gamle lånene. Totalt sett er besparelsen nesten alltid større enn gebyrkostnadene.' },
]

export default function Refinansiering() {
  const providers = getSecuredProviders()

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <Breadcrumb items={[{ name: 'Refinansiering' }]} />

      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">
        Refinansiering av lån — spar tusenvis hver måned
      </h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Betaler du for mye i renter? Ved å samle forbrukslån, kredittkortgjeld og smålån til ett lån med lavere rente kan du spare 
        betydelig hver måned. Vi har sammenlignet de beste refinansieringstilbudene i Norge.
      </p>

      <div className="bg-mint-50 border border-mint-200 rounded-xl p-5 sm:p-6 mb-10">
        <h2 className="text-[16px] font-semibold text-text-primary mb-2">💡 Visste du?</h2>
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Gjennomsnittlig rente på kredittkort i Norge er rundt 20-24%. Et refinansieringslån kan gi deg rente helt ned mot 5-8% 
          med sikkerhet i bolig. For en gjeld på 300 000 kr betyr det en besparelse på opptil 45 000 kr i året.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Beste refinansieringstilbud 2026</h2>
        <div className="space-y-3">
          {providers.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Slik fungerer refinansiering</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>
            Refinansiering handler i bunn og grunn om å bytte ut dyre lån med ett billigere. Prosessen er enkel: 
            Du søker om et nytt lån som dekker den totale gjelden din, og bruker pengene til å innfri de gamle lånene. 
            Deretter har du kun ett lån å forholde deg til, ofte med betraktelig lavere rente.
          </p>
          <p>
            Det finnes to hovedtyper refinansiering: <strong>uten sikkerhet</strong> (der du bytter forbrukslån med et nytt forbrukslån 
            til bedre vilkår) og <strong>med sikkerhet i bolig</strong> (der du bruker boligen som pant og kan oppnå mye lavere rente). 
            Hvilken løsning som passer best avhenger av gjeldsmengde, boligverdi og din økonomiske situasjon.
          </p>
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Når bør du refinansiere?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Du har flere småkreditter eller kredittkort med høy rente</li>
            <li>Du sliter med å holde oversikt over flere betalinger hver måned</li>
            <li>Renten på eksisterende lån er vesentlig høyere enn det markedet tilbyr</li>
            <li>Du ønsker én fast betaling i stedet for mange ulike forfallsdatoer</li>
          </ul>
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Refinansiering med sikkerhet vs. uten</h3>
          <p>
            Med sikkerhet i bolig kan renten bli vesentlig lavere (typisk 5-8% vs. 12-20% uten sikkerhet). Men det betyr 
            også at boligen din er stilt som pant. For større gjeldsmengder (over 200 000 kr) er refinansiering med sikkerhet 
            ofte det mest fornuftige valget — forutsatt at du har nok egenkapital i boligen.
          </p>
        </div>
      </section>

      <FAQ items={faqs} />

      <div className="mt-12">
        <AffiliateDisclaimer />
      </div>
    </div>
  )
}
