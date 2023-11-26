import { type FieldErrors, type RegisterOptions, type UseFormRegisterReturn } from 'react-hook-form'
import Input from '../forms/inputs/Input'

type Props = React.PropsWithChildren<{
  register: (name: string, config?: RegisterOptions) => UseFormRegisterReturn
  errors: FieldErrors
  shortLabel?: boolean
  minDate?: Date | null
}>

export default function DatesInputs({ register, errors, shortLabel = false, minDate }: Props) {
  const date = minDate ?? new Date()
  const min = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  const labelEnd = !shortLabel ? '' : ' de pasantía'

  return (
    <>
      <Input type="date" name="startsAt" min={min} register={register} errors={errors} label={'Fecha de inicio' + labelEnd} placeholder="Fecha de inicio" />
      <Input type="date" name="endsAt" min={min} register={register} errors={errors} label={'Fecha de fin' + labelEnd} placeholder="Fecha de fin" />
    </>
  )
}
