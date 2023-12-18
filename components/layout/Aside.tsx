'use client'

import { usePathname } from 'next/navigation'
import AsideLink from './AsideLink'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  links: SidebarLinkWithSubmenu[]
}>

// TODO -> solo mantener 1 submenu abierto
// TODO -> corregir el link activo
export default function Aside({ links }: Props) {
  const pathname = usePathname()

  // TODO -> this.
  // TODO -> migrar a una funcion para obtener el current link.
  const handleActivelink = (link: string) => {
    const [, , path] = link.split('/')
    return link === pathname || (pathname.includes(path) && path !== '')
  }

  return (
    <aside className="w-screen sm:w-60 min-h-screen bg-white shadow-lg">
      <div className="flex items-center pt-2 pb-0 text-center sm:ms-0 sm:gap-x-2">
        <label
          htmlFor="aside"
          aria-label="Close sidebar"
          className="ms-2 sm:hidden btn-ghost btn drawer-button"
        >
          <Bars3Icon className="h-6 w-6" />
        </label>
        <Link
          href="/home"
          className="w-full flex items-center justify-between me-4 sm:w-auto sm:mx-auto"
        >
          <p className="sm:hidden mb-0.5 text-3xl font-bold text-primary">
            Novaship
          </p>
          <img
            src="/logo.ico"
            alt="logo."
            className="w-12"
          />
        </Link>
      </div>
      <ul className="menu flex-nowrap gap-2 py-2 pl-4 pr-0 scrollbar">
        {links
          .filter((link) => {
            link.visible ??= true
            return link.visible
          })
          .map((link) => (
            <AsideLink
              key={link.href}
              link={link}
              active={handleActivelink(link.href)}
            />
          ))}
      </ul>
    </aside>
  )
}
