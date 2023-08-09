import SearchInput from '@/components/SearchInput'
import Checkbox from '@/components/forms/inputs/Checkbox'
import { type FieldOption } from '@/lib/types'
import { useState } from 'react'

type Props = StepProps & { fields: FieldOption[] }

export default function ThemePreferences({ goBack, goNext, fields }: Props) {
  // DRY 4
  const [availableFields, setAvailableFields] = useState<FieldOption[]>(fields)
  const selectedFieldsLength = availableFields.filter(field => field.selected).length

  function handleFieldInput(id: string) {
    const newFields = availableFields.map(field => {
      if (id === field.id) {
        if (!field.selected && selectedFieldsLength < 5) {
          return {
            ...field,
            selected: true,
          }
        }

        if (field.selected) {
          return {
            ...field,
            selected: false,
          }
        }
      }
      return field
    })

    setAvailableFields(newFields)
  }

  return (
    <>
      <h2 className="text-xl font-bold md:text-3xl">
        ¡Expora tu <span className="text-primary">pasiones</span> y elige los temas que más te <span className="text-secondary">interesen</span>!
      </h2>
      <p className="text-base">
        Para ofrecer una mejor experiencia necesitamos conocer tus preferencias.
      </p>
      <div className="mx-auto w-full pt-4">
        <div className="flex justify-end">
          <SearchInput />
        </div>
        {/* hacer funcional este coso del carrusel */}
        <div className="my-4 grid max-h-56 grid-cols-2 gap-x-3 gap-y-2 overflow-y-scroll overscroll-auto">
          {availableFields.map(field => {
            return (
              <Checkbox
                key={field.id}
                name={field.title}
                value={field.id}
                label={field.title}
                onInput={() => { handleFieldInput(field.id) }}
                active={field.selected}
              />
            )
          })}
        </div>
        <div className="mt-4 flex justify-between">
          <button onClick={goBack} type="button" className="btn-neutral btn">
            Volver
          </button>
          <button onClick={goNext} type="button" className="btn-primary btn">
            Siguiente
          </button>
        </div>
      </div>
    </>
  )
}
