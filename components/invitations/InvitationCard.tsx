'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import { type InvitationData } from '@/lib/types'
import { format } from '@/lib/utils/date'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { type Status } from '@prisma/client'
import { useState } from 'react'

interface Props {
  invitation: InvitationData
  side: 'user' | 'owner'
}

export default function InvitationCard({ invitation, side }: Props) {
  const [status, setStatus] = useState<Status>('PENDING')
  const { handleSubmit, serverErrors, alert, loading } = useSubmit({
    method: 'PUT',
    append: {
      status,
      userId: invitation.person.id,
    },
  })

  return (
    <>
      {alert}
      {serverErrors}
      <div className="card card-compact bg-base-100 rounded-lg shadow-lg">
        <div className="p-4">
          <p>
            Te han invitado a unirte al grupo{' '}
            <span className="font-semibold">{invitation.team.name}</span>
          </p>
          <div className="mt-1 mb-3">
            <small className="text-neutral-600">
              {side === 'user' ? 'Invitado el' : 'Solicitud enviada el'}{' '}
              {format(invitation.updatedAt)}
            </small>
          </div>
          <form
            action={`/api/invitations/${invitation.id}`}
            method="POST"
            onSubmit={handleSubmit}
            className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2"
          >
            <button
              className="btn btn-primary"
              disabled={loading}
              onClick={() => {
                setStatus('ACCEPTED')
              }}
            >
              <CheckIcon className="w-5 h-5" />
              Aceptar
            </button>
            <button
              className="btn btn-ghost btn-outline hover:btn-error"
              disabled={loading}
              onClick={() => {
                setStatus('REJECTED')
              }}
            >
              <XMarkIcon className="w-5 h-5" />
              Rechazar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
