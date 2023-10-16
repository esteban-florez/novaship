import { type UserWithType } from '@/lib/types'
import { HomeIcon, BriefcaseIcon, AcademicCapIcon, ClipboardDocumentListIcon, UserGroupIcon, GlobeAltIcon, StarIcon, UsersIcon, ShieldCheckIcon, CheckBadgeIcon, PlusIcon } from '@heroicons/react/24/outline'

export function sidebarLinks(user: UserWithType) {
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
          href: '/home/institutes/me',
          title: 'Mis pasantes',
          icon: <StarIcon className="h-6 w-6" />,
          visible: ['INSTITUTE', 'ADMIN'].includes(user.type),
        },
        {
          href: '/home/internships/select',
          title: 'Inscribir pasante',
          icon: <PlusIcon className="h-6 w-6" />,
          visible: user.type === 'INSTITUTE',
        },
      ],
    },
    {
      href: user.type === 'PERSON' ? '/home/offers?filter=suggested' : '/home/offers?filter=all',
      title: 'Ofertas',
      icon: <BriefcaseIcon className="h-6 w-6" />,
      submenu: [
        {
          href: user.type === 'PERSON' ? '/home/offers?filter=suggested' : '/home/offers?filter=all',
          title: 'Lista de ofertas',
          icon: <GlobeAltIcon className="h-6 w-6" />,
        },
        {
          href: '/home/offers/create',
          title: 'Crear ofertas',
          icon: <PlusIcon className="h-6 w-6" />,
          visible: user.type === 'COMPANY',
        },
        {
          href: '/home/offers?filter=suggested',
          title: 'Mis ofertas',
          icon: <StarIcon className="h-6 w-6" />,
          visible: user.type === 'COMPANY',
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
          icon: <UserGroupIcon className="h-6 w-6" />,
        },
        {
          href: '/home/projects/create',
          title: 'Crear proyecto',
          icon: <UsersIcon className="h-6 w-6" />,
        },
        {
          href: '/home/projects?filter=personal',
          title: 'Mis proyectos',
          icon: <GlobeAltIcon className="h-6 w-6" />,
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
      visible: user.type === 'ADMIN',
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
