import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { organizationSchema } from '@/lib/seo'

const roboto = Roboto({ 
  subsets: ['latin'], 
  display: 'swap',
  weight: ['400', '500', '700', '900']
})

export const metadata: Metadata = {
  title: {
    default: 'Forbrukslånagenten — Sammenlign forbrukslån i Norge 2026',
    template: '%s | Forbrukslånagenten',
  },
  description: 'Sammenlign forbrukslån fra Norges beste banker. Finn laveste rente, beregn månedlig kostnad, og søk direkte. Spesialist på lån med betalingsanmerkning.',
  metadataBase: new URL('https://xn--forbrukslnagenten-hrb.no'),
  openGraph: {
    locale: 'nb_NO',
    siteName: 'Forbrukslånagenten',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://xn--forbrukslnagenten-hrb.no' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      </head>
      <body className={roboto.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
