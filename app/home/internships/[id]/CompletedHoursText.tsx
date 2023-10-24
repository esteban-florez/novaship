import { type UserType } from '@prisma/client'

type Props = React.PropsWithChildren<{
  userType: UserType
}>

const text = {
  ADMIN: '',
  COMPANY: 'Puedes actualizarlas a medida que el estudiante vaya completándolas.',
  INSTITUTE: 'La empresa de la pasantía irá actualizando las horas completadas.',
  PERSON: 'La empresa de la pasantía irá actualizando las horas completadas.',
} as const

export default function CompletedHoursText({ userType }: Props) {
  return (
    <p>{text[userType]}</p>
  )
}
