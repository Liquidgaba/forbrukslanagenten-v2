import { LoanProvider, getTrackingUrl } from '@/data/loans'
import { formatNOK, formatPercent } from '@/lib/calc'

interface LoanCardProps {
  provider: LoanProvider
  rank?: number
  showDetails?: boolean
}

export default function LoanCard({ provider, rank, showDetails = true }: LoanCardProps) {
  const trackingUrl = getTrackingUrl(provider.adId, provider.url)

  return (
    <article className="group bg-white rounded-xl border border-border hover:border-brand-200 hover:shadow-[0_2px_16px_rgba(0,107,207,0.08)] transition-all duration-200">
      <div className="p-5 sm:p-6">
        {/* Top row: rank + name + badge */}
        <div className="flex items-start gap-4 mb-5">
          {rank && (
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-sunken flex items-center justify-center">
              <span className="text-[13px] font-bold text-text-muted">{rank}</span>
            </div>
          )}
          <div className="flex-grow min-w-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-surface-sunken rounded-lg flex items-center justify-center p-1.5 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={provider.logoUrl} alt={provider.name} className="max-w-full max-h-full object-contain" loading="lazy" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary text-[16px] leading-tight">{provider.name}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(provider.rating) ? 'text-warm-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-[12px] text-text-muted ml-1">{provider.rating}</span>
                  </div>
                </div>
              </div>
            </div>
            {showDetails && (
              <p className="text-[14px] text-text-secondary mt-3 leading-relaxed line-clamp-2">{provider.description}</p>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {provider.minRate && (
            <div className="bg-surface-sunken rounded-lg px-3 py-2.5 text-center">
              <div className="text-[11px] text-text-muted uppercase tracking-wider font-medium">Rente fra</div>
              <div className="text-[18px] font-bold text-text-primary mt-0.5">{formatPercent(provider.minRate)}</div>
            </div>
          )}
          {provider.maxAmount && (
            <div className="bg-surface-sunken rounded-lg px-3 py-2.5 text-center">
              <div className="text-[11px] text-text-muted uppercase tracking-wider font-medium">Maks beløp</div>
              <div className="text-[18px] font-bold text-text-primary mt-0.5">{formatNOK(provider.maxAmount)}</div>
            </div>
          )}
          <div className="bg-surface-sunken rounded-lg px-3 py-2.5 text-center">
            <div className="text-[11px] text-text-muted uppercase tracking-wider font-medium">Svar</div>
            <div className="text-[18px] font-bold text-text-primary mt-0.5">1-2 d</div>
          </div>
        </div>

        {/* Features + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          {showDetails && provider.features.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {provider.features.slice(0, 3).map((f, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[12px] font-medium bg-mint-50 text-mint-700 border border-mint-200">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {f}
                </span>
              ))}
            </div>
          )}

          <a
            href={trackingUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors text-[14px] shadow-sm hover:shadow-md whitespace-nowrap sm:ml-auto"
          >
            Søk her
            <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </div>

      {/* Bottom bar for payment remarks */}
      {provider.acceptsPaymentRemarks && (
        <div className="px-5 sm:px-6 py-3 bg-warm-50 border-t border-warm-100 rounded-b-xl">
          <span className="text-[13px] font-medium text-warm-700 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Vurderer søknader med betalingsanmerkninger
          </span>
        </div>
      )}
    </article>
  )
}
