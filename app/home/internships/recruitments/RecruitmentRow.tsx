import UserCard from '@/components/internships/UserCard'
import { auth } from '@/lib/auth/pages'
import { statuses as translation } from '@/lib/translations'
import { type RecruitmentWithRelations } from '@/lib/types'
import Link from 'next/link'
import StatusDot from './StatusDot'
import UpdateRecruitmentStatus from './UpdateRecruitmentStatus'

type Props = React.PropsWithChildren<{
  recruitment: RecruitmentWithRelations
}>

export default async function RecruitmentRow({ recruitment }: Props) {
  const { type } = await auth.user()
  const { id, interested, internship, status, vacant } = recruitment
  const { grade, person } = internship
  const { job, company } = vacant

  const current = type === 'INSTITUTE' ? 'PERSON' : type
  const recruitmentType = interested === current ? 'Enviada' : 'Recibida'

  const statuses = ['ACCEPTED', 'REJECTED'] as const

  return (
    <tr>
      <td>
        {type === 'PERSON'
          ? (
            <UserCard
              href={`/home/companies/${company.id}`}
              user={company}
              sm
            />
            )
          : (
            <UserCard
              href={`/home/persons/${person.id}`}
              user={person}
              sm
            />
            )}
      </td>
      <td>
        {grade.title}
      </td>
      <td>
        <Link
          className="underline text-secondary font-semibold"
          href={`/home/internships/vacants/${vacant.id}`}
        >
          {job.title}
        </Link>
      </td>
      <td>
        <div className="flex items-center gap-2">
          <StatusDot status={status} />
          <span>
            {translation[status]}
          </span>
        </div>
      </td>
      <td>
        {recruitmentType}
      </td>
      <td>
        {recruitmentType === 'Recibida' && recruitment.status === 'PENDING'
          ? (
            <div className="flex gap-1">
              {statuses.map(status => (
                <UpdateRecruitmentStatus
                  key={status}
                  recruitmentId={id}
                  status={status}
                />
              ))}
            </div>
            )
          : (
            <p className="text-lg font-semibold text-center">-- --</p>
            )}
      </td>
    </tr>
  )
}
