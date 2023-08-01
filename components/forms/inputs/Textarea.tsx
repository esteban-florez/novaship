import CustomLabel from './CustomLabel'

type Props = React.PropsWithChildren<{
  name: string
  placeholder: string
  label: string
  height?: number
  value?: string
  classes?: string
  register?: object
  errors?: Record<string, {
    message?: string
  }>
}>
// DRY 3 -> props de register, errors, mostrar el error, etc. Aunque en realidad puede ser complicado evitar esto.
export default function Textarea({ name, placeholder, label, register = {}, height = 3, value = '', errors = {} }: Props) {
  const hasError = errors[name] !== undefined

  return (
    <>
      <CustomLabel id={name} label={label} />
      <textarea
        id={name} name={name} {...register}
        placeholder={placeholder} rows={height} defaultValue={value}
        className="textarea w-full resize-none border-neutral-300 bg-base-200 focus:outline-none focus:ring focus:ring-primary"
      />
      {(hasError) && (
        <p className="-mt-2 text-sm font-semibold text-red-500">{errors[name].message}</p>
      )}
    </>
  )
}
