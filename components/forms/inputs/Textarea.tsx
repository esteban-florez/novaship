import { DEFAULT_TEXTAREA_CLASSES } from '@/utils/defaultClasses'
import CustomLabel from './CustomLabel'

interface Props {
  id: string
  name: string
  placeholder: string
  label: string
  height: number
  value?: string
  classes?: string
}

export default function Textarea({ id, name, placeholder, label, height, value = '', classes = DEFAULT_TEXTAREA_CLASSES }: Props) {
  return (
    <>
      <CustomLabel id={id} label={label} />
      <textarea id={id} name={name} className={classes} placeholder={placeholder} rows={height} defaultValue={value} />
    </>
  )
}
