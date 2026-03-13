export interface LoanProvider {
  id: string
  name: string
  programId: number
  adId: number
  logoUrl: string
  url: string
  epc: number | null
  commissions: { name: string; value: number; type: string }[]
  // Loan-specific fields
  minAmount?: number
  maxAmount?: number
  minRate?: number
  maxRate?: number
  minTerm?: number
  maxTerm?: number
  loanType: 'unsecured' | 'secured' | 'refinancing' | 'creditcard' | 'smalan' | 'broker'
  acceptsPaymentRemarks?: boolean
  description: string
  features: string[]
  rating: number // 1-5 editorial rating
}

// Channel ID: bedretilbud.no (our approved channel in Adtraction)
const CHANNEL_ID = process.env.NEXT_PUBLIC_ADTRACTION_CHANNEL_ID || '1691647901'

// Programs where our channel is approved — ONLY show these
export const APPROVED_AD_IDS = new Set([
  1259715125,  // Okida
  1061611455,  // Klikklån
  1638602458,  // Zensum
  1926379047,  // Långivere
  1831295809,  // Nanofinans
  1903082477,  // Heimfinans
  1087917620,  // Ferratum
  1437914822,  // Uno Finans
  1575430439,  // Instabank
  839045466,   // Thorn
  1870436474,  // Kredittlånet
  1870436013,  // Låneråd
  1492826551,  // Viiga Lån
  1746519962,  // Morrow Bank
  1330052847,  // Paymark Finans
])

export function getTrackingUrl(adId: number): string {
  return `https://track.adtraction.com/t/t?a=${adId}&as=${CHANNEL_ID}&t=2&tk=1`
}

