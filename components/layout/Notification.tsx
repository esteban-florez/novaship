import { type NotificationProps } from '@/lib/types'
import { diffForHumans } from '@/lib/utils/date'
import Link from 'next/link'

export default function Notification({
  title,
  content,
  href,
  date,
}: NotificationProps) {
  return (
    <Link
      href={href}
      className="flex flex-col pb-2 w-80 max-w-xs py-1 pe-6 ps-4 last:mb-2 last:pt-1 hover:bg-base-200 cursor-pointer"
    >
      <h4 className="font-bold text-primary">{title}</h4>
      <p className="line-clamp-2 text-sm leading-tight font-semibold normal-case">
        {content}
      </p>
      <small>{diffForHumans(date)}</small>
    </Link>
  )
}
