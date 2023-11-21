import { type NotificationData } from '@/lib/types'
import { diffForHumans } from '@/lib/utils/date'
import Link from 'next/link'

export default function NotificationHome({
  title,
  content,
  href,
  date,
}: NotificationData & { date: Date, content: string | React.ReactNode }) {
  return (
    <Link href={href}>
      <div className="flex flex-col px-4 py-2">
        <h4 className="mb-1 font-bold text-primary">{title}</h4>
        <p className="line-clamp-2 text-sm leading-tight font-semibold normal-case">
          {content}
        </p>
        <small className="mt-1">{diffForHumans(date)}</small>
      </div>
    </Link>
  )
}
