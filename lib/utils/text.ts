export function capitalizeString(str: string, maxLength: number) {
  const capitalizedString = str.replace(/[^A-Z]+/g, '')

  if (maxLength > 0) return capitalizedString.slice(0, maxLength)
  return capitalizedString
}

export function includesValue(str: string, searchValue: string) {
  return Boolean(str.toLowerCase().includes(searchValue.toLowerCase()))
}
