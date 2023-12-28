'use client'

import FormLayout from '@/components/forms/FormLayout'
import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import useSubmit from '@/lib/hooks/useSubmit'
import { tooltip } from '@/lib/tooltip'
import { type ModelData } from '@/lib/types'
import { type Person } from '@prisma/client'
import { schema } from '@/lib/validation/schemas/profile/person'
import FormButtons from '@/components/forms/FormButtons'
import Textarea from '@/components/forms/inputs/Textarea'
import Select from '@/components/forms/inputs/Select'
import SelectMultiple from '@/components/forms/inputs/select-multiple/SelectMultiple'

interface Props {
  person: Person & {
    categories: Array<{
      id: string
    }>
    experiences: Array<{
      id: string
      name: string
      description: string | null
      from: Date
      to: Date | null
      job: {
        title: string
      }
    }>
    grades: Array<{
      id: string
    }>
    skills: Array<{
      id: string
    }>
  }
  locations: ModelData[]
  categories: ModelData[]
  skills: ModelData[]
  grades: ModelData[]
}

// TODO -> experiences, schedule, image
// FIX -> employable default value
export default function PersonForm({
  person,
  locations,
  categories,
  skills,
  grades,
}: Props) {
  const {
    name,
    description,
    ci,
    email,
    birth,
    employable,
    phone,
    // schedule,
    // image,
    locationId,
    // experiences,
    categories: personCategories,
    grades: personGrades,
    skills: personSkills,
  } = person

  const {
    handleSubmit,
    alert,
    serverErrors,
    register,
    formState: { errors },
    control,
    loading,
  } = useSubmit({
    schema,
    method: 'PUT',
  })

  return (
    <>
      {alert}
      {serverErrors}
      <FormLayout title="Información del perfil">
        <form
          action="/api/profile"
          onSubmit={handleSubmit}
          method="POST"
        >
          <FormSection
            title="Información básica"
            description={tooltip.profile_person_basic_data}
          >
            <Input
              name="name"
              label="Nombre"
              placeholder="Ej. José Sucre"
              value={name}
              register={register}
              errors={errors}
              maxlength={40}
            />
            <Textarea
              name="description"
              label="Sobre mi"
              placeholder="Ej. Experto en balances bancarios y manejo de excel"
              value={description}
              register={register}
              errors={errors}
              maxlength={255}
            />
            <Input
              name="email"
              label="Correo electrónico"
              value={email}
              register={register}
              errors={errors}
              maxlength={40}
              placeholder="Ej. correo@ejemplo.com"
            />
            <Input
              name="ci"
              label="Cédula de identidad"
              placeholder="Ej. 12316487"
              value={ci}
              register={register}
              errors={errors}
              maxlength={8}
              type="number"
            />
            <Input
              type="date"
              label="Fecha de nacimiento:"
              name="birth"
              value={birth.toISOString().split('T')[0]}
              register={register}
              errors={errors}
              placeholder="Fecha de nacimiento"
            />
            <Input
              label="Teléfono:"
              type="number"
              name="phone"
              value={phone}
              register={register}
              errors={errors}
              placeholder="Ej. 04121234567"
              maxlength={11}
            />
          </FormSection>
          <FormSection
            title="Información laboral"
            description={tooltip.profile_person_job_data}
          >
            <Select
              name="employable"
              label="¿Estás en busca de empleo?"
              options={{
                type: 'rows',
                data: [
                  { title: 'Sí', id: 'true' },
                  { title: 'No', id: 'false' },
                ],
              }}
              register={register}
              errors={errors}
              defaultValue={employable ? 'true' : 'false'}
              noDefault
            />
            <Select
              name="locationId"
              label="Dirección"
              defaultValue={locationId}
              options={{ type: 'rows', data: locations }}
              register={register}
              errors={errors}
            />
            <SelectMultiple
              name="categories"
              label="Categorías laborales"
              control={control}
              itemsName="Categorías"
              limit={5}
              defaultValue={personCategories.map((category) => category.id)}
              options={{
                type: 'rows',
                data: categories,
              }}
            />
            <SelectMultiple
              name="grades"
              label="Carreras"
              control={control}
              itemsName="Carreras"
              limit={5}
              defaultValue={personGrades.map((grade) => grade.id)}
              options={{
                type: 'rows',
                data: grades,
              }}
            />
            <SelectMultiple
              name="skills"
              label="Habilidades"
              control={control}
              itemsName="Habilidades"
              limit={5}
              defaultValue={personSkills.map((skill) => skill.id)}
              options={{
                type: 'rows',
                data: skills,
              }}
            />
          </FormSection>
          <FormButtons
            method="PUT"
            link="/home/profile"
            disableSubmit={loading}
          />
        </form>
      </FormLayout>
    </>
  )
}
