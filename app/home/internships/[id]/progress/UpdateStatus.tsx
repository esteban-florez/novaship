'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  status: 'ACCEPTED' | 'REJECTED'
  progressId: string
}>

const statuses = {
  ACCEPTED: {
    text: 'Completar',
    color: 'btn-success',
  },
  REJECTED: {
    text: 'Cancelar',
    color: 'btn-error',
  },
} as const

export default function UpdateStatus({ status, progressId }: Props) {
  // DRY 2042
  const append = { status }
  const { alert, serverErrors, handleSubmit } = useSubmit({ method: 'PATCH', append })

  return (
    <form
      method="POST"
      action={`/api/progress/${progressId}`}
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
