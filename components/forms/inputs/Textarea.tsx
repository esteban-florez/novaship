import clsx from 'clsx'
import CustomLabel from './CustomLabel'
import { type SharedInputProps } from '@/lib/types'

type Props = React.PropsWithChildren<{
  placeholder: string
  height?: number
} & SharedInputProps>

// DRY 3 -> props de register, errors, mostrar el error, etc. Sería un poco ladilla cambiarlo, pero quizás un componente que envuelva estos, y reciba las props específicas de useForm y haga todo eso.
export default function Textarea({
  name, placeholder, label, register, classes = '',
  height = 3, value = '', errors = {}, config = {},
}: Props) {
  const hasError = errors[name] !== undefined
  const registerProps = register !== undefined ? { ...register(name, config) } : {}

  return (
    <>
      <CustomLabel id={name} label={label} />
      <textarea
        id={name} name={name} {...registerProps}
        placeholder={placeholder} rows={height} defaultValue={value}
        className={clsx('textarea w-full resize-none border-neutral-300 bg-base-200 focus:outline-none focus:ring focus:ring-primary', hasError && 'border-error focus:ring-error', classes)}
      />
      {hasError && (
        <p className="-mt-2 font-semibold text-error">
          {errors[name].message}
        </p>
      )}
    </>
  )
}
