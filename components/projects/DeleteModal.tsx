'use client'

import { TrashIcon } from '@heroicons/react/24/outline'
import Modal from '../modal/Modal'
import useDeleteRequest from '@/lib/hooks/useDeleteRequest'
import Button from '../Button'
import CloseModalButton from '../modal/CloseModalButton'
import { useId } from 'react'

interface Props {
  title: string
  action: string
}

// TODO -> cuando se elimina un elemento debe hacerse un re-fetch
export default function DeleteModal({ title, action }: Props) {
  const id = useId()
  const { handleSubmit, alert, serverErrors } = useDeleteRequest()

  return (
    <>
      {alert}
      {serverErrors}
      <Modal
        id={id}
        icon={<TrashIcon className="h-4 w-4" />}
        title="Eliminar"
        className="inline-flex cursor-pointer items-center justify-center gap-x-2 rounded-md border bg-error px-6 py-2 text-white  shadow-md hover:bg-white hover:text-white"
      >
        <h4 className="text-center font-semibold">¿Está seguro que quiere borrarlo?</h4>
        <img src="/delete.webp" alt="Imagen de un registro siendo borrado" className="mx-auto w-60 p-4" />
        <form action={action} method="POST" onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <p className="text-center">
            <span className="font-bold">{title} </span>
            será borrado...
          </p>
          <div className="flex justify-center gap-x-4">
            <CloseModalButton id={id} text="Cancelar" />
            <Button
              style="DEFAULT"
              color="ERROR"
              hover="WHITE"
            >
              <TrashIcon className="h-5 w-5" />
              Eliminar
            </Button>
          </div>
        </form>
      </Modal>
    </>
  )
}
