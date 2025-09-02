import { type InternshipWithRelations } from '@/lib/types'
import AvatarIcon from '@/components/AvatarIcon'
import {
  AcademicCapIcon,
  IdentificationIcon,
  InformationCircleIcon,
  ListBulletIcon,
  PresentationChartBarIcon,
} from '@heroicons/react/24/outline'
import { getInternshipStage } from '@/lib/utils/tables'
import { stages } from '@/lib/translations'
import Link from 'next/link'
import IconData from '../IconData'
import { format } from '@/lib/utils/text'
import InternshipProgress from './InternshipProgress'

type Props = React.PropsWithChildren<{
  internship: InternshipWithRelations
  withProgressBar?: boolean
}>

export default function InternshipCard({
  internship,
  withProgressBar = false,
}: Props) {
  const { person, grade } = internship
  const isAccepted = internship.status !== 'ACCEPTED'
  const stage = getInternshipStage(internship)

  const data = [
    {
      Icon: IdentificationIcon,
      label: 'Nro de cédula:',
      value: format(person.ci, 'ci'),
    },
    {
      Icon: AcademicCapIcon,
      label: 'Carrera:',
      value: grade.title,
    },
    {
      Icon: isAccepted ? InformationCircleIcon : PresentationChartBarIcon,
      label: isAccepted ? 'Estado:' : 'Progreso:',
      value: stages[stage],
    },
  ]

  return (
    <div
      key={person.id}
      className="card bg-white shadow break-inside-avoid"
    >
      <div className="card-body">
        <div className="flex items-center gap-2">
          <AvatarIcon image={person.image} />
          <div>
            <h3 className="text-2xl font-bold tracking-tighter text-primary">
              {person.name}
            </h3>
            <p className="-mt-2 font-semibold text-neutral-600">
              {person.email}
            </p>
          </div>
        </div>
        <ul className="space-y-1 py-3">
          {data.map(({ Icon, value, label }) => (
            <IconData
              key={label}
              icon={Icon}
              label={label}
              data={value}
            />
          ))}
        </ul>
        {withProgressBar && (
          <>
            <InternshipProgress
              internship={internship}
              stage={stage}
            />
            <div className="mt-2" />
          </>
        )}
        <Link
          href={`/home/internships/${internship.id}`}
          className="btn btn-secondary"
        >
          <ListBulletIcon className="h-5 w-5" />
          Detalles
        </Link>
      </div>
    </div>
  )
}
