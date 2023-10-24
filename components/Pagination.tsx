'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
interface Props {
  pageNumber: number
  nextPage: boolean
}

export default function Pagination({ pageNumber, nextPage }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('filter')
  const filterQuery = search === '' ? 'all' : search
  const prevNumber = pageNumber > 1 ? pageNumber - 1 : 0
  const nextNumber = pageNumber + 1

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
                query: { filter: filterQuery, page: prevNumber },
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
                query: { filter: filterQuery, page: nextNumber },
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
