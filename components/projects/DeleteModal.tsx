'use client'

import { TrashIcon } from '@heroicons/react/24/outline'
import useSubmit from '@/lib/hooks/useSubmit'
import { type Fields, schema } from '@/lib/validation/schemas/delete'
import Modal from '../Modal'

interface Props {
  title: string
  action: string
}

// TODO -> handleSubmit no envia los datos, requiere de un input al menos que pertenezca al schema
export default function DeleteModal({ title, action }: Props) {
  const { handleSubmit, alert } = useSubmit<Fields>({
    schema,
    method: 'DELETE',
  })

  // TODO D -> esta no es la manera correcta de eliminar
  return (
    <Modal
      id="deleteModal"
      label=""
      style="ICON"
      color="CANCEL"
      hover="PRIMARY"
      icon={<TrashIcon className="h-5 w-5" />}
      cancelLabel="Cancelar"
      acceptLabel="Borrar"
      acceptColor="ERROR"
      acceptIcon={<TrashIcon className="h-5 w-5" />}
    >
      <form action={action} method="POST" onSubmit={handleSubmit} className="text-center">
        {alert}
        <p>Si continua no podrá recuperarlo</p>
        <p className="font-semibold text-error">¿Está seguro de borrarlo?</p>
        <h6 className="mt-4 font-bold">{title}</h6>
      </form>
    </Modal>
  )
}
