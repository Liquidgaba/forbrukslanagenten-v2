'use client'
import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

export default function FAQ({ items, title = 'Ofte stilte spørsmål' }: { items: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors">
              <span>{item.q}</span>
              <span className="text-gray-400 ml-4">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.a }} />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
