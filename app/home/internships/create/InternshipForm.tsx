'use client'

import FormButtons from '@/components/forms/FormButtons'
import Input from '@/components/forms/inputs/Input'
import Select from '@/components/forms/inputs/Select'
import SelectMultiple from '@/components/forms/inputs/select-multiple/SelectMultiple'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema } from '@/lib/validation/schemas/internships/create'
import { type Category, type Grade } from '@prisma/client'

type Props = React.PropsWithChildren<{
  categories: Category[]
  grades: Grade[]
  personId: string
}>

export default function InternshipForm({ categories, grades, personId }: Props) {
  const {
    register, formState: { errors, isSubmitting },
    control, alert, serverErrors, handleSubmit,
  } = useSubmit({ schema, append: { personId } })

  return (
    <form method="POST" action="/api/internships" onSubmit={handleSubmit}>
      {alert}
      {serverErrors}
      <Input
        name="hours"
        label="Duración (horas)"
        config={{ valueAsNumber: true }}
        register={register}
        errors={errors}
        placeholder="Ingresa las horas..."
      />
      <Select
        name="gradeId"
        label="Carrera de la pasantía"
        register={register}
        errors={errors}
        options={{ type: 'rows', data: grades }}
      />
      <SelectMultiple
        name="categories"
        label="Categorías laborales"
        control={control}
        itemsName="Categorías"
        limit={5}
        menuOnTop
        options={{
          type: 'rows',
          data: categories,
        }}
      />
      <FormButtons disableSubmit={isSubmitting} />
    </form>
  )
}
