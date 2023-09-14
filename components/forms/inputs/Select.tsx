import useInput from '@/lib/hooks/useInput'
import CustomLabel from './CustomLabel'
import { type SharedInputProps } from '@/lib/types'
import InputError from '../InputError'
import getSelectOptions from '@/lib/shared/getSelectOptions'

type Props = React.PropsWithChildren<{
  onInput?: (event: SelectOnInputEvent) => void
  noDefault?: boolean
  options?: SelectOptionsConfig
  defaultValue?: string
} & Omit<SharedInputProps, 'value'>>

export default function Select({
  name, label, children, options: optionsData, register, config = {},
  defaultValue = '', noDefault = false, errors = {}, onInput,
}: Props) {
  const { registerProps, errorMessage } = useInput({
    register, errors, name, config,
  })
  const options = getSelectOptions(optionsData)

  return (
    <>
      {(label !== null && label !== undefined) && <CustomLabel id={name} label={label} />}
      <select
        id={name} name={name} onInput={onInput}
        defaultValue={defaultValue} {...registerProps}
        className="select select-md mb-3 w-full border-neutral-300 bg-base-100 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {!noDefault && <option value="" disabled>Seleccionar...</option>}
        {options?.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
        {children}
      </select>
      <InputError message={errorMessage} />
    </>
  )
}
