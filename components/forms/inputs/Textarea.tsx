import clsx from 'clsx'
import CustomLabel from './CustomLabel'
import { type SharedInputProps } from '@/lib/types'

type Props = React.PropsWithChildren<{
  placeholder: string
  height?: number
} & SharedInputProps>

// DRY 3 -> props de register, errors, mostrar el error, etc. Sería un poco ladilla cambiarlo, pero quizás un componente que envuelva estos, y reciba las props específicas de useForm y haga todo eso.
export default function Textarea({
  name, placeholder, label, register, className = '',
  height = 3, value = '', errors = {}, config = {},
}: Props) {
  config.required = config.required !== undefined ? config.required : true
  const errorMessage = errors[name]?.message as string | undefined
  const hasError = errorMessage !== undefined
  const registerProps = register !== undefined ? { ...register(name, config) } : {}

  return (
    <>
      {label !== undefined && <CustomLabel id={name} label={label} />}
      <textarea
        id={name} name={name} {...registerProps}
        placeholder={placeholder} rows={height} defaultValue={value}
        className={clsx('textarea w-full resize-none border-neutral-300 bg-base-200 focus:outline-none focus:ring focus:ring-primary', hasError && 'border-error focus:ring-error', className)}
      />
      {hasError && (
        <p className="-mt-3 text-sm font-semibold text-error">
          {errorMessage}
        </p>
      )}
    </>
  )
}
