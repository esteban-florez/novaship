'use client'

import FormButtons from '@/components/forms/FormButtons'
import Select from '@/components/forms/inputs/Select'
import SelectMultiple from '@/components/forms/inputs/select-multiple/SelectMultiple'
import useSubmit from '@/lib/hooks/useSubmit'
import { hoursOptions } from '@/lib/shared/durations'
import { type InternshipWithRelations } from '@/lib/types'
import collect from '@/lib/utils/collection'
import { schema } from '@/lib/validation/schemas/internships/create'
import { type Category, type Grade } from '@prisma/client'

type Props = React.PropsWithChildren<{
  categories: Category[]
  grades: Grade[]
  internship?: InternshipWithRelations
  personId?: string
}>

export default function InternshipForm({ categories, grades, personId, internship }: Props) {
  const isCreate = personId !== undefined
  const {
    register, formState: { errors }, loading,
    control, alert, serverErrors, handleSubmit,
  } = useSubmit({
    schema,
    method: isCreate ? 'POST' : 'PUT',
    append: {
      personId: personId ?? undefined,
    },
  })

  const { hours, categories: selectedCategories, gradeId } = internship ?? {}

  const action = isCreate
    ? '/api/internships'
    : `/api/internships/${internship?.id ?? ''}`

  return (
    <form method="POST" action={action} onSubmit={handleSubmit}>
      {alert}
      {serverErrors}
      <Select
        name="hours"
        label="Duración (horas)"
        defaultValue={String(hours)}
        register={register}
        errors={errors}
        options={{ type: 'rows', data: hoursOptions }}
      />
      <Select
        name="gradeId"
        label="Carrera de la pasantía"
        defaultValue={gradeId}
        register={register}
        errors={errors}
        options={{ type: 'rows', data: grades }}
      />
      <SelectMultiple
        name="categories"
        label="Categorías laborales"
        defaultValue={collect(selectedCategories ?? []).ids()}
        control={control}
        itemsName="Categorías"
        limit={5}
        menuOnTop
        options={{
          type: 'rows',
          data: categories,
        }}
      />
      <FormButtons disableSubmit={loading} />
    </form>
  )
}
