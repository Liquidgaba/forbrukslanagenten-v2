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
        <h2 className="text-[24px] sm:text-[30px] font-bold text-brand-900 editorial-heading">Hva vil lånet koste?</h2>
      </div>
      <p className="text-[15px] text-text-secondary mb-8 max-w-xl">
        Juster tallene under og se månedskostnaden umiddelbart. Alle tall er veiledende.
      </p>

      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="grid lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {/* Left: sliders */}
          <div className="lg:col-span-3 p-7 sm:p-9 space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-[15px] font-medium text-text-primary">Hvor mye vil du låne?</label>
                <div className="flex items-baseline gap-1">
                  <span className="text-[26px] font-bold text-brand-800">{formatNOK(amount)}</span>
                </div>
              </div>
              <input
                type="range"
                min={10000} max={600000} step={5000}
                value={amount}
                onChange={e => setAmount(+e.target.value)}
                className="w-full h-2 bg-surface-sunken rounded-full appearance-none cursor-pointer accent-accent-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-accent-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-3 [&::-webkit-slider-thumb]:border-white"
              />
              <div className="flex justify-between text-[12px] text-text-muted mt-2">
                <span>10 000 kr</span><span>600 000 kr</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-[15px] font-medium text-text-primary">Hvilken rente?</label>
                <div className="flex items-baseline gap-1">
                  <span className="text-[26px] font-bold text-brand-800">{rate.toFixed(1)}</span>
                  <span className="text-[14px] text-text-muted">%</span>
                </div>
              </div>
              <input
                type="range"
                min={3} max={25} step={0.1}
                value={rate}
                onChange={e => setRate(+e.target.value)}
                className="w-full h-2 bg-surface-sunken rounded-full appearance-none cursor-pointer accent-accent-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-accent-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-3 [&::-webkit-slider-thumb]:border-white"
              />
              <div className="flex justify-between text-[12px] text-text-muted mt-2">
                <span>3 %</span><span>25 %</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-[15px] font-medium text-text-primary">Nedbetalingstid</label>
                <div className="flex items-baseline gap-1">
                  <span className="text-[26px] font-bold text-brand-800">{years}</span>
                  <span className="text-[14px] text-text-muted">år</span>
                </div>
              </div>
              <input
                type="range"
                min={1} max={15} step={1}
                value={years}
                onChange={e => setYears(+e.target.value)}
                className="w-full h-2 bg-surface-sunken rounded-full appearance-none cursor-pointer accent-accent-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-accent-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-3 [&::-webkit-slider-thumb]:border-white"
              />
              <div className="flex justify-between text-[12px] text-text-muted mt-2">
                <span>1 år</span><span>15 år</span>
              </div>
            </div>
          </div>

          {/* Right: results — warm gradient */}
          <div className="lg:col-span-2 p-7 sm:p-9 bg-gradient-to-br from-brand-800 to-brand-900 flex flex-col justify-center text-white">
            <div className="space-y-6">
              <div>
                <div className="text-[12px] text-white/60 font-medium uppercase tracking-wider">Månedskostnad</div>
                <div className="text-[48px] font-bold leading-none mt-2 editorial-heading">{formatNOK(monthly)}</div>
                <div className="text-[14px] text-white/50 mt-2">per måned i {years} år</div>
              </div>

              <div className="h-px bg-white/20" />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-[11px] text-white/50 font-medium uppercase tracking-wider">Totalt tilbake</div>
                  <div className="text-[24px] font-bold mt-1">{formatNOK(total)}</div>
                </div>
                <div>
                  <div className="text-[11px] text-white/50 font-medium uppercase tracking-wider">Rentekostnad</div>
                  <div className="text-[24px] font-bold mt-1 text-warm-300">{formatNOK(interest)}</div>
                </div>
              </div>

              <p className="text-[11px] text-white/40 leading-relaxed">
                Estimat basert på annuitetslån. Faktisk kostnad varierer med gebyrer og individuelle vilkår fra banken.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
