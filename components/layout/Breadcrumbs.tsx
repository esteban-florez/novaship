'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { routes } from '@/lib/translations'

type Props = {
  breadcrumbs?: string | string[]
}

export default function Breadcrumbs({ breadcrumbs = '' }: Props) {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(segment => segment !== '')
  const currentSegment = segments.at(-1)

  let link = ''

  const getStructuredLink = (path: string) => {
    link === '' ? link = '/home' : link = `${link}/${path}`
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
    <div className="hidden mt-3 items-center justify-start sm:flex">
      <ul className="flex font-bold text-neutral-600">
        <li className="flex items-center">~</li>
        {segments.map(segment => {
          return (
            <li key={segment} className="flex items-center before:me-3 before:ms-2 before:block before:opacity-90 before:content-['/']">
              {segment === currentSegment
                ? <span className="text-primary">{getLinkName(segment)}</span>
                : <Link href={getStructuredLink(segment)} className="hover:text-accent hover:underline">
                    {getLinkName(segment)}
                  </Link>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
