'use client'
import useSubmit from '@/lib/hooks/useSubmit'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  internshipId: string
  action: 'accept' | 'reject'
}>

const actions = {
  accept: {
    icon: CheckIcon,
    status: 'ACCEPTED',
    color: 'btn-primary',
    text: 'Aceptar',
  },
  reject: {
    icon: XMarkIcon,
    status: 'REJECTED',
    color: 'btn-error',
    text: 'Rechazar',
  },
} as const

export default function UpdateStatus({ internshipId, action }: Props) {
  const { icon: Icon, status, color, text } = actions[action]
  const { alert, handleSubmit, serverErrors, loading } = useSubmit({
    append: { status },
    method: 'PATCH',
  })

  return (
    <form
      method="POST"
      action={`/api/internships/${internshipId}/status`}
      onSubmit={handleSubmit}
    >
      {alert}
      {serverErrors}
      <button
        type="submit"
        className={clsx('btn', color)}
        disabled={loading}
      >
        <Icon className="h-5 w-5" />
        {text}
      </button>
    </form>
  )
}
