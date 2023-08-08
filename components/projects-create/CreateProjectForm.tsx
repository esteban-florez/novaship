'use client'

import { useForm } from 'react-hook-form'
import FormButtons from '../forms/FormButtons'
import FormSection from '../forms/FormSection'
import Input from '../forms/inputs/Input'
import Select from '../forms/inputs/Select'
import Textarea from '../forms/inputs/Textarea'
import { type Fields, schema } from '@/lib/validation/schemas/project'
import { zodResolver } from '@hookform/resolvers/zod'
import useSubmit from '@/lib/hooks/useSubmit'
import { useState } from 'react'
import { type FieldOption, type InputOnChange, type PersonOption } from '@/lib/types'
import SelectedOptions from './SelectedOptions'
import SelectedMembers from './SelectedMembers'
import clsx from 'clsx'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface Props {
  fields: FieldOption[]
  persons: PersonOption[]
}

export default function CreateProjectForm({ fields, persons }: Props) {
  const [totalFields, setTotalFields] = useState<FieldOption[]>(fields)
  const [totalPersons, setTotalPersons] = useState<PersonOption[]>(persons)
  const [searchName, setSearchName] = useState('')
  const [inputFocus, setInputFocus] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const selectedFields = totalFields.filter(field => field.selected)
  const availableFields = totalFields.filter(field => !field.selected)

  const selectedPersons = totalPersons.filter(person => person.selected)
  const availablePersons = totalPersons.filter(person => !person.selected)

  function addField(id: string) {
    const newFields = totalFields.map(field => {
      if (field.id !== id) return field

      return {
        ...field,
        selected: true,
      }
    })

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

    setTotalPersons(newPersons)
  }

  function handleInputChange(event: InputOnChange) {
    const { value } = event.target
    setInputFocus(value.length > 0)
    setSearchName(value)
  }

  const { register, handleSubmit, formState: { errors } } = useForm<Fields>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
  })
  const { send, alert } = useSubmit()

  return (
    <form className="w-full rounded-lg bg-base-100 p-4" onSubmit={handleSubmit(send)} method="POST" action="/api/home/projects">
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
            <Select name="fields" label="Campos" onChange={(e) => { addField(e.target.value) }}>
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
        <div className="relative">
          <Input name="members" label="Miembros" value={inputValue} placeholder="Ej: José Pérez o josezz@gmail.com" onChange={handleInputChange}>
            <span className="absolute inset-y-0 right-0 me-4 mt-3 cursor-pointer rounded-full" onClick={() => { setInputValue('') }}>
              <XMarkIcon className="h-5 w-5" />
            </span>
          </Input>
        </div>
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
