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
    <section id="kalkulator" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-[22px] sm:text-[28px] font-bold text-text-primary">Hva vil lånet koste?</h2>
      </div>
      <p className="text-[15px] text-text-secondary mb-6">Justér tallene og se månedskostnaden umiddelbart.</p>

      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="grid lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {/* Left: sliders */}
          <div className="lg:col-span-3 p-6 sm:p-8 space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-[15px] font-medium text-text-primary">Hvor mye vil du låne?</label>
                <div className="flex items-baseline gap-1">
                  <span className="text-[24px] font-bold text-brand-600">{formatNOK(amount)}</span>
                </div>
              </div>
              <input
                type="range"
                min={10000} max={600000} step={5000}
                value={amount}
                onChange={e => setAmount(+e.target.value)}
                className="w-full h-2 bg-surface-sunken rounded-full appearance-none cursor-pointer accent-brand-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-brand-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
              />
              <div className="flex justify-between text-[12px] text-text-muted mt-2">
                <span>10 000 kr</span><span>600 000 kr</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-[15px] font-medium text-text-primary">Hvilken rente?</label>
                <div className="flex items-baseline gap-1">
                  <span className="text-[24px] font-bold text-brand-600">{rate.toFixed(1)}</span>
                  <span className="text-[14px] text-text-muted">%</span>
                </div>
              </div>
              <input
                type="range"
                min={3} max={25} step={0.1}
                value={rate}
                onChange={e => setRate(+e.target.value)}
                className="w-full h-2 bg-surface-sunken rounded-full appearance-none cursor-pointer accent-brand-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-brand-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
              />
              <div className="flex justify-between text-[12px] text-text-muted mt-2">
                <span>3 %</span><span>25 %</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-[15px] font-medium text-text-primary">Nedbetalingstid</label>
                <div className="flex items-baseline gap-1">
                  <span className="text-[24px] font-bold text-brand-600">{years}</span>
                  <span className="text-[14px] text-text-muted">år</span>
                </div>
              </div>
              <input
                type="range"
                min={1} max={15} step={1}
                value={years}
                onChange={e => setYears(+e.target.value)}
                className="w-full h-2 bg-surface-sunken rounded-full appearance-none cursor-pointer accent-brand-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-brand-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
              />
              <div className="flex justify-between text-[12px] text-text-muted mt-2">
                <span>1 år</span><span>15 år</span>
              </div>
            </div>
          </div>

          {/* Right: results */}
          <div className="lg:col-span-2 p-6 sm:p-8 bg-gradient-to-br from-brand-600 to-brand-700 flex flex-col justify-center text-white">
            <div className="space-y-6">
              <div>
                <div className="text-[13px] text-white/70 font-medium uppercase tracking-wider">Månedskostnad</div>
                <div className="text-[42px] font-bold leading-none mt-2">{formatNOK(monthly)}</div>
                <div className="text-[14px] text-white/60 mt-1">per måned i {years} år</div>
              </div>

              <div className="h-px bg-white/20" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[12px] text-white/60 font-medium uppercase tracking-wider">Totalt tilbake</div>
                  <div className="text-[22px] font-bold mt-1">{formatNOK(total)}</div>
                </div>
                <div>
                  <div className="text-[12px] text-white/60 font-medium uppercase tracking-wider">Rentekostnad</div>
                  <div className="text-[22px] font-bold mt-1">{formatNOK(interest)}</div>
                </div>
              </div>

              <p className="text-[11px] text-white/50 leading-relaxed">
                Estimat basert på annuitetslån. Faktisk kostnad varierer med gebyrer og individuelle vilkår.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
