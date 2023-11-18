export function checkEmpty<T extends T[]>(input: T | T[] | T[][], condition: 'all' | 'one' = 'all') {
  const flatten = (arr: Array<T | T[]>): T[] => {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val as T), [])
  }

  const flattenedInput = Array.isArray(input) ? flatten(input as T[]) : [input as T]

  return condition === 'all'
    ? flattenedInput.every((item: T) => Array.isArray(item) ? item.length === 0 : !item)
    : flattenedInput.some((item: T) => Array.isArray(item) ? item.length === 0 : !item)
}
