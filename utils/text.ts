export function getCapitalize(str: string): string {
  return str.replace(/[^A-Z]+/g, "")
}
