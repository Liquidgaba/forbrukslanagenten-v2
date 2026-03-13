import { LoanProvider, getTrackingUrl } from '@/data/loans'
import { formatNOK, formatPercent } from '@/lib/calc'

interface LoanCardProps {
  provider: LoanProvider
  rank?: number
  showDetails?: boolean
}

export default function LoanCard({ provider, rank, showDetails = true }: LoanCardProps) {
  const trackingUrl = getTrackingUrl(provider.adId)
  const isTopPick = rank === 1

  return (
    <article className={`fjord-card ${isTopPick ? 'ring-2 ring-cta-500' : ''}`}>
      {/* Top pick indicator — subtle, Fjordkraft style */}
      {isTopPick && (
        <div className="px-5 py-2 bg-cta-50 border-b border-cta-100 rounded-t-2xl">
          <span className="text-[13px] font-semibold text-cta-700">
            ⭐ Anbefalt — best rente og vilkår
          </span>
        </div>
      )}
      
      <div className="p-6 sm:p-8">
        {/* Top row: rank + name */}
        <div className="flex items-start gap-4 mb-6">
          {rank && !isTopPick && (
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
              <span className="text-[14px] font-semibold text-brand-700">{rank}</span>
            </div>
          )}
          <div className="flex-grow min-w-0">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center p-2 flex-shrink-0 ${
                isTopPick ? 'bg-cta-50' : 'bg-surface-sunken'
              }`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={provider.logoUrl} alt={provider.name} className="max-w-full max-h-full object-contain" loading="lazy" />
              </div>
              <div>
                <h3 className={`font-semibold text-text-primary ${isTopPick ? 'text-[20px]' : 'text-[18px]'}`}>{provider.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < Math.floor(provider.rating) ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[13px] text-text-muted ml-1">{provider.rating}</span>
                </div>
              </div>
            </div>
            {showDetails && (
              <p className="text-[15px] text-text-secondary mt-4 leading-relaxed">{provider.description}</p>
            )}
          </div>
        </div>

        {/* Stats — clean grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {provider.minRate && (
            <div className="text-center py-3">
              <div className="text-[12px] text-text-muted uppercase tracking-wide font-medium mb-1">Rente fra</div>
              <div className={`text-[24px] font-semibold ${isTopPick ? 'text-cta-600' : 'text-text-primary'}`}>{formatPercent(provider.minRate)}</div>
            </div>
          )}
          {provider.maxAmount && (
            <div className="text-center py-3">
              <div className="text-[12px] text-text-muted uppercase tracking-wide font-medium mb-1">Maks beløp</div>
              <div className="text-[24px] font-semibold text-text-primary">{formatNOK(provider.maxAmount)}</div>
            </div>
          )}
          <div className="text-center py-3">
            <div className="text-[12px] text-text-muted uppercase tracking-wide font-medium mb-1">Svar</div>
            <div className="text-[24px] font-semibold text-text-primary">1-2 d</div>
          </div>
        </div>

        {/* Features */}
        {showDetails && provider.features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {provider.features.slice(0, 3).map((f, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-medium bg-cta-50 text-cta-700">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {f}
              </span>
            ))}
          </div>
        )}

        {/* CTA — clean, not pushy */}
        <a
          href={trackingUrl}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl transition-all text-[15px] ${
            isTopPick 
              ? 'fjord-btn-green'
              : 'fjord-btn-primary'
          }`}
        >
          {isTopPick ? 'Søk nå' : 'Søk her'} →
        </a>
      </div>

      {/* Payment remarks notice */}
      {provider.acceptsPaymentRemarks && (
        <div className="px-6 sm:px-8 py-4 bg-amber-50 border-t border-amber-100">
          <span className="text-[13px] text-amber-700 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Aksepterer søknader med betalingsanmerkninger
          </span>
        </div>
      )}
    </article>
  )
}
