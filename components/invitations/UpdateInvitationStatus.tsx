'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  status: 'ACCEPTED' | 'REJECTED'
  invitation: {
    id: string
    userId: string
  }
}>

const statuses = {
  ACCEPTED: {
    text: 'Aceptar',
    color: 'btn-primary',
    icon: <CheckCircleIcon className="w-5 h-5" />,
  },
  REJECTED: {
    text: 'Rechazar',
    color: 'btn-error',
    icon: <XMarkIcon className="w-5 h-5" />,
  },
} as const

export default function UpdateInvitationStatus({ status, invitation }: Props) {
  const { id, userId } = invitation
  const { handleSubmit, serverErrors, alert } = useSubmit({
    method: 'PUT',
    append: {
      status,
      userId,
    },
  })

  return (
    <>
      {alert}
      {serverErrors}
      <form
        action={`/api/invitations/${id}`}
        method="POST"
        onSubmit={handleSubmit}
      >
        <button
          className={clsx('btn btn-sm', statuses[status].color)}
          type="submit"
        >
          {statuses[status].icon}
          {statuses[status].text}
        </button>
      </form>
    </>
  )
}
