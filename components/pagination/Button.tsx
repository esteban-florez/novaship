import clsx from 'clsx'
import Link from 'next/link'

interface PaginationParams {
  url: string
  show: 'button' | 'link'
  toPage: number
  direction: 'prev' | 'next'
}

export default function Button({ url, toPage, show, direction }: PaginationParams) {
  const icon = direction === 'prev' ? '«' : '»'

  if (show === 'button') {
    return <button className="join-item btn bg-white" disabled>{icon}</button>
  }

  return (
    <Link
      href={{
        pathname: url,
        query: { page: toPage },
      }}
      className={clsx({
        'join-item btn bg-white': true,
      }
      )}
    >
      {icon}
    </Link>
  )
}
