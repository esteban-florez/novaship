import { param } from './search-params'

interface Props {
  totalRecords: number
  pageNumber?: number
  pageSize?: number
  searchParams?: Record<string, string | string[] | undefined>
}

export default function getPaginationProps({
  pageNumber,
  totalRecords,
  searchParams,
  pageSize = 20,
}: Props) {
  let page = 1

  if (pageNumber === undefined) {
    if (searchParams !== undefined) { page = Number(param(searchParams.page) ?? 1) }
  } else {
    page = pageNumber
  }

  const totalPages = Math.ceil(totalRecords / pageSize)
  const nextPage = page < totalPages

  const skip = (page - 1) * pageSize
  const take = pageSize

  return { nextPage, skip, take, totalPages, page }
}
