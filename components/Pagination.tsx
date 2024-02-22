'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
interface Props {
  nextPage: boolean
  filterParam?: string
  filterSearch?: string
}

export default function Pagination({
  nextPage,
  filterParam,
  filterSearch,
}: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search =
    filterParam != null
      ? searchParams.get(filterParam)
      : searchParams.get('filter')
  const pageNumber = Number(searchParams.get('page') ?? 1)
  const filterQuery =
    filterSearch != null ? filterSearch : search === '' ? 'all' : search
  const prevNumber = pageNumber > 1 ? pageNumber - 1 : 0
  const nextNumber = pageNumber + 1

  const filterQueryOption =
    filterParam != null
      ? {
          [filterParam]: filterQuery,
        }
      : {
          filter: filterQuery,
        }

  if (nextPage || pageNumber > 1) {
    return (
      <div className="join w-full justify-center">
        <div className="card flex-row rounded-lg border border-solid border-zinc-300 shadow-md">
          {pageNumber === 1 && (
            <button
              className="join-item btn bg-white"
              disabled
            >
              «
            </button>
          )}
          {pageNumber !== 1 && (
            <Link
              href={{
                pathname,
                query: { ...filterQueryOption, page: prevNumber },
              }}
              className="join-item btn bg-white"
            >
              «
            </Link>
          )}
          <button className="join-item btn cursor-default">
            Página {pageNumber}
          </button>
          {nextPage && (
            <Link
              href={{
                pathname,
                query: { ...filterQueryOption, page: nextNumber },
              }}
              className="join-item btn bg-white"
            >
              »
            </Link>
          )}
          {!nextPage && (
            <button
              className="join-item btn bg-white"
              disabled
            >
              »
            </button>
          )}
        </div>
      </div>
    )
  }

  return null
}
