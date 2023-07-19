import { DEFAULT_INPUT_CLASSES } from '@/lib/classes'
import CustomLabel from './CustomLabel'
// import { HTMLInputTypeAttribute } from 'react'

// RANT -> a veces los tipos ya existen
interface Props {
  id?: string | null
  name: string
  type?: 'text' | 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
  // type?: HTMLInputTypeAttribute
  placeholder: string
  label: string
  value?: string
  classes?: string
}

export default function Input({ id = null, name, type = 'text', placeholder, label, value = '', classes = DEFAULT_INPUT_CLASSES }: Props) {
  id ??= name
  return (
    <>
      <CustomLabel id={id} label={label} />
      <input id={id} name={name} type={type} placeholder={placeholder} className={classes} defaultValue={value} />
    </>
  )
}
