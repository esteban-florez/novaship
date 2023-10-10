import { type UserWithType } from '@/lib/types'
import { HomeIcon, BriefcaseIcon, AcademicCapIcon, ClipboardDocumentListIcon, UserGroupIcon, ListBulletIcon, GlobeAltIcon, StarIcon, UsersIcon, ShieldCheckIcon, CheckBadgeIcon, PlusIcon } from '@heroicons/react/24/outline'

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
