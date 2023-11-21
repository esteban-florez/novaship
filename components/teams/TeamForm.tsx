'use client'

import { type Team, type Person, type Category, type Membership } from '@prisma/client'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema } from '@/lib/validation/schemas/team'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Textarea from '../forms/inputs/Textarea'
import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'
import { type OptionCategory } from '@/lib/types'
import FormButtons from '../forms/FormButtons'

interface Props extends FormProps {
  team?: Team & {
    memberships: Array<
    Membership & {
      person: Person
    }
    >
    categories: Category[]
  }
  categories: OptionCategory[]
  persons: Person[]
}

export default function TeamForm({
  action,
  method,
  team,
  persons,
  categories,
}: Props) {
  const {
    register,
    formState: { errors },
    control,
    alert,
    serverErrors,
    handleSubmit,
    loading,
  } = useSubmit({ schema, method })

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
        description="Ingresa aquí en nombre de tu equipo, una descripción de sus actividades, y las categorías laborales a las que pertenecen."
      >
        <Input
          name="name"
          placeholder="Ej. TeamDev"
          label="Nombre del equipo"
          register={register}
          value={team?.name}
          errors={errors}
          maxlength={40}
        />
        <Textarea
          name="description"
          height={3}
          label="Descripción del equipo"
          placeholder="Ej. Somos un equipo encargado del desarrollo de aplicaciones web con tecnologías de vanguardia."
          value={team?.description}
          register={register}
          errors={errors}
          maxlength={255}
        />
        <SelectMultiple
          name="categories"
          label="Categorías laborales"
          control={control}
          itemsName="Categorías"
          limit={5}
          defaultValue={team?.categories.map((category) => category.id)}
          options={{
            type: 'rows',
            data: categories,
          }}
        />
      </FormSection>
      <FormSection
        title="Miembros del equipo"
        description="Desde aquí puedes buscar mediante el correo eléctronico a las personas que quieras invitar a formar parte del equipo."
      >
        {/* TODO -> crear hacer mejores estilos para este select, hacer que las opciones muestren email, imagen y nombre. E igualmente la lista de seleccionados debe ser un collapse. */}
        <SelectMultiple
          name="membersIds"
          label="Selecciona los miembros del equipo"
          control={control}
          itemsName="Personas"
          limit={20}
          menuOnTop
          defaultValue={team?.memberships.map((member) => member.personId)}
          options={{
            type: 'rows',
            data: persons,
            label: 'email',
          }}
        />
      </FormSection>
      <FormButtons
        disableSubmit={loading}
        label={method === 'PUT' ? 'Actualizar' : 'Registrar'}
      />
    </form>
  )
}
