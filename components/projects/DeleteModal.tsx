'use client'

import { TrashIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'
import useSubmit from '@/lib/hooks/useSubmit'
import { zodResolver } from '@hookform/resolvers/zod'
import { type Fields, schema } from '@/lib/validation/schemas/delete'
import Input from '../forms/inputs/Input'
import Button from '../Button'
import { BUTTON_ICON } from '@/lib/constants/button'
import clsx from 'clsx'

interface Props {
  id: string
  title: string
  action: string
}

export default function DeleteModal({ id, title, action }: Props) {
  const { register, handleSubmit } = useForm<Fields>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
  })
  const { send, alert } = useSubmit({
    method: 'DELETE',
  })

  return (
    <form action={action} method="POST" onSubmit={handleSubmit(send)}>
      {alert}
      <Input name="id" placeholder="" className="hidden" register={register} value={id} />
      <Button icon={<TrashIcon className="h-5 w-5" />} className={clsx(BUTTON_ICON, 'border bg-gray-100 hover:text-primary')} />
    </form>
  )
}
