'use client'

import { type Hiring, type Interview, Platform, Status } from '@prisma/client'
import FormButtons from '../forms/FormButtons'
import FormLayout from '../forms/FormLayout'
import FormSection from '../forms/FormSection'
import Select from '../forms/inputs/Select'
import { schema } from '@/lib/validation/schemas/interview'
import { offerStatuses } from '@/lib/translations'
import useSubmit from '@/lib/hooks/useSubmit'
import Input from '../forms/inputs/Input'

interface Props {
  offerId: string
  hiring: (Hiring & {
    person: {
      id: string
    }
    interviews: Interview[]
  })
}

export default function HiringForm({ offerId, hiring }: Props) {
  const {
    register, formState: { errors },
    alert, serverErrors, handleSubmit,
  } = useSubmit({
    schema,
    append: {
      offerId,
      hiringId: hiring.id,
    },
  })

  return (
    <FormLayout>
      <form action="/api/interview" method="POST" onSubmit={handleSubmit}>
        {alert}
        {serverErrors}
        <FormSection title="Postulación en oferta" description="Indique su respuesta hacia la postulación del usuario.">
          <Select
            name="status"
            label="Estado de la oferta"
            defaultValue={hiring.status ?? ''}
            register={register}
            errors={errors}
            options={{
              type: 'enum',
              data: Status,
              translation: offerStatuses,
            }}
          />
        </FormSection>
        <FormSection title="Entrevista" description="En caso de aceptar al postulante llene los campos para agendar la entrevista.">
          <Input
            name="date"
            placeholder="Ej: "
            label="Fecha"
            type="date"
            register={register}
            errors={errors}
          />
          <Input
            name="link"
            placeholder="Ej: https://www.meet.com/j56ckal"
            label="Enlace a plataforma"
            register={register}
            errors={errors}
          />
          <Select
            name="platform"
            label="Plataforma de entrevista"
            register={register}
            errors={errors}
            options={{
              type: 'enum',
              data: Platform,
              translation: Platform,
            }}
          />
        </FormSection>
        <FormButtons url={`/home/offers/${offerId}`} />
      </form>
    </FormLayout>
  )
}
