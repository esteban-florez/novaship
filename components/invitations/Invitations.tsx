import { type InvitationData } from '@/lib/types'
import EmptyContent from '../EmptyContent'
import InvitationCard from './InvitationCard'
import InfoCard from './InfoCard'
import { includesValue } from '@/lib/utils/text'

interface Props {
  search: string
  invitations: InvitationData[]
  type: 'invitation' | 'data'
}

export default function Invitations({ invitations, type, search }: Props) {
  if (invitations.length === 0) {
    return (
      <EmptyContent
        title="No encontramos nada..."
        className="sm:w-2/4"
      >
        No te han enviado invitaciones aún
      </EmptyContent>
    )
  }

  const filtered = invitations.filter(
    (invitation) => search === '' || includesValue(invitation.team.name, search)
  )

  return (
    <section className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg p-4 pt-1 md:columns-2 lg:columns-3 xl:rounded-tl-none">
      {filtered.map((invitation) => (
        <div
          key={invitation.id}
          className="mb-4 break-inside-avoid-column"
        >
          <div className="rounded-xl border border-solid border-zinc-300 bg-white shadow">
            {type === 'invitation' && (
              <InvitationCard
                invitation={invitation}
                side="user"
              />
            )}
            {type === 'data' && <InfoCard invitation={invitation} />}
          </div>
        </div>
      ))}
    </section>
  )
}
