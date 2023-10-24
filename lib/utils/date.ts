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
