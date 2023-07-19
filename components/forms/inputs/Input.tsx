import { DEFAULT_INPUT_CLASSES } from '@/lib/classes'
import CustomLabel from './CustomLabel'
import clsx from 'clsx'
// import { HTMLInputTypeAttribute } from 'react'

// RANT -> a veces los tipos ya existen
interface Props {
  name: string
  type?: 'text' | 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
  // type?: HTMLInputTypeAttribute
  placeholder: string
  label: string
  value?: string
  classes?: string
}

export default function Input({ name, type = 'text', placeholder, label, value = '', classes = '' }: Props) {
  return (
    <>
      <CustomLabel id={name} label={label} />
      <input id={name} name={name} type={type} placeholder={placeholder} className={clsx(DEFAULT_INPUT_CLASSES, classes)} defaultValue={value} />
    </>
  )
}
