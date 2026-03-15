// Komplett oversikt over NORSKE KREDITTKORT (basert på Finanstilsynet data + offentlig info)
// TODO: Legg til affiliate-lenker når godkjent via Adtraction
// Kilde: forbrukerradet.no/finansportalen, finanstilsynet.no, bankenes egne sider

export interface NorwegianCreditCard {
  id: string
  name: string
  issuer: string
  issuerOrgNo: string | null // Organisasjonsnummer fra Finanstilsynet
  annualFee: number
  monthlyFee: number
  interestRate: number
  interestFreeDays: number
  maxCredit: number
  minAge: number
  incomeRequirement: number | null
  features: string[]
  travelInsurance?: {
    included: boolean
    coverageAmount: number | null
    familyIncluded: boolean
    rentalCar: boolean
    cancellation: boolean
  }
  purchaseInsurance: boolean
  cashbackRate: number | null // Prosent
  bonusProgram: string | null // f.eks. "EuroBonus", "CashPoints", "Trumf"
  affiliateStatus: 'approved' | 'pending' | 'not-available'
  adId: number | null // Når godkjent i Adtraction
  bankUrl: string
  notes: string
}

// Basert på faktiske kredittkort fra norske banker (etter Finanstilsynets oversikt)
export const norwegianCreditCards: NorwegianCreditCard[] = [
  // 🔥 DE STØRSTE (krever affiliate-avtaler)
  {
    id: 'norwegian-reward',
    name: 'Norwegian Reward',
    issuer: 'Bank Norwegian',
    issuerOrgNo: '988011309',
    annualFee: 0,
    monthlyFee: 0,
    interestRate: 24.9,
    interestFreeDays: 45,
    maxCredit: 200000,
    minAge: 18,
    incomeRequirement: null, // Avhenger av kredittvurdering
    features: ['CashPoints på alle kjøp', 'Gebyrfritt uttak i utlandet', 'Reiseforsikring', 'Ingen årsavgift'],
    travelInsurance: { included: true, coverageAmount: 500000, familyIncluded: true, rentalCar: true, cancellation: true },
    purchaseInsurance: true,
    cashbackRate: null, // CashPoints, ikke vanlig cashback
    bonusProgram: 'CashPoints',
    affiliateStatus: 'pending', // FIKSE: Søk via Adtraction (banknorwegian adId: 1876181875)
    adId: null,
    bankUrl: 'https://www.banknorwegian.no/kredittkort',
    notes: 'Norges mest populære kredittkort. CashPoints kan brukes på flyreiser. EPC 172.83 kr.',
  },
  {
    id: 'santander-red',
    name: 'Santander Red',
    issuer: 'Santander Consumer Bank',
    issuerOrgNo: '985567424',
    annualFee: 0,
    monthlyFee: 0,
    interestRate: 22.5,
    interestFreeDays: 45,
    maxCredit: 150000,
    minAge: 18,
    incomeRequirement: 200000,
    features: ['Ingen årsavgift', 'Opp til 45 rentefrie dager', 'Reiseforsikring', 'Kjøpsforsikring'],
    travelInsurance: { included: true, coverageAmount: 300000, familyIncluded: false, rentalCar: false, cancellation: true },
    purchaseInsurance: true,
    cashbackRate: null,
    bonusProgram: null,
    affiliateStatus: 'pending',
    adId: null,
    bankUrl: 'https://www.santanderconsumer.no/kredittkort/',
    notes: 'Godt allround-kort uten årsavgift. Godkjent via låneprogrammet? EPC 122.10 kr.',
  },
  {
    id: 'seb-selected',
    name: 'SEB Selected',
    issuer: 'SEB',
    issuerOrgNo: '914864637',
    annualFee: 395,
    monthlyFee: 0,
    interestRate: 20.5,
    interestFreeDays: 45,
    maxCredit: 200000,
    minAge: 20,
    incomeRequirement: 350000,
    features: ['Reiseforsikring inkludert', 'Avbestillingsforsikring', 'Leiebilforsikring', 'Concierge service', 'Lounge access'],
    travelInsurance: { included: true, coverageAmount: 1000000, familyIncluded: true, rentalCar: true, cancellation: true },
    purchaseInsurance: true,
    cashbackRate: 1,
    bonusProgram: 'Bonuspoeng',
    affiliateStatus: 'not-available', // SEB har ikke Adtraction?
    adId: null,
    bankUrl: 'https://www.seb.no/privat/kredittkort',
    notes: 'Premium-kort med omfattende forsikring. Ingen affiliate-avtale kjent.',
  },
  {
    id: 'komplett-mastercard',
    name: 'Komplett Mastercard',
    issuer: 'Komplett Bank',
    issuerOrgNo: '918130316',
    annualFee: 0,
    monthlyFee: 0,
    interestRate: 23.5,
    interestFreeDays: 45,
    maxCredit: 100000,
    minAge: 18,
    incomeRequirement: 150000,
    features: ['Ingen årsavgift', 'Opptil 45 rentefrie dager', 'Kjøpsforsikring', 'Spesielt gunstig hos Komplett.no'],
    travelInsurance: { included: false, coverageAmount: null, familyIncluded: false, rentalCar: false, cancellation: false },
    purchaseInsurance: true,
    cashbackRate: 1,
    bonusProgram: 'Komplett Cashback',
    affiliateStatus: 'not-available',
    adId: null,
    bankUrl: 'https://www.komplettbank.no/kredittkort',
    notes: 'Godt for netthandel hos Komplett. Ingen affiliate-avtale kjent.',
  },
  {
    id: 'eika-gold',
    name: 'Eika Gold Mastercard',
    issuer: 'Eika Kredittbank',
    issuerOrgNo: '915427661',
    annualFee: 395,
    monthlyFee: 0,
    interestRate: 21.5,
    interestFreeDays: 45,
    maxCredit: 150000,
    minAge: 20,
    incomeRequirement: 250000,
    features: ['Reiseforsikring', 'Kjøpsforsikring', 'ID-tyveriforsikring', 'Price protection', 'Extended warranty'],
    travelInsurance: { included: true, coverageAmount: 500000, familyIncluded: true, rentalCar: false, cancellation: true },
    purchaseInsurance: true,
    cashbackRate: 0.5,
    bonusProgram: 'Eika Bonus',
    affiliateStatus: 'not-available',
    adId: null,
    bankUrl: 'https://www.eika.no/kredittkort',
    notes: 'Mange forsikringer inkludert. Ingen affiliate-avtale.',
  },
  // 🟡 MELLOMSTORE (sjekk Adtraction)
  {
    id: 'instabank',
    name: 'Instabank Kredittkort',
    issuer: 'Instabank',
    issuerOrgNo: '985092911',
    annualFee: 0,
    monthlyFee: 0,
    interestRate: 23.9,
    interestFreeDays: 45,
    maxCredit: 150000,
    minAge: 20,
    incomeRequirement: 250000,
    features: ['Ingen årsavgift', 'Heldigital', 'Reiseforsikring'],
    travelInsurance: { included: true, coverageAmount: 300000, familyIncluded: false, rentalCar: false, cancellation: false },
    purchaseInsurance: false,
    cashbackRate: null,
    bonusProgram: null,
    affiliateStatus: 'approved', // Instabank er approved i låneprogram!
    adId: 1575430439, // Samme som lån
    bankUrl: 'https://instabank.no/kredittkort',
    notes: 'DIGITAL FAVORITT. Vi har Instabank-approved i Adtraction. Kan bruke adId 1575430439?',
  },
  {
    id: 'thron-kredittkort',
    name: 'Thorn Kredittkort',
    issuer: 'Thorn',
    issuerOrgNo: '980458970',
    annualFee: 0,
    monthlyFee: 0,
    interestRate: 24.5,
    interestFreeDays: 30,
    maxCredit: 50000,
    minAge: 18,
    incomeRequirement: null,
    features: ['Ingen årsavgift', 'Rask søknad', 'Svar på minutter'],
    travelInsurance: { included: false, coverageAmount: null, familyIncluded: false, rentalCar: false, cancellation: false },
    purchaseInsurance: false,
    cashbackRate: null,
    bonusProgram: null,
    affiliateStatus: 'approved', // Thorn er approved!
    adId: 839045466,
    bankUrl: 'https://thorn.no',
    notes: 'Thorn er approved via låneprogrammet. Kan bruke adId 839045466?',
  },
  // TILLEGGSKORT (for full oversikt)
  {
    id: 'dnb-mastercard',
    name: 'DNB Mastercard',
    issuer: 'DNB',
    issuerOrgNo: '984851006',
    annualFee: 0,
    monthlyFee: 0,
    interestRate: 21.5,
    interestFreeDays: 45,
    maxCredit: 100000,
    minAge: 18,
    incomeRequirement: null, // Krever DNB-kundeforhold
    features: ['Ingen årsavgift for DNB-kunder', 'Trumf-bonus', 'Reiseforsikring'],
    travelInsurance: { included: true, coverageAmount: 300000, familyIncluded: true, rentalCar: false, cancellation: true },
    purchaseInsurance: false,
    cashbackRate: 1,
    bonusProgram: 'Trumf',
    affiliateStatus: 'not-available',
    adId: null,
    bankUrl: 'https://www.dnb.no/privat/kredittkort',
    notes: 'Krever DNB-kundeforhold. Ingen affiliate-avtale.',
  },
  {
    id: 'nordea-gold',
    name: 'Nordea Gold',
    issuer: 'Nordea',
    issuerOrgNo: '999601384',
    annualFee: 595,
    monthlyFee: 0,
    interestRate: 20.0,
    interestFreeDays: 45,
    maxCredit: 200000,
    minAge: 25,
    incomeRequirement: 400000,
    features: ['Reiseforsikring', 'Lounge access', 'Concierge', 'Bonuspoeng'],
    travelInsurance: { included: true, coverageAmount: 1000000, familyIncluded: true, rentalCar: true, cancellation: true },
    purchaseInsurance: true,
    cashbackRate: null,
    bonusProgram: 'Nordea Bonus',
    affiliateStatus: 'not-available',
    adId: null,
    bankUrl: 'https://www.nordea.no/privat/kredittkort',
    notes: 'Premium-kort for høy inntekt. Ingen affiliate-avtale.',
  },
]

// Hjelpefunksjoner for å sammenligne kort
export function getBestTravelInsuranceCards(): NorwegianCreditCard[] {
  return norwegianCreditCards
    .filter(c => c.travelInsurance?.included)
    .sort((a, b) => (b.travelInsurance?.coverageAmount || 0) - (a.travelInsurance?.coverageAmount || 0))
}

export function getNoAnnualFeeCards(): NorwegianCreditCard[] {
  return norwegianCreditCards
    .filter(c => c.annualFee === 0)
    .sort((a, b) => b.maxCredit - a.maxCredit)
}

export function getCashbackCards(): NorwegianCreditCard[] {
  return norwegianCreditCards
    .filter(c => c.cashbackRate !== null)
    .sort((a, b) => (b.cashbackRate || 0) - (a.cashbackRate || 0))
}

export function getApprovedForAffiliate(): NorwegianCreditCard[] {
  return norwegianCreditCards.filter(c => c.affiliateStatus === 'approved' && c.adId !== null)
}
