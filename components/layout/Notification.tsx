import { diffForHumans } from '@/lib/utils/date'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  title: string
  content: React.ReactNode
  href?: string
  date: Date
}>

export default function Notification({ title, content, href, date }: Props) {
  return (
    <li className="flex w-80 max-w-xs cursor-pointer items-center gap-2 py-1 pe-6 ps-4 last:mb-2 last:pt-1 odd:pb-2 even:pb-2">
      <div className="flex flex-col text-start">
        {href !== undefined
          ? (
            <Link href={href} className="font-bold text-primary">
              {title}
            </Link>
            )
          : (
            <h4 className="font-bold text-primary">
              {title}
            </h4>
            )}
        <p className="line-clamp-2 text-sm leading-tight font-semibold normal-case">
          {content}
        </p>
        <small className="text-sm">{diffForHumans(date)}</small>
      </div>
    </li>
  )
}
