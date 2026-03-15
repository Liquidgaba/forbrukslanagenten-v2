'use client'

import Script from 'next/script'

// Umami Cloud Analytics - GDPR-compliant, privacy-first
// Data: page views, unique visitors, referrers, outbound clicks (Adtraction tracking!)
// Hosted: cloud.umami.is (EU-based, GDPR compliant)

export default function Analytics() {
  return (
    <>
      {/* Umami Cloud - GDPR compliant, no cookies, lightweight */}
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="d6e786b0-ee4b-413f-be24-9e862e3a7ba3"
        strategy="afterInteractive"
      />
    </>
  )
}

/* 
  GDPR Compliance:
  - No cookies stored
  - No personal data collected
  - IP addresses anonymized
  - Data stored in EU (Plausible) or self-hosted (Umami)
  
  What we track:
  - Page views
  - Unique visitors (hashed, anonymized)
  - Referrer sites
  - Outbound link clicks (crucial for Adtraction tracking!)
  - Country (approximate) - NO personal data
  
  Not tracked:
  - Demographics
  - Behavior flow
  - Retargeting data
*/