import { Metadata } from 'next'
import ComparisonTable from '@/components/ComparisonTable'
import Calculator from '@/components/Calculator'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import Breadcrumb from '@/components/Breadcrumb'
import InternalLinks from '@/components/InternalLinks'
import { loanProviders } from '@/data/loans'

export const metadata: Metadata = {
  title: 'Sammenlign forbrukslån — Alle banker side om side',
  description: 'Sammenlign forbrukslån fra 20+ norske banker. Se renter, lånebeløp, nedbetalingstid og vilkår i én oversikt. Helt uavhengig.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/sammenlign' },
}

export default function Sammenlign() {
  const sorted = [...loanProviders].sort((a, b) => (a.minRate || 99) - (b.minRate || 99))

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ name: 'Sammenlign forbrukslån' }]} />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">Sammenlign forbrukslån</h1>
      <p className="text-lg text-text-secondary mb-8">Alle banker og lånemeglere i én oversikt. Sortert etter laveste rente. Klikk &ldquo;Søk nå&rdquo; for å gå direkte til søknadsskjemaet.</p>

      <div className="mb-8"><Calculator /></div>

      <ComparisonTable providers={sorted} title="Alle forbrukslån — sortert etter rente" />

      <div className="prose prose-lg max-w-none mt-8 mb-8">
        <h2>Slik bruker du sammenligningen</h2>
        <p>
          Tabellen over viser alle forbrukslån vi sammenligner. «Rente fra» viser den laveste nominelle renten hver långiver tilbyr — den du faktisk får avhenger av kredittscore, inntekt og gjeldsbyrde.
        </p>
        <p>
          Vårt tips: Bruk kalkulatoren øverst for å beregne hva et lån faktisk koster deg. Søk deretter hos 2-3 av de best rangerte — eller bruk en lånemegler som sender søknaden til mange samtidig.
        </p>
      </div>

      <InternalLinks exclude="/sammenlign" />
      <div className="mt-12"><AffiliateDisclaimer /></div>
    </div>
  )
}
