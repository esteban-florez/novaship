'use client'

import Input from '@/components/forms/inputs/Input'
import CloseModalButton from '@/components/modal/CloseModalButton'
import Modal from '@/components/modal/Modal'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema } from '@/lib/validation/schemas/internships/completed'
import { CheckIcon, PencilIcon } from '@heroicons/react/24/outline'

type Props = React.PropsWithChildren<{
  internship: {
    id: string
    hours: number
  }
}>

export default function UpdateHours({ internship }: Props) {
  const {
    register, formState: { errors },
    alert, serverErrors, handleSubmit,
  } = useSubmit({
    schema: schema(internship.hours),
    method: 'PATCH',
  })

  return (
    <Modal
      id="updateHoursModal"
      className="btn btn-warning"
      icon={<PencilIcon className="w-5 h-5" />}
      title="Actualizar"
    >
      <form method="POST" action={`/api/internships/${internship.id}/completed`} onSubmit={handleSubmit}>
        {serverErrors}
        {alert}
        <h3>Actualizar pasantía</h3>
        <Input label="Horas completadas" name="completed" placeholder="Horas completadas" type="number" register={register} errors={errors} config={{ valueAsNumber: true }} step="1" />
        <CloseModalButton id="updateHoursModal" text="Cancelar" />
        <button className="btn btn-success" type="submit">
          <CheckIcon className="h-5 w-5" />
          Aceptar
        </button>
      </form>
    </Modal>
  )
}
