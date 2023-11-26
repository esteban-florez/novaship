'use client'

import Input from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'
import CloseModalButton from '@/components/modal/CloseModalButton'
import Modal from '@/components/modal/Modal'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema } from '@/lib/validation/schemas/progress'
import { CheckIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'
import DatesInputs from '../DatesInputs'

type Props = React.PropsWithChildren<{
  maxHours: number
  recruitmentId: string
  minDate: Date | null
}>

export default function UpdateProgress({ maxHours, recruitmentId, minDate }: Props) {
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
      className="btn btn-primary mr-3"
      icon={<PlusIcon className="w-5 h-5" />}
      title="Registrar actividad"
      labelRef={ref}
    >
      <form method="POST" action={`/api/recruitments/${recruitmentId}/progress`} onSubmit={handleSubmit}>
        {serverErrors}
        {alert}
        <h3 className="font-bold tracking-tighter text-2xl">
          Registrar actividad
        </h3>
        <Input label="Título" name="title" placeholder="Ej. Reparación de equipos" register={register} errors={errors} />
        <Textarea label="Descripción" maxlength={50} name="description" placeholder="Ej. El pasante ha desarrollado actividades..." register={register} errors={errors} />
        <Input label="Horas contempladas" name="hours" placeholder="Ej. 4" type="number" register={register} errors={errors} config={{ valueAsNumber: true }} step="1" />
        <DatesInputs errors={errors} register={register} minDate={minDate} />
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
