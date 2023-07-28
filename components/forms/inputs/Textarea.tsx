import CustomLabel from './CustomLabel'

type Props = React.PropsWithChildren<{
  name: string
  placeholder: string
  label: string
  height?: number
  value?: string
  classes?: string
}>

export default function Textarea({ name, placeholder, label, height = 3, value = '' }: Props) {
  return (
    <>
      <CustomLabel id={name} label={label} />
      <textarea
        id={name} name={name}
        placeholder={placeholder} rows={height} defaultValue={value}
        className="textarea w-full resize-none border-neutral-300 bg-base-200 focus:outline-none focus:ring focus:ring-primary"
      />
    </>
  )
}
