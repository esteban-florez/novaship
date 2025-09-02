'use client'

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ParsedUrlQueryInput } from 'querystring'

interface Props {
  nextPage?: boolean
  currentPage: number
  totalRecords: number
  pageSize?: number
  totalPages: number
  queryParams?: ParsedUrlQueryInput
}

export default function Pagination({
  nextPage = false,
  currentPage,
  totalRecords,
  pageSize = 20,
  totalPages,
  queryParams,
}: Props) {
  const pathname = usePathname()
  const showingRecords = totalRecords < pageSize ? totalRecords : pageSize
  const plural = showingRecords > 1 ? 's' : null
  const prevBtn = currentPage > 1 ? currentPage - 1 : 1
  const nextBtn = currentPage + 1
  const startRecord = (currentPage - 1) * pageSize + 1
  const endRecord = Math.min(startRecord + pageSize - 1, totalRecords)

  if (showingRecords === 0) {
    return null
  }

  const pagesToHome = Array.from(
    { length: currentPage - 1 },
    (_, i) => currentPage - i - 1
  ).slice(0, 2)

  pagesToHome.reverse()

  const pagesToLast = Array.from(
    { length: totalPages - currentPage - 1 },
    (_, i) => currentPage + i
  ).slice(0, currentPage < totalPages ? 2 : 3)

  return (
    <article className="mt-8 mb-4 flex flex-col items-center justify-center gap-2">
      <p className="text-zinc-600">
        Mostrando <span className="font-bold">{startRecord}</span> a{' '}
        <span className="font-bold">{endRecord}</span> registro
        {plural} de <span className="font-bold">{totalRecords}</span>
      </p>
      {(currentPage > 1 || nextPage) && (
        <div className="join">
          {prevBtn === 1 && currentPage === 1
            ? (
              <button
                type="button"
                disabled
                className="join-item btn"
                aria-label="Botón de ir a la página anterior"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              )
            : (
              <Link
                aria-label="Botón de ir a página 1"
                href={{
                  pathname,
                  query: {
                    page: prevBtn,
                    ...(queryParams != null ? queryParams : {}),
                  },
                }}
                className="join-item btn hover:btn-primary"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </Link>
              )}
          {currentPage > 3 && (
            <Link
              href={{
                pathname,
                query: { page: 1, ...(queryParams != null ? queryParams : {}) },
              }}
              className="join-item btn hover:btn-primary"
            >
              1
            </Link>
          )}
          {pagesToHome.map((page) => {
            return (
              <Link
                key={page}
                aria-label={`Botón de ir a página ${page}`}
                href={{
                  pathname,
                  query: { page, ...(queryParams != null ? queryParams : {}) },
                }}
                className="join-item btn hover:btn-primary"
              >
                {page}
              </Link>
            )
          })}
          <button
            aria-label={`Botón de ir a página ${currentPage} (actual)`}
            className="join-item btn btn-primary"
            type="button"
          >
            {currentPage}
          </button>
          {pagesToLast.map((page) => {
            return (
              <Link
                key={page}
                aria-label={`Botón de ir a página ${page + 1}`}
                href={{
                  pathname,
                  query: {
                    page: page + 1,
                    ...(queryParams != null ? queryParams : {}),
                  },
                }}
                className="join-item btn hover:btn-primary"
              >
                {page + 1}
              </Link>
            )
          })}
          {currentPage < totalPages && (
            <Link
              aria-label="Botón de ir a última página"
              href={{
                pathname,
                query: {
                  page: totalPages,
                  ...(queryParams != null ? queryParams : {}),
                },
              }}
              className="join-item btn hover:btn-primary"
            >
              {totalPages}
            </Link>
          )}
          {nextPage
            ? (
              <Link
                aria-label="Botón de ir a siguiente página"
                href={{
                  pathname,
                  query: {
                    page: nextBtn,
                    ...(queryParams != null ? queryParams : {}),
                  },
                }}
                className="join-item btn hover:btn-primary"
              >
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              )
            : (
              <button
                type="button"
                disabled
                className="join-item btn"
                aria-label="Botón de ir a siguiente página"
              >
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              )}
        </div>
      )}
    </article>
  )
}
