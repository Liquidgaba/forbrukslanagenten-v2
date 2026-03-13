'use client'
import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="mt-16">
      <h2 className="text-[22px] sm:text-[26px] font-bold text-text-primary mb-6">Ofte stilte spørsmål</h2>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="bg-white border border-border rounded-xl overflow-hidden transition-colors hover:border-brand-200">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="text-[15px] font-medium text-text-primary pr-4">{item.q}</span>
              <svg
                className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4">
                <p className="text-[14px] text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: item.a }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
