export function calculateMonthlyPayment(principal: number, annualRate: number, months: number): number {
  if (annualRate === 0) return principal / months
  const r = annualRate / 100 / 12
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
}

export const calculateMonthly = calculateMonthlyPayment

export function calculateTotalCost(principal: number, annualRate: number, months: number): number {
  return calculateMonthlyPayment(principal, annualRate, months) * months
}

export function calculateTotal(monthly: number, months: number): number {
  return monthly * months
}

export function calculateInterestCost(principal: number, total: number): number {
  return total - principal
}

export function formatNOK(amount: number): string {
  return new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK', maximumFractionDigits: 0 }).format(amount)
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat('nb-NO').format(n)
}

export function formatPercent(n: number): string {
  return n.toFixed(2).replace('.', ',') + ' %'
}

export const LOAN_AMOUNTS = [100000, 150000, 175000, 200000, 250000, 300000, 400000, 500000, 600000]
