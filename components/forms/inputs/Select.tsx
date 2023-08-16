import useInput from '@/lib/hooks/useInput'
import CustomLabel from './CustomLabel'
import { type SharedInputProps } from '@/lib/types'
import InputError from '../InputError'

type Props = React.PropsWithChildren<{
  onInput?: (event: SelectOnInputEvent) => void
  noDefault?: boolean
  options?: SelectOptionsConfig
} & SharedInputProps>

type SelectOptionsConfig = {
  type: 'enum'
  data: Rec
  translation: Rec
} | {
  type: 'rows'
  data: Array<{ value: string, label: string }>
}

function getSelectOptions(options: SelectOptionsConfig | undefined) {
  if (options === undefined) return undefined

  const { type, data } = options
  if (type === 'rows') return data

  return Object.values(data)
    .map(type => ({ label: options.translation[type], value: type }))
}

export default function Select({
  name, label, children, options, register, config = {},
  value = '', noDefault = false, errors = {}, onInput,
}: Props) {
  const { registerProps, errorMessage } = useInput({
    register, errors, name, config,
  })
  const selectOptions = getSelectOptions(options)

  return (
    <>
      {(label !== null && label !== undefined) && <CustomLabel id={name} label={label} />}
      <select
        id={name} name={name} onInput={onInput}
        defaultValue={value} {...registerProps}
        className="select select-md mb-3 w-full border-neutral-300 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {!noDefault && <option value="" disabled>Seleccionar...</option>}
        {selectOptions?.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
        {children}
      </select>
      <InputError message={errorMessage} />
    </>
  )
}
