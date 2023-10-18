import { BookmarkSquareIcon, CheckIcon, ListBulletIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { type UserType } from '@prisma/client'
import Link from 'next/link'
import DeleteModal from '../projects/DeleteModal'
import GoBackBtn from '../GoBackBtn'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  userType: UserType
  internship: {
    id: string
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
        <>
          <button className="btn btn-success">
            <CheckIcon className="h-5 w-5" />
            Aceptar
          </button>
          <button className="btn btn-error">
            <XMarkIcon className="h-5 w-5" />
            Rechazar
          </button>
        </>
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
    </div>
  )
}
