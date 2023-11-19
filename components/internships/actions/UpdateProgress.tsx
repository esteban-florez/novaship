'use client'

import Input from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'
import CloseModalButton from '@/components/modal/CloseModalButton'
import Modal from '@/components/modal/Modal'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema } from '@/lib/validation/schemas/progress'
import { CheckIcon, PencilIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'

type Props = React.PropsWithChildren<{
  maxHours: number
  recruitmentId: string
}>

export default function UpdateHours({ maxHours, recruitmentId }: Props) {
  const ref = useRef<HTMLInputElement | null>(null)

  const {
    register, formState: { errors },
    alert, serverErrors, handleSubmit,
  } = useSubmit({
    schema: schema(maxHours),
    onSuccessRedirect: closeModal,
  })

  function closeModal() {
    if (ref.current === null) return
    ref.current.click()
  }

  return (
    <Modal
      id="updateHoursModal"
      className="btn btn-warning"
      icon={<PencilIcon className="w-5 h-5" />}
      title="Actualizar progreso"
      labelRef={ref}
    >
      <form method="POST" action={`/api/recruitments/${recruitmentId}/progress`} onSubmit={handleSubmit}>
        {serverErrors}
        {alert}
        <h3 className="font-bold text-primary text-2xl">
          Actualizar horas completadas
        </h3>
        <Input label="Horas completadas" name="hours" placeholder="Horas completadas" type="number" register={register} errors={errors} config={{ valueAsNumber: true }} step="1" />
        <Textarea label="Descripción" maxlength={50} name="description" placeholder="Ej. El pasante ha desarrollado actividades..." register={register} errors={errors} />
        <div className="flex gap-1">
          <CloseModalButton id="updateHoursModal" text="Cancelar" />
          <button className="btn btn-success" type="submit">
            <CheckIcon className="h-4 w-4" />
            Aceptar
          </button>
        </div>
      </form>
    </Modal>
  )
}
