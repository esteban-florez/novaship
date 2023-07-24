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
}

export default function Input({ name, type = 'text', placeholder, label, value = '', classes = '' }: Props) {
  return (
    <>
      <CustomLabel id={name} label={label} />
      <input
        id={name} name={name} type={type} placeholder={placeholder}
        className={clsx('input input-md mb-3 w-full border-neutral-300 focus:ring focus:ring-primary', classes)} defaultValue={value}
      />
    </>
  )
}
