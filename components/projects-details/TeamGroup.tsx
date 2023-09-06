import { type Team, type Membership, type Person } from '@prisma/client'
import { EyeIcon } from '@heroicons/react/24/outline'
import InfoOwner from './InfoOwner'
import Button from '../Button'

interface Props {
  id: string
  team: Team & {
    memberships: Array<Membership & {
      person: Person | null
    }>
  }
  isOwner: boolean
  isMember: boolean
}

export default function TeamGroup({ id, team, isOwner, isMember }: Props) {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-lg">
      <InfoOwner name={team.name} description={team.description} />
      {(isOwner || isMember) &&
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
        )}
    </div>
  )
}
