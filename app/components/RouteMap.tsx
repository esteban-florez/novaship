import Link from 'next/link'
import styles from './RouteMap.module.css'
import { capitalize } from '../utils/helpers'

interface RouteProps {
  paths: string[]
  currentPath: string
}

const linkActive = 'font-bold text-sky-400'

export default function RoutePath({ paths, currentPath }: RouteProps) {
  // ! no-underline not working (link underline)
  return (
    <section className={`${styles.breadcrumbs} text-sm`}>
      <ul>
        <li>~</li>
        {paths.map((path) => {
          return (
            <li key={path}>
              <Link
                href={`/${path === 'inicio' ? '' : path}`}
                className={`no-underline hover:no-underline ${
                  path === currentPath ? linkActive : ''
                }`}
              >
                {capitalize(path)}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
