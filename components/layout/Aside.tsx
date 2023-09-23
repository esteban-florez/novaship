'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, BriefcaseIcon, AcademicCapIcon, ClipboardDocumentListIcon, ShieldCheckIcon, UserGroupIcon, Bars3Icon } from '@heroicons/react/24/outline'
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
    href: '/home/projects',
    title: 'Proyectos',
    icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
  },
  {
    href: '/home/teams',
    title: 'Equipos',
    icon: <UserGroupIcon className="h-6 w-6" />,
  },
  {
    href: '/home/offers',
    title: 'Ofertas',
    icon: <BriefcaseIcon className="h-6 w-6" />,
  },
  {
    href: '/home/internships',
    title: 'Pasantías',
    icon: <AcademicCapIcon className="h-6 w-6" />,
  },
  {
    href: '/home/admin',
    title: 'Administración',
    icon: <ShieldCheckIcon className="h-6 w-6" />,
  },
]

// TODO -> responsive
export default function Aside() {
  const [active, isActive] = useState(true)
  const pathname = usePathname()

  const handleActivelink = (link: string) => {
    const [, , path] = link.split('/')
    return link === pathname || (pathname.includes(path) && path !== '')
  }

  return (
    <aside className={clsx({
      'sticky top-0 h-screen flex-col bg-white shadow-md sm:flex transition-all duration-500 ease-in-out': true,
      'z-50 w-[17.5rem]': active,
      'z-50 w-20': !active,
    })}
    >
      <div className="py-[18px] text-center">
        <Link
          href="/home"
          className={clsx(
            'rounded-full bg-primary px-4 py-2 text-2xl font-bold text-white shadow-md',
            active && 'visible', !active && 'invisible'
          )}
        >
          novaship
        </Link>
        <button className="btn-ghost btn-circle btn self-center" onClick={() => { isActive(!active) }}>
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      <ul className={clsx({
        'menu h-full gap-4 py-6 shadow': true,
        'px-8': active,
      })}
      >
        {SIDEBAR_LINKS.map(link => (
          <AsideLink key={link.href} link={link} active={handleActivelink(link.href)} iconOnly={active} />
        ))}
      </ul>
    </aside>
  )
}
