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
    <header className="sticky top-0 z-50" style={{background: '#fdf8f4', borderBottom: '1px solid #e8ddd5'}}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[64px]">

          {/* Logo — warm wordmark */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: '#e8560a'}}>
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-bold text-[16px]" style={{color: '#1a0800', letterSpacing: '-0.01em'}}>
              Forbrukslånagenten
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-[14px] font-medium rounded-lg transition-colors"
                style={{color: '#3d2010'}}
              >
                {item.label}
              </Link>
            ))}
            {/* Outline + filled — like Fjordkraft's nav CTAs */}
            <Link href="#topp-lan" className="btn-outline ml-2 text-[14px] px-5 py-2">
              Se beste lån
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg"
            aria-label="Meny"
            style={{color: '#7a5c45'}}
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
          <nav className="lg:hidden pb-5 pt-2 space-y-0.5" style={{borderTop: '1px solid #e8ddd5'}}>
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-[15px] font-medium rounded-lg"
                style={{color: '#3d2010'}}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link href="#topp-lan" onClick={() => setOpen(false)} className="btn-primary w-full text-center text-[15px]">
                Se beste lån nå
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
