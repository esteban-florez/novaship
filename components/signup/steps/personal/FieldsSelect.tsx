import { type SelectableField } from '@/lib/types'
import FieldOption from './FieldOption'
import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'
import SelectedItems from '@/components/forms/inputs/SelectedItems'

type Props = React.PropsWithChildren<{
  searchText: string
}>

export default function FieldsSelect({ searchText }: Props) {
  const { fields, setFields, selectedFields } = useContext(SignUpContext)
  const filteredFields = fields.filter(filterBySearch)

  function filterBySearch(field: SelectableField) {
    const title = field.title.toLowerCase()
    return title.includes(searchText.toLowerCase())
  }

  function handleFieldInput(id: string) {
    const newFields = fields.map(field => {
      const canBeSelected = !field.selected && selectedFields.length < 5
      const canBeUnselected = field.selected

      if (id === field.id && (canBeSelected || canBeUnselected)) {
        return {
          ...field,
          selected: !field.selected,
        }
      }

      return field
    })

    setFields(newFields)
  }

  return (
    <div className="my-4">
      <SelectedItems
        items={selectedFields} itemsName="Áreas" onRemove={handleFieldInput}
      />
      <div className="grid h-60 grid-cols-2 gap-x-3 gap-y-2 overflow-y-auto overscroll-auto p-4 shadow-inner">
        {filteredFields.length !== 0
          ? filteredFields.map(field => {
            return (
              <FieldOption
                key={field.id}
                field={field}
                handleFieldInput={handleFieldInput}
              />
            )
          })
          : (
            <div className="col-span-2 grid h-full place-items-center">
              <p className="text-lg font-semibold">
                No se encontraron áreas con el nombre: "{searchText}".
              </p>
            </div>
            )}
      </div>
    </div>
  )
}
