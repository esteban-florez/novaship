'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { routes } from '@/lib/translations'
import clsx from 'clsx'

export default function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(segment => segment !== '')
  segments.unshift('home')
  const currentSegment = segments.at(-1)

  return (
    <div className="hidden items-center justify-start p-4 text-sm sm:flex">
      <ul className="flex font-bold">
        <li className="flex items-center">~</li>
        {segments.map(segment => {
          return (
            <li key={segment} className="flex items-center before:me-3 before:ms-2 before:block before:opacity-90 before:content-['/']">
              <Link
                href={segment === 'home' ? '/' : `/${segment}`}
                className={clsx('hover:text-accent hover:underline', segment === currentSegment && 'text-primary')}
              >
                {routes[segment]}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
