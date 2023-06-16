'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, BriefcaseIcon, AcademicCapIcon, ClipboardDocumentListIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

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
    href: '/jobs',
    title: 'Trabajos',
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
  {
    href: '/marketplace',
    title: 'Marketplace',
    icon: <CurrencyDollarIcon className="h-6 w-6" />,
  },
]

function AsideLink({ link, active }: React.PropsWithChildren<{ link: LinkData, active: boolean }>) {
  return (
    <li className={active ? '-me-2 rounded-l-xl bg-base-200 font-bold' : ''}>
      <Link href={link.href} className={`py-4 ${active ? 'active bg-transparent text-white' : ''}`}>
        {link.icon}
        {link.title}
      </Link>
    </li>
  )
}

export default function Aside() {
  // REFACTOR -> extraer componente AsideLink, y mejorar la logica del link activo
  const pathname = usePathname()

  return (
    <ul className="menu min-h-screen gap-3 bg-neutral shadow">
      <li className="menu-title">
        <Link
          href="/"
          className="text-left font-title text-xl normal-case text-white"
        >
          PasantíasApp
        </Link>
      </li>
      {SIDEBAR_LINKS.map(link => (
        <AsideLink key={link.href} link={link} active={pathname === link.href} />
      ))}
    </ul>
  )
}
