import Button from './pagination/Button'

interface Props {
  url: string
  pageNumber: number
  hasNextPage: boolean
}

export default function Pagination({ url, pageNumber, hasNextPage }: Props) {
  const prevNumber = pageNumber > 1 ? pageNumber - 1 : 0
  const nextNumber = pageNumber + 1

  return (
    <div className="join mb-10 w-full justify-center">
      <div className="card flex-row rounded-lg border border-solid border-zinc-300 shadow-md">
        <Button
          url={url}
          direction="prev"
          toPage={prevNumber}
          show={pageNumber === 1 ? 'button' : 'link'}
        />
        <button className="join-item btn cursor-default">Página {pageNumber}</button>
        <Button
          url={url}
          direction="next"
          toPage={nextNumber}
          show={hasNextPage ? 'link' : 'button'}
        />
      </div>
    </div>
  )
}
