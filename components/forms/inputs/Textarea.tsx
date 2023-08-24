import clsx from 'clsx'
import CustomLabel from './CustomLabel'
import { type SharedInputProps } from '@/lib/types'
import useInput from '@/lib/hooks/useInput'
import InputError from '../InputError'

type Props = React.PropsWithChildren<{
  placeholder: string
  height?: number
} & SharedInputProps>

export default function Textarea({
  name, placeholder, label, register, className = '',
  height = 3, value = '', errors = {}, config = {},
}: Props) {
  const { errorMessage, hasError, registerProps } = useInput({
    errors, register, name, config,
  })

  return (
    <>
      {label !== undefined && <CustomLabel id={name} label={label} />}
      <textarea
        id={name} name={name} {...registerProps}
        placeholder={placeholder} rows={height} defaultValue={value}
        className={clsx('textarea mb-3 w-full resize-none border-neutral-300 bg-base-200 focus:outline-none focus:ring focus:ring-primary', hasError && 'border-error focus:ring-error', className)}
      />
      <InputError message={errorMessage} />
    </>
  )
}
