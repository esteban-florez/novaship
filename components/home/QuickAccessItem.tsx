import { type QuickAccessProps } from '@/lib/types'
import Link from 'next/link'

interface Props {
  item: QuickAccessProps
}

export default function QuickAccessItem({ item }: Props) {
  const { title, icon, href } = item

  return (
    <Link
      key={title}
      href={href}
    >
      <div className="badge badge-sm sm:badge-md hover:badge-primary border border-zinc-300 py-4 rounded-md gap-x-2">
        {icon}
        {title}
      </div>
    </Link>
  )
}
