'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  status: 'ACCEPTED' | 'REJECTED'
  recruitmentId: string
}>

const statuses = {
  ACCEPTED: {
    text: 'Aceptar',
    color: 'btn-success',
  },
  REJECTED: {
    text: 'Rechazar',
    color: 'btn-error',
  },
} as const

export default function UpdateRecruitmentStatus({ status, recruitmentId }: Props) {
  const append = { status }
  const { alert, serverErrors, handleSubmit } = useSubmit({ method: 'PATCH', append })

  return (
    <form
      method="POST"
      action={`/api/recruitments/${recruitmentId}`}
      onSubmit={handleSubmit}
    >
      {alert}
      {serverErrors}
      <button className={clsx('btn btn-sm', statuses[status].color)} type="submit">
        {statuses[status].text}
      </button>
    </form>
  )
}
