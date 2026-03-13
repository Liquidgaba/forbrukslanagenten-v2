import { LoanProvider, getTrackingUrl } from '@/data/loans'
import { formatNOK, formatPercent } from '@/lib/calc'

interface ComparisonTableProps {
  providers: LoanProvider[]
  title?: string
}

export default function ComparisonTable({ providers, title }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      {title && <h2 className="text-2xl font-bold text-text-primary mb-4">{title}</h2>}
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface-muted text-left">
            <th className="px-4 py-3 font-semibold text-text-secondary">#</th>
            <th className="px-4 py-3 font-semibold text-text-secondary">Långiver</th>
            <th className="px-4 py-3 font-semibold text-text-secondary">Rente fra</th>
            <th className="px-4 py-3 font-semibold text-text-secondary">Lånebeløp</th>
            <th className="px-4 py-3 font-semibold text-text-secondary">Nedbetalingstid</th>
            <th className="px-4 py-3 font-semibold text-text-secondary">Vurdering</th>
            <th className="px-4 py-3 font-semibold text-text-secondary"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {providers.map((p, i) => (
            <tr key={p.id} className="hover:bg-surface-muted transition-colors">
              <td className="px-4 py-4 font-bold text-primary-600">{i + 1}</td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 bg-surface-muted rounded flex items-center justify-center p-1 flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.logoUrl} alt={p.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">{p.name}</div>
                    {p.acceptsPaymentRemarks && <span className="text-xs text-amber-600">Godtar anmerkninger</span>}
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 font-semibold">{p.minRate ? formatPercent(p.minRate) : '—'}</td>
              <td className="px-4 py-4">
                {p.minAmount && p.maxAmount ? `${formatNOK(p.minAmount)} – ${formatNOK(p.maxAmount)}` : '—'}
              </td>
              <td className="px-4 py-4">
                {p.minTerm && p.maxTerm ? `${p.minTerm} – ${p.maxTerm} mnd` : '—'}
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-accent-600">{p.rating}</span>
                  <span className="text-gray-400">/5</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <a href={getTrackingUrl(p.adId)} target="_blank" rel="noopener noreferrer nofollow sponsored" className="inline-flex items-center px-4 py-2 bg-accent-600 hover:bg-accent-700 text-white text-xs font-semibold rounded-lg transition-colors">
                  Søk nå
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
