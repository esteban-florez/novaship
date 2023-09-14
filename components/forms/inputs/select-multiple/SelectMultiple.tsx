import CustomLabel from '../CustomLabel'
import InputError from '../../InputError'
import { type Control, useController, type RegisterOptions } from 'react-hook-form'
import SelectMultipleMenu from './SelectMultipleMenu'
import SelectedItems from '../SelectedItems'
import getSelectOptions from '@/lib/shared/getSelectOptions'

type Props = React.PropsWithChildren<{
  name: string
  options: SelectOptionsConfig
  label: string
  control: Control
  itemsName: string
  disabled?: boolean
  limit?: number
  menuOnTop?: boolean
  defaultValue?: string[]
  config?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
}>

export default function SelectMultiple({
  name: initialName, options: optionsData, label, itemsName, control, disabled = false,
  menuOnTop = false, defaultValue = [], config = {}, limit = Infinity,
}: Props) {
  config.required ??= true
  const { field, fieldState: { error } } = useController({
    name: initialName, control, defaultValue, rules: config,
  })
  const fieldValue = field.value as string[]
  const options = getSelectOptions(optionsData) as SelectOptionsArray

  const initialValue: { selected: SelectOptionsArray, available: SelectOptionsArray } = {
    selected: [],
    available: [],
  }

  const { selected, available } = options.reduce((previous, current) => {
    const isSelected = fieldValue.includes(current.value)

    if (isSelected) {
      previous.selected.push(current)
    } else {
      previous.available.push(current)
    }

    return previous
  }, initialValue)

  const selectedItems = selected.map(option => ({
    id: option.value,
    title: option.label,
  }))

  function addOption(optionValue: string) {
    const newValues = [...fieldValue]
    newValues.push(optionValue)
    field.onChange(newValues)
  }

  function removeOption(optionValue: string) {
    const newValues = fieldValue.filter(value => value !== optionValue)
    field.onChange(newValues)
  }

  return (
    <>
      <CustomLabel id={field.name} label={label} />
      <SelectMultipleMenu
        options={available}
        menuOnTop={menuOnTop}
        addOption={addOption}
        disabled={selected.length >= limit || disabled}
      />
      <InputError message={error?.message} />
      {selected.length > 0 && (
        <SelectedItems
          items={selectedItems}
          itemsName={itemsName}
          onRemove={removeOption}
        />
      )}
      <select id={field.name} {...field} hidden multiple disabled={disabled}>
        {options?.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </>
  )
}
