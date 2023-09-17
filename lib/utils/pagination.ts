interface Props {
  pageNumber: number
  totalRecords: number
  pageSize?: number
}

// TODO
// 1. Buscar como pasar searchParams a la funcion para obtener el n° de pagina.
// 2. Implementar los tabs de busqueda (all, mine, etc).
// 3. Arreglar el componente para soportar las tabs (mencionado arriba).

export default function getPaginationProps({ pageNumber, totalRecords, pageSize = 20 }: Props) {
  const totalPages = Math.ceil(totalRecords / pageSize)
  const nextPage = pageNumber < totalPages

  const skip = (pageNumber - 1) * pageSize
  const take = pageSize

  const debugInfo = () => {
    console.count('Executed times')
    console.log({
      Page: pageNumber,
      'Page size': pageSize,
      'Total Records': totalRecords,
      'Total pages': totalPages,
      'Next page': nextPage,
      Skip: skip,
      Take: take,
    })
  }

  return { debugInfo, nextPage, skip, take }
}
