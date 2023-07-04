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
    <li className="rounded-l-xl font-bold">
      <Link href={link.href} className={`py-4 ${active ? 'active pointer-events-none' : ''}`}>
        {link.icon}
        {link.title}
      </Link>
    </li>
  )
}

export default function Aside() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 hidden h-screen flex-col bg-white shadow-md sm:flex">
      <div className="bg-white py-[18px] text-center text-black">
        <Link
          href="/"
          className="font-title text-2xl font-bold normal-case"
        >
          novaship
        </Link>
      </div>
      <ul className="menu h-full gap-4 px-8 py-6 shadow">
        {SIDEBAR_LINKS.map(link => (
          <AsideLink key={link.href} link={link} active={pathname === link.href} />
        ))}
      </ul>
    </aside>
  )
}
