'use client'
import { useState } from 'react'
import { calculateMonthlyPayment, calculateTotalCost, formatNOK, formatPercent } from '@/lib/calc'

export default function Calculator() {
  const [amount, setAmount] = useState(200000)
  const [rate, setRate] = useState(9.9)
  const [months, setMonths] = useState(60)

  const monthly = calculateMonthlyPayment(amount, rate, months)
  const total = calculateTotalCost(amount, rate, months)
  const interest = total - amount

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Lånekalkulator</h2>
      
      <div className="space-y-6">
        <div>
          <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
            <span>Lånebeløp</span>
            <span className="text-primary-600 font-bold">{formatNOK(amount)}</span>
          </label>
          <input type="range" min={10000} max={600000} step={5000} value={amount} onChange={e => setAmount(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600" />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>10 000 kr</span><span>600 000 kr</span>
          </div>
        </div>

        <div>
          <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
            <span>Nominell rente</span>
            <span className="text-primary-600 font-bold">{formatPercent(rate)}</span>
          </label>
          <input type="range" min={3} max={25} step={0.1} value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600" />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>3 %</span><span>25 %</span>
          </div>
        </div>

        <div>
          <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
            <span>Nedbetalingstid</span>
            <span className="text-primary-600 font-bold">{months} måneder ({(months / 12).toFixed(1)} år)</span>
          </label>
          <input type="range" min={12} max={180} step={6} value={months} onChange={e => setMonths(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600" />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1 år</span><span>15 år</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 bg-gray-50 rounded-lg p-4">
        <div className="text-center">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Månedlig</div>
          <div className="text-xl font-bold text-primary-700">{formatNOK(monthly)}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Totalkostnad</div>
          <div className="text-xl font-bold text-gray-900">{formatNOK(total)}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Rentekostnad</div>
          <div className="text-xl font-bold text-red-600">{formatNOK(interest)}</div>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4">* Kalkulatoren gir et estimat basert på annuitetslån. Faktisk kostnad kan variere basert på gebyrer og individuelle vilkår fra långiver.</p>
    </div>
  )
}
