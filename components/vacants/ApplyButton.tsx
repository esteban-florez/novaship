'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import { PlusIcon } from '@heroicons/react/24/outline'

type Props = React.PropsWithChildren<{
  internshipId: string
  vacantId: string
}>

export default function ApplyButton({ internshipId, vacantId }: Props) {
  const append = { internshipId, vacantId, interested: 'PERSON' }

  const {
    alert, serverErrors, handleSubmit,
  } = useSubmit({ append })

  return (
    <form method="POST" action="/api/recruitments" onSubmit={handleSubmit}>
      {alert}
      {serverErrors}
      <button className="btn btn-primary" type="submit">
        <PlusIcon className="h-5 w-5" />
        Solicitar cupo
      </button>
    </form>
  )
}
