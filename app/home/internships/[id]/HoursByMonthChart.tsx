import { months as translation } from '@/lib/translations'
import { type Progress } from '@prisma/client'

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

  const completed = progresses.filter(progress => progress.status === 'ACCEPTED')

  const now = new Date()

  const countByMonth: Record<string, number> = {}

  for (let i = 1; i <= 6; i++) {
    const key = getKey(now)
    countByMonth[key] = 0

    now.setMonth(now.getMonth() - 1)
  }

  completed.forEach(progress => {
    // TODO -> cambiar por endsAt
    const { endsAt, hours } = progress

    const key = getKey(endsAt)

    if (!Object.hasOwn(countByMonth, key)) return

    countByMonth[key] += hours
  })

  // Aqui tienes un objeto que tiene como keys cada uno de los últimos 6 meses, y como valor de dicha key la cantidad de horas completadas en ese mes.

  // Ej. ENE-2023: 14
  console.log({ countByMonth })

  return (
    <p>Gráfica de Horas Completadas por mes</p>
  )
}
