// TODO -> improve this shit

const DATES = [
  { id: 'DAYS1', name: '1 día', time: 1 },
  { id: 'DAYS3', name: '3 día', time: 3 },
  { id: 'DAYS5', name: '5 día', time: 5 },
  { id: 'DAYS7', name: '7 día', time: 7 },
  { id: 'DAYS15', name: '15 día', time: 15 },
  { id: 'DAYS31', name: '31 día', time: 31 },
]

export const ExpireOptions = [1, 3, 5, 7, 15, 30]

export const dates = {
  DAYS1: 'DAYS1',
  DAYS3: 'DAYS3',
  DAYS5: 'DAYS5',
  DAYS7: 'DAYS7',
  DAYS15: 'DAYS15',
  DAYS31: 'DAYS31',
}

export const EXPIRATION_DATES = DATES.map(date => {
  return {
    id: date.id,
    name: date.name,
  }
})

export function getExpirationDiff(a: Date, b: Date) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())

  return Math.floor((utc2 - utc1) / _MS_PER_DAY)
}

export function getExpirationId(a: Date, b: Date) {
  const result = getExpirationDiff(a, b)
  const expirationIndex = DATES.find(date => date.time === result)?.id

  return expirationIndex
}

export const getExpirationDate = (id: string) => {
  const date = new Date()
  const extraDays = DATES.find(date => date.id === id)?.time

  extraDays !== null && extraDays !== undefined
    ? date.setDate(date.getDate() + extraDays)
    : date.setDate(date.getDate() + 1)

  return date
}