export const loanProviders: LoanProvider[] = [
  {
    id: 'bank-norwegian',
    name: 'Bank Norwegian',
    programId: 1876181874,
    adId: 1876181875,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1876181872',
    url: 'https://www.banknorwegian.no',
    epc: 172.83,
    commissions: [
      { name: 'Kredittkort', value: 750, type: 'NOK' },
      { name: 'Lån', value: 1500, type: 'NOK' },
    ],
    minAmount: 10000,
    maxAmount: 600000,
    minRate: 7.9,
    maxRate: 24.4,
    minTerm: 12,
    maxTerm: 180,
    loanType: 'unsecured',
    acceptsPaymentRemarks: false,
    description: 'Bank Norwegian er en av Norges mest populære banker for forbrukslån. Kjent for raske svar og konkurransedyktige renter.',
    features: ['Svar samme dag', 'Ingen gebyrer', 'Fleksibel nedbetalingstid', 'Refinansiering mulig'],
    rating: 4.8,
  },
  {
    id: 'santander',
    name: 'Santander Consumer Bank',
    programId: 1876417744,
    adId: 1876417745,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1876417742',
    url: 'https://www.santanderconsumer.no/lan/forbrukslan',
    epc: 122.10,
    commissions: [{ name: 'Lead', value: 1640, type: 'NOK' }],
    minAmount: 10000,
    maxAmount: 400000,
    minRate: 7.9,
    maxRate: 21.24,
    minTerm: 12,
    maxTerm: 144,
    loanType: 'unsecured',
    acceptsPaymentRemarks: false,
    description: 'Santander er en solid internasjonal bank med gode vilkår på forbrukslån. Spesielt bra for refinansiering av eksisterende gjeld.',
    features: ['Lån inntil 400 000 kr', 'Fast eller flytende rente', 'Gebyrfri innfrielse', 'Rask behandling'],
    rating: 4.6,
  },
  {
    id: 'okida',
    name: 'Okida',
    programId: 1259715121,
    adId: 1259715125,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1259715119',
    url: 'https://www.okida.no',
    epc: 125.83,
    commissions: [{ name: 'Lån med sikkerhet i bolig', value: 1350, type: 'NOK' }],
    minAmount: 100000,
    maxAmount: 10000000,
    minRate: 5.45,
    maxRate: 12.0,
    minTerm: 12,
    maxTerm: 300,
    loanType: 'secured',
    acceptsPaymentRemarks: true,
    description: 'Okida tilbyr lån med sikkerhet i bolig, og er ett av få selskaper som vurderer søknader selv med betalingsanmerkninger.',
    features: ['Lån med sikkerhet', 'Godtar betalingsanmerkninger', 'Inntil 10 millioner', 'Lang nedbetalingstid'],
    rating: 4.3,
  },
  {
    id: 'klikklan',
    name: 'Klikklån',
    programId: 1061611452,
    adId: 1061611455,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1061611450',
    url: 'https://klikklan.no',
    epc: 81.82,
    commissions: [{ name: 'Konvertering', value: 2250, type: 'NOK' }],
    minAmount: 5000,
    maxAmount: 600000,
    minRate: 8.99,
    maxRate: 24.0,
    minTerm: 12,
    maxTerm: 180,
    loanType: 'unsecured',
    acceptsPaymentRemarks: false,
    description: 'Klikklån sammenligner tilbud fra flere banker samtidig, slik at du slipper å søke hos hver enkelt. Enkel prosess, raskt svar.',
    features: ['Sammenlign flere banker', 'Én søknad', 'Raskt svar', 'Ingen binding'],
    rating: 4.5,
  },
  {
    id: 'zensum',
    name: 'Zensum',
    programId: 1638602455,
    adId: 1638602458,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1638602453',
    url: 'https://www.zensum.no',
    epc: 76.60,
    commissions: [
      { name: 'Usikret lån', value: 2500, type: 'NOK' },
      { name: 'Refinansiering med sikkerhet', value: 2500, type: 'NOK' },
      { name: 'Kredittkort', value: 1200, type: 'NOK' },
    ],
    minAmount: 25000,
    maxAmount: 600000,
    minRate: 6.9,
    maxRate: 22.0,
    minTerm: 12,
    maxTerm: 180,
    loanType: 'broker',
    acceptsPaymentRemarks: false,
    description: 'Zensum er en lånemegler som forhandler med opptil 25 banker for å finne det beste tilbudet for deg. Både usikret lån og refinansiering.',
    features: ['Opptil 25 banker', 'Personlig rådgiver', 'Refinansiering', 'Usikret og sikret lån'],
    rating: 4.7,
  },
  {
    id: 'varde-finans',
    name: 'Varde Finans',
    programId: 1862333843,
    adId: 1862333846,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1862333842',
    url: 'https://vardefinans.no',
    epc: 61.37,
    commissions: [{ name: 'Refinansiering med sikkerhet', value: 800, type: 'NOK' }],
    minAmount: 200000,
    maxAmount: 5000000,
    minRate: 5.9,
    maxRate: 14.0,
    minTerm: 12,
    maxTerm: 300,
    loanType: 'refinancing',
    acceptsPaymentRemarks: true,
    description: 'Varde Finans spesialiserer seg på refinansiering med sikkerhet i bolig. Kan hjelpe deg selv om du har betalingsanmerkninger.',
    features: ['Refinansiering med pant', 'Godtar betalingsanmerkninger', 'Lav rente med sikkerhet', 'Opptil 5 mill'],
    rating: 4.2,
  },
  {
    id: 'scoopr',
    name: 'Scoopr',
    programId: 1870270011,
    adId: 1870270012,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1870270008',
    url: 'https://scoopr.no',
    epc: 51.36,
    commissions: [{ name: 'Refinansiering', value: 1200, type: 'NOK' }],
    minAmount: 50000,
    maxAmount: 5000000,
    minRate: 5.5,
    maxRate: 15.0,
    minTerm: 12,
    maxTerm: 300,
    loanType: 'refinancing',
    acceptsPaymentRemarks: true,
    description: 'Scoopr tilbyr refinansiering med og uten sikkerhet. De er kjent for å hjelpe folk som sliter med dyr gjeld.',
    features: ['Refinansiering spesialist', 'Med og uten sikkerhet', 'Hjelper med betalingsanmerkninger', 'Rask behandling'],
    rating: 4.1,
  },
  {
    id: 'langivere',
    name: 'Långivere',
    programId: 1926379043,
    adId: 1926379047,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1926379042',
    url: 'https://www.xn--lngivere-9za.no',
    epc: null,
    commissions: [
      { name: 'Small: 0-100k', value: 650, type: 'NOK' },
      { name: 'Medium: 100-200k', value: 1400, type: 'NOK' },
      { name: 'Large: 200-400k', value: 3000, type: 'NOK' },
      { name: 'X-Large: 400k+', value: 4500, type: 'NOK' },
    ],
    minAmount: 10000,
    maxAmount: 600000,
    minRate: 7.49,
    maxRate: 24.0,
    minTerm: 12,
    maxTerm: 180,
    loanType: 'broker',
    acceptsPaymentRemarks: false,
    description: 'Långivere sammenligner lån fra flere banker og gir deg oversikt over de beste tilbudene. God for større lån.',
    features: ['Sammenlign banker', 'Spesielt bra for store lån', 'Gebyrfri tjeneste', 'Rask prosess'],
    rating: 4.0,
  },
  {
    id: 'nanofinans',
    name: 'Nanofinans',
    programId: 1831295806,
    adId: 1831295809,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1831295805',
    url: 'https://nanofinans.no',
    epc: 17.72,
    commissions: [
      { name: 'Lead - Micro', value: 200, type: 'NOK' },
      { name: 'Lead - Low', value: 1225, type: 'NOK' },
      { name: 'Lead - High', value: 2800, type: 'NOK' },
    ],
    minAmount: 5000,
    maxAmount: 500000,
    minRate: 9.9,
    maxRate: 24.0,
    minTerm: 1,
    maxTerm: 180,
    loanType: 'unsecured',
    acceptsPaymentRemarks: false,
    description: 'Nanofinans tilbyr forbrukslån fra flere banker. Enkelt å søke, og du kan få svar på dagen.',
    features: ['Flere banker', 'Mikrolån fra 5 000 kr', 'Svar på dagen', 'Ingen sikkerhet nødvendig'],
    rating: 3.8,
  },
  {
    id: 'heimfinans',
    name: 'Heimfinans',
    programId: 1903082474,
    adId: 1903082477,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1903082473',
    url: 'https://heimfinans.no/sok',
    epc: null,
    commissions: [{ name: 'Lån med sikkerhet', value: 2400, type: 'NOK' }],
    minAmount: 200000,
    maxAmount: 10000000,
    minRate: 5.0,
    maxRate: 12.0,
    minTerm: 12,
    maxTerm: 360,
    loanType: 'secured',
    acceptsPaymentRemarks: true,
    description: 'Heimfinans tilbyr lån med sikkerhet i bolig. Kan hjelpe selv med betalingsanmerkninger dersom du har nok egenkapital.',
    features: ['Lån med pant i bolig', 'Godtar betalingsanmerkninger', 'Lavere rente enn usikret', 'Inntil 10 mill'],
    rating: 4.0,
  },
  {
    id: 'lendo',
    name: 'Lendo',
    programId: 1081817785,
    adId: 1081817788,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1081817783',
    url: 'https://www.lendo.no',
    epc: 21.29,
    commissions: [
      { name: 'Usikret lån', value: 750, type: 'NOK' },
      { name: 'Kredittkort', value: 1050, type: 'NOK' },
    ],
    minAmount: 10000,
    maxAmount: 600000,
    minRate: 7.4,
    maxRate: 22.0,
    minTerm: 12,
    maxTerm: 180,
    loanType: 'broker',
    acceptsPaymentRemarks: false,
    description: 'Lendo er Norges mest kjente lånemegler. De sammenligner tilbud fra en rekke banker og finansinstitusjoner.',
    features: ['Norges største lånemegler', 'Én søknad, mange tilbud', 'Gratis tjeneste', 'Refinansiering'],
    rating: 4.4,
  },
  {
    id: 'motty-forbrukslan',
    name: 'Motty Forbrukslån',
    programId: 1886545027,
    adId: 1886545028,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1886545025',
    url: 'https://www.motty.no/landingsside-forbrukslan',
    epc: 11.46,
    commissions: [{ name: 'Godkjent', value: 2400, type: 'NOK' }],
    minAmount: 10000,
    maxAmount: 500000,
    minRate: 8.5,
    maxRate: 23.0,
    minTerm: 12,
    maxTerm: 144,
    loanType: 'unsecured',
    acceptsPaymentRemarks: false,
    description: 'Motty tilbyr forbrukslån med en enkel digital søknadsprosess. Raskt svar og gode vilkår.',
    features: ['Heldigital prosess', 'Raskt svar', 'Fleksibel nedbetalingstid', 'Refinansiering'],
    rating: 4.1,
  },
  {
    id: 'motty-smalan',
    name: 'Motty Smålån',
    programId: 2013682334,
    adId: 2013682338,
    logoUrl: 'https://adtraction.com/image.htm?imgId=2013682333',
    url: 'https://www.motty.no/landingsside-smalan',
    epc: null,
    commissions: [{ name: 'CPA', value: 1400, type: 'NOK' }],
    minAmount: 10000,
    maxAmount: 100000,
    minRate: 12.0,
    maxRate: 24.0,
    minTerm: 3,
    maxTerm: 60,
    loanType: 'smalan',
    acceptsPaymentRemarks: false,
    description: 'Motty Smålån passer for deg som trenger et mindre beløp raskt. Enkel søknad, og svar på minutter.',
    features: ['Smålån fra 10 000 kr', 'Svar på minutter', 'Enkel søknad', 'Ingen sikkerhet'],
    rating: 3.9,
  },
  {
    id: 'ferratum',
    name: 'Ferratum',
    programId: 1087917617,
    adId: 1087917620,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1087917515',
    url: 'https://www.ferratum.no',
    epc: 10.04,
    commissions: [{ name: 'Konvertering', value: 1100, type: 'NOK' }],
    minAmount: 1000,
    maxAmount: 50000,
    minRate: 19.0,
    maxRate: 34.0,
    minTerm: 1,
    maxTerm: 60,
    loanType: 'smalan',
    acceptsPaymentRemarks: true,
    description: 'Ferratum er kjent for raske smålån. Kan vurdere søknader med betalingsanmerkninger i noen tilfeller.',
    features: ['Smålån fra 1 000 kr', 'Svar på minutter', 'Utbetaling samme dag', 'Kan godta anmerkninger'],
    rating: 3.5,
  },
  {
    id: 'sambla',
    name: 'Sambla',
    programId: 1923319884,
    adId: 1923319888,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1923319883',
    url: 'https://sambla.no',
    epc: 6.39,
    commissions: [
      { name: 'CPA', value: 1300, type: 'NOK' },
      { name: 'Kredittkort', value: 850, type: 'NOK' },
    ],
    minAmount: 25000,
    maxAmount: 600000,
    minRate: 7.9,
    maxRate: 22.0,
    minTerm: 12,
    maxTerm: 180,
    loanType: 'broker',
    acceptsPaymentRemarks: false,
    description: 'Sambla er en lånemegler som sammenligner forbrukslån fra mange banker. God for refinansiering og samlelån.',
    features: ['Mange banker', 'Refinansiering', 'Samle smålån', 'Gratis tjeneste'],
    rating: 4.0,
  },
  {
    id: 'uno-finans',
    name: 'Uno Finans',
    programId: 1437914819,
    adId: 1437914822,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1437914817',
    url: 'https://www.unofinans.no',
    epc: 10.06,
    commissions: [
      { name: 'Usikret lån', value: 1300, type: 'NOK' },
      { name: 'Lån med sikkerhet', value: 1150, type: 'NOK' },
      { name: 'Kredittkort', value: 850, type: 'NOK' },
    ],
    minAmount: 10000,
    maxAmount: 600000,
    minRate: 7.9,
    maxRate: 22.0,
    minTerm: 12,
    maxTerm: 180,
    loanType: 'broker',
    acceptsPaymentRemarks: false,
    description: 'Uno Finans sammenligner tilbud fra flere banker, både usikret lån og lån med sikkerhet.',
    features: ['Usikret og sikret lån', 'Flere banker', 'Kredittkort', 'Rask søknad'],
    rating: 3.9,
  },
  {
    id: 'digifinans',
    name: 'Digifinans',
    programId: 1923321282,
    adId: 1923321285,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1923321281',
    url: 'https://digifinans.no',
    epc: 16.87,
    commissions: [{ name: 'CPA', value: 1300, type: 'NOK' }],
    minAmount: 10000,
    maxAmount: 500000,
    minRate: 8.0,
    maxRate: 23.0,
    minTerm: 12,
    maxTerm: 144,
    loanType: 'broker',
    acceptsPaymentRemarks: false,
    description: 'Digifinans er en digital lånemegler som finner de beste tilbudene for deg. Heldigital prosess.',
    features: ['Heldigital', 'Mange banker', 'Raskt svar', 'Refinansiering'],
    rating: 3.8,
  },
  {
    id: 'instabank-refi',
    name: 'Instabank',
    programId: 1575430436,
    adId: 1575430439,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1575430434',
    url: 'https://instabank.no',
    epc: 4.67,
    commissions: [{ name: 'Refinansiering med sikkerhet', value: 430, type: 'NOK' }],
    minAmount: 100000,
    maxAmount: 5000000,
    minRate: 5.5,
    maxRate: 11.0,
    minTerm: 12,
    maxTerm: 300,
    loanType: 'refinancing',
    acceptsPaymentRemarks: false,
    description: 'Instabank tilbyr refinansiering med sikkerhet i bolig. Kjent for heldigital prosess og lave renter.',
    features: ['Refinansiering med pant', 'Heldigital', 'Lav rente', 'Rask behandling'],
    rating: 4.2,
  },
  {
    id: 'thorn',
    name: 'Thorn',
    programId: 839045457,
    adId: 839045466,
    logoUrl: 'https://adtraction.com/image.htm?imgId=839045452',
    url: 'https://thorn.no',
    epc: 36.29,
    commissions: [{ name: 'Konvertering', value: 2250, type: 'NOK' }],
    minAmount: 5000,
    maxAmount: 600000,
    minRate: 8.99,
    maxRate: 24.0,
    minTerm: 12,
    maxTerm: 180,
    loanType: 'unsecured',
    acceptsPaymentRemarks: false,
    description: 'Thorn Privatlån tilbyr fleksible forbrukslån med mulighet for refinansiering.',
    features: ['Fleksibelt', 'Refinansiering', 'Lån uten sikkerhet', 'Raskt svar'],
    rating: 3.9,
  },
  {
    id: 'motty-sikkerhet',
    name: 'Motty Lån med sikkerhet',
    programId: 1896776414,
    adId: 1896776415,
    logoUrl: 'https://adtraction.com/image.htm?imgId=1896776412',
    url: 'https://www.motty.no/5-millioner-med-sikkerhet',
    epc: null,
    commissions: [{ name: 'Lead', value: 800, type: 'NOK' }],
    minAmount: 100000,
    maxAmount: 5000000,
    minRate: 5.0,
    maxRate: 12.0,
    minTerm: 12,
    maxTerm: 300,
    loanType: 'secured',
    acceptsPaymentRemarks: true,
    description: 'Motty tilbyr lån med sikkerhet i bolig opp til 5 millioner. Vurderer søknader med betalingsanmerkninger.',
    features: ['Sikkerhet i bolig', 'Inntil 5 mill', 'Vurderer anmerkninger', 'Heldigitalt'],
    rating: 3.8,
  },
]

