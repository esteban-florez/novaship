import { DEFAULT_INPUT_CLASSES } from '@/utils/defaultClasses'
import CustomLabel from './CustomLabel'

interface Props {
  id: string
  name: string
  type?: 'text' | 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
  placeholder: string
  label: string
  value?: string
  classes?: string
}

export default function InputSimple({ id, name, type = 'text', placeholder, label, value = '', classes = DEFAULT_INPUT_CLASSES }: Props) {
  return (
    <>
      <CustomLabel id={id} label={label} />
      <input id={id} name={name} type={type} placeholder={placeholder} className={classes} defaultValue={value} />
    </>
  )
}
