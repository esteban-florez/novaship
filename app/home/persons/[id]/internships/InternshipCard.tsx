import InternshipActions from '@/components/internships/InternshipActions'
import InternshipProgress from '@/components/internships/InternshipProgress'
import { type InternshipWithRelations } from '@/lib/types'
import { getInternshipStage } from '@/lib/utils/tables'
import { type UserType } from '@prisma/client'

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
        <InternshipActions
          internship={internship}
          stage={stage}
          userType={userType}
        />
      </div>
    </div>
  )
}
