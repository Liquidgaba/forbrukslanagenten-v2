'use client'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { href: '/forbrukslan', label: 'Forbrukslån' },
  { href: '/beste-forbrukslan', label: 'Beste lån' },
  { href: '/lan-med-betalingsanmerkning', label: 'Med anmerkning' },
  { href: '/refinansiering', label: 'Refinansiering' },
  { href: '/kalkulator', label: 'Kalkulator' },
  { href: '/sammenlign', label: 'Sammenlign' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-bold text-lg text-gray-900 hidden sm:inline">Forbrukslånagenten</span>
            <span className="font-bold text-lg text-gray-900 sm:hidden">FLA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 rounded-md hover:bg-gray-50 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-50" aria-label="Meny">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-2">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md">
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
