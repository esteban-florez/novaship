import Link from 'next/link'

interface Props {
  url: string
  pageNumber: number
  nextPage: boolean
}

// TODO -> perdurar la query
export default function Pagination({ url, pageNumber, nextPage }: Props) {
  const prevNumber = pageNumber > 1 ? pageNumber - 1 : 0
  const nextNumber = pageNumber + 1

  return (
    <div className="join mb-10 w-full justify-center">
      <div className="card flex-row rounded-lg border border-solid border-zinc-300 shadow-md">
        {pageNumber === 1 && <button className="join-item btn bg-white" disabled>«</button>}
        {pageNumber !== 1 &&
          <Link
            href={{
              pathname: url,
              query: { page: prevNumber },
            }}
            className="join-item btn bg-white"
          >
            «
          </Link>}
        <button className="join-item btn cursor-default">Página {pageNumber}</button>
        {nextPage &&
          <Link
            href={{
              pathname: url,
              query: { page: nextNumber },
            }}
            className="join-item btn bg-white"
          >
            »
          </Link>}
        {!nextPage && <button className="join-item btn bg-white" disabled>»</button>}
      </div>
    </div>
  )
}
