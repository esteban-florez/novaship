'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { routes } from '@/lib/translations'

export default function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(segment => segment !== '')
  const currentSegment = segments.at(-1)

  const links: string[] = []

  const structuredLink = (path: string) => {
    const lastLink = links.at(-1)

    lastLink != null ? links.push(lastLink.concat(`/${path}`)) : links.push(`/${path}`)
    return links.at(-1) ?? '/home'
  }

  return (
    <div className="hidden items-center justify-start p-4 sm:flex">
      <ul className="flex font-bold">
        <li className="flex items-center">~</li>
        {segments.map(segment => {
          return (
            <li key={segment} className="flex items-center before:me-3 before:ms-2 before:block before:opacity-90 before:content-['/']">
              {segment === currentSegment && <span className="text-primary">{routes[segment]}</span>}
              {segment !== currentSegment &&
                <Link
                  href={structuredLink(segment)}
                  className="hover:text-accent hover:underline"
                >
                  {routes[segment]}
                </Link>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
