import { type InternshipWithRelations } from '@/lib/types'
import AvatarIcon from '@/components/AvatarIcon'
import { AcademicCapIcon, IdentificationIcon, InformationCircleIcon, ListBulletIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'
import { getInternshipStage } from '@/lib/utils/tables'
import Link from 'next/link'
import { stages } from '@/lib/translations'
import DeleteModal from '@/components/projects/DeleteModal'

type Props = React.PropsWithChildren<{
  internship: InternshipWithRelations
}>

export default function InternshipCard({ internship }: Props) {
  const { person, grade } = internship
  const isAccepted = internship.status !== 'ACCEPTED'
  const stage = getInternshipStage(internship)

  const data = [
    {
      Icon: IdentificationIcon,
      label: 'Nro de cédula:',
      value: `V-${person.ci}`,
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
    <div key={person.id} className="card bg-white shadow">
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
        <ul className="space-y-1 py-4">
          {data.map(({ Icon, value, label }) => (
            <li key={value} className="flex gap-1 items-center">
              <Icon className="h-8 w-8 bg-primary text-white stroke-2 rounded-full p-1" />
              {label}
              <span className="font-semibold">{value}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col lg:flex-row gap-2">
          <Link href={`/home/internship/${internship.id}`} className="btn btn-secondary">
            <ListBulletIcon className="h-5 w-5" />
            Detalles
          </Link>
          {stage === 'REJECTED' && (
            <DeleteModal
              action={`/home/internships/${internship.id}`}
              title="Eliminar pasantía"
              showLabel
            />
          )}
          {stage === 'ACCEPTED' && (
            <Link href="/home" className="btn btn-primary">
              Buscar empresa
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
