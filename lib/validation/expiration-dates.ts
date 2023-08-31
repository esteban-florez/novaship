const expirationTime = [
  { id: 'DAYS1', time: 1 },
  { id: 'DAYS3', time: 3 },
  { id: 'DAYS5', time: 5 },
  { id: 'DAYS7', time: 7 },
  { id: 'DAYS15', time: 15 },
  { id: 'DAYS31', time: 31 },
]

export const EXPIRATION_DATES = {
  DAYS1: 'DAYS1',
  DAYS3: 'DAYS3',
  DAYS5: 'DAYS5',
  DAYS7: 'DAYS7',
  DAYS15: 'DAYS15',
  DAYS31: 'DAYS31',
}

export const getExpirationDate = (id: string) => {
  const date = new Date()
  const extraDays = expirationTime.find(exp => exp.id === id)?.time

  extraDays !== null && extraDays !== undefined
    ? date.setDate(date.getDate() + extraDays)
    : date.setDate(date.getDate() + 1)

  return date
}
