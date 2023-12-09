'use client'

import FormButtons from '@/components/forms/FormButtons'
import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import Select from '@/components/forms/inputs/Select'
import Textarea from '@/components/forms/inputs/Textarea'
import SelectMultiple from '@/components/forms/inputs/select-multiple/SelectMultiple'
import useSubmit from '@/lib/hooks/useSubmit'
import { DURATIONS } from '@/lib/shared/durations'
import { durations as translation } from '@/lib/translations'
import { type VacantWithRelations } from '@/lib/types'
import collect from '@/lib/utils/collection'
import { schema as update } from '@/lib/validation/schemas/vacants/update'
import { schema as create } from '@/lib/validation/schemas/vacants/create'
import {
  type Skill,
  type Category,
  type Grade,
  type Job,
  type Location,
} from '@prisma/client'

type Props = React.PropsWithChildren<{
  categories: Category[]
  grades: Grade[]
  skills: Skill[]
  locations: Location[]
  jobs?: Job[]
  vacant?: VacantWithRelations
  url: string
}>

export default function VacantForm({
  categories,
  grades,
  jobs,
  locations,
  skills,
  vacant,
  url,
}: Props) {
  const isCreate = vacant === undefined
  const {
    register,
    formState: { errors },
    loading,
    control,
    alert,
    serverErrors,
    handleSubmit,
  } = useSubmit({
    schema: isCreate ? create : update,
    method: isCreate ? 'POST' : 'PATCH',
  })

  const durations = DURATIONS.map((duration) => ({
    id: duration,
    title: translation[duration],
  }))

  const action = isCreate ? '/api/vacants' : `/api/vacants/${vacant?.id}`

  return (
    <form
      method="POST"
      action={action}
      onSubmit={handleSubmit}
    >
      {alert}
      {serverErrors}
      <FormSection
        title="Datos básicos"
        description="Escribe una descripción, y selecciona el puesto de trabajo, las carreras relacionadas y habilidades requeridas."
      >
        {isCreate && jobs !== undefined && (
          <Select
            name="jobId"
            label="Puesto de trabajo"
            register={register}
            errors={errors}
            options={{ type: 'rows', data: jobs }}
          />
        )}
        <Textarea
          name="description"
          label="Descripción del cupo"
          maxlength={255}
          value={vacant?.description}
          register={register}
          errors={errors}
          placeholder="Ej. Se solicita pasante para el puesto de trabajo..."
        />
        <SelectMultiple
          name="grades"
          label="Carreras del cupo"
          itemsName="Carreras"
          limit={3}
          defaultValue={collect(vacant?.grades).ids()}
          control={control}
          options={{ type: 'rows', data: grades }}
        />
        <SelectMultiple
          name="skills"
          label="Habilidades requeridas"
          defaultValue={collect(vacant?.skills).ids()}
          control={control}
          itemsName="Habilidades"
          limit={10}
          options={{
            type: 'rows',
            data: skills,
          }}
        />
      </FormSection>
      <FormSection
        title="Configuración del cupo"
        description="Ingrese el límite de pasantes para este cupo, y la fecha de expiración del mismo."
      >
        <Input
          name="limit"
          label="Límite de pasantes (máx. 20)"
          type="number"
          value={String(vacant?.limit)}
          config={{ valueAsNumber: true }}
          register={register}
          errors={errors}
          placeholder="Ej. 4"
          step="1"
          max={20}
          min={1}
        />
        {isCreate && (
          <Select
            name="duration"
            label="Fecha de expiración"
            register={register}
            errors={errors}
            options={{
              type: 'rows',
              data: durations,
            }}
          />
        )}
      </FormSection>
      <FormSection
        title="Datos adicionales"
        description="Selecciona la ubicación para este cupo, y las categorías relacionadas."
      >
        <Select
          name="locationId"
          label="Ubicación"
          register={register}
          errors={errors}
          defaultValue={vacant?.locationId}
          options={{
            type: 'rows',
            data: locations,
          }}
        />
        <SelectMultiple
          name="categories"
          label="Categorías laborales"
          defaultValue={collect(vacant?.categories).ids()}
          control={control}
          itemsName="Categorías"
          limit={5}
          menuOnTop
          options={{
            type: 'rows',
            data: categories,
          }}
        />
      </FormSection>
      <FormButtons
        link={url}
        method={isCreate ? 'POST' : 'PUT'}
        disableSubmit={loading}
      />
    </form>
  )
}
