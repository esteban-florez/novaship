'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import { type UserType } from '@prisma/client'

type Props = React.PropsWithChildren<{
  type: UserType
  id: string
}>

export default function VerifyButton({ type, id }: Props) {
  const { alert, handleSubmit } = useSubmit({ method: 'PATCH', append: { userId: id, type } })

  return (
    <form action={`/api/verifications/${id}`} method="POST" onSubmit={handleSubmit}>
      {alert}
      <button className="btn-success btn-sm btn" type="submit">
        Verificar
      </button>
    </form>
  )
}
