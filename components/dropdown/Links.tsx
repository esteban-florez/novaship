import {
  CheckIcon,
  ClockIcon,
  ListBulletIcon,
} from '@heroicons/react/24/outline'

export const offerIdLinks = [
  {
    title: 'Pendientes',
    query: 'pending',
    icon: <ClockIcon className="w-5 h-5" />,
  },
  {
    title: 'Aceptadas',
    query: 'accepted',
    icon: <CheckIcon className="w-5 h-5" />,
  },
  {
    title: 'Sugerencias',
    query: 'suggested',
    icon: <ListBulletIcon className="w-5 h-5" />,
  },
]
