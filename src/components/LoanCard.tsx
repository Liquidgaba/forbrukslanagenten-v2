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
    <article className={`fjord-card overflow-hidden ${isTopPick ? '' : ''}`} style={isTopPick ? {borderColor: '#005f2e', borderWidth: '2px'} : {}}>
      {/* Top pick banner — dark green, clean */}
      {isTopPick && (
        <div className="px-6 py-2.5" style={{background: '#005f2e'}}>
          <span className="text-[13px] font-semibold text-white tracking-wide">
            Redaksjonens valg — best rente og vilkår
          </span>
        </div>
      )}

      <div className="p-6 sm:p-7">
        {/* Top: rank number + logo + name + CTA */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Rank */}
          {rank && (
            <div className="flex-shrink-0 text-center w-7">
              <span className={`font-bold ${isTopPick ? 'text-[20px]' : 'text-[16px] text-text-muted'}`}
                style={isTopPick ? {color: '#005f2e'} : {}}>{rank}</span>
            </div>
          )}

          {/* Logo */}
          <div className="flex-shrink-0 w-16 h-12 rounded-lg bg-surface-sunken flex items-center justify-center p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={provider.logoUrl} alt={provider.name} className="max-w-full max-h-full object-contain" loading="lazy" />
          </div>

          {/* Name + rating */}
          <div className="flex-grow min-w-0">
            <h3 className={`font-bold text-text-primary ${isTopPick ? 'text-[18px]' : 'text-[16px]'}`}>{provider.name}</h3>
            <div className="flex items-center gap-1 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(provider.rating) ? '' : 'text-slate-200'}`}
                  style={i < Math.floor(provider.rating) ? {color: '#e8a70f'} : {}}
                  fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-[12px] text-text-muted ml-1">{provider.rating}</span>
            </div>
          </div>

          {/* CTA — right side on desktop */}
          <div className="hidden sm:block flex-shrink-0">
            <a
              href={trackingUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="btn-loan"
            >
              Søk nå →
            </a>
          </div>
        </div>

        {/* Description */}
        {showDetails && (
          <p className="text-[14px] text-text-secondary mt-4 leading-relaxed pl-[calc(28px+64px+20px)] hidden sm:block">{provider.description}</p>
        )}

        {/* Stats row */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-5 pt-5 border-t border-border pl-0 sm:pl-[calc(28px+64px+20px)]">
          {provider.minRate && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-1" style={{letterSpacing: '0.1em'}}>Rente fra</div>
              <div className={`text-[22px] font-bold ${isTopPick ? '' : 'text-text-primary'}`}
                style={isTopPick ? {color: '#005f2e'} : {}}>{formatPercent(provider.minRate)}</div>
            </div>
          )}
          {provider.maxAmount && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-1" style={{letterSpacing: '0.1em'}}>Maks beløp</div>
              <div className="text-[22px] font-bold text-text-primary">{formatNOK(provider.maxAmount)}</div>
            </div>
          )}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-1" style={{letterSpacing: '0.1em'}}>Svartid</div>
            <div className="text-[22px] font-bold text-text-primary">1–2 d</div>
          </div>

          {/* Features inline */}
          {showDetails && provider.features.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center ml-auto">
              {provider.features.slice(0, 3).map((f, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[12px] font-medium border border-border text-text-secondary">
                  ✓ {f}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-5">
          <a
            href={trackingUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="btn-loan w-full text-center"
          >
            Søk nå →
          </a>
        </div>
      </div>

      {/* Payment remarks notice */}
      {provider.acceptsPaymentRemarks && (
        <div className="px-6 sm:px-7 py-3 bg-surface-sunken border-t border-border">
          <span className="text-[12px] text-text-muted flex items-center gap-1.5">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Aksepterer søknader med betalingsanmerkninger
          </span>
        </div>
      )}
    </article>
  )
}
