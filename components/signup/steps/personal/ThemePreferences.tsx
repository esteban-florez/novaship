import SearchInput from '@/components/SearchInput'
import Checkbox from '@/components/forms/inputs/Checkbox'
import { type FieldOption } from '@/lib/types'
import { useState } from 'react'

type Props = React.PropsWithChildren<{
  fields: FieldOption[]
  setStep: (step: string) => void
}>

export default function ThemePreferences({ setStep, fields }: Props) {
  const [availableFields, setAvailableFields] = useState<FieldOption[]>(fields)
  const [count, setCount] = useState(0)
  const handleActive = (id: string) => {
    const newFields = availableFields.map(field => {
      if (id === field.id && count < 5) {
        setCount(count + 1)
        return {
          ...field,
          selected: !field.selected,
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
                onInput={() => { handleActive(field.id) }}
                active={field.selected}
              />
            )
          })}
        </div>
        <div className="mt-4 flex justify-between">
          <button onClick={() => { setStep('photoProfile') }} type="button" className="btn-neutral btn">
            Volver
          </button>
          <button onClick={() => { setStep('userCalendar') }} type="button" className="btn-primary btn">
            Siguiente
          </button>
        </div>
      </div>
    </>
  )
}
