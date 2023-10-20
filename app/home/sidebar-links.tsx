import { type UserWithType } from '@/lib/types'
import {
  HomeIcon, BriefcaseIcon, AcademicCapIcon,
  ClipboardDocumentListIcon, UserGroupIcon,
  GlobeAltIcon, StarIcon, ShieldCheckIcon,
  CheckBadgeIcon, PlusIcon,
} from '@heroicons/react/24/outline'

export function sidebarLinks(user: UserWithType) {
  const institute = user.type === 'INSTITUTE'
  const admin = user.type === 'ADMIN'
  const person = user.type === 'PERSON'
  const company = user.type === 'COMPANY'

  const links: SidebarLinkWithSubmenu[] = [
    {
      href: '/home',
      title: 'Inicio',
      icon: <HomeIcon className="h-6 w-6" />,
    },
    {
      href: '/home/internships',
      title: 'Pasantías',
      icon: <AcademicCapIcon className="h-6 w-6" />,
      submenu: [
        {
          href: `/home/institutes/${user.id}/internships`,
          title: 'Mis pasantías',
          icon: <StarIcon className="h-6 w-6" />,
          visible: institute,
        },
        {
          href: `/home/persons/${user.id}/internships`,
          title: 'Mis pasantías',
          icon: <StarIcon className="h-6 w-6" />,
          visible: person,
        },
        {
          href: `/home/companies/${user.id}/internships`,
          title: 'Mis pasantías',
          icon: <StarIcon className="h-6 w-6" />,
          visible: company,
        },
        {
          href: '/home/internships/select',
          title: 'Inscribir pasante',
          icon: <PlusIcon className="h-6 w-6" />,
          visible: institute,
        },
      ],
    },
    {
      href: person ? '/home/offers?filter=suggested' : '/home/offers?filter=all',
      title: 'Ofertas',
      icon: <BriefcaseIcon className="h-6 w-6" />,
      submenu: [
        {
          href: person ? '/home/offers?filter=suggested' : '/home/offers?filter=all',
          title: 'Lista de ofertas',
          icon: <GlobeAltIcon className="h-6 w-6" />,
        },
        {
          href: '/home/offers/create',
          title: 'Crear ofertas',
          icon: <PlusIcon className="h-6 w-6" />,
          visible: company,
        },
        {
          href: '/home/offers?filter=personal',
          title: 'Mis ofertas',
          icon: <StarIcon className="h-6 w-6" />,
          visible: company,
        },
        {
          href: '/home/offers?filter=applied',
          title: 'Postulaciones',
          icon: <StarIcon className="h-6 w-6" />,
        },
      ],
    },
    {
      href: '/home/projects?filter=suggested',
      title: 'Proyectos',
      icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
      submenu: [
        {
          href: '/home/projects?filter=suggested',
          title: 'Lista de proyectos',
          icon: <GlobeAltIcon className="h-6 w-6" />,
        },
        {
          href: '/home/projects/create',
          title: 'Crear proyecto',
          icon: <PlusIcon className="h-6 w-6" />,
        },
        {
          href: '/home/projects?filter=personal',
          title: 'Mis proyectos',
          icon: <StarIcon className="h-6 w-6" />,
        },
      ],
    },
    {
      href: '/home/teams?filter=all',
      title: 'Equipos',
      icon: <UserGroupIcon className="h-6 w-6" />,
      submenu: [
        {
          href: '/home/teams?filter=all',
          title: 'Lista de equipos',
          icon: <GlobeAltIcon className="h-6 w-6" />,
        },
        {
          href: '/home/teams/create',
          title: 'Crear equipo',
          icon: <PlusIcon className="h-6 w-6" />,
        },
        {
          href: '/home/teams?filter=personal',
          title: 'Mis equipos',
          icon: <StarIcon className="h-6 w-6" />,
        },
        // TODO -> añadir funcionalidad
        // {
        //   href: '/home/projects?filter=personal',
        //   title: 'Postulaciones',
        //   icon: <ListBulletIcon className="h-6 w-6" />,
        // },
      ],
    },
    {
      href: '/home/admin',
      title: 'Administración',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      visible: admin,
      submenu: [
        {
          href: '/home/admin/verifications',
          title: 'Verificaciones',
          icon: <CheckBadgeIcon className="h-6 w-6" />,
        },
      ],
    },
  ]

  return links
}
