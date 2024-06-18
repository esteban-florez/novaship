import IconData from '@/components/IconData'
import { type VacantWithRelations } from '@/lib/types'
import { format } from '@/lib/utils/date'
import {
  getAcceptedRecruitments,
  getVacantExpiration,
} from '@/lib/utils/tables'
import {
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  ListBulletIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import BadgeList from '../BadgeList'
import ApplyButton from './ApplyButton'

type Props = React.PropsWithChildren<{
  vacant: VacantWithRelations
  withGrades?: boolean
  internshipId?: string
}>

export default function VacantCard({
  vacant,
  withGrades = false,
  internshipId,
}: Props) {
  const { description, job, limit, id, companyId, grades } = vacant

  const expiresAt = getVacantExpiration(vacant)
  const accepted = getAcceptedRecruitments(vacant).length
  const hasInternship = internshipId !== undefined

  const details = hasInternship
    ? `/home/internships/${internshipId}/apply/${id}`
    : `/home/companies/${companyId}/vacants/${id}`

  return (
    <div className="card bg-white shadow-md border-l-4 border-primary">
      <div className="card-body">
        <h3 className="font-bold text-primary text-2xl line-clamp-1 tracking-tighter">
          {job.title}
        </h3>
        {withGrades && <BadgeList items={grades} />}
        <p className="line-clamp-2">{description}</p>
        <div className="flex gap-2 flex-col">
          <IconData
            label="Cupos disponibles"
            data={`${accepted}/${limit} cupos`}
            icon={ClipboardDocumentListIcon}
          />
          <IconData
            label="Fecha de expiración"
            data={format({ date: expiresAt })}
            icon={CalendarDaysIcon}
          />
        </div>
        <div className="card-actions mt-2">
          {hasInternship && (
            <ApplyButton
              internshipId={internshipId}
              vacantId={vacant.id}
              block
            />
          )}
          <Link
            className="btn btn-secondary btn-block"
            href={details}
          >
            <ListBulletIcon className="h-5 w-5" />
            Detalles
          </Link>
        </div>
      </div>
    </div>
  )
}
