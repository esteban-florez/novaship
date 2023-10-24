'use client'

import { TrashIcon } from '@heroicons/react/24/outline'
import Modal from '../modal/Modal'
import CloseModalButton from '../modal/CloseModalButton'
import { useId } from 'react'
import useSubmit from '@/lib/hooks/useSubmit'

interface Props {
  title: string
  action: string
  showLabel?: boolean
}

// TODO -> mover a /components o una nueva carpeta de modales
export default function DeleteModal({
  title,
  action,
  showLabel = false,
}: Props) {
  const id = useId()
  const { handleSubmit, alert, serverErrors } = useSubmit({ method: 'DELETE' })

  return (
    <>
      {alert}
      {serverErrors}
      <Modal
        id={id}
        icon={<TrashIcon className="h-4 w-4" />}
        title={showLabel ? 'Eliminar' : ''}
        className="btn-error btn join-item"
      >
        <h4 className="text-center text-neutral-600 font-bold">
          ¿Está seguro que quiere borrarlo?
        </h4>
        <img
          src="/delete.webp"
          alt="Imagen de un registro siendo borrado"
          className="mx-auto w-60 p-4"
        />
        <form
          action={action}
          method="POST"
          onSubmit={handleSubmit}
          className="py-8 flex flex-col gap-y-4"
        >
          <p className="text-center font-bold">{title}</p>
          <span className="-mt-4 text-center">será borrado...</span>
          <div className="flex justify-center gap-x-4">
            <CloseModalButton
              id={id}
              text="Cancelar"
            />
            <button className="btn btn-error">
              <TrashIcon className="h-5 w-5" />
              Eliminar
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}
