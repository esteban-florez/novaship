import { type QuickAccessProps } from '@/lib/types'
import Link from 'next/link'

interface Props {
  items: QuickAccessProps
}

export default function QuickAccess({ items }: Props) {
  return (
    <article className="mt-2 p-4 shadow-lg">
      <section className="mb-2">
        <h2 className="font-bold text-xl">Accesos rápidos</h2>
      </section>
      <section className="flex flex-wrap gap-2">
        {items.map(({ icon, title, href }) => {
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
        })}
      </section>
    </article>
  )
}
