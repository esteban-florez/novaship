import collect from './collection'

class Numbers<T extends number> {
  number: T[]
  MIN_VALUE = 1
  MAX_VALUE = 99_999_999

  constructor(number?: T | T[], secondNumber?: T) {
    if (Array.isArray(number)) {
      if (number.length < 2) {
        throw new Error('Array must have at least two values.')
      }
      this.number = number
      this.MIN_VALUE = Math.min(...this.number)
      this.MAX_VALUE = Math.max(...this.number)
    } else if (typeof number === 'number' && typeof secondNumber === 'number') {
      this.number = [number, secondNumber]
      this.MIN_VALUE = Math.min(number, secondNumber)
      this.MAX_VALUE = Math.max(number, secondNumber)
    } else if (typeof number === 'number') {
      this.number = [number]
      this.MAX_VALUE = Math.max(...this.number)
    } else {
      this.number = []
    }
  }

  /**
   * Returns a random phone number with format (0000) 000 00 00
   * @returns string
   */
  phone() {
    this.MIN_VALUE = 1_000_000
    this.MAX_VALUE = 9_999_999

    const code = ['0412', '0414', '0416', '0424', '0426']
    const selectedCode = collect(code).random().first()
    const phone = `${selectedCode}${this.random()}`
    return phone.toString()
  }

  /**
   * Returns a random CI between 1 - 99.999.999.
   * Can start from min or have a max value only.
   * @returns string
   */
  ci() {
    this.MIN_VALUE = 6_000_000
    this.MAX_VALUE = 50_000_000
    return this.random().toString()
  }

  rif() {
    this.MIN_VALUE = 1_000_000_000
    this.MAX_VALUE = 9_999_999_999
    return this.random().toString()
  }

  /**
   * Returns a random number between two given digits
   * @returns number
   */
  random() {
    return Math.floor(Math.random() * (this.MAX_VALUE - this.MIN_VALUE + 1) + this.MIN_VALUE)
  }

  /**
   * Returns a random value from array
   * @returns number
   */
  randomValue() {
    return this.number[Math.floor(Math.random() * this.number.length)]
  }
}

/**
 * Accepts 0-2 numbers or a number array, if no values provided min and max values will be (1 - 99.999.999)
 * @param number
 * @param secondNumber optional
 * @returns
 */
export default function numbers<T extends number>(number?: T | T[], secondNumber?: T) {
  return new Numbers(number, secondNumber)
}
