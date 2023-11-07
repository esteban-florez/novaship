'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { routes } from '@/lib/translations'

interface Props {
  breadcrumbs?: string | string[]
}

// TODO -> mostrar
export default function Breadcrumbs({ breadcrumbs = '' }: Props) {
  const pathname = usePathname()
  const segments = pathname.split('/').filter((segment) => segment !== '')
  const currentSegment = segments.at(-1)

  let link = ''

  const getStructuredLink = (path: string) => {
    link === '' ? (link = '/home') : (link = `${link}/${path}`)
    return link
  }

  const getLinkName = (segment: string) => {
    if (routes[segment] === undefined) {
      if (typeof breadcrumbs === 'string') {
        return breadcrumbs
      } else {
        const [segment, ...rest] = breadcrumbs

        if (rest.length > 0) {
          breadcrumbs.push(...rest)
        }

        return segment
      }
    }

    return routes[segment]
  }

  return (
    <div className="flex items-center justify-start">
      <ul className="flex flex-wrap truncate font-bold text-neutral-600">
        <li className="flex items-center">~</li>
        {segments.map((segment) => {
          return (
            <li
              key={segment}
              className="flex items-center before:mx-1 before:block before:opacity-90 before:content-['/']"
            >
              {segment === currentSegment
                ? (
                  <span className="text-primary max-w-[25ch] overflow-hidden overflow-ellipsis">{getLinkName(segment)}</span>
                  )
                : (
                  <Link
                    href={getStructuredLink(segment)}
                    className="hover:text-secondary hover:underline max-w-[25ch] overflow-hidden overflow-ellipsis"
                  >
                    {getLinkName(segment)}
                  </Link>
                  )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
