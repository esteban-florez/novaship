import { diffForHumans } from '@/lib/utils/date'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  id: string
  title: string
  content: React.ReactNode
  href: string
  date: Date
}>

export default function Notification({ title, content, href, date }: Props) {
  return (
    <Link href={href} className="flex flex-col pb-2 w-80 max-w-xs gap-1 py-1 pe-6 ps-4 last:mb-2 last:pt-1 hover:bg-base-200 cursor-pointer">
      <h4 className="font-bold text-primary">
        {title}
      </h4>
      <p className="line-clamp-2 text-sm leading-tight font-semibold normal-case">
        {content}
      </p>
      <small className="ml-auto">{diffForHumans(date)}</small>
    </Link>
  )
}
