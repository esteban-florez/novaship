import numbers from './number'

export function randomCode(type: 'project' | 'team') {
  const prefix = type === 'project' ? 'PR' : 'EQ'
  return `${prefix}-${numbers(100_000, 999_999).random()}`
}

function isCUID(string: string) {
  const CODES = {
    a: 97,
    zero: 48,
  }

  // numerical char codes range from 48 -> 48 + 9
  const NUMBERS_CHAR_CODES = Array(10).fill(null).map((_, idx) => idx + CODES.zero)

  // lowercase alphabet codes
  const LOWERCASE_LETTERS_CHAR_CODES = Array(26).fill(null).map((_, idx) => idx + CODES.a)

  const VALID_CUID_CHAR_CODES = [...NUMBERS_CHAR_CODES, ...LOWERCASE_LETTERS_CHAR_CODES]

  const containsOnlyValidCuidValues = (val: string): boolean => {
    // remove 'c' char
    const tail = val.substr(1)

    return tail.split('').every(
      (char) => VALID_CUID_CHAR_CODES.includes(char.charCodeAt(0))
    )
  }

  return string.charAt(0) === 'c' && string.length > 7 && containsOnlyValidCuidValues(string)
}

export function removeCUIDFromString(string: string) {
  return string.split('/').map(s => !isCUID(s) ? s : 'id').join('/')
}
