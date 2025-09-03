import { type UserWithType } from '@/lib/types'
import {
  HomeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  GlobeAltIcon,
  StarIcon,
  CheckBadgeIcon,
  PlusIcon,
  TicketIcon,
  InboxStackIcon,
  EnvelopeIcon,
  ChartPieIcon,
  CircleStackIcon,
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
      visible: !admin,
      submenu: [
        {
          href: '/home/internships/select',
          title: 'Inscribir pasante',
          icon: <PlusIcon className="h-6 w-6" />,
          visible: institute,
        },
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
          title: 'Mis pasantes',
          icon: <StarIcon className="h-6 w-6" />,
          visible: company,
        },
        {
          href: '/home/internships/recruit',
          title: 'Reclutar pasante',
          icon: <PlusIcon className="h-6 w-6" />,
          visible: company,
        },
        {
          href: '/home/internships/recruitments',
          title: 'Solicitudes',
          icon: <InboxStackIcon className="h-6 w-6" />,
          visible: user.type !== 'ADMIN',
        },
        {
          href: `/home/companies/${user.id}/vacants`,
          title: 'Cupos publicados',
          icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
          visible: company,
        },
        {
          href: '/home/internships/vacants/create',
          title: 'Publicar cupo',
          icon: <TicketIcon className="h-6 w-6" />,
          visible: company,
        },
      ],
    },
    {
      href: person
        ? '/home/offers?filtered=suggested'
        : '/home/offers?filtered=all',
      title: 'Ofertas',
      icon: <BriefcaseIcon className="h-6 w-6" />,
      visible: !institute && !admin,
      submenu: [
        {
          href: person
            ? '/home/offers?filtered=suggested'
            : '/home/offers?filtered=all',
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
          href: '/home/offers?filtered=personal',
          title: 'Mis ofertas',
          icon: <StarIcon className="h-6 w-6" />,
          visible: company,
        },
        {
          href: '/home/offers?filtered=applied',
          title: 'Postulaciones',
          icon: <StarIcon className="h-6 w-6" />,
          visible: person,
        },
      ],
    },
    {
      href: '/home/projects?filtered=suggested',
      title: 'Proyectos',
      icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
      visible: !institute && !admin,
      submenu: [
        {
          href: company
            ? '/home/projects?filtered=all'
            : '/home/projects?filtered=suggested',
          title: 'Lista de proyectos',
          icon: <GlobeAltIcon className="h-6 w-6" />,
        },
        {
          href: '/home/projects/create',
          title: 'Crear proyecto',
          icon: <PlusIcon className="h-6 w-6" />,
        },
        {
          href: '/home/projects?filtered=personal',
          title: 'Mis proyectos',
          icon: <StarIcon className="h-6 w-6" />,
        },
      ],
    },
    {
      href: '/home/teams?filtered=all',
      title: 'Equipos',
      icon: <UserGroupIcon className="h-6 w-6" />,
      visible: !institute && !admin,
      submenu: [
        {
          href: '/home/teams?filtered=all',
          title: 'Lista de equipos',
          icon: <GlobeAltIcon className="h-6 w-6" />,
        },
        {
          href: '/home/invitations',
          title: 'Invitaciones',
          icon: <EnvelopeIcon className="h-6 w-6" />,
          visible: person,
        },
        {
          href: '/home/teams/create',
          title: 'Crear equipo',
          icon: <PlusIcon className="h-6 w-6" />,
        },
        {
          href: '/home/teams?filtered=personal',
          title: 'Mis equipos',
          icon: <StarIcon className="h-6 w-6" />,
        },
        // TODO -> añadir funcionalidad
        // {
        //   href: '/home/projects?filtered=personal',
        //   title: 'Postulaciones',
        //   icon: <ListBulletIcon className="h-6 w-6" />,
        // },
      ],
    },
    {
      href: '/home/admin/verifications',
      title: 'Verificaciones',
      icon: <CheckBadgeIcon className="h-6 w-6" />,
      visible: admin,
    },
    {
      href: '/home/admin/stats',
      title: 'Estadísticas',
      icon: <ChartPieIcon className="h-6 w-6" />,
      visible: admin,
    },
    {
      href: '/home/admin/backups',
      title: 'Base de datos',
      icon: <CircleStackIcon className="h-6 w-6" />,
      visible: admin,
    },
  ]

  return links
}
