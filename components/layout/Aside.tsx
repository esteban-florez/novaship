'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, BriefcaseIcon, AcademicCapIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'

interface LinkData {
  href: string
  title: string
  icon: React.ReactNode
}

const SIDEBAR_LINKS = [
  {
    href: '/',
    title: 'Inicio',
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    href: '/offers',
    title: 'Ofertas',
    icon: <BriefcaseIcon className="h-6 w-6" />,
  },
  {
    href: '/projects',
    title: 'Proyectos',
    icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
  },
  {
    href: '/internships',
    title: 'Pasantías',
    icon: <AcademicCapIcon className="h-6 w-6" />,
  },
]

function AsideLink({ link, active }: React.PropsWithChildren<{ link: LinkData, active: boolean }>) {
  return (
    <li className={active ? '-me-6 rounded-l-xl bg-base-100 font-extrabold' : ''}>
      <Link href={link.href} className={`py-4 ${active ? 'active pointer-events-none bg-transparent' : ''}`}>
        {link.icon}
        {link.title}
      </Link>
    </li>
  )
}

export default function Aside() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 hidden h-screen flex-col bg-neutral sm:flex">
      <Link
        href="/"
        className="py-5 text-center font-title text-xl font-bold normal-case text-white shadow-md"
      >
        novaship
      </Link>
      <ul className="menu h-full px-6 py-4 shadow">
        {SIDEBAR_LINKS.map(link => (
          <AsideLink key={link.href} link={link} active={pathname === link.href} />
        ))}
      </ul>
    </aside>
  )
}
