import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-[13px] text-text-muted mb-6" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-brand-600 transition-colors">Hjem</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          {item.href ? (
            <Link href={item.href} className="hover:text-brand-600 transition-colors">{item.name}</Link>
          ) : (
            <span className="text-text-primary font-medium">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
