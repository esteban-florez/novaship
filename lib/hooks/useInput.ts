import { type UseInputProps } from '../types'

type RequiredProps = Required<Omit<UseInputProps, 'register'>>

type Props = RequiredProps & Pick<UseInputProps, 'register'>

export default function useInput({ register, errors, name, config }: Props) {
  config.required = config.required !== undefined ? config.required : true
  const errorMessage = errors[name]?.message as string | undefined
  const hasError = errorMessage !== undefined
  const registerProps = register !== undefined ? { ...register(name, config) } : {}

  return {
    registerProps,
    errorMessage,
    hasError,
  }
}
