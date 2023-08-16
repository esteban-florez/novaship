'use client'

import FormButtons from '../forms/FormButtons'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Select from '../forms/inputs/Select'
import Textarea from '../forms/inputs/Textarea'
import { type Fields, schema } from '@/lib/validation/schemas/project'
import useSubmit from '@/lib/hooks/useSubmit'
import { useState } from 'react'
import { type SelectablePerson, type SelectableField } from '@/lib/types'
import SelectedMembers from './SelectedMembers'
import clsx from 'clsx'
import SelectedItems from '../forms/inputs/SelectedItems'

interface Props {
  fields: SelectableField[]
  persons: SelectablePerson[]
}

export default function CreateProjectForm({ fields: fieldsData, persons: personsData }: Props) {
  // DRY 4
  // TODO -> cuando se selecciona una de las opciones de privacity no quita el error
  const [fields, setFields] = useState(fieldsData)
  const [persons, setPersons] = useState(personsData)
  const [searchName, setSearchName] = useState('')
  const [inputFocus, setInputFocus] = useState(false)

  const selectedFields = fields.filter(field => field.selected)
  const availableFields = fields.filter(field => !field.selected)

  const selectedPersons = persons.filter(person => person.selected)
  const availablePersons = persons.filter(person => !person.selected)

  function addField(id: string) {
    const newFields = fields.map(field => {
      if (field.id !== id) return field

      return {
        ...field,
        selected: true,
      }
    })

    setFields(newFields)
  }

  function removeField(id: string) {
    const newFields = fields.map(field => {
      if (field.id !== id) return field

      return {
        ...field,
        selected: false,
      }
    })

    setFields(newFields)
  }

  function addPerson(id: string) {
    const newPersons = persons.map(person => {
      if (person.id !== id) return person

      return {
        ...person,
        selected: true,
      }
    })

    setPersons(newPersons)
  }

  function removePerson(id: string) {
    const newPersons = persons.map(person => {
      if (person.id !== id) return person

      return {
        ...person,
        selected: false,
      }
    })

    setPersons(newPersons)
  }

  function handleInputEvent(event: OnInputEvent) {
    const { value } = event.target
    setInputFocus(value.length > 0)
    setSearchName(value)
  }

  const {
    handleSubmit, alert,
    register, formState: { errors },
  } = useSubmit<Fields>({
    schema,
    append: {
      selectedFields,
      selectedPersons,
    },
  })

  return (
    <form className="w-full rounded-lg bg-base-100 p-4" onSubmit={handleSubmit} method="POST" action="/api/projects">
      {alert}
      <FormSection title="Información del proyecto" description="Asigne un título que explique de que trata el proyecto, así como una descripción del mismo para tener una mejor idea y por último si es público o privado.">
        <Input name="title" register={register} errors={errors} label="Título" placeholder="Ej: Página web administrativa" />
        <Textarea name="description" register={register} errors={errors} label="Descripción" placeholder="Ej: Página web de carácter administrativo para la empresa..." />
        <Select name="visibility" register={register} errors={errors} label="Selecciona la privacidad">
          <option value="PRIVATE">Privado</option>
          <option value="PUBLIC">Público</option>
        </Select>
      </FormSection>

      <FormSection title="Campos requeridos" description="Elige los campos necesarios para ser parte del proyecto.">
        {availableFields.length > 0 &&
          (
            <Select name="fields" label="Campos" onInput={(e) => { addField(e.target.value) }}>
              {availableFields.map(field => (
                <option key={field.id} value={field.id}>
                  {field.title}
                </option>
              ))}
            </Select>
          )}
        <SelectedItems items={selectedFields} itemsName="Campos" onRemove={removeField} />
      </FormSection>

      <FormSection title="Miembros del proyecto" description="Añada algunos colaboradores a su proyecto para llevarlo a cabo.">
        <Input name="members" label="Miembros" placeholder="Ej: José Pérez o josezz@gmail.com" onInput={handleInputEvent} />
        <div className={clsx({
          'mt-3 w-full max-h-60 gap-2 overflow-y-auto': true,
          block: inputFocus,
          hidden: !inputFocus,
        })}
        >
          {inputFocus && availablePersons.map(person => {
            if (searchName === '' || Boolean(person.name.toLowerCase().includes(searchName.toLowerCase()))) {
              return (
                <div key={person.id} className="w-full cursor-pointer border px-4 py-1 transition-colors delay-150 duration-150 first:rounded-t-md last:rounded-b-md hover:border-primary" onClick={() => { addPerson(person.id) }}>
                  <h6>{person.name}</h6>
                  <p>{person.email}</p>
                </div>
              )
            }

            return null
          })}
        </div>
        <SelectedMembers selectedPersons={selectedPersons} removePerson={removePerson} />
      </FormSection>

      <FormButtons url="/home/projects" />
    </form>
  )
}
