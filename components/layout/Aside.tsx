'use client'

import { usePathname } from 'next/navigation'
import { Bars3Icon } from '@heroicons/react/24/outline'
import AsideLink from './AsideLink'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  links: SidebarLinkWithSubmenu[]
}>

// TODO -> solo mantener 1 submenu abierto
// TODO -> arreglar la transicion de la imagen cuando el aside esta oculto
export default function Aside({ links }: Props) {
  const [active, setActive] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setActive(window.innerWidth > 768)
  }, [])

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

  const handleClick = () => {
    setActive(window.innerWidth > 768)
  }

  const handleActivelink = (link: string) => {
    const [, , path] = link.split('/')
    return link === pathname || (pathname.includes(path) && path !== '')
  }

  return (
    <aside
      className={clsx(
        'top-0 z-[8000] h-screen flex-col flex-nowrap bg-white shadow-lg transition-all delay-150 duration-300 ease-out sm:sticky sm:flex',
        {
          'fixed w-screen sm:w-[17.8rem]': active,
          'w-0 sm:w-32': !active,
        }
      )}
    >
      <div
        className={clsx(
          'pt-2.5 pb-0 text-center sm:ms-0 sm:gap-x-2',
          !active && 'ms-6'
        )}
      >
        <button
          className={clsx(
            'btn-ghost btn mx-auto -mt-2 sm:ms-0 sm:mt-0',
            !active && '-ms-10'
          )}
          onClick={() => {
            setActive(!active)
          }}
        >
          <Bars3Icon className="h-7 w-7 text-black" />
        </button>
        <img
          src="/logo.ico"
          alt="logo."
          className={clsx('mx-auto w-28', !active && 'hidden sm:block')}
        />
      </div>
      <ul
        className={clsx(
          'menu h-full flex-nowrap gap-2 py-2 pl-4 pr-0 shadow scrollbar',
          !active && 'hidden sm:block'
        )}
      >
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
              iconOnly={active}
              onClick={() => {
                handleClick()
              }}
            />
          ))}
      </ul>
    </aside>
  )
}
