'use client'

import FormButtons from '../forms/FormButtons'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Select from '../forms/inputs/Select'
import Textarea from '../forms/inputs/Textarea'
import { type Fields, schema } from '@/lib/validation/schemas/project'
import useSubmit from '@/lib/hooks/useSubmit'
import { useState } from 'react'
import { type SelectableField, type SelectablePerson } from '@/lib/types'
import clsx from 'clsx'
import SelectedOptions from '../selectable-models/SelectedOptions'
import SelectedMembers from '../selectable-models/SelectedMembers'
import { Visibility, type Project } from '@prisma/client'
import Member from '../projects-details/Member'
import { includesValue } from '@/lib/utils/text'
import { visibilities } from '@/lib/translations'
import Layout from '../forms/Layout'

// DRY 5
interface Props {
  id?: string
  method: 'POST' | 'PUT'
  action: string
  fields: SelectableField[]
  persons: SelectablePerson[]
  project?: Project & {
    person: {
      id: string
    } | null
    fields: Array<{
      id: string
      title: string
    }>
    memberships: Array<{
      id: string
      person: {
        id: string
        name: string
        email: string
      }
    }>
  }
}

// TODO -> responsive
export default function ProjectForm({ id, method, action, fields, persons, project }: Props) {
  // TODO -> actualizar a select multiple sin estado
  const [totalFields, setTotalFields] = useState<SelectableField[]>(fields)
  const [totalPersons, setTotalPersons] = useState<SelectablePerson[]>(persons)
  const [searchName, setSearchName] = useState('')
  const [inputFocus, setInputFocus] = useState(false)
  const [oldFields, setOldFields] = useState<string[]>([])
  const [oldPersons, setOldPersons] = useState<string[]>([])

  const selectedFields = totalFields.filter(field => field.selected)
  const availableFields = totalFields.filter(field => !field.selected)

  const selectedPersons = totalPersons.filter(person => person.selected)
  const availablePersons = totalPersons.filter(person => !person.selected)

  const projectMembers = project?.memberships.map(member => {
    return member.person.id
  })

  // CHECK 1 -> Posible manejador de elementos seleccionados ?
  // type HandleOptionProps<T> = {
  //   id: string
  //   value: boolean
  //   options: Array<T & {
  //     id: string
  //   }>
  //   setOptions: React.Dispatch<React.SetStateAction<Array<any>>>
  // }

  // function handleOption<T>({ id, value, options, setOptions }: HandleOptionProps<T>) {
  //   if (id === null && id === undefined) return null

  //   const newOptions = options.map((option: { id: string }) => {
  //     if (option.id === id) {
  //       return {...option, selected: value }
  //     }

  //     return option
  //   })

  //   setOptions(newOptions)
  // }

  // DRY 4
  function addField(id: string) {
    const newFields = totalFields.map(field => {
      if (field.id !== id) return field

      return {
        ...field,
        selected: true,
      }
    })

    setOldFields([...oldFields.filter(value => value !== id)])
    setTotalFields(newFields)
  }

  function removeField(id: string) {
    const newFields = totalFields.map(field => {
      if (field.id !== id) return field

      return {
        ...field,
        selected: false,
      }
    })

    setOldFields([...oldFields, id])
    setTotalFields(newFields)
  }

  function addPerson(id: string) {
    const newPersons = totalPersons.map(person => {
      if (person.id !== id) return person

      return {
        ...person,
        selected: true,
      }
    })

    if (oldPersons !== undefined) setOldPersons([...oldPersons?.filter(person => person !== id)])
    setTotalPersons(newPersons)
  }

  function removePerson(id: string) {
    const newPersons = totalPersons.map(person => {
      if (person.id !== id) return person

      return {
        ...person,
        selected: false,
      }
    })

    if ((oldPersons !== undefined) && (projectMembers?.includes(id) ?? false)) setOldPersons([...oldPersons, id])
    setTotalPersons(newPersons)
  }

  function handleInputEvent(event: OnInputEvent) {
    const { value } = event.target
    setInputFocus(value.length > 0)
    setSearchName(value)
  }

  const {
    handleSubmit, alert, serverErrors,
    register, formState: { errors },
  } = useSubmit<Fields>({
    schema,
    method,
    append: {
      projectId: id ?? '',
      selectedFields,
      selectedPersons,
      oldFields,
      oldPersons,
    },
    refreshOnSuccess: true,
  })

  return (
    <Layout>
      <form onSubmit={handleSubmit} method="POST" action={action}>
        {serverErrors}
        {alert}
        <FormSection title="Información del proyecto" description="Asigne un título que explique de que trata el proyecto, así como una descripción del mismo para tener una mejor idea y por último si es público o privado.">
          <Input name="title" value={project?.title} register={register} errors={errors} label="Título" placeholder="Ej: Página web administrativa" />
          <Textarea name="description" value={project?.description} register={register} errors={errors} label="Descripción" placeholder="Ej: Página web de carácter administrativo para la empresa..." />
          <Select
            name="visibility"
            value={project?.visibility}
            register={register}
            errors={errors}
            label="Selecciona la privacidad"
            options={{ type: 'enum', data: Visibility, translation: visibilities }}
          />
        </FormSection>

        <FormSection title="Campos requeridos" description="Elige los campos necesarios para ser parte del proyecto.">
          {availableFields.length > 0 &&
            (
              // Fix -> Despues de seleccionar una opcion el primer elemento no es seleccionable.
              <Select name="fields" label="Campos" onInput={(e) => { addField(e.target.value) }}>
                {/* CHECK 1 */}
                {/*
                <Select name="fields" label="Campos" onInput={
                  (e) => {handleOption<SelectableField>({ id: e.target.value, options: totalFields, value: true, setOptions: setTotalFields })}
                }>
              */}
                {availableFields.map(field => (
                  <option key={field.id} value={field.id}>
                    {field.title}
                  </option>
                ))}
              </Select>
            )}
          <SelectedOptions selectedOptions={selectedFields} removeOption={removeField} />
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
              if (searchName === '' || includesValue(person.name, searchName) || includesValue(person.email, searchName)) {
                return <Member key={person.id} name={person.name} email={person.email} action="Add" onClick={() => { addPerson(person.id) }} />
              }

              return null
            })}
          </div>
          <SelectedMembers selectedPersons={selectedPersons} removePerson={removePerson} />
        </FormSection>

        <FormButtons url="/home/projects" />
      </form>
    </Layout>
  )
}
