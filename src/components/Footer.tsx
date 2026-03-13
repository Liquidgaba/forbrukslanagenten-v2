import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">Forbrukslån</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/forbrukslan" className="hover:text-white transition-colors">Om forbrukslån</Link></li>
              <li><Link href="/beste-forbrukslan" className="hover:text-white transition-colors">Beste forbrukslån</Link></li>
              <li><Link href="/billigste-forbrukslan" className="hover:text-white transition-colors">Billigste lån</Link></li>
              <li><Link href="/kalkulator" className="hover:text-white transition-colors">Lånekalkulator</Link></li>
              <li><Link href="/sammenlign" className="hover:text-white transition-colors">Sammenlign</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Betalingsanmerkning</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/lan-med-betalingsanmerkning" className="hover:text-white transition-colors">Lån med anmerkning</Link></li>
              <li><Link href="/smalan-med-betalingsanmerkning" className="hover:text-white transition-colors">Smålån med anmerkning</Link></li>
              <li><Link href="/refinansiering-med-betalingsanmerkning" className="hover:text-white transition-colors">Refinansiering</Link></li>
              <li><Link href="/garantert-lan-med-betalingsanmerkning" className="hover:text-white transition-colors">Garantert lån</Link></li>
              <li><Link href="/lan-etter-slettet-betalingsanmerkning" className="hover:text-white transition-colors">Etter slettet anmerkning</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Refinansiering</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/refinansiering" className="hover:text-white transition-colors">Refinansiering</Link></li>
              <li><Link href="/refinansiering/uten-sikkerhet" className="hover:text-white transition-colors">Uten sikkerhet</Link></li>
              <li><Link href="/refinansiering/med-sikkerhet" className="hover:text-white transition-colors">Med sikkerhet</Link></li>
              <li><Link href="/samle-forbrukslan" className="hover:text-white transition-colors">Samle forbrukslån</Link></li>
              <li><Link href="/samlelan" className="hover:text-white transition-colors">Samlelån</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Om oss</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/om-oss" className="hover:text-white transition-colors">Om Forbrukslånagenten</Link></li>
              <li><Link href="/metodikk" className="hover:text-white transition-colors">Vår metodikk</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt oss</Link></li>
              <li><Link href="/personvern" className="hover:text-white transition-colors">Personvern</Link></li>
              <li><Link href="/vilkar" className="hover:text-white transition-colors">Vilkår</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-500 mb-4">
            <strong>Annonselenker:</strong> Forbrukslånagenten.no inneholder annonselenker til våre samarbeidspartnere. Vi kan motta provisjon når du klikker på lenker og søker om lån. Dette påvirker ikke våre vurderinger eller anbefalinger, og det koster deg ingenting ekstra. Alle vurderinger er basert på uavhengig research og sammenligning av vilkår.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} Forbrukslånagenten — Et produkt av INNOVENA AS</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link href="/personvern" className="hover:text-gray-300">Personvern</Link>
              <Link href="/vilkar" className="hover:text-gray-300">Vilkår</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
