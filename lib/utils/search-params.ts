export const param = (searchParam: string | string[] | undefined) =>
  Array.isArray(searchParam) ? searchParam[0] : searchParam

export const params = (searchParam: string | string[] | undefined) =>
  Array.isArray(searchParam) ? searchParam : [searchParam]
