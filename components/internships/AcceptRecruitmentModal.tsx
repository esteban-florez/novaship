'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import Modal from '../modal/Modal'
import CloseModalButton from '../modal/CloseModalButton'
import { CheckIcon } from '@heroicons/react/24/outline'
import { schema } from '@/lib/validation/schemas/recruitments/dates'
import DatesInputs from './DatesInputs'

type Props = React.PropsWithChildren<{
  recruitmentId: string
}>

export default function AcceptRecruitmentModal({ recruitmentId }: Props) {
  const {
    register,
    formState: { errors },
    alert,
    serverErrors,
    handleSubmit,
  } = useSubmit({ method: 'PATCH', schema, append: { status: 'ACCEPTED' } })

  return (
    <Modal
      className="btn btn-primary btn-sm"
      title="Aceptar"
      id="acceptRecruitmentModal"
    >
      <h3 className="font-bold tracking-tighter text-2xl">
        Aceptar solicitud de pasantía
      </h3>
      <form
        action={`/api/recruitments/${recruitmentId}`}
        method="POST"
        onSubmit={handleSubmit}
      >
        {alert}
        {serverErrors}
        <div className="p-2">
          <DatesInputs
            errors={errors}
            register={register}
          />
        </div>
        <div className="flex gap-2 mt-2">
          <CloseModalButton
            id="acceptRecruitmentModal"
            text="Cancelar"
          />
          <button
            type="submit"
            className="btn btn-primary"
          >
            <CheckIcon className="h-4 w-4" />
            Aceptar
          </button>
        </div>
      </form>
    </Modal>
  )
}
