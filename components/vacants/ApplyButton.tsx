'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import { PlusIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  internshipId: string
  vacantId: string
  block?: boolean
}>

export default function ApplyButton({ internshipId, vacantId, block = false }: Props) {
  const append = { internshipId, vacantId, interested: 'PERSON' }

  const {
    alert, serverErrors, handleSubmit,
  } = useSubmit({ append })

  return (
    <form className={clsx(block && 'block w-full')} method="POST" action="/api/recruitments" onSubmit={handleSubmit}>
      {alert}
      {serverErrors}
      <button className={clsx('btn btn-primary', block && 'btn-block')} type="submit">
        <PlusIcon className="h-5 w-5" />
        Solicitar cupo
      </button>
    </form>
  )
}
