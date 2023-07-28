import CustomLabel from './CustomLabel'
import clsx from 'clsx'
import { type HTMLInputTypeAttribute } from 'react'

interface Props {
  name: string
  type?: HTMLInputTypeAttribute
  placeholder: string
  label: string
  value?: string
  classes?: string
  register?: object
}

export default function Input({ name, placeholder, label, register = {}, type = 'text', value = '', classes = '' }: Props) {
  return (
    <>
      <CustomLabel id={name} label={label} />
      <input
        id={name} name={name} type={type}
        placeholder={placeholder} {...register}
        className={clsx('input input-md mb-3 w-full border-neutral-300 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary', classes)} defaultValue={value}
      />
    </>
  )
}
