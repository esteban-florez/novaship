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
    <>
      <h2 className="mt-4 w-full rounded-t-md bg-primary px-4 py-2 text-lg font-bold text-primary-content sm:text-xl">
        Miembros totales - {memberships?.length}
      </h2>
      <div className="grid grid-cols-1 gap-x-2 rounded-b-md border p-2 sm:grid-cols-2">
        {hasMemberships && memberships.map(member => {
          return <Member key={member?.person?.id} name={member?.person?.name ?? ''} email={member?.person?.email ?? ''} action="Show" />
        })}
      </div>
    </>
  )
}
