import { DEFAULT_TEXTAREA_CLASSES } from '@/utils/defaultClasses'
import CustomLabel from './CustomLabel'

interface Props {
  id?: string | null
  name: string
  placeholder: string
  label: string
  height: number
  value?: string
  classes?: string
}

export default function Textarea({ id = null, name, placeholder, label, height, value = '', classes = DEFAULT_TEXTAREA_CLASSES }: Props) {
  id ??= name
  return (
    <>
      <CustomLabel id={id} label={label} />
      <textarea id={id} name={name} className={classes} placeholder={placeholder} rows={height} defaultValue={value} />
    </>
  )
}
