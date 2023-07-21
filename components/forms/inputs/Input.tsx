import CustomLabel from './CustomLabel'
import clsx from 'clsx'
import { type HTMLInputTypeAttribute } from 'react'

// RANT -> a veces los tipos ya existen
interface Props {
  name: string
  // type?: 'text' | 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
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
