'use client'

import Modal from '@/components/modal/Modal'
import useSubmit from '@/lib/hooks/useSubmit'
import { type Revision } from '@prisma/client'
import FormSection from '@/components/forms/FormSection'
import Textarea from '@/components/forms/inputs/Textarea'
import CloseModalButton from '@/components/modal/CloseModalButton'
import { useId } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { schema } from '@/lib/validation/schemas/revision'

interface Props extends FormProps {
  revision?: Revision
  taskId?: string
  subtaskId?: string
  buttonLabel?: string
  icon?: React.ReactElement
}

// TODO -> limpiar campo al enviar
export default function RevisionModal({
  method,
  action,
  revision,
  taskId,
  subtaskId,
  buttonLabel,
  icon,
}: Props) {
  const id = useId()
  const {
    handleSubmit,
    alert,
    serverErrors,
    register,
    formState: { errors },
  } = useSubmit({
    schema,
    method,
    append: {
      taskId,
      subtaskId,
    },
  })

  return (
    <>
      {serverErrors}
      {alert}
      <Modal
        id={id}
        icon={icon ?? <PlusIcon className="h-4 w-4" />}
        title={buttonLabel}
        className="btn btn-block sm:btn-md btn-primary join-item hover:border-primary hover:bg-white hover:text-neutral-600"
      >
        <form
          method={method}
          action={action}
          onSubmit={handleSubmit}
        >
          <FormSection
            title="Mensaje de revisión"
            description="Detalle el resultado de la revisión de la tarea."
          >
            <Textarea
              name="content"
              label="Descripción"
              placeholder="Ej: La tarea no cumplió correctamente los objetivos planteados."
              value={revision?.content}
              register={register}
              errors={errors}
            />
          </FormSection>
          <div className="flex justify-between -mt-4 mb-4 px-4 gap-4">
            <CloseModalButton
              id={id}
              text="Cerrar"
            />
            <button className="btn btn-primary">
              <PlusIcon className="h-4 w-4" />
              {method === 'PUT' ? 'Actualizar' : 'Registrar'}
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}
