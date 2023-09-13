import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  url: string
  pageNumber: number
  hasNextPage: boolean
}

interface PageProps {
  pageNumber: number
}

export default function Pagination({ url, pageNumber, hasNextPage }: Props) {
  const prevNumber = pageNumber > 1 ? pageNumber - 1 : 0
  const nextNumber = pageNumber + 1

  const PrevBtn = ({ pageNumber }: PageProps) => {
    if (pageNumber === 0) {
      return <button className="join-item btn bg-white" disabled>«</button>
    }

    return (
      <Link
        href={{
          pathname: url,
          query: { page: prevNumber },
        }}
        className={clsx({
          'join-item btn bg-white': true,
        }
        )}
      >
        «
      </Link>
    )
  }

  const NextBtn = ({ pageNumber }: PageProps) => {
    if (hasNextPage) {
      return (
        <Link
          href={{
            pathname: url,
            query: { page: pageNumber },
          }}
          className="join-item btn bg-white"
        >
          »
        </Link>
      )
    }

    return (
      <button className="join-item btn bg-white" disabled>»</button>
    )
  }

  return (
    <div className="join mb-10 w-full justify-center">
      <div className="card flex-row rounded-lg border border-solid border-zinc-300 shadow-md">
        <PrevBtn pageNumber={prevNumber} />
        <button className="join-item btn cursor-default">Página {pageNumber}</button>
        <NextBtn pageNumber={nextNumber} />
      </div>
    </div>
  )
}
