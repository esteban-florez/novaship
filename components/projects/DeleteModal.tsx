'use client'

import { TrashIcon } from '@heroicons/react/24/outline'
import Modal from '../modal/Modal'
import CloseModalButton from '../modal/CloseModalButton'
import { useId } from 'react'
import useSubmit from '@/lib/hooks/useSubmit'
import clsx from 'clsx'

interface Props {
  title?: string
  action: string
  showLabel?: boolean
  className?: string
}

// TODO -> mover a /components o una nueva carpeta de modales
export default function DeleteModal({
  title,
  action,
  showLabel = false,
  className,
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
        className={clsx({
          'btn-error btn join-item': className == null,
          [className as string]: className != null,
        })}
      >
        <h4 className="text-center text-neutral-600 font-bold">
          ¿Estás seguro de que deseas continuar?
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
          {title !== undefined && (
            <>
              <p className="text-center font-bold">{title}</p>
              <span className="-mt-4 text-center">será borrado...</span>
            </>
          )}
          <div className="flex justify-center gap-x-4">
            <CloseModalButton
              id={id}
              text="No, cancelar"
            />
            <button
              type="submit"
              className="btn btn-error"
            >
              <TrashIcon className="h-5 w-5" />
              Si, eliminar
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}
