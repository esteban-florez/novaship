interface Props {
  pageNumber: number
  totalRecords: number
  pageSize?: number
}

export default function getPaginationProps({
  pageNumber,
  totalRecords,
  pageSize = 20,
}: Props) {
  const totalPages = Math.ceil(totalRecords / pageSize)
  const nextPage = pageNumber < totalPages

  const skip = (pageNumber - 1) * pageSize
  const take = pageSize

  return { nextPage, skip, take }
}
