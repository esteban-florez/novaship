import {
  BookmarkSquareIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  PencilIcon,
} from '@heroicons/react/24/outline'
import { type UserType } from '@prisma/client'
import Link from 'next/link'
import DeleteModal from '../projects/DeleteModal'
import clsx from 'clsx'
import UpdateStatus from './actions/UpdateStatus'
import UpdateProgress from '@/components/internships/actions/UpdateProgress'
import { getAcceptedRecruitment, getRemainingHours } from '@/lib/utils/tables'
import { type InternshipWithRelations } from '@/lib/types'

type Props = React.PropsWithChildren<{
  userType: UserType
  internship: InternshipWithRelations
  stage: Stage
  className?: string
  minDate: Date | null
}>

export default function InternshipActions({
  internship,
  userType,
  stage,
  className = '',
  minDate,
}: Props) {
  const pending = stage === 'PENDING'
  const accepted = stage === 'ACCEPTED'
  const active = stage === 'ACTIVE'

  const isPerson = userType === 'PERSON'
  const isInstitute = userType === 'INSTITUTE'
  const isCompany = userType === 'COMPANY'

  const update = isInstitute && pending
  const updateStatus = isPerson && pending
  const apply = (isPerson || isInstitute) && accepted
  const _delete = isInstitute && (pending || stage === 'REJECTED')
  const recruit = isCompany && accepted
  const progress = isCompany && active
  const history = active || stage === 'COMPLETED'

  const conditions = [
    update,
    updateStatus,
    apply,
    _delete,
    recruit,
    progress,
    history,
  ]

  const maxHours = getRemainingHours(internship)
  const recruitment = getAcceptedRecruitment(internship)

  return (
    <>
      {conditions.some((condition) => condition) && <div className="mt-4" />}
      <div className={clsx('flex flex-col gap-2', className)}>
        {update && (
          <Link
            className="btn btn-warning"
            href={`/home/internships/${internship.id}/update`}
          >
            <PencilIcon className="w-5 h-5" />
            Actualizar
          </Link>
        )}
        {updateStatus &&
          (['accept', 'reject'] as const).map((action) => (
            <UpdateStatus
              key={action}
              action={action}
              internshipId={internship.id}
            />
          ))}
        {apply && (
          <Link
            href={`/home/internships/${internship.id}/apply`}
            className="btn btn-primary"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
            Buscar cupos
          </Link>
        )}
        {_delete && (
          <DeleteModal
            action={`/api/internships/${internship.id}`}
            showLabel
          />
        )}
        {recruit && (
          <button className="btn btn-primary">
            <BookmarkSquareIcon className="h-5 w-5" />
            Reclutar pasante
          </button>
        )}
        {history && recruitment !== undefined && (
          <Link
            className="btn btn-secondary"
            href={`/home/internships/${recruitment.id}/progress`}
          >
            <ListBulletIcon className="h-5 w-5" />
            Historial de progreso
          </Link>
        )}
        {progress && recruitment !== undefined && (
          <UpdateProgress
            minDate={minDate}
            maxHours={maxHours}
            recruitmentId={recruitment.id}
          />
        )}
      </div>
    </>
  )
}
