import { BookmarkSquareIcon, ListBulletIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { type UserType } from '@prisma/client'
import Link from 'next/link'
import DeleteModal from '../projects/DeleteModal'
import GoBackBtn from '../GoBackBtn'
import clsx from 'clsx'
import UpdateStatus from './actions/UpdateStatus'
import UpdateHours from '@/components/internships/actions/UpdateHours'

type Props = React.PropsWithChildren<{
  userType: UserType
  internship: {
    id: string
    hours: number
  }
  stage: Stage
  details?: boolean
  className?: string
}>

export default function InternshipActions({
  internship, userType, stage,
  details = true, className = '',
}: Props) {
  return (
    <div className={clsx('flex flex-col gap-2', className)}>
      {details
        ? (
          <Link
            href={`/home/internships/${internship.id}`}
            className="btn btn-secondary"
          >
            <ListBulletIcon className="h-5 w-5" />
            Detalles
          </Link>
          )
        : (
          <GoBackBtn label="Volver" />
          )}
      {userType === 'PERSON' && stage === 'PENDING' && (
        (['accept', 'reject'] as const).map(action => (
          <UpdateStatus
            key={action}
            action={action}
            internshipId={internship.id}
          />
        ))
      )}
      {['PERSON', 'INSTITUTE'].includes(userType) && stage === 'ACCEPTED' && (
        <button className="btn btn-primary">
          <MagnifyingGlassIcon className="h-5 w-5" />
          Buscar empresa
        </button>
      )}
      {userType === 'INSTITUTE' && ['PENDING', 'REJECTED'].includes(stage) && (
        <DeleteModal
          action={`/api/internships/${internship.id}`}
          title="Eliminar"
          showLabel
        />
      )}
      {userType === 'COMPANY' && stage === 'ACCEPTED' && (
        <button className="btn btn-primary">
          <BookmarkSquareIcon className="h-5 w-5" />
          Reclutar pasante
        </button>
      )}
      {userType === 'COMPANY' && stage === 'ACTIVE' && (
        <UpdateHours internship={internship} />
      )}
    </div>
  )
}
