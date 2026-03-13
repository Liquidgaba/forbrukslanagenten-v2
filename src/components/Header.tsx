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
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-[64px]">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: '#163d58'}}>
              <span className="text-white font-bold text-[15px]">F</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-[15px] text-text-primary tracking-tight">Forbrukslånagenten</span>
              <span className="block text-[11px] text-text-muted font-normal -mt-0.5">Uavhengig sammenligning</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-[15px] font-medium text-text-secondary hover:text-brand-600 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/sammenlign"
              className="ml-2 fjord-btn-cta text-[14px] px-4 py-2"
            >
              Finn lån →
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:bg-surface-sunken transition-colors"
            aria-label="Meny"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {open && (
          <nav className="lg:hidden pb-5 pt-2 space-y-1 border-t border-border">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-[16px] font-medium text-text-secondary hover:text-brand-600 hover:bg-surface-sunken rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/sammenlign"
              onClick={() => setOpen(false)}
              className="block mx-4 mt-3 fjord-btn-cta text-center text-[16px]"
            >
              Finn lån →
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
