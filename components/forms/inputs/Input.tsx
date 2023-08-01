import CustomLabel from './CustomLabel'
import clsx from 'clsx'
import { type HTMLInputTypeAttribute } from 'react'

interface Props {
  name: string
  placeholder: string
  label: string
  type?: HTMLInputTypeAttribute
  value?: string
  classes?: string
  errors?: Record<string, {
    message?: string
  }>
  register?: object
}

// DRY 3
export default function Input({ name, placeholder, label, errors = {}, register = {}, type = 'text', value = '', classes = '' }: Props) {
  const hasError = errors[name] !== undefined
  return (
    <>
      <CustomLabel id={name} label={label} />
      <input
        id={name} name={name} type={type}
        placeholder={placeholder} {...register}
        className={clsx('input input-md mb-3 w-full border-neutral-300 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary', hasError && 'border-error focus:ring-error', classes)} defaultValue={value}
      />
      {(hasError) && (
        <p className="-mt-2 text-sm font-semibold text-red-500">{errors[name].message}</p>
      )}
    </>
  )
}
