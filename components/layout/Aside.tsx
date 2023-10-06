'use client'

import { usePathname } from 'next/navigation'
import {
  HomeIcon, BriefcaseIcon, AcademicCapIcon,
  ClipboardDocumentListIcon, UserGroupIcon,
  Bars3Icon, ListBulletIcon, ShieldCheckIcon,
  StarIcon, UsersIcon, PlusIcon, GlobeAltIcon,
} from '@heroicons/react/24/outline'
import AsideLink from './AsideLink'
import { useState } from 'react'
import clsx from 'clsx'

// TODO -> Arreglar los iconos y que sean mas entendibles
// Probablemente lo haga con Jesus hoy o el domingo, no toquea los iconos teban, grasia
// Att: La programadora html
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
        title: 'Lista de ofertas',
        icon: <GlobeAltIcon className="h-6 w-6" />,
      },
      {
        href: '/home/offers/create',
        title: 'Crear ofertas',
        icon: <PlusIcon className="h-6 w-6" />,
      },
      {
        href: '/home/offers?filter=suggested',
        title: 'Mis ofertas',
        icon: <StarIcon className="h-6 w-6" />,
      },
      {
        href: '/home/offers?filter=suggested',
        title: 'Postulaciones',
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
        title: 'Lista de proyectos',
        icon: <UserGroupIcon className="h-6 w-6" />,
      },
      {
        href: '/home/teams?filter=personal',
        title: 'Crear proyecto',
        icon: <UsersIcon className="h-6 w-6" />,
      },
      {
        href: '/home/projects?filter=all',
        title: 'Mis proyectos',
        icon: <GlobeAltIcon className="h-6 w-6" />,
      },
    ],
  },
  {
    href: '/home/teams',
    title: 'Equipos',
    icon: <UserGroupIcon className="h-6 w-6" />,
    submenu: [
      {
        href: '/home/teams?filter=all',
        title: 'Lista de equipos',
        icon: <UserGroupIcon className="h-6 w-6" />,
      },
      {
        href: '/home/teams/create',
        title: 'Crear equipo',
        icon: <UsersIcon className="h-6 w-6" />,
      },
      {
        href: '/home/teams?filter=personal',
        title: 'Mis equipos',
        icon: <GlobeAltIcon className="h-6 w-6" />,
      },
      {
        href: '/home/projects?filter=personal',
        title: 'Postulaciones',
        icon: <ListBulletIcon className="h-6 w-6" />,
      },
    ],
  },
  {
    href: '/home/admin',
    title: 'Administración',
    icon: <ShieldCheckIcon className="h-6 w-6" />,
  },
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
    <aside className={clsx('top-0 z-50 h-screen flex-col flex-nowrap shadow-lg transition-all delay-150 duration-300 ease-out sm:sticky sm:flex', {
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
