import Link from 'next/link'

const linkGroups = {
  betalingsanmerkning: [
    { href: '/lan-med-betalingsanmerkning', label: 'Lån med betalingsanmerkning' },
    { href: '/smalan-med-betalingsanmerkning', label: 'Smålån med betalingsanmerkning' },
    { href: '/refinansiering-med-betalingsanmerkning', label: 'Refinansiering med betalingsanmerkning' },
    { href: '/garantert-lan-med-betalingsanmerkning', label: 'Garantert lån med betalingsanmerkning' },
    { href: '/lan-etter-slettet-betalingsanmerkning', label: 'Lån etter slettet betalingsanmerkning' },
  ],
  refinansiering: [
    { href: '/refinansiering', label: 'Refinansiering' },
    { href: '/refinansiering/uten-sikkerhet', label: 'Uten sikkerhet' },
    { href: '/refinansiering/med-sikkerhet', label: 'Med sikkerhet' },
    { href: '/samle-forbrukslan', label: 'Samle forbrukslån' },
    { href: '/samlelan', label: 'Samlelån' },
  ],
  forbrukslan: [
    { href: '/forbrukslan', label: 'Forbrukslån guide' },
    { href: '/beste-forbrukslan', label: 'Beste forbrukslån' },
    { href: '/billigste-forbrukslan', label: 'Billigste forbrukslån' },
    { href: '/lan-uten-sikkerhet', label: 'Lån uten sikkerhet' },
    { href: '/kalkulator', label: 'Lånekalkulator' },
  ],
}

export default function InternalLinks({ exclude, groups = ['forbrukslan', 'betalingsanmerkning', 'refinansiering'] }: { exclude?: string; groups?: (keyof typeof linkGroups)[] }) {
  return (
    <section className="mt-12 bg-surface-muted rounded-xl p-6">
      <h2 className="text-lg font-bold text-text-primary mb-4">Relaterte sider</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {groups.map(group => (
          <div key={group}>
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">{group === 'betalingsanmerkning' ? 'Betalingsanmerkning' : group === 'refinansiering' ? 'Refinansiering' : 'Forbrukslån'}</h3>
            <ul className="space-y-1">
              {linkGroups[group].filter(l => l.href !== exclude).map(l => (
                <li key={l.href}><Link href={l.href} className="text-sm text-primary-600 hover:text-primary-800 hover:underline">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
