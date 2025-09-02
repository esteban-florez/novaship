import { type InvitationSimple } from '@/lib/types'
import InvitationRow from './InvitationRow'

type Props = React.PropsWithChildren<{
  invitations: InvitationSimple[]
}>

export default function InvitationsTable({ invitations }: Props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {invitations.map((i) => {
          return (
            <InvitationRow
              key={i.id}
              invitation={i}
            />
          )
        })}
      </tbody>
    </table>
  )
}
