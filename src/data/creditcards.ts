export interface CreditCard {
  id: string
  name: string
  issuer: string
  programId: number
  adId: number | null
  logoUrl: string
  url: string
  annualFee: number
  monthlyFee: number
  interestRate: number
  interestFreeDays: number
  maxCredit: number
  minAge: number
  incomeRequirement: number
  features: string[]
  bonuses: {
    type: 'cashback' | 'points' | 'discounts' | 'travel'
    value: string
    description: string
  }[]
  rating: number
  description: string
  idealFor: string[]
  affiliateUrl: string | null
}

const CHANNEL_ID = process.env.NEXT_PUBLIC_ADTRACTION_CHANNEL_ID || '1691647901'

export function getCreditCardTrackingUrl(adId: number): string {
  return `https://track.adtraction.com/t/t?a=${adId}&as=${CHANNEL_ID}&t=2&tk=1`
}

export const creditCards: CreditCard[] = [
  {
    id: 'santander-red',
    name: 'Santander Red',
    issuer: 'Santander',
    programId: 0,
    adId: null,
    logoUrl: '/logos/santander.png',
    url: 'https://www.santanderconsumer.no/kredittkort/',
    annualFee: 0,
    monthlyFee: 0,
    interestRate: 22.5,
    interestFreeDays: 45,
    maxCredit: 150000,
    minAge: 18,
    incomeRequirement: 200000,
    features: [
      'Ingen årsavgift',
 'Opp til 45 rentefrie dager',
      'Nettbank og mobilapp',
 'Reiseforsikring',
      'Kjøpsforsikring',
    ],
    bonuses: [
      { type: 'discounts', value: '10%', description: 'Rabatt på utvalgte produkter hos Santander-partnere' },
    ],
    rating: 4.2,
    description: 'Et godt allround-kort uten årsavgift med solide fordeler og 45 rentefrie dager.',
    idealFor: ['Daglig bruk', 'Reise', 'Online shopping'],
    affiliateUrl: null,
  },
  {
    id: 'seb-selected',
    name: 'SEB Selected',
    issuer: 'SEB',
    programId: 0,
    adId: null,
    logoUrl: '/logos/seb.png',
    url: 'https://www.seb.no/privat/kredittkort',
    annualFee: 395,
    monthlyFee: 0,
    interestRate: 20.5,
    interestFreeDays: 45,
    maxCredit: 200000,
    minAge: 20,
    incomeRequirement: 350000,
    features: [
      'Reiseforsikring inkludert',
      'Avbestillingsforsikring',
      'Rental car insurance',
      'Concierge service',
      'Lounge access',
    ],
    bonuses: [
      { type: 'points', value: '1%', description: 'Bonuspoeng på alle kjøp' },
    ],
    rating: 4.5,
    description: 'Premium-kort med reiseforsikring, lounge-tilgang og concierge-service.',
    idealFor: ['Reise', 'Premium', 'Forsikring'],
    affiliateUrl: null,
  },
  {
    id: 'bank-norwegian',
    name: 'Bank Norwegian Kredittkort',
    issuer: 'Bank Norwegian',
    programId: 0,
    adId: null,
    logoUrl: '/logos/bank-norwegian.png',
    url: 'https://www.banknorwegian.no/kredittkort',
    annualFee: 0,
    monthlyFee: 0,
    interestRate: 24.9,
    interestFreeDays: 45,
    maxCredit: 200000,
    minAge: 18,
    incomeRequirement: 0,
    features: [
      'Ingen årsavgift',
      'CashPoints på alle kjøp',
      'Opp til 45 rentefrie dager',
      'Gratis reiseforsikring',
      'Gebyrfritt uttak i utlandet',
    ],
    bonuses: [
      { type: 'cashback', value: '1-5%', description: 'CashPoints som kan brukes på flybilletter hos Norwegian' },
    ],
    rating: 4.3,
    description: 'Populært kort med CashPoints-bonus og gebyrfritt uttak i utlandet.',
    idealFor: ['Reise', 'Cashback', 'Daglig bruk'],
    affiliateUrl: null,
  },
  {
    id: 'eika-gold',
    name: 'Eika Gold Mastercard',
    issuer: 'Eika Kredittbank',
    programId: 0,
    adId: 1298765432, // example - verify
    logoUrl: '/logos/eika.png',
    url: 'https://www.eika.no/kredittkort',
    annualFee: 395,
    monthlyFee: 0,
    interestRate: 21.5,
    interestFreeDays: 45,
    maxCredit: 150000,
    minAge: 20,
    incomeRequirement: 250000,
    features: [
      'Reiseforsikring',
      'Kjøpsforsikring',
      'ID-tyveriforsikring',
      'Price protection',
      'Extended warranty',
    ],
    bonuses: [
      { type: 'cashback', value: '0.5%', description: 'Bonus på alle kjøp' },
    ],
    rating: 4.0,
    description: 'Solid kort med gode forsikringer og price protection.',
    idealFor: ['Forsikring', 'Kjøpsvern', 'Daglig bruk'],
    affiliateUrl: null,
  },
  {
    id: 'komplett-mastercard',
    name: 'Komplett Mastercard',
    issuer: 'Komplett Bank',
    programId: 0,
    adId: 1187654321, // example - verify
    logoUrl: '/logos/komplett.png',
    url: 'https://www.komplettbank.no/kredittkort',
    annualFee: 0,
    monthlyFee: 0,
    interestRate: 23.5,
    interestFreeDays: 45,
    maxCredit: 100000,
    minAge: 18,
    incomeRequirement: 150000,
    features: [
      'Ingen årsavgift',
      'Opptil 45 rentefrie dager',
      'Kjøpsforsikring',
      'Nettbank',
    ],
    bonuses: [
      { type: 'discounts', value: '1-3%', description: 'Rabatt hos Komplett.no' },
    ],
    rating: 3.9,
    description: 'Enkelt kort uten årsavgift, spesielt gunstig for Komplett-kunder.',
    idealFor: ['Online shopping', 'Komplett-kunder', 'Daglig bruk'],
    affiliateUrl: null,
  },
]

export function getCreditCards(): CreditCard[] {
  return creditCards
}

export function getCreditCardsWithoutAnnualFee(): CreditCard[] {
  return creditCards.filter(c => c.annualFee === 0).sort((a, b) => b.rating - a.rating)
}

export function getCreditCardsWithBestBonus(): CreditCard[] {
  return creditCards.filter(c => c.bonuses.length > 0).sort((a, b) => b.rating - a.rating)
}

export function getTopCreditCards(limit: number = 5): CreditCard[] {
  return creditCards.sort((a, b) => b.rating - a.rating).slice(0, limit)
}
