import StageBadge from '@/app/home/internships/[id]/StageBadge'
import { STAGE_COLORS, STAGE_PROGRESS } from '@/lib/shared/internship-stage'
import { type InternshipWithRelations } from '@/lib/types'
import { getInternshipStage } from '@/lib/utils/tables'
import { CheckIcon, ListBulletIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
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
        <h3 className="font-bold text-primary tracking-tighter text-2xl">
          {grade.title}
        </h3>
        <p className="-mt-4 text-lg font-semibold">{institute.name}</p>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">
            Estado: <StageBadge stage={stage} className="font-bold" />
          </p>
          <progress
            className={clsx('progress w-full', STAGE_PROGRESS[stage])}
            value={3}
            max="100"
          />
          <p className="font-semibold">
            Progreso:{' '}
            <span className={clsx('brightness-75 font-bold', STAGE_COLORS[stage])}>
              {internship.completed}/{internship.hours} horas.
            </span>
          </p>
        </div>
        <div className="divider divider-vertical my-2" />
        <div className="flex flex-col gap-2">
          <Link
            href={`/home/internships/${internship.id}`}
            className="btn btn-secondary"
          >
            <ListBulletIcon className="h-5 w-5" />
            Detalles
          </Link>
          {stage === 'PENDING' && (
            <div className="flex gap-2 flex-col lg:flex-row">
              <button className="btn btn-error">
                <XMarkIcon className="h-5 w-5" />
                Rechazar
              </button>
              <button className="btn btn-success">
                <CheckIcon className="h-5 w-5" />
                Aceptar
              </button>
            </div>
          )}
          {stage === 'ACCEPTED' && (
            <button className="btn btn-primary">
              <MagnifyingGlassIcon className="h-5 w-5" />
              Buscar empresa
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
