import { type Team, type Membership, type Leader, type Person } from '@prisma/client'
import InfoOwner from './InfoOwner'
interface Props {
  team: Team & {
    leader: Leader
    memberships: Membership[]
  } | null
  person: Person
}

export default function TeamGroup({ team, person }: Props) {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-lg">
      <InfoOwner
        id={team?.id ?? person.id}
        name={team?.name ?? person.name}
        description={team?.description ?? person.description}
        members={team?.memberships.length ?? null}
      />
    </div>
  )
}
