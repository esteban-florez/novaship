import StageBadge from '@/app/home/internships/[id]/StageBadge'
import InternshipActions from '@/components/internships/InternshipActions'
import { STAGE_COLORS, STAGE_PROGRESS } from '@/lib/shared/stage-colors'
import { type InternshipWithRelations } from '@/lib/types'
import { getInternshipStage } from '@/lib/utils/tables'
import { type UserType } from '@prisma/client'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  internship: InternshipWithRelations
  userType: UserType
}>

export default function InternshipCard({ internship, userType }: Props) {
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
        <InternshipActions
          internship={internship}
          stage={stage}
          userType={userType}
        />
      </div>
    </div>
  )
}
