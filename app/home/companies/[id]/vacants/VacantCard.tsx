import IconData from '@/components/IconData'
import { type VacantWithRelations } from '@/lib/types'
import { format } from '@/lib/utils/date'
import { getAcceptedRecruitments, getVacantExpiration } from '@/lib/utils/tables'
import { CalendarDaysIcon, ClipboardDocumentListIcon, ListBulletIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  vacant: VacantWithRelations
}>

export default function VacantCard({ vacant }: Props) {
  const { description, job, limit, id, companyId } = vacant

  const expiresAt = getVacantExpiration(vacant)
  const accepted = getAcceptedRecruitments(vacant).length

  return (
    <div className="card bg-white shadow-md border-l-4 border-primary">
      <div className="card-body">
        <h3 className="font-bold text-primary text-2xl line-clamp-1 tracking-tighter">
          {job.title}
        </h3>
        <p className="line-clamp-2">
          {description}
        </p>
        <IconData
          label="Cupos disponibles"
          data={`${accepted}/${limit} cupos`}
          icon={ClipboardDocumentListIcon}
        />
        <IconData
          label="Fecha de expiración"
          data={format(expiresAt)}
          icon={CalendarDaysIcon}
        />
        <div className="card-actions mt-2">
          <Link
            className="btn btn-secondary"
            href={`/home/companies/${companyId}/vacants/${id}`}
          >
            <ListBulletIcon className="h-5 w-5" />
            Detalles
          </Link>
        </div>
      </div>
    </div>
  )
}
