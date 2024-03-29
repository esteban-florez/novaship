import clsx from 'clsx'
import CustomLabel from './CustomLabel'
import { type SharedInputProps } from '@/lib/types'
import useInput from '@/lib/hooks/useInput'
import InputError from '../InputError'

type Props = React.PropsWithChildren<
{
  onInput?: React.FormEventHandler<HTMLTextAreaElement>
  placeholder: string
  height?: number
  maxlength: number
  isOptional?: boolean
} & SharedInputProps
>

export default function Textarea({
  name,
  placeholder,
  label,
  register,
  className = '',
  maxlength,
  height = 3,
  value = '',
  errors = {},
  config = {},
  onInput,
}: Props) {
  const { errorMessage, hasError, registerProps } = useInput({
    errors,
    register,
    name,
    config,
  })

  return (
    <>
      {label !== undefined && (
        <CustomLabel
          id={name}
          label={label}
        />
      )}
      <textarea
        onInput={onInput}
        id={name}
        name={name}
        {...registerProps}
        placeholder={placeholder}
        rows={height}
        defaultValue={value}
        maxLength={maxlength}
        className={clsx(
          'textarea mb-3 w-full resize-none border-neutral-300 bg-base-100 transition-all focus:outline-none focus:ring-2 focus:ring-primary',
          hasError && 'border-error focus:ring-error',
          className
        )}
      />
      <InputError message={errorMessage} />
    </>
  )
}
