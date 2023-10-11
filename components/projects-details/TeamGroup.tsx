import { type Team, type Membership, type Leader, type Person } from '@prisma/client'
import InfoOwner from './InfoOwner'
interface Props {
  id: string
  team: Team & {
    leader: Leader
    memberships: Membership[]
  } | null
  person: Person
  showChat: boolean
}

export default function TeamGroup({ id, team, person, showChat }: Props) {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-lg">
      <InfoOwner
        id={team?.id ?? person.id}
        name={team?.name ?? person.name}
        description={team?.description ?? person.description}
        members={team?.memberships.length ?? null}
      />
      {/* TEMPORAL DISABLED */}
      {/* {showChat &&
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
