'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import { type InvitationData } from '@/lib/types'
import { format } from '@/lib/utils/date'
import { type Status } from '@prisma/client'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  invitation: InvitationData
}

export default function InvitationCard({ invitation }: Props) {
  const [status, setStatus] = useState<Status>('PENDING')
  const { handleSubmit, serverErrors } = useSubmit({
    method: 'PUT',
    append: {
      status,
    },
  })

  return (
    <>
      {serverErrors}
      <div className="card card-compact bg-base-100 rounded-lg shadow-lg">
        <div className="p-4">
          <p>
            Te han invitado a unirte al grupo{' '}
            <span className="font-semibold">{invitation.team.name}</span>
          </p>
          <div className="mt-1 mb-3 flex flex-col justify-between items-center">
            <Link
              href={`/home/teams/${invitation.team.id}`}
              className="text-sm font-semibold text-primary underline transition-all"
            >
              Ver equipo
            </Link>
            <small className="text-neutral-600">
              Invitado el {format(invitation.updatedAt)}
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
              onClick={() => { setStatus('ACCEPTED') }}
            >
              Aceptar
            </button>
            <button
              className="btn btn-ghost btn-outline hover:btn-error"
              onClick={() => { setStatus('REJECTED') }}
            >
              Rechazar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
