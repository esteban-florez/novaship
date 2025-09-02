import PieGraphic from '@/components/graphics/PieGraphic'
import StatisticsGraphSection from '@/components/home/StatisticsGraphSection'
import { getVacants } from '@/lib/data-fetching/vacants'
import { type InternshipWithRelations } from '@/lib/types'
import { validVacants } from '@/lib/utils/tables'
import { type ChartData } from 'chart.js'

type Props = React.PropsWithChildren<{
  internship: InternshipWithRelations
}>

export default async function AvailableVacantsChart({ internship }: Props) {
  const relatedVacants = await getVacants({
    where: {
      grades: {
        some: {
          id: internship.gradeId,
        },
      },
    },
  })

  const availableVacants = validVacants(relatedVacants)
  const totalVacants = validVacants(await getVacants({}))

  const data: ChartData<'pie'> = {
    labels: ['Disponibles', 'No disponibles'],
    datasets: [
      {
        data: [availableVacants.length, totalVacants.length],
      },
    ],
  }

  return (
    <StatisticsGraphSection options={{ border: false, center: true }}>
      <PieGraphic
        title="Cupos"
        data={data}
      />
    </StatisticsGraphSection>
  )
}
