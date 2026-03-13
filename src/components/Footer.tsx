import Link from 'next/link'

const categories = [
  {
    title: 'Lån',
    links: [
      { href: '/forbrukslan', label: 'Forbrukslån' },
      { href: '/beste-forbrukslan', label: 'Beste forbrukslån' },
      { href: '/lan-uten-sikkerhet', label: 'Lån uten sikkerhet' },
      { href: '/lan-med-sikkerhet', label: 'Lån med sikkerhet' },
      { href: '/smalan', label: 'Smålån' },
      { href: '/lan-pa-dagen', label: 'Lån på dagen' },
    ],
  },
  {
    title: 'Betalingsanmerkning',
    links: [
      { href: '/lan-med-betalingsanmerkning', label: 'Lån med anmerkning' },
      { href: '/smalan-med-betalingsanmerkning', label: 'Smålån med anmerkning' },
      { href: '/refinansiering-med-betalingsanmerkning', label: 'Refinansiering m/ anmerkning' },
      { href: '/lan-med-inkasso', label: 'Lån med inkasso' },
      { href: '/garantert-lan-med-betalingsanmerkning', label: 'Garantert lån m/ anmerkning' },
      { href: '/lan-etter-slettet-betalingsanmerkning', label: 'Lån etter slettet anmerkning' },
    ],
  },
  {
    title: 'Refinansiering',
    links: [
      { href: '/refinansiering', label: 'Refinansiering' },
      { href: '/samle-forbrukslan', label: 'Samle forbrukslån' },
      { href: '/refinansiering-uten-sikkerhet', label: 'Refinansiering uten sikkerhet' },
      { href: '/billigste-forbrukslan', label: 'Billigste forbrukslån' },
      { href: '/omstartslan', label: 'Omstartslån' },
    ],
  },
  {
    title: 'Verktøy',
    links: [
      { href: '/sammenlign', label: 'Sammenlign lån' },
      { href: '/kalkulator', label: 'Lånekalkulator' },
      { href: '/om-oss', label: 'Om oss' },
      { href: '/metodikk', label: 'Vår metodikk' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {categories.map(cat => (
            <div key={cat.title}>
              <h3 className="text-[13px] font-semibold text-text-muted uppercase tracking-wider mb-4">{cat.title}</h3>
              <ul className="space-y-2.5">
                {cat.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[14px] text-text-secondary hover:text-brand-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-[15px] text-text-primary">Forbrukslånagenten</span>
              </div>
              <p className="text-[13px] text-text-muted max-w-md leading-relaxed">
                Uavhengig sammenligningsportal for forbrukslån i Norge. Vi mottar provisjon fra våre samarbeidspartnere, men dette påvirker ikke våre vurderinger.
              </p>
            </div>
            <p className="text-[12px] text-text-muted">
              © {new Date().getFullYear()} Forbrukslånagenten. Alle rettigheter reservert.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
