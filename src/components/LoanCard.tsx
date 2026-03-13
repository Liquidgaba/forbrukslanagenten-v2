import { LoanProvider, getTrackingUrl } from '@/data/loans'
import { formatNOK, formatPercent } from '@/lib/calc'

interface LoanCardProps {
  provider: LoanProvider
  rank?: number
  showDetails?: boolean
}

export default function LoanCard({ provider, rank, showDetails = true }: LoanCardProps) {
  const trackingUrl = getTrackingUrl(provider.adId)
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {rank && (
          <div className="flex-shrink-0">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm">
              {rank}
            </span>
          </div>
        )}
        
        <div className="flex-shrink-0 w-24 h-12 bg-gray-50 rounded-lg flex items-center justify-center p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={provider.logoUrl} alt={provider.name} className="max-w-full max-h-full object-contain" loading="lazy" />
        </div>
        
        <div className="flex-grow min-w-0">
          <h3 className="font-semibold text-gray-900 text-lg">{provider.name}</h3>
          {showDetails && (
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{provider.description}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 text-center">
          {provider.minRate && (
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Rente fra</div>
              <div className="font-bold text-lg text-gray-900">{formatPercent(provider.minRate)}</div>
            </div>
          )}
          {provider.maxAmount && (
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Maks lån</div>
              <div className="font-bold text-lg text-gray-900">{formatNOK(provider.maxAmount)}</div>
            </div>
          )}
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Vurdering</div>
            <div className="font-bold text-lg text-accent-600">{provider.rating}/5</div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <a href={trackingUrl} target="_blank" rel="noopener noreferrer nofollow sponsored" className="inline-flex items-center justify-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg transition-colors text-sm whitespace-nowrap">
            Søk nå →
          </a>
        </div>
      </div>

      {showDetails && provider.features.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
          {provider.features.map((f, i) => (
            <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              ✓ {f}
            </span>
          ))}
        </div>
      )}
      
      {provider.acceptsPaymentRemarks && (
        <div className="mt-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            ⚡ Vurderer søknader med betalingsanmerkninger
          </span>
        </div>
      )}
    </div>
  )
}
