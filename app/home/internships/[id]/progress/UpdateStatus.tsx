'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  status: 'ACCEPTED' | 'REJECTED'
  progressId: string
}>

const statuses = {
  ACCEPTED: {
    text: 'Completar',
    color: 'btn-primary',
    icon: <CheckCircleIcon className="w-5 h-5" />,
  },
  REJECTED: {
    text: 'Cancelar',
    color: 'btn-error',
    icon: <XMarkIcon className="w-5 h-5" />,
  },
} as const

export default function UpdateStatus({ status, progressId }: Props) {
  // DRY 2042
  const append = { status }
  const { alert, serverErrors, handleSubmit } = useSubmit({
    method: 'PATCH',
    append,
  })

  return (
    <form
      method="POST"
      action={`/api/progress/${progressId}`}
      onSubmit={handleSubmit}
    >
      {alert}
      {serverErrors}
      <button
        className={clsx('btn btn-sm', statuses[status].color)}
        type="submit"
      >
        {statuses[status].icon}
        {statuses[status].text}
      </button>
    </form>
  )
}
