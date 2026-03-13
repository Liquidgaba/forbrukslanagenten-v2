export default function AffiliateDisclaimer() {
  return (
    <div className="flex items-start gap-3 px-4 py-3 rounded-lg bg-brand-50 border border-brand-100 mb-8">
      <svg className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p className="text-[13px] text-brand-700 leading-relaxed">
        <span className="font-semibold">Annonseinnhold:</span> Denne siden inneholder annonselenker til våre samarbeidspartnere. 
        Vi mottar provisjon når du klikker og søker om lån — dette koster deg ingenting ekstra og påvirker ikke våre vurderinger.
      </p>
    </div>
  )
}
