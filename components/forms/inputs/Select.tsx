import { DEFAULT_SELECT_CLASSES } from '@/utils/defaultClasses'
import CustomLabel from './CustomLabel'

type Props = React.PropsWithChildren<{
  id?: string | null
  name: string
  label: string
  value?: string
  multiple?: boolean
  noDefault?: boolean
}>

export default function Select({ id = null, name, label, value = '', multiple = false, noDefault = false, children }: Props) {
  id ??= name
  return (
    <>
      <CustomLabel id={id} label={label} />
      <select id={id} name={name} className={DEFAULT_SELECT_CLASSES} defaultValue={value} multiple={multiple}>
        {!noDefault && <option value="" disabled>Seleccionar...</option>}
        {children}
      </select>
    </>
  )
}
