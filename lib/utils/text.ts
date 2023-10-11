export function includesValue(str: string, searchValue: string) {
  return Boolean(str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(searchValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()))
}
