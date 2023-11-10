import {
  type Team,
  type Membership,
  type Leader,
  type Person,
  type Company,
} from '@prisma/client'
import InfoOwner from './InfoOwner'
interface Props {
  team:
  | (Team & {
    leader: Leader
    memberships: Membership[]
  })
  | null
  user: Person | Company
}

export default function TeamGroup({ team, user }: Props) {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-lg">
      <InfoOwner
        id={team?.id ?? user.id}
        name={team?.name ?? user.name}
        description={team?.description ?? user.description}
        members={team?.memberships.length ?? null}
      />
    </div>
  )
}
