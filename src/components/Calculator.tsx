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
      <h2 className="heading-lg text-[26px] sm:text-[32px] mb-2" style={{color: '#1a0800'}}>
        Hva vil lånet koste?
      </h2>
      <p className="text-[16px] mb-8" style={{color: '#7a5c45'}}>
        Juster tallene og se månedskostnaden umiddelbart.
      </p>

      <div className="fjord-card overflow-hidden">
        <div className="grid lg:grid-cols-2" style={{borderBottom: 'none'}}>
          {/* Left: sliders */}
          <div className="p-7 sm:p-9 space-y-8" style={{borderRight: '1px solid #e8ddd5'}}>
            {[
              { label: 'Lånebeløp', value: amount, min: 10000, max: 600000, step: 5000, display: formatNOK(amount), onChange: (v: number) => setAmount(v) },
              { label: 'Rente', value: rate, min: 3, max: 25, step: 0.1, display: `${rate.toFixed(1)} %`, onChange: (v: number) => setRate(v) },
              { label: 'Nedbetalingstid', value: years, min: 1, max: 15, step: 1, display: `${years} år`, onChange: (v: number) => setYears(v) },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-[15px] font-semibold" style={{color: '#1a0800'}}>{item.label}</label>
                  <span className="text-[22px] font-black" style={{color: '#e8560a'}}>{item.display}</span>
                </div>
                <input
                  type="range"
                  min={item.min} max={item.max} step={item.step}
                  value={item.value}
                  onChange={e => item.onChange(+e.target.value)}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{accentColor: '#3d1a00', background: '#f5ede4'}}
                />
                <div className="flex justify-between text-[12px] mt-1.5" style={{color: '#7a5c45'}}>
                  <span>{item.label === 'Lånebeløp' ? '10 000 kr' : item.label === 'Rente' ? '3 %' : '1 år'}</span>
                  <span>{item.label === 'Lånebeløp' ? '600 000 kr' : item.label === 'Rente' ? '25 %' : '15 år'}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: results — warm peach */}
          <div className="p-7 sm:p-9" style={{background: '#fceee6'}}>
            <div className="space-y-6">
              <div>
                <div className="text-[12px] font-bold uppercase mb-2" style={{color: '#7a5c45', letterSpacing: '0.1em'}}>Månedskostnad</div>
                <div className="text-[44px] font-black leading-none" style={{color: '#1a0800'}}>{formatNOK(monthly)}</div>
                <div className="text-[14px] mt-2" style={{color: '#7a5c45'}}>per måned i {years} år</div>
              </div>

              <div style={{height: '1px', background: '#e8ddd5'}} />

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div className="text-[12px] font-bold uppercase mb-1" style={{color: '#7a5c45', letterSpacing: '0.08em'}}>Totalkostnad</div>
                  <div className="text-[20px] font-black" style={{color: '#1a0800'}}>{formatNOK(total)}</div>
                </div>
                <div>
                  <div className="text-[12px] font-bold uppercase mb-1" style={{color: '#7a5c45', letterSpacing: '0.08em'}}>Rentekostnad</div>
                  <div className="text-[20px] font-black" style={{color: '#e8560a'}}>{formatNOK(interest)}</div>
                </div>
              </div>

              <p className="text-[13px] leading-relaxed" style={{color: '#7a5c45'}}>
                Estimat basert på annuitetslån. Faktisk kostnad varierer med gebyrer og individuelle vilkår.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
