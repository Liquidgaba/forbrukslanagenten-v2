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
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo — wordmark style, no icon */}
          <Link href="/" className="flex items-center">
            <span className="font-extrabold text-[18px] tracking-tight" style={{color: '#122d4e', letterSpacing: '-0.02em'}}>
              Forbrukslånagenten
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-[14px] font-medium text-text-secondary hover:text-text-primary rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="#topp-lan" className="btn-primary ml-4 text-[14px] px-5 py-2.5">
              Finn beste lån
            </Link>
          </nav>

          {/* Mobile toggle */}
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

        {/* Mobile menu */}
        {open && (
          <nav className="lg:hidden pb-5 pt-2 space-y-1 border-t border-border">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-[15px] font-medium text-text-secondary hover:text-text-primary rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#topp-lan"
              onClick={() => setOpen(false)}
              className="btn-primary block mx-0 mt-3 text-center text-[15px]"
            >
              Finn beste lån
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
