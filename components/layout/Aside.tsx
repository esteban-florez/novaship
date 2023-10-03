'use client'

import { usePathname } from 'next/navigation'
import { HomeIcon, BriefcaseIcon, AcademicCapIcon, ClipboardDocumentListIcon, UserGroupIcon, Bars3Icon, ListBulletIcon, GlobeAltIcon, StarIcon, UsersIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import AsideLink from './AsideLink'
import { useState } from 'react'
import clsx from 'clsx'

const SIDEBAR_LINKS = [
  {
    href: '/home',
    title: 'Inicio',
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    href: '/home/internships',
    title: 'Pasantías',
    icon: <AcademicCapIcon className="h-6 w-6" />,
  },
  {
    href: '/home/offers',
    title: 'Ofertas',
    icon: <BriefcaseIcon className="h-6 w-6" />,
    submenu: [
      {
        href: '/home/offers?filter=all',
        title: 'Todas',
        icon: <GlobeAltIcon className="h-6 w-6" />,
      },
      {
        href: '/home/offers?filter=applied',
        title: 'Aplicadas',
        icon: <BookmarkIcon className="h-6 w-6" />,
      },
      {
        href: '/home/offers?filter=suggested',
        title: 'Aplicadas',
        icon: <StarIcon className="h-6 w-6" />,
      },
    ],
  },
  {
    href: '/home/projects',
    title: 'Proyectos',
    icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
    submenu: [
      {
        href: '/home/teams?filter=all',
        title: 'Equipos',
        icon: <UserGroupIcon className="h-6 w-6" />,
      },
      {
        href: '/home/teams?filter=personal',
        title: 'Mis equipos',
        icon: <UsersIcon className="h-6 w-6" />,
      },
      {
        href: '/home/projects?filter=all',
        title: 'Todos',
        icon: <GlobeAltIcon className="h-6 w-6" />,
      },
      {
        href: '/home/projects?filter=personal',
        title: 'Personales',
        icon: <ListBulletIcon className="h-6 w-6" />,
      },
      {
        href: '/home/projects?filter=suggested',
        title: 'Sugeridos',
        icon: <StarIcon className="h-6 w-6" />,
      },
    ],
  },
  // {
  //   href: '/home/teams',
  //   title: 'Equipos',
  //   icon: <UserGroupIcon className="h-6 w-6" />,
  // },
  // {
  //   href: '/home/admin',
  //   title: 'Administración',
  //   icon: <ShieldCheckIcon className="h-6 w-6" />,
  // },
]

// TODO -> transicion mas suave
// TODO -> añadir filtro a los links
// TODO -> mejorar los submenus
export default function Aside() {
  const [active, setActive] = useState(true)
  const pathname = usePathname()

  const handleClick = () => {
    window.innerWidth > 768 ? setActive(true) : setActive(false)
  }

  const handleActivelink = (link: string) => {
    const [, , path] = link.split('/')
    return link === pathname || (pathname.includes(path) && path !== '')
  }

  return (
    <aside className={clsx({
      'z-50 top-0 h-screen flex-col bg-white shadow-md sm:flex sm:sticky transition-all delay-150 duration-300 ease-out': true,
      'fixed w-screen sm:w-[17.5rem]': active,
      'w-0 sm:w-20': !active,
    })}
    >
      <div className="py-[18px] text-center sm:inline-flex sm:justify-center sm:gap-x-2">
        <button className="btn-ghost btn-circle btn -mt-2 self-center sm:mt-0" onClick={() => { setActive(!active) }}>
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      <ul className={clsx({
        'menu h-full gap-2 py-6 shadow': true,
        'px-8': active,
        'hidden sm:block': !active,
      })}
      >
        {SIDEBAR_LINKS.map(link => (
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
