import { statuses } from '@/lib/translations'
import { type InvitationData } from '@/lib/types'
import { format } from '@/lib/utils/date'
import { type Status } from '@prisma/client'
import Link from 'next/link'

interface Props {
  invitation: InvitationData
  side: 'RECEIVED' | 'SENT'
}

export default function InfoCard({ invitation, side }: Props) {
  const status =
    invitation.status === 'PENDING'
      ? 'recibido'
      : statuses[invitation.status as Status].toLocaleLowerCase()

  return (
    <div className="card card-compact bg-base-100 rounded-lg shadow-lg border border-zinc-300">
      <div className="p-4">
        {side === 'SENT'
          ? (
            <p>
              La invitación al equipo{' '}
              <span className="font-bold">{invitation.team.name}</span> ha sido{' '}
              {status}
            </p>
            )
          : (
            <p className="text-neutral-600">
              Has {invitation.status === 'ACCEPTED' ? 'aceptado' : 'rechazado'} la
              invitación al grupo
              <Link
                href={`/home/teams/${invitation.team.id}`}
                className="ms-1"
              >
                <span className="text-primary font-semibold">
                  {invitation.team.name}
                </span>
              </Link>
            </p>
            )}
        <small className="font-semibold text-neutral-600">
          {side === 'RECEIVED' ? 'Recibido' : 'Enviado'} el{' '}
          {format({ date: invitation.updatedAt })}
        </small>
      </div>
    </div>
  )
}
