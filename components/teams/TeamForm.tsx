'use client'

import {
  type Team,
  type Person,
  type Category,
  type Membership,
} from '@prisma/client'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema } from '@/lib/validation/schemas/team'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Textarea from '../forms/inputs/Textarea'
import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'
import { type OptionCategory } from '@/lib/types'
import FormButtons from '../forms/FormButtons'
import { tooltip } from '@/lib/tooltip'

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
  const backUrl =
    method === 'POST' ? '/home/teams' : `/home/teams/${team?.id ?? ''}`
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
        description={tooltip.team_form_basic_data}
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
        description={tooltip.team_form_members}
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
        method={method}
        link={backUrl}
      />
    </form>
  )
}
