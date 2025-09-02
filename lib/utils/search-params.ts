export const param = (searchParam: string | string[] | undefined) =>
  Array.isArray(searchParam) ? searchParam[0] : searchParam

export const params = (searchParam: string | string[] | undefined) =>
  Array.isArray(searchParam) ? searchParam : [searchParam]

export function getSearchAndFilter(
  searchParams: Record<string, string | string[] | undefined>
) {
  const search = param(searchParams.search)
  const filter = param(searchParams.filtered)
  return { search, filter }
}
