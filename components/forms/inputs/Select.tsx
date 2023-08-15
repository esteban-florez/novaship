import CustomLabel from './CustomLabel'
import { type SharedInputProps } from '@/lib/types'

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

// DRY 3
export default function Select({
  name, label, children, options, register, config = {},
  value = '', noDefault = false, errors = {}, onInput,
}: Props) {
  config.required = config.required !== undefined ? config.required : true
  const errorMessage = errors[name]?.message as string | undefined
  const hasError = errorMessage !== undefined
  const registerProps = register !== undefined ? { ...register(name, config) } : {}
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
      {hasError && (
        <p className="-mt-3 text-sm font-semibold text-error">
          {errorMessage}
        </p>
      )}
    </>
  )
}
