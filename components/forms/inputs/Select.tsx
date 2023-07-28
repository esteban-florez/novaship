import CustomLabel from './CustomLabel'

interface SelectOptionsConfig {
  type: 'enum' | 'rows'
  data: Rec | Rec[]
  translation?: Rec
  valueKey?: string
  labelKey?: string
}

type Props = React.PropsWithChildren<{
  name: string
  label: string
  value?: string
  multiple?: boolean
  noDefault?: boolean
  options?: SelectOptionsConfig
  register?: object
}>

function enumOptions(options: SelectOptionsConfig) {
  const { data, translation } = options

  if (Array.isArray(data) || translation === undefined) {
    throw new Error('Invalid "options" argument to Select.tsx component.')
  }

  return Object.values(data)
    .map(type => ({ label: translation[type], value: type }))
}

function rowsOptions(options: SelectOptionsConfig) {
  const { data, valueKey = 'id', labelKey } = options

  if (!Array.isArray(data) || labelKey === undefined) {
    throw new Error('Invalid "options" argument to Select.tsx component.')
  }
  return data.map(row => ({ value: row[valueKey], label: row[labelKey] }))
}

export default function Select({ name, label, children, options, value = '', multiple = false, noDefault = false, register = {} }: Props) {
  let selectOptions

  if (options !== undefined) {
    selectOptions = options.type === 'enum'
      ? enumOptions(options)
      : rowsOptions(options)
  }

  return (
    <>
      <CustomLabel id={name} label={label} />
      <select
        id={name}
        name={name}
        multiple={multiple}
        defaultValue={value}
        {...register}
        className="select select-md mb-3 w-full border-neutral-300 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {!noDefault && <option value="" disabled>Seleccionar...</option>}
        {selectOptions?.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
        {children}
      </select>
    </>
  )
}
