import { type Team, type Membership, type Leader } from '@prisma/client'
import InfoOwner from './InfoOwner'
interface Props {
  id: string
  team: Team & {
    leader: Leader
    memberships: Membership[]
  } | null
  isOwner: boolean
  isMember: boolean
}

export default function TeamGroup({ id, team, isOwner, isMember }: Props) {
  if (team == null) {
    return null
  }

  const membersCount = team.memberships.length
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-lg">
      <InfoOwner
        id={team.id}
        name={team.name}
        description={team.description}
        members={membersCount}
      />
      {/* TEMPORAL DISABLED */}
      {/* {(isOwner || isMember) &&
        (
          <>
            <div className="divider my-0" />
            <Button
              url={`/home/projects/${id}/chat`}
              style="DEFAULT"
              color="SECONDARY"
              hover="WHITE"
            >
              <EyeIcon className="h-5 w-5" />
              Ver chat
            </Button>
          </>
        )} */}
    </div>
  )
}
