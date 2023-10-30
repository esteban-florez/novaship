import { getExpirationDiff } from '../validation/expiration-dates'

export function getExpiresAtDate(date: Date | null) {
  const today = new Date()

  if (date != null) {
    const difference = getExpirationDiff(date ?? new Date(), today)
    return difference
  }

  return today.getDate()
}

// TODO -> buscar otra forma de mostrar las graficas de tasks.
// DEV -> solucion temporal para errores
interface countElementsByDateProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arr: Array<Record<string, any>>
  param: string
}

function countElementsByDate({ arr, param }: countElementsByDateProps) {
  const map = new Map()
  arr.forEach((val) => {
    const createdAt = new Date(val[param])
    const date = createdAt.toISOString().slice(0, 10)
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/strict-boolean-expressions
    map.set(date, (map.get(date) || 0) + 1)
  })
  const result = Array.from(map, ([date, count]) => ({ date, count }))
  return result
}

function fillArrayWithData(data: Array<{ date: string, count: number }>): number[] {
  const result = new Array(12).fill(0)
  data.forEach((val) => {
    const month = parseInt(val.date.slice(5, 7))
    result[month - 1] = val.count
  })
  return result
}

export function structureDataForGraphic({ arr, param }: countElementsByDateProps) {
  const data = countElementsByDate({ arr, param })
  return fillArrayWithData(data)
}

export function format(date: Date, weekday = false) {
  return date.toLocaleDateString('es', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: weekday ? 'short' : undefined,
  })
}

export function diffForHumans(date: Date) {
  const intl = new Intl.RelativeTimeFormat('es-VE')
  const diffInMs = Date.now() - Number(date)
  const diffInMins = Math.ceil(diffInMs / 1000 / 60)

  let value = 1
  let unit: Intl.RelativeTimeFormatUnit = 'minute'

  if (diffInMins >= 60) {
    value = diffInMins / 60
    unit = 'hour'
  }

  if (diffInMins >= 24 * 60) {
    value = diffInMins / 24 / 60
    unit = 'day'
  }

  if (diffInMins >= 60 * 24 * 30) {
    value = diffInMins / 60 / 24 / 30
    unit = 'month'
  }

  if (diffInMins >= 60 * 24 * 30 * 12) {
    value = diffInMins / 60 / 24 / 30 / 12
    unit = 'year'
  }

  value = Math.round(value)

  if (value > 1) {
    unit = unit + 's' as Intl.RelativeTimeFormatUnit
  }

  return intl.format(-value, unit)
}
