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
      <FormSection title="Miembros del equipo" description="Desde aquí puedes buscar a las personas que quieras invitar a formar parte del equipo.">
        <SelectMultiple
          name="memberships"
          label="Selecciona los miembros del equipo"
          control={control}
          itemsName="Personas"
          limit={5}
          menuOnTop
          options={{
            type: 'rows',
            data: persons,
          }}
        />
        {/* <>
          <CustomLabel id="memberships" label="Selecciona los miembros" />
          <ReactSelect
            isMulti
            unstyled
            name="memberships"
            hideSelectedOptions
            menuPlacement="top"
            placeholder="Seleccionar..."
            controlShouldRenderValue={false}
            menuIsOpen
            components={{
              Option: (props) => {
                const { person } = props.data
                return (
                  <div {...props}>
                    <PersonOption person={person} />
                  </div>
                )
              },
            }}
            options={persons.map(person => ({
              person,
              label: 'ciaoosu',
              value: person.id,
            }))}
            filterOption={(option, search) => {
              const lowerSearch = search.toLowerCase()
              const { email, name } = option.data.person
              const emailIncludes = email.toLowerCase().includes(lowerSearch)
              const nameIncludes = name.toLowerCase().includes(lowerSearch)
              return emailIncludes || nameIncludes
            }}
            classNames={{
              container: () => 'rounded-lg border border-neutral-300',
              control: (state) => clsx('rounded-lg py-[13px] pl-4 pr-2 text-sm transition-all', state.menuIsOpen && 'ring-2 ring-primary'),
              menu: () => 'text-sm bg-white border-neutral-300 border rounded-lg my-2 shadow',
              placeholder: () => 'text-neutral-400',
            }}
          />
        </> */}
      </FormSection>
      <FormButtons url="/home/offers" />
    </form>
  )
}
