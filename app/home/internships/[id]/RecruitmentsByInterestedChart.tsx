import PieGraphic from '@/components/graphics/PieGraphic'
import StatisticsGraphSection from '@/components/home/StatisticsGraphSection'
import { type Interested, type UserType } from '@prisma/client'
import { type ChartData } from 'chart.js'

interface WithInterested {
  interested: Interested
}

type Props = React.PropsWithChildren<{
  recruitments: WithInterested[]
  userType: UserType
}>

export default async function RecruitmentsByInterestedChart({
  recruitments,
  userType,
}: Props) {
  const interestedUser = userType === 'INSTITUTE' ? 'PERSON' : userType

  function reducer(
    acc: [number, number],
    recruitment: WithInterested
  ): [number, number] {
    const [sent, received] = acc

    if (interestedUser === recruitment.interested) {
      return [sent + 1, received]
    }

    return [sent, received + 1]
  }

  const [sentCount, receivedCount] = recruitments.reduce(reducer, [0, 0])

  const data: ChartData<'pie'> = {
    labels: ['Enviadas', 'Recibidas'],
    datasets: [
      {
        data: [sentCount, receivedCount],
      },
    ],
  }

  return (
    <StatisticsGraphSection options={{ border: false, center: true }}>
      <PieGraphic
        title="Solicitudes"
        data={data}
      />
    </StatisticsGraphSection>
  )
}
