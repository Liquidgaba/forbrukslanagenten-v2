'use client'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { href: '/forbrukslan', label: 'Forbrukslån' },
  { href: '/lan-med-betalingsanmerkning', label: 'Med anmerkning' },
  { href: '/refinansiering', label: 'Refinansiering' },
  { href: '/smalan', label: 'Smålån' },
  { href: '/kalkulator', label: 'Kalkulator' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[68px]">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-800 to-brand-900 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-semibold text-[17px] text-brand-900 tracking-tight hidden sm:inline">
              Forbrukslånagenten
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-[14px] font-medium text-text-secondary hover:text-brand-700 rounded-lg hover:bg-surface-sunken transition-all duration-150"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/sammenlign"
              className="ml-3 px-5 py-2.5 text-[14px] font-semibold text-white bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              Finn lån →
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2.5 rounded-lg text-text-secondary hover:bg-surface-sunken transition-colors"
            aria-label="Meny"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {open && (
          <nav className="lg:hidden pb-5 pt-1 space-y-1 border-t border-border">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3.5 py-2.5 text-[15px] font-medium text-text-secondary hover:text-brand-700 hover:bg-surface-sunken rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/sammenlign"
              onClick={() => setOpen(false)}
              className="block mx-3.5 mt-2 px-4 py-2.5 text-center text-[15px] font-semibold text-white bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl transition-all"
            >
              Finn lån →
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
