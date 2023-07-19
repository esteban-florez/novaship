'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { routes } from '@/lib/translations'

export default function Breadcrumbs() {
  const pathname = usePathname()

  const structuredPath = () => {
    const segments = pathname.split('/')
    const currentSegments = segments.filter(segment => segment !== '')

    return ['home', ...currentSegments]
  }

  const currentPaths = structuredPath()
  const currentPath = structuredPath().pop()

  return (
    <div className="hidden items-center justify-start p-4 text-sm sm:flex">
      <ul className="flex font-bold">
        <li className="flex items-center">~</li>
        {currentPaths.map(path => {
          return (
            <li key={path} className="flex items-center before:me-3 before:ms-2 before:block before:opacity-90 before:content-['/']">
              <Link
                href={path === 'home' ? '/' : `/${path}`}
                className={`hover:text-accent hover:underline ${
                  path === currentPath ? 'text-primary' : ''
                }`}
              >
                {routes[path]}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
