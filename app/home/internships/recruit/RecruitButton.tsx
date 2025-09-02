'use client'

import CloseModalButton from '@/components/modal/CloseModalButton'
import Modal from '@/components/modal/Modal'
import { CheckIcon, PlusIcon } from '@heroicons/react/24/outline'
import useSubmit from '@/lib/hooks/useSubmit'
import { type Job, type Vacant } from '@prisma/client'
import Select from '@/components/forms/inputs/Select'
import EmptyContent from '@/components/EmptyContent'
import Link from 'next/link'
import DatesInputs from '@/components/internships/DatesInputs'
import { schemaOmit as schema } from '@/lib/validation/schemas/recruitments/company'

type Props = React.PropsWithChildren<{
  internshipId: string
  vacants: Array<Vacant & {
    job: Job
  }>
}>

export default function RecruitButton({ internshipId, vacants }: Props) {
  const append = { interested: 'COMPANY', internshipId }
  const id = `recruitModal${internshipId}`
  const {
    alert, serverErrors, handleSubmit,
    register, formState: { errors },
  } = useSubmit({ schema, append })

  console.log(errors)

  const options = vacants.map(vacant => ({ id: vacant.id, title: vacant.job.title }))

  return (
    <Modal
      className="btn btn-primary"
      title="Enviar solicitud"
      icon={<PlusIcon className="w-5 h-5" />}
      id={id}
    >
      <h3 className="font-bold tracking-tighter text-2xl">
        Enviar solicitud de pasantía
      </h3>
      {vacants.length > 0
        ? (
          <form action="/api/recruitments" method="POST" onSubmit={handleSubmit}>
            {alert}
            {serverErrors}
            <div className="p-2">
              <Select
                register={register}
                errors={errors}
                label="Selecciona uno de tus cupos para pasantes"
                name="vacantId"
                options={{
                  type: 'rows',
                  data: options,
                }}
              />
              <DatesInputs errors={errors} register={register} />
            </div>
            <div className="p-2">
              <p className="font-semibold">
                ¿No posees un cupo adecuado para este pasante?
              </p>
              <Link
                className="font-semibold underline text-secondary"
                href="/home/internships/vacants/create"
              >
                Crear nuevo cupo
              </Link>
            </div>
            <div className="flex gap-2 mt-2">
              <CloseModalButton id={id} text="Cancelar" />
              <button type="submit" className="btn btn-primary">
                <CheckIcon className="h-4 w-4" />
                Aceptar
              </button>
            </div>
          </form>
          )
        : (
          <>
            <div className="p-2">
              <EmptyContent
                title="No posees ningún cupo"
                button={{
                  url: '/home/internships/vacants/create',
                  text: 'Registrar cupo',
                }}
              >
                No has publicado ningún cupo para pasantes, por tanto no puedes enviar solicitudes de reclutamiento.
              </EmptyContent>
            </div>
            <CloseModalButton id={id} text="Cancelar" />
          </>
          )}
    </Modal>
  )
}
