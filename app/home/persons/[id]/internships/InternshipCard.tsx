import InternshipProgress from '@/components/internships/InternshipProgress'
import { type InternshipWithRelations } from '@/lib/types'
import { getInternshipStage } from '@/lib/utils/tables'
import { ListBulletIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  internship: InternshipWithRelations
}>

export default function InternshipCard({ internship }: Props) {
  const { institute, grade } = internship
  const stage = getInternshipStage(internship)

  return (
    <div className="card bg-white shadow break-inside-avoid">
      <div className="card-body">
        <div>
          <h3 className="font-bold text-primary tracking-tighter text-2xl">
            {grade.title}
          </h3>
          <p className="font-semibold leading-5">{institute.name}</p>
        </div>
        <InternshipProgress
          internship={internship}
          stage={stage}
        />
        <div className="divider divider-vertical my-2" />
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
