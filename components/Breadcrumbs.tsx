'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '@/styles/Breadcrumbs.module.css'
import translatedRoutes from '@/translations/es'

interface Props {
  width: boolean
}

export default function Breadcrumbs({ width }: Props) {
  const pathname = usePathname()

  const structuredPath = () => {
    const segments = pathname.split('/')
    const currentSegments = segments.filter(segment => segment !== '')

    return ['home', ...currentSegments]
  }

  const currentPaths = structuredPath()
  const currentPath = structuredPath().pop()

  return (
    <div
      className={`${styles.breadcrumbs} flex ${
        width ? 'w-3/6' : 'w-full'
      } items-center justify-start p-4 text-sm`}
    >
      <ul>
        <li>~</li>
        {currentPaths.map((path) => {
          return (
            <li key={path}>
              <Link
                href={path === 'home' ? '/' : `/${path}`}
                className={`capitalize no-underline hover:no-underline ${
                  path === currentPath ? 'font-bold text-primary' : 'text-white'
                }`}
              >
                {translatedRoutes({ route: path })}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
