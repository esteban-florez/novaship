import { type InternshipWithRelations } from '@/lib/types'
import AvatarIcon from '@/components/AvatarIcon'
import { AcademicCapIcon, IdentificationIcon, InformationCircleIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'
import { getInternshipStage } from '@/lib/utils/tables'
import { stages } from '@/lib/translations'
import InternshipActions from '@/components/internships/InternshipActions'
import { type UserType } from '@prisma/client'

type Props = React.PropsWithChildren<{
  internship: InternshipWithRelations
  userType: UserType
}>

export default function InternshipCard({ internship, userType }: Props) {
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
        <InternshipActions
          internship={internship}
          stage={stage}
          userType={userType}
        />
      </div>
    </div>
  )
}
