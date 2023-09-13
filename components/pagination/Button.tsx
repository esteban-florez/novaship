import { type PaginationButtonProps } from '@/lib/types'
import clsx from 'clsx'
import Link from 'next/link'

export default function Button({ url, toPage, show, direction }: PaginationButtonProps) {
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
