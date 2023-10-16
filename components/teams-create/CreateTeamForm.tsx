'use client'

import { type Person } from '@prisma/client'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema } from '@/lib/validation/schemas/team'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Textarea from '../forms/inputs/Textarea'
import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'
import { type OptionCategory } from '@/lib/types'
import FormButtons from '../forms/FormButtons'
// import ReactSelect from 'react-select'
// import CustomLabel from '../forms/inputs/CustomLabel'
// import clsx from 'clsx'
// import PersonOption from './PersonOption'
// import AvatarIcon from '../AvatarIcon'

type Props = React.PropsWithChildren<{
  categories: OptionCategory[]
  persons: Person[]
}>

export default function CreateTeamForm({ persons, categories }: Props) {
  const {
    register, formState: { errors }, control,
    alert, serverErrors, handleSubmit,
  } = useSubmit({ schema })

  return (
    <form method="POST" action="/api/teams" onSubmit={handleSubmit}>
      {alert}
      {serverErrors}
      <FormSection title="Datos básicos" description="Ingresa aquí en nombre de tu equipo, una descripción de sus actividades, y las categorías laborales a las que pertenecen.">
        <Input
          name="name"
          placeholder="Ej. TeamDev"
          label="Nombre del equipo"
          register={register}
          errors={errors}
        />
        <Textarea
          name="description"
          height={3}
          label="Descripción del equipo"
          placeholder="Ej. Somos un equipo encargado del desarrollo de aplicaciones web con tecnologías de vanguardia."
          register={register}
          errors={errors}
        />
        <SelectMultiple
          name="categories"
          label="Selecciona las categorías laborales"
          control={control}
          itemsName="Categorías"
          limit={5}
          options={{
            type: 'rows',
            data: categories,
          }}
        />
      </FormSection>
      <FormSection title="Miembros del equipo" description="Desde aquí puedes buscar mediante el correo eléctronico a las personas que quieras invitar a formar parte del equipo..">
        {/* TODO -> crear hacer mejores estilos para este select, hacer que las opciones muestren email, imagen y nombre. E igualmente la lista de seleccionados debe ser un collapse. */}
        <SelectMultiple
          name="memberships"
          label="Selecciona los miembros del equipo"
          control={control}
          itemsName="Personas"
          limit={20}
          menuOnTop
          options={{
            type: 'rows',
            data: persons,
            label: 'email',
          }}
        />
      </FormSection>
      <FormButtons url="/home/teams" />
    </form>
  )
}
