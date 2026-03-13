'use client'
import { useState, useMemo } from 'react'
import { calculateMonthly, calculateTotal, calculateInterestCost, formatNOK } from '@/lib/calc'

export default function Calculator() {
  const [amount, setAmount] = useState(200000)
  const [rate, setRate] = useState(9.9)
  const [years, setYears] = useState(5)

  const months = years * 12
  const monthly = useMemo(() => calculateMonthly(amount, rate, months), [amount, rate, months])
  const total = useMemo(() => calculateTotal(monthly, months), [monthly, months])
  const interest = useMemo(() => calculateInterestCost(amount, total), [amount, total])

  return (
    <section id="kalkulator" className="scroll-mt-20 fjord-section">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h2 className="fjord-heading text-[28px] sm:text-[36px] text-text-primary mb-3">
          Hva vil lånet koste?
        </h2>
        <p className="text-[16px] text-text-secondary mb-8">
          Juster tallene og se månedskostnaden umiddelbart.
        </p>

        <div className="fjord-card overflow-hidden">
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {/* Left: sliders */}
            <div className="p-8 space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <label className="text-[15px] font-medium text-text-primary">Lånebeløp</label>
                  <span className="text-[24px] font-semibold text-brand-600">{formatNOK(amount)}</span>
                </div>
                <input
                  type="range"
                  min={10000} max={600000} step={5000}
                  value={amount}
                  onChange={e => setAmount(+e.target.value)}
                  className="w-full h-2 bg-surface-sunken rounded-full appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-[13px] text-text-muted mt-2">
                  <span>10 000 kr</span><span>600 000 kr</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <label className="text-[15px] font-medium text-text-primary">Rente</label>
                  <span className="text-[24px] font-semibold text-brand-600">{rate.toFixed(1)} %</span>
                </div>
                <input
                  type="range"
                  min={3} max={25} step={0.1}
                  value={rate}
                  onChange={e => setRate(+e.target.value)}
                  className="w-full h-2 bg-surface-sunken rounded-full appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-[13px] text-text-muted mt-2">
                  <span>3 %</span><span>25 %</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <label className="text-[15px] font-medium text-text-primary">Nedbetalingstid</label>
                  <span className="text-[24px] font-semibold text-brand-600">{years} år</span>
                </div>
                <input
                  type="range"
                  min={1} max={15} step={1}
                  value={years}
                  onChange={e => setYears(+e.target.value)}
                  className="w-full h-2 bg-surface-sunken rounded-full appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-[13px] text-text-muted mt-2">
                  <span>1 år</span><span>15 år</span>
                </div>
              </div>
            </div>

            {/* Right: results — clean white */}
            <div className="p-8 bg-surface-sunken">
              <div className="space-y-6">
                <div>
                  <div className="text-[13px] text-text-muted font-medium uppercase tracking-wide mb-2">Månedskostnad</div>
                  <div className="text-[42px] font-semibold text-text-primary leading-none fjord-heading">{formatNOK(monthly)}</div>
                  <div className="text-[15px] text-text-secondary mt-2">per måned i {years} år</div>
                </div>

                <div className="h-px bg-border" />

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-[13px] text-text-muted font-medium uppercase tracking-wide mb-1">Totalkostnad</div>
                    <div className="text-[20px] font-semibold text-text-primary">{formatNOK(total)}</div>
                  </div>
                  <div>
                    <div className="text-[13px] text-text-muted font-medium uppercase tracking-wide mb-1">Rentekostnad</div>
                    <div className="text-[20px] font-semibold text-amber-600">{formatNOK(interest)}</div>
                  </div>
                </div>

                <p className="text-[13px] text-text-muted leading-relaxed">
                  Estimat basert på annuitetslån. Faktisk kostnad varierer med gebyrer og individuelle vilkår.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}