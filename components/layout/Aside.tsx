'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, BriefcaseIcon, AcademicCapIcon, ClipboardDocumentListIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import AsideLink from './AsideLink'

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
  },
  {
    href: '/home/projects',
    title: 'Proyectos',
    icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
  },
  {
    href: '/home/admin',
    title: 'Administración',
    icon: <ShieldCheckIcon className="h-6 w-6" />,
  },
]

export default function Aside() {
  const pathname = usePathname()

  const handleActivelink = (link: string) => {
    const [, , path] = link.split('/')
    return link === pathname || (pathname.includes(path) && path !== '')
  }

  return (
    <aside className="sticky top-0 hidden h-screen flex-col bg-white shadow-md sm:flex">
      <div className="py-[18px] text-center">
        <Link
          href="/home"
          className="rounded-full bg-primary px-4 py-2 text-2xl font-bold text-white shadow-md"
        >
          novaship
        </Link>
      </div>
      <ul className="menu h-full gap-4 px-8 py-6 shadow">
        {SIDEBAR_LINKS.map(link => (
          <AsideLink key={link.href} link={link} active={handleActivelink(link.href)} />
        ))}
      </ul>
    </aside>
  )
}
