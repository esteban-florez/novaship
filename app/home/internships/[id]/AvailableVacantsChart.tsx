import { getVacants } from '@/lib/data-fetching/vacants'
import { type InternshipWithRelations } from '@/lib/types'
import { validVacants } from '@/lib/utils/tables'

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

  // Con estos números puedes hacer la gráfica
  console.log(availableVacants.length)
  console.log(totalVacants.length)

  return (
    <p>Gráfica de Cupos Disponibles</p>
  )
}
