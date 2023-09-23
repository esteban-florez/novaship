import { type SharedInputProps } from '@/lib/types'
import CustomLabel from './CustomLabel'
import clsx from 'clsx'
import { type HTMLInputTypeAttribute } from 'react'
import useInput from '@/lib/hooks/useInput'
import InputError from '../InputError'

type Props = React.PropsWithChildren<{
  onInput?: (event: OnInputEvent) => void
  placeholder: string
  innerIcon?: React.ReactElement
  type?: HTMLInputTypeAttribute
  step?: string
} & SharedInputProps>

export default function Input({
  name, placeholder, label, register, step, config = {}, errors = {},
  type = 'text', value = '', className = '', labelClassName = '', children, onInput,
}: Props) {
  const { errorMessage, hasError, registerProps } = useInput({
    register, config, errors, name,
  })

  return (
    <>
      {label !== undefined && <CustomLabel id={name} label={label} className={labelClassName} />}
      <input
        onInput={onInput} id={name} name={name} type={type} step={step}
        placeholder={placeholder} {...registerProps}
        className={clsx('input input-md mb-3 w-full border-neutral-300 bg-base-100 transition-all focus:outline-none focus:ring-2 focus:ring-primary', hasError && 'border-error focus:ring-error', className)} defaultValue={value}
      />
      {children}
      <InputError message={errorMessage} />
    </>
  )
}