// Only return providers we earn money from
function approvedOnly(providers: LoanProvider[]): LoanProvider[] {
  return providers.filter(p => APPROVED_AD_IDS.has(p.adId))
}

// Helper functions
export function getTopProviders(count: number = 10): LoanProvider[] {
  return approvedOnly([...loanProviders])
    .sort((a, b) => (b.epc || 0) - (a.epc || 0))
    .slice(0, count)
}

export function getProvidersForRemarks(): LoanProvider[] {
  return approvedOnly(loanProviders.filter(p => p.acceptsPaymentRemarks))
}

export function getProvidersByType(type: LoanProvider['loanType']): LoanProvider[] {
  return approvedOnly(loanProviders.filter(p => p.loanType === type))
}

export function getSecuredProviders(): LoanProvider[] {
  return approvedOnly(loanProviders.filter(p => p.loanType === 'secured' || p.loanType === 'refinancing'))
}

export function getUnsecuredProviders(): LoanProvider[] {
  return approvedOnly(loanProviders.filter(p => p.loanType === 'unsecured' || p.loanType === 'broker'))
}

export function getSmallLoanProviders(): LoanProvider[] {
  return approvedOnly(loanProviders.filter(p => p.loanType === 'smalan' || (p.minAmount && p.minAmount <= 10000)))
}
