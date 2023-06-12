export function capitalizeString(str: string): string {
  return str.replace(/[^A-Z]+/g, '')
}
