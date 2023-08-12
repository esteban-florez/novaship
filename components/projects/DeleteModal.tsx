'use client'

import { TrashIcon } from '@heroicons/react/24/outline'
import useSubmit from '@/lib/hooks/useSubmit'
import { type Fields, schema } from '@/lib/validation/schemas/delete'
import Input from '../forms/inputs/Input'
import Button from '../Button'

interface Props {
  id: string
  title: string
  action: string
}

export default function DeleteModal({ id, title, action }: Props) {
  const { handleSubmit, alert, register } = useSubmit<Fields>({
    schema,
    method: 'DELETE',
  })

  // TODO D -> esta no es la manera correcta de eliminar
  return (
    <form action={action} method="POST" onSubmit={handleSubmit}>
      {alert}
      <Input name="id" placeholder="" className="hidden" register={register} value={id} />
      <Button icon={<TrashIcon className="h-5 w-5" />} style="ICON" color="CANCEL" />
    </form>
  )
}
