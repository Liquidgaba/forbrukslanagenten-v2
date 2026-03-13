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
    <section id="kalkulator">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-[22px] sm:text-[26px] font-bold text-text-primary">Lånekalkulator</h2>
        <span className="text-[12px] font-medium text-text-muted bg-surface-sunken px-2.5 py-1 rounded-md">Beta</span>
      </div>

      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          {/* Left: sliders */}
          <div className="p-6 sm:p-8 space-y-7">
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-[14px] font-medium text-text-primary">Lånebeløp</label>
                <span className="text-[15px] font-bold text-brand-600">{formatNOK(amount)}</span>
              </div>
              <input
                type="range"
                min={10000} max={600000} step={5000}
                value={amount}
                onChange={e => setAmount(+e.target.value)}
                className="w-full h-1.5 bg-surface-sunken rounded-full appearance-none cursor-pointer accent-brand-600"
              />
              <div className="flex justify-between text-[12px] text-text-muted mt-1.5">
                <span>10 000 kr</span><span>600 000 kr</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-[14px] font-medium text-text-primary">Nominell rente</label>
                <span className="text-[15px] font-bold text-brand-600">{rate.toFixed(1)} %</span>
              </div>
              <input
                type="range"
                min={3} max={25} step={0.1}
                value={rate}
                onChange={e => setRate(+e.target.value)}
                className="w-full h-1.5 bg-surface-sunken rounded-full appearance-none cursor-pointer accent-brand-600"
              />
              <div className="flex justify-between text-[12px] text-text-muted mt-1.5">
                <span>3 %</span><span>25 %</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-[14px] font-medium text-text-primary">Nedbetalingstid</label>
                <span className="text-[15px] font-bold text-brand-600">{years} år</span>
              </div>
              <input
                type="range"
                min={1} max={15} step={1}
                value={years}
                onChange={e => setYears(+e.target.value)}
                className="w-full h-1.5 bg-surface-sunken rounded-full appearance-none cursor-pointer accent-brand-600"
              />
              <div className="flex justify-between text-[12px] text-text-muted mt-1.5">
                <span>1 år</span><span>15 år</span>
              </div>
            </div>
          </div>

          {/* Right: results */}
          <div className="p-6 sm:p-8 bg-surface-sunken flex flex-col justify-center">
            <div className="space-y-5">
              <div>
                <div className="text-[13px] text-text-muted font-medium uppercase tracking-wider">Månedlig kostnad</div>
                <div className="text-[36px] font-bold text-text-primary leading-tight mt-1">{formatNOK(monthly)}</div>
              </div>

              <div className="h-px bg-border" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[12px] text-text-muted font-medium uppercase tracking-wider">Totalkostnad</div>
                  <div className="text-[20px] font-bold text-text-primary mt-1">{formatNOK(total)}</div>
                </div>
                <div>
                  <div className="text-[12px] text-text-muted font-medium uppercase tracking-wider">Rentekostnad</div>
                  <div className="text-[20px] font-bold text-warm-600 mt-1">{formatNOK(interest)}</div>
                </div>
              </div>

              <p className="text-[12px] text-text-muted leading-relaxed">
                Estimat basert på annuitetslån. Faktisk kostnad kan variere basert på gebyrer og individuelle vilkår fra långiver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
