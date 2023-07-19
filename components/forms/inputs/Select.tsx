import CustomLabel from './CustomLabel'

type Props = React.PropsWithChildren<{
  name: string
  label: string
  value?: string
  multiple?: boolean
  noDefault?: boolean
}>

export default function Select({ name, label, value = '', multiple = false, noDefault = false, children }: Props) {
  return (
    <>
      <CustomLabel id={name} label={label} />
      <select id={name} name={name} className="select-bordered select select-md mb-3 w-full border focus:ring focus:ring-primary" defaultValue={value} multiple={multiple}>
        {!noDefault && <option value="" disabled>Seleccionar...</option>}
        {children}
      </select>
    </>
  )
}
