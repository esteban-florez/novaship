import { type QuickAccessProps } from '@/lib/types'
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChartPieIcon,
  CheckBadgeIcon,
  ClipboardDocumentListIcon,
  EnvelopeIcon,
  InboxStackIcon,
  PlusIcon,
  TicketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { type UserType } from '@prisma/client'

interface Props {
  userId: string
  type: UserType
}

export default function getQuickAccessItems({ userId, type }: Props) {
  let items: QuickAccessProps[] = []
  if (type === 'PERSON') {
    items = [
      {
        title: 'Mis pasantías',
        href: `/home/persons/${userId}/internships`,
        icon: <AcademicCapIcon className="h-4 w-4" />,
      },
      {
        title: 'Postulaciones',
        href: '/home/offers?filter=applied',
        icon: <BriefcaseIcon className="h-4 w-4" />,
      },
      {
        title: 'Mis proyectos',
        href: '/home/projects?filter=personal',
        icon: <ClipboardDocumentListIcon className="h-4 w-4" />,
      },
      {
        title: 'Invitaciones',
        href: '/home/invitations',
        icon: <EnvelopeIcon className="h-4 w-4" />,
      },
      {
        title: 'Mis equipos',
        href: '/home/teams?filter=personal',
        icon: <UserGroupIcon className="h-4 w-4" />,
      },
    ]
  }

  if (type === 'ADMIN') {
    items = [
      {
        title: 'Verificaciones',
        href: '/home/admin/verifications',
        icon: <CheckBadgeIcon className="h-4 w-4" />,
      },
      {
        title: 'Estadísticas',
        href: '/home/admin/stats',
        icon: <ChartPieIcon className="h-4 w-4" />,
      },
    ]
  }

  if (type === 'COMPANY') {
    items = [
      {
        title: 'Mis pasantes',
        href: `/home/companies/${userId}/internships`,
        icon: <AcademicCapIcon className="h-4 w-4" />,
      },
      {
        title: 'Cupos publicados',
        href: `/home/companies/${userId}/vacants`,
        icon: <TicketIcon className="h-4 w-4" />,
      },
      {
        title: 'Mis ofertas',
        href: '/home/offers?filter=personal',
        icon: <BriefcaseIcon className="h-4 w-4" />,
      },
      {
        title: 'Mis proyectos',
        href: '/home/projects?filter=personal',
        icon: <ClipboardDocumentListIcon className="h-4 w-4" />,
      },
      {
        title: 'Mis equipos',
        href: '/home/teams?filter=personal',
        icon: <UserGroupIcon className="h-4 w-4" />,
      },
    ]
  }

  if (type === 'INSTITUTE') {
    items = [
      {
        title: 'Inscribir pasantes',
        href: '/home/internships/select',
        icon: <PlusIcon className="h-4 w-4" />,
      },
      {
        title: 'Mis pasantes',
        href: `/home/institutes/${userId}/internships`,
        icon: <UserGroupIcon className="h-4 w-4" />,
      },
      {
        title: 'Solicitudes',
        href: '/home/internships/recruitments',
        icon: <InboxStackIcon className="h-4 w-4" />,
      },
    ]
  }

  return items
}
