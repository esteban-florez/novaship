'use client'

import { usePathname } from 'next/navigation'
import { Bars3Icon } from '@heroicons/react/24/outline'
import AsideLink from './AsideLink'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  links: SidebarLinkWithSubmenu[]
}>

// TODO -> transicion mas suave
// TODO -> añadir filtro a los links
// TODO -> mejorar los submenus
export default function Aside({ links }: Props) {
  const [active, setActive] = useState(true)
  const pathname = usePathname()

  const handleClick = () => {
    window.innerWidth > 768 ? setActive(true) : setActive(false)
  }

  const handleActivelink = (link: string) => {
    const [, , path] = link.split('/')
    return link === pathname || (pathname.includes(path) && path !== '')
  }

  useEffect(() => {
    const toggleOnResize = () => {
      if (window.innerWidth > 767) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    window.addEventListener('resize', toggleOnResize)

    return () => {
      window.removeEventListener('resize', toggleOnResize)
    }
  }, [])

  return (
    <aside className={clsx('top-0 z-50 h-screen flex-col flex-nowrap bg-white shadow-lg transition-all delay-150 duration-300 ease-out sm:sticky sm:flex', {
      'fixed w-screen sm:w-[17.8rem]': active,
      'w-0 sm:w-32': !active,
    })}
    >
      <div className="py-2.5 text-end sm:inline-flex sm:justify-end sm:gap-x-2">
        <button className="btn-ghost btn-circle btn -mt-2 self-center sm:mt-0" onClick={() => { setActive(!active) }}>
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      <ul className={clsx('menu h-full flex-nowrap gap-2 py-5 pl-4 pr-0 shadow scrollbar', {
        '': active,
        'hidden sm:block': !active,
      })}
      >
        {links.map(link => (
          <AsideLink
            key={link.href}
            link={link}
            active={handleActivelink(link.href)}
            iconOnly={active}
            onClick={() => { handleClick() }}
          />
        ))}
      </ul>
    </aside>
  )
}
