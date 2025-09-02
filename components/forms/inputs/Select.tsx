import useInput from '@/lib/hooks/useInput'
import CustomLabel from './CustomLabel'
import { type SharedInputProps } from '@/lib/types'
import InputError from '../InputError'
import getSelectOptions from '@/lib/shared/getSelectOptions'
import clsx from 'clsx'

type Props = React.PropsWithChildren<
{
  onInput?: (event: SelectOnInputEvent) => void
  noDefault?: boolean
  options?: SelectOptionsConfig
  value?: string
  defaultValue?: string
  isOptional?: boolean
} & Omit<SharedInputProps, 'value'>
>

export default function Select({
  name,
  label,
  children,
  options: optionsData,
  register,
  config = {},
  defaultValue = '',
  className = '',
  labelClassName = '',
  noDefault = false,
  errors = {},
  onInput,
  value,
}: Props) {
  const { registerProps, errorMessage } = useInput({
    register,
    errors,
    name,
    config,
  })
  const options = getSelectOptions(optionsData)

  return (
    <>
      {label !== null && label !== undefined && (
        <CustomLabel
          id={name}
          label={label}
          className={labelClassName}
        />
      )}
      <select
        id={name}
        name={name}
        onInput={onInput}
        value={value}
        defaultValue={value !== undefined ? defaultValue : undefined}
        {...registerProps}
        className={clsx(
          'select select-md w-full border-neutral-300 bg-base-100 transition-all focus:outline-none focus:ring-2 focus:ring-primary mb-3',
          className
        )}
      >
        {!noDefault && (
          <option
            value=""
            disabled
          >
            Seleccionar...
          </option>
        )}
        {children}
        {options?.map(({ value, label }) => (
          <option
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
      <InputError message={errorMessage} />
    </>
  )
}
