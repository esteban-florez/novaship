export function includesValue(str: string, searchValue: string) {
  return Boolean(str.toLowerCase().includes(searchValue.toLowerCase()))
}
