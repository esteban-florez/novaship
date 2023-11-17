import { type QuickAccessProps } from '@/lib/types'
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClipboardDocumentListIcon,
  EnvelopeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { type UserType } from '@prisma/client'

interface Props {
  userId: string
  type: UserType
}

export default function getQuickAccessItems({ userId, type }: Props) {
  let quickAccessItems: QuickAccessProps = []
  if (type === 'PERSON') {
    quickAccessItems = [
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

  return quickAccessItems
}
