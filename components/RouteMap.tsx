import Link from 'next/link'
import styles from '@/styles/RouteMap.module.css'

interface RouteProps {
  paths: string[]
  currentPath: string
}

const linkActive = 'font-bold text-sky-400'

export default function RoutePath({ paths, currentPath }: RouteProps) {
  return (
    <section className={`${styles.breadcrumbs} text-sm`}>
      <ul>
        <li>~</li>
        {paths.map((path) => {
          return (
            <li key={path}>
              <Link
                href={`/${path === 'home' ? '' : path}`}
                className={`capitalize no-underline hover:no-underline ${
                  path === currentPath ? linkActive : ''
                }`}
              >
                {path}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
