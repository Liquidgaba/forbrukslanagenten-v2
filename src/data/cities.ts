export interface City {
  slug: string
  name: string
  population: number
  county: string
}

export const cities: City[] = [
  { slug: 'oslo', name: 'Oslo', population: 709037, county: 'Oslo' },
  { slug: 'bergen', name: 'Bergen', population: 289330, county: 'Vestland' },
  { slug: 'trondheim', name: 'Trondheim', population: 212660, county: 'Trøndelag' },
  { slug: 'stavanger', name: 'Stavanger', population: 144147, county: 'Rogaland' },
  { slug: 'kristiansand', name: 'Kristiansand', population: 115590, county: 'Agder' },
  { slug: 'drammen', name: 'Drammen', population: 103291, county: 'Buskerud' },
  { slug: 'fredrikstad', name: 'Fredrikstad', population: 83734, county: 'Østfold' },
  { slug: 'sandnes', name: 'Sandnes', population: 82428, county: 'Rogaland' },
  { slug: 'tromso', name: 'Tromsø', population: 78967, county: 'Troms' },
  { slug: 'sarpsborg', name: 'Sarpsborg', population: 58727, county: 'Østfold' },
  { slug: 'bodo', name: 'Bodø', population: 53420, county: 'Nordland' },
  { slug: 'sandefjord', name: 'Sandefjord', population: 65922, county: 'Vestfold' },
  { slug: 'aalesund', name: 'Ålesund', population: 67200, county: 'Møre og Romsdal' },
  { slug: 'tonsberg', name: 'Tønsberg', population: 57791, county: 'Vestfold' },
  { slug: 'moss', name: 'Moss', population: 50290, county: 'Østfold' },
  { slug: 'haugesund', name: 'Haugesund', population: 37444, county: 'Rogaland' },
  { slug: 'porsgrunn', name: 'Porsgrunn', population: 37146, county: 'Telemark' },
  { slug: 'skien', name: 'Skien', population: 55513, county: 'Telemark' },
  { slug: 'lillehammer', name: 'Lillehammer', population: 28802, county: 'Innlandet' },
  { slug: 'molde', name: 'Molde', population: 32002, county: 'Møre og Romsdal' },
  { slug: 'hamar', name: 'Hamar', population: 32647, county: 'Innlandet' },
]
