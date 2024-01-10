import StatusDot from '@/app/home/internships/recruitments/StatusDot'
import UpdateInvitationStatus from '@/components/invitations/UpdateInvitationStatus'
import { statuses } from '@/lib/translations'
import { type InvitationSimple } from '@/lib/types'

type Props = React.PropsWithChildren<{
  invitation: InvitationSimple
}>

export default function InvitationRow({ invitation }: Props) {
  const { id, interested, person, status } = invitation

  return (
    <tr>
      <td>{person.name}</td>
      <td>{interested === 'PERSON' ? 'Recibido' : 'Enviado'}</td>
      <td className="inline-flex items-center gap-2">
        <StatusDot status={status} />
        {statuses[status]}
      </td>
      <td>
        {invitation.interested === 'PERSON'
          ? (
            <div className="flex gap-1">
              <UpdateInvitationStatus
                invitation={{ id, userId: person.id }}
                status="ACCEPTED"
              />
              <UpdateInvitationStatus
                invitation={{ id, userId: person.id }}
                status="REJECTED"
              />
            </div>
            )
          : (
            <p className="text-lg font-semibold text-center">-- --</p>
            )}
      </td>
    </tr>
  )
}
