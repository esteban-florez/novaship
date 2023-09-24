'use client'

import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import Select from '@/components/forms/inputs/Select'
import Textarea from '@/components/forms/inputs/Textarea'
import FormLayout from '../forms/FormLayout'
import FormButtons from '../forms/FormButtons'
import { Mode, Schedule, type Offer } from '@prisma/client'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema } from '@/lib/validation/schemas/offer'
import { modes, schedules } from '@/lib/translations'
import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'
import { EXPIRATION_DATES, getExpirationId } from '@/lib/validation/expiration-dates'
import { type OptionCategory, type OptionCompany, type OptionJob, type OptionLocation, type OptionSkill } from '@/lib/types'
import PageTitle from '../PageTitle'

interface Props extends FormProps {
  skills: OptionSkill[]
  categories: OptionCategory[]
  locations: OptionLocation[]
  jobs: OptionJob[]
  offer?: (Offer & {
    company: OptionCompany
    skills: OptionSkill[]
    categories: OptionCategory[]
  })
}

export default function OfferForm({ backUrl, offer, skills, categories, jobs, locations, action, method }: Props) {
  const offerSkills = offer?.skills.map(skill => skill.id)
  const offerCategories = offer?.categories.map(category => category.id)

  const offerExpiresAt = offer?.expiresAt != null
    ? getExpirationId(offer.createdAt, offer.expiresAt)
    : undefined

  const {
    handleSubmit, alert, serverErrors,
    register, formState: { errors }, control,
  } = useSubmit({
    schema,
    method,
  })

  return (
    <>
      <PageTitle title="Registrar nueva oferta" subtitle="Rellena los datos para crear o actualizar una nueva oferta e indica su alcance y habilidades requeridas." />
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
            <Select
              name="jobId"
              label="Puesto de trabajo"
              register={register}
              errors={errors}
              defaultValue={offer?.jobId ?? undefined}
              options={{
                type: 'rows',
                data: jobs,
              }}
            />
          </FormSection>
          <FormSection title="Destrezas requeridas" description="Selecciona las habilidades necesarias para desempeñar el trabajo. Selecciona también las categorías">
            <SelectMultiple
              name="categories"
              label="Categorías laborales"
              control={control}
              itemsName="Categorías"
              limit={5}
              menuOnTop
              defaultValue={offerCategories ?? undefined}
              options={{
                type: 'rows',
                data: categories,
              }}
            />
            <SelectMultiple
              name="skills"
              label="Habilidades"
              control={control}
              itemsName="Habilidades"
              limit={5}
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
          <FormSection title="Limites de la oferta" description="Decide el número máximo de aspirantes que pueden postularse a la oferta, así como su fecha de expiración.">
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
              name="expiresAt"
              label="Fecha de expiración"
              register={register}
              errors={errors}
              config={{
                value: offerExpiresAt,
              }}
              options={{
                type: 'rows',
                data: EXPIRATION_DATES,
              }}
            />
          </FormSection>
          <FormButtons url={backUrl} />
        </form>
      </FormLayout>
    </>
  )
}
