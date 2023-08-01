/**
 * @param array must be a string array
 * @returns returns a random value from given array
 */

export function getRandomValueFromArray(array: string[]) {
  return array[array.length * Math.random() | 0]
}

/**
 * @param firstValue 
 * @param secondValue 
 * @returns returns the same position value from two arrays
 */
export function getRandomValuesFromPositionInArray(firstValue: string[], secondValue: string[]) {
  const position = firstValue.length * Math.random() | 0
  const firstPosition = firstValue[position]
  const secondPosition = secondValue[position]
  return { firstPosition, secondPosition}
}