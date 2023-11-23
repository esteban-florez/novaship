import { type FieldErrors, type RegisterOptions, type UseFormRegisterReturn } from 'react-hook-form'
import Input from '../forms/inputs/Input'

type Props = React.PropsWithChildren<{
  register: (name: string, config?: RegisterOptions) => UseFormRegisterReturn
  errors: FieldErrors
}>

export default function DatesInputs({ register, errors }: Props) {
  const now = new Date()
  const nowString = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`

  return (
    <>
      <Input type="date" name="startsAt" min={nowString} register={register} errors={errors} label="Fecha de inicio de pasantía" placeholder="Fecha de inicio" />
      <Input type="date" name="endsAt" min={nowString} register={register} errors={errors} label="Fecha de fin de pasantía" placeholder="Fecha de fin" />
    </>
  )
}
