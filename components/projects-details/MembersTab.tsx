import { type Membership, type Person } from '@prisma/client'
import Member from './Member'

interface Props {
  memberships: Array<(Membership & {
    person: Person | null
  })> | undefined
}

export default function MembersTab({ memberships }: Props) {
  const hasMemberships = memberships !== null && memberships !== undefined

  return (
    <div className="grid grid-cols-1 gap-x-2 p-2 sm:grid-cols-2">
      {hasMemberships && memberships.map(member => {
        return <Member key={member?.person?.id} name={member?.person?.name ?? ''} email={member?.person?.email ?? ''} action="Show" />
      })}
    </div>
  )
}
