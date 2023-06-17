export function capitalizeString(str: string, maxLength: number): string {
  const capitalizedString: string = str.replace(/[^A-Z]+/g, '')

  if (maxLength > 0) return capitalizedString.slice(0, maxLength)
  return capitalizedString
}
