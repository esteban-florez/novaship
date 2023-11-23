import BarGraphic from '@/components/graphics/BarGraphic'
import StatisticsGraphSection from '@/components/home/StatisticsGraphSection'
import { months as translation } from '@/lib/translations'
import { type Progress } from '@prisma/client'
import { type ChartData } from 'chart.js'

type Props = React.PropsWithChildren<{
  progresses: Progress[] | undefined
}>

const getKey = (date: Date) => {
  const month = date.getMonth()
  const year = date.getFullYear()
  return `${translation[month]}-${year}`
}

export default async function HoursByMonthChart({ progresses }: Props) {
  if (progresses === undefined) return

  const completed = progresses.filter(
    (progress) => progress.status === 'ACCEPTED'
  )

  const now = new Date()

  const countByMonth: Record<string, number> = {}

  for (let i = 1; i <= 6; i++) {
    const key = getKey(now)
    countByMonth[key] = 0

    now.setMonth(now.getMonth() - 1)
  }

  completed.forEach((progress) => {
    const { endsAt, hours } = progress

    const key = getKey(endsAt)

    if (!Object.hasOwn(countByMonth, key)) return

    countByMonth[key] += hours
  })

  const months = Object.keys(countByMonth)
    .map((m) => m.slice(0, 3))
    .reverse()
  const hours = Object.values(countByMonth).reverse()

  const data: ChartData<'bar'> = {
    labels: months,
    datasets: [
      {
        label: 'Horas',
        data: hours,
      },
    ],
  }

  return (
    <StatisticsGraphSection options={{ height: 'h-60' }}>
      <BarGraphic
        title="Horas completadas por mes"
        data={data}
      />
    </StatisticsGraphSection>
  )
}
