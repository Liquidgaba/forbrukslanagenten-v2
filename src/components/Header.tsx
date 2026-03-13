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
    <header className="bg-white sticky top-0 z-50" style={{borderBottom: '1px solid #e8e9e9'}}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-[64px]">

          {/* Logo — clean text wordmark */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{background: '#156820'}}>
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-black text-[17px] tracking-tight" style={{color: '#282828', letterSpacing: '-0.01em'}}>
              Forbrukslånagenten
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-[14px] font-medium rounded transition-colors"
                style={{color: '#3d3d3f'}}
                onMouseEnter={e => (e.currentTarget.style.color = '#156820')}
                onMouseLeave={e => (e.currentTarget.style.color = '#3d3d3f')}
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
            className="lg:hidden p-2 rounded"
            aria-label="Meny"
            style={{color: '#767676'}}
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
          <nav className="lg:hidden pb-5 pt-2 space-y-0.5" style={{borderTop: '1px solid #e8e9e9'}}>
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-[15px] font-medium rounded transition-colors"
                style={{color: '#3d3d3f'}}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 px-0">
              <Link href="#topp-lan" onClick={() => setOpen(false)} className="btn-primary w-full text-center text-[15px]">
                Finn beste lån
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
