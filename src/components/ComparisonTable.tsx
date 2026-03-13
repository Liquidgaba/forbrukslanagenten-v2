import { LoanProvider, getTrackingUrl } from '@/data/loans'
import { formatNOK, formatPercent } from '@/lib/calc'

interface ComparisonTableProps {
  providers: LoanProvider[]
  title?: string
}

export default function ComparisonTable({ providers, title }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      {title && <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>}
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 text-left">
            <th className="px-4 py-3 font-semibold text-gray-600">#</th>
            <th className="px-4 py-3 font-semibold text-gray-600">Långiver</th>
            <th className="px-4 py-3 font-semibold text-gray-600">Rente fra</th>
            <th className="px-4 py-3 font-semibold text-gray-600">Lånebeløp</th>
            <th className="px-4 py-3 font-semibold text-gray-600">Nedbetalingstid</th>
            <th className="px-4 py-3 font-semibold text-gray-600">Vurdering</th>
            <th className="px-4 py-3 font-semibold text-gray-600"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {providers.map((p, i) => (
            <tr key={p.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-4 font-bold text-primary-600">{i + 1}</td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 bg-gray-50 rounded flex items-center justify-center p-1 flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.logoUrl} alt={p.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{p.name}</div>
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
