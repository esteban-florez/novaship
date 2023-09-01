'use client'

import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import Select from '@/components/forms/inputs/Select'
import Textarea from '@/components/forms/inputs/Textarea'
import FormLayout from '../forms/FormLayout'
import FormButtons from '../forms/FormButtons'
import { type Field, type Location, Mode, Schedule, type Skill, Target, type Offer, type Company } from '@prisma/client'
import useSubmit from '@/lib/hooks/useSubmit'
import { type HTTP_METHOD } from 'next/dist/server/web/http'
import { schema } from '@/lib/validation/schemas/offer'
import { expirations, modes, schedules, targets } from '@/lib/translations'
import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'
import { EXPIRATION_DATES } from '@/lib/validation/expiration-dates'

type Props = React.PropsWithChildren<{
  skills: Skill[]
  fields: Field[]
  locations: Location[]
  action: string
  method: HTTP_METHOD
  offer?: (Offer & {
    company: Company
    skills: Skill[]
    fields: Field[]
  })
}>

// CHECK -> este componente pesa 177KB | 55KB zipped
// PENDING -> schedule field.
export default function OfferForm({ offer, skills, fields, locations, action, method }: Props) {
  const offerSkills = offer?.skills.map(skill => {
    return skill.id
  })

  const offerFields = offer?.fields.map(field => {
    return field.id
  })

  const {
    handleSubmit, alert, serverErrors,
    register, formState: { errors }, control,
  } = useSubmit({
    schema,
    method,
  })

  return (
    <FormLayout>
      {alert}
      {serverErrors}
      <form method="POST" action={action} onSubmit={handleSubmit}>
        <FormSection title="Datos básicos" description="El nombre de la oferta, su descripción, categoría y salario serán visibles para los posibles candidatos.">
          <Input
            name="title"
            placeholder="Ej. Desarrollador Web Front-End"
            label="Título de la oferta"
            register={register}
            errors={errors}
            value={offer?.title ?? undefined}
          />
          <Textarea
            name="description"
            height={3}
            label="Descripción de la oferta"
            placeholder="Ej. Se busca Desarrollador Web Front-End con años de experiencia."
            register={register}
            errors={errors}
            value={offer?.description ?? undefined}
          />
          <Select
            name="mode"
            label="Modalidad"
            register={register}
            errors={errors}
            defaultValue={offer?.mode ?? undefined}
            options={{
              type: 'enum',
              data: Mode,
              translation: modes,
            }}
          />
          <Input
            name="limit"
            placeholder="Ej: 10"
            label="Límite de postulantes"
            register={register}
            errors={errors}
            type="number"
            config={{
              valueAsNumber: true,
              value: offer?.limit ?? undefined,
            }}
          />
          <Select
            name="locationId"
            label="Ubicación"
            register={register}
            errors={errors}
            defaultValue={offer?.locationId ?? undefined}
            options={{
              type: 'rows',
              data: locations,
            }}
          />
        </FormSection>
        <FormSection title="Destrezas requeridas" description="Seleccione las habilidades y campos necesarios para desempeñar el trabajo.">
          <SelectMultiple
            name="fields"
            label="Campos"
            control={control}
            itemsName="Campos"
            limit={6}
            menuOnTop
            defaultValue={offerFields ?? undefined}
            options={{
              type: 'rows',
              data: fields,
            }}
          />
          <SelectMultiple
            name="skills"
            label="Habilidades"
            control={control}
            itemsName="Habilidades"
            limit={6}
            menuOnTop
            defaultValue={offerSkills ?? undefined}
            options={{
              type: 'rows',
              data: skills,
            }}
          />
        </FormSection>
        <FormSection title="Horario de trabajo" description="Especifica los detalles del horario de trabajo así como la modalidad.">
          <Select
            name="schedule"
            label="Horario"
            register={register}
            errors={errors}
            defaultValue={offer?.schedule ?? undefined}
            options={{
              type: 'enum',
              data: Schedule,
              translation: schedules,
            }}
          />
          <Input
            name="hours"
            placeholder="Ej: 48"
            label="Horas"
            register={register}
            errors={errors}
            type="number"
            config={{
              valueAsNumber: true,
              value: offer?.hours ?? undefined,
            }}
          />
          <Input
            name="salary"
            placeholder="Ej. 25"
            label="Salario por hora ($)"
            register={register}
            errors={errors}
            type="number"
            config={{
              valueAsNumber: true,
              value: offer?.salary ?? undefined,
            }}
          />
        </FormSection>
        <FormSection title="Alcance de la oferta" description="Decide si la oferta tiene como objetivo a estudiantes en pasantías, o por el contrario, solo para aspirantes que no estén realizando pasantías.">
          <Select
            name="target"
            label="Visibilidad"
            register={register}
            errors={errors}
            defaultValue={offer?.target ?? undefined}
            options={{
              type: 'enum',
              data: Target,
              translation: targets,
            }}
          />
          <Select
            name="expiresAt"
            label="Fecha de expiración"
            register={register}
            errors={errors}
            options={{
              type: 'enum',
              data: EXPIRATION_DATES,
              translation: expirations,
            }}
          />
        </FormSection>
        <FormButtons url="/home/offers" />
      </form>
    </FormLayout>
  )
}
