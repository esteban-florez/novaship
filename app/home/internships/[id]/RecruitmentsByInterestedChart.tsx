import { type Interested, type UserType } from '@prisma/client'

interface WithInterested {
  interested: Interested
}

type Props = React.PropsWithChildren<{
  recruitments: WithInterested[]
  userType: UserType
}>

export default async function RecruitmentsByInterestedChart({
  recruitments, userType,
}: Props) {
  const interestedUser = userType === 'INSTITUTE' ? 'PERSON' : userType

  function reducer(acc: [number, number], recruitment: WithInterested): [number, number] {
    const [sent, received] = acc

    if (interestedUser === recruitment.interested) {
      return [sent + 1, received]
    }

    return [sent, received + 1]
  }

  const [sentCount, receivedCount] = recruitments.reduce(reducer, [0, 0])

  // Con estos números haces la torta
  console.log('Sent recruitments: ', sentCount)
  console.log('Received recruitments: ', receivedCount)

  return (
    <p>Gráfica de Solicitudes Enviadas vs Recibidas</p>
  )
}
