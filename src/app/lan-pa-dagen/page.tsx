import { Metadata } from 'next'
import LoanCard from '@/components/LoanCard'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import FAQ from '@/components/FAQ'
import { getTopProviders } from '@/data/loans'

export const metadata: Metadata = {
  title: 'Lån på dagen — Få penger utbetalt i dag 2026',
  description: 'Trenger du lån på dagen? Se hvilke banker som tilbyr rask utbetaling. Svar på minutter, penger på konto samme dag. Sammenlign her.',
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no/lan-pa-dagen' },
}

const faqs = [
  { q: 'Kan jeg virkelig få lån utbetalt på dagen?', a: 'Ja, men det avhenger av tidspunktet du søker. Søker du tidlig på hverdager (før kl. 11), er sjansen god for at pengene er på konto samme dag. Etter kl. 15 må du som regel vente til neste virkedag.' },
  { q: 'Hvilke banker tilbyr raskest utbetaling?', a: 'Bank Norwegian og Ferratum er kjent for rask behandling. Lånemeglere som Klikklån og Zensum kan også gi raskt svar, men utbetalingen skjer fra banken som gir tilbudet.' },
  { q: 'Påvirker det renten om jeg trenger lån raskt?', a: 'Nei, renten er den samme uavhengig av hvor raskt du trenger pengene. Du betaler aldri ekstra for rask behandling.' },
]

export default function LanPaDagen() {
  const providers = getTopProviders(8)

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <Breadcrumb items={[{ name: 'Lån på dagen' }]} />
      <AffiliateDisclaimer />

      <h1 className="text-[28px] sm:text-[36px] font-bold text-text-primary leading-tight mb-4">
        Lån på dagen — raskt svar, rask utbetaling
      </h1>
      <p className="text-[16px] text-text-secondary leading-relaxed max-w-3xl mb-10">
        Noen ganger haster det. Vi har samlet bankene med raskest behandling og utbetaling — 
        slik at du kan få pengene på konto i dag.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 sm:p-6 mb-10">
        <h2 className="text-[16px] font-semibold text-text-primary mb-2">⏰ Tips for raskest utbetaling</h2>
        <ul className="text-[14px] text-text-secondary space-y-1.5">
          <li>• Søk tidlig på dagen (helst før kl. 11:00)</li>
          <li>• Ha BankID klar — digital signering gir raskest prosess</li>
          <li>• Søk direkte hos banker, ikke via meglere (raskere behandling)</li>
          <li>• Bankenes overføringstider: 05:35, 11:50, 13:05 og 15:35</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-[22px] font-bold text-text-primary mb-6">Banker med rask utbetaling</h2>
        <div className="space-y-3">
          {providers.map((p, i) => (
            <LoanCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      <section className="prose max-w-none mb-12">
        <h2 className="text-[22px] font-bold text-text-primary">Slik fungerer lån på dagen</h2>
        <div className="text-[15px] text-text-secondary leading-relaxed space-y-4 mt-4">
          <p>
            «Lån på dagen» betyr at du kan motta pengene på kontoen din samme dag som du søker. 
            I praksis betyr det at hele prosessen — fra søknad til kredittvurdering til signering og utbetaling — 
            skjer innen noen timer.
          </p>
          <p>
            De fleste banker gjør automatisk kredittvurdering for mindre beløp (typisk under 200 000 kr). 
            For høyere beløp kan det kreves manuell behandling, noe som kan ta lengre tid. 
            Søker du sent på dagen eller i helgen, blir utbetalingen vanligvis registrert neste virkedag.
          </p>
          <h3 className="text-[18px] font-semibold text-text-primary mt-6">Lån på dagen vs. smålån</h3>
          <p>
            Mange forbinder «lån på dagen» med dyre smålån, men det stemmer ikke nødvendigvis. 
            Også vanlige forbrukslån fra anerkjente banker kan utbetales på dagen — til normal rente. 
            Unngå tilbydere som markedsfører seg med svært rask utbetaling men samtidig tar urimelig høy rente.
          </p>
        </div>
      </section>

      <FAQ items={faqs} />
    </div>
  )
}
