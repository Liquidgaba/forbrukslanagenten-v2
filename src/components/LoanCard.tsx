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
    <article className={`group relative bg-white rounded-2xl border transition-all duration-300 ${
      isTopPick 
        ? 'border-accent-400 shadow-[0_8px_30px_rgba(240,160,48,0.15)] hover:shadow-[0_12px_40px_rgba(240,160,48,0.2)] ring-1 ring-accent-200' 
        : 'border-border hover:border-brand-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
    }`}>
      {/* Top pick badge */}
      {isTopPick && (
        <div className="absolute -top-3 left-6 px-4 py-1.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-[11px] font-bold uppercase tracking-wide rounded-full shadow-md">
          ⭐ Anbefalt av oss
        </div>
      )}
      
      <div className="p-6 sm:p-7">
        {/* Top row: rank + name + badge */}
        <div className="flex items-start gap-4 mb-5">
          {rank && !isTopPick && (
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-100 flex items-center justify-center border border-brand-200">
              <span className="text-[15px] font-bold text-brand-700">{rank}</span>
            </div>
          )}
          <div className="flex-grow min-w-0">
            <div className="flex items-center gap-3">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center p-2 flex-shrink-0 ${
                isTopPick ? 'bg-gradient-to-br from-accent-50 to-accent-100 border-2 border-accent-300' : 'bg-surface-sunken border border-border'
              }`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={provider.logoUrl} alt={provider.name} className="max-w-full max-h-full object-contain" loading="lazy" />
              </div>
              <div>
                <h3 className={`font-semibold text-text-primary leading-tight ${isTopPick ? 'text-[19px]' : 'text-[17px]'}`}>{provider.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(provider.rating) ? 'text-warm-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-[13px] text-text-secondary ml-1 font-medium">{provider.rating}</span>
                  </div>
                </div>
              </div>
            </div>
            {showDetails && (
              <p className="text-[14px] text-text-secondary mt-3 leading-relaxed">{provider.description}</p>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {provider.minRate && (
            <div className={`rounded-xl px-4 py-3 text-center ${
              isTopPick ? 'bg-gradient-to-br from-accent-50 to-accent-100 border border-accent-200' : 'bg-surface-sunken'
            }`}>
              <div className="text-[11px] text-text-muted uppercase tracking-wider font-medium">Rente fra</div>
              <div className={`text-[22px] font-bold mt-1 ${isTopPick ? 'text-brand-900' : 'text-text-primary'}`}>{formatPercent(provider.minRate)}</div>
            </div>
          )}
          {provider.maxAmount && (
            <div className="rounded-xl px-4 py-3 text-center bg-surface-sunken">
              <div className="text-[11px] text-text-muted uppercase tracking-wider font-medium">Maks beløp</div>
              <div className="text-[22px] font-bold text-text-primary mt-1">{formatNOK(provider.maxAmount)}</div>
            </div>
          )}
          <div className="rounded-xl px-4 py-3 text-center bg-surface-sunken">
            <div className="text-[11px] text-text-muted uppercase tracking-wider font-medium">Svar</div>
            <div className="text-[22px] font-bold text-text-primary mt-1">1-2 d</div>
          </div>
        </div>

        {/* Features + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {showDetails && provider.features.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {provider.features.slice(0, 3).map((f, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium bg-mint-50 text-mint-800 border border-mint-200">
                  <svg className="w-3.5 h-3.5 text-mint-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {f}
                </span>
              ))}
            </div>
          )}

          <a
            href={trackingUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className={`inline-flex items-center justify-center px-7 py-4 font-semibold rounded-xl transition-all text-[15px] whitespace-nowrap ${
              isTopPick 
                ? 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-lg shadow-accent-500/30 hover:shadow-xl hover:-translate-y-0.5'
                : 'bg-brand-700 hover:bg-brand-800 text-white shadow-sm hover:shadow-md'
            }`}
          >
            {isTopPick ? 'Søk nå →' : 'Søk her'}
          </a>
        </div>
      </div>

      {/* Bottom bar for payment remarks */}
      {provider.acceptsPaymentRemarks && (
        <div className="px-6 sm:px-7 py-4 bg-warm-50 border-t border-warm-200 rounded-b-2xl">
          <span className="text-[13px] font-medium text-warm-800 flex items-center gap-2">
            <svg className="w-5 h-5 text-warm-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Aksepterer søknader med betalingsanmerkninger
          </span>
        </div>
      )}
    </article>
  )
}
