import { type UserWithType } from '@/lib/types'
import { HomeIcon, BriefcaseIcon, AcademicCapIcon, ClipboardDocumentListIcon, UserGroupIcon, ListBulletIcon, GlobeAltIcon, StarIcon, UsersIcon, BookmarkIcon, ShieldCheckIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'

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
    {
      href: '/home/teams',
      title: 'Equipos',
      icon: <UserGroupIcon className="h-6 w-6" />,
    },
    {
      href: '/home/admin',
      title: 'Administración',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      visible: user.type === 'ADMIN',
      submenu: [
        {
          href: '/home/admin/verifications',
          title: 'Verificación de usuarios',
          icon: <CheckBadgeIcon className="h-6 w-6" />,
        },
      ],
    },
  ]

  return links
}
