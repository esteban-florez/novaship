import { type RecruitmentWithRelations } from '@/lib/types'
import RecruitmentRow from './RecruitmentRow'
import EmptyContent from '@/components/EmptyContent'
import { auth } from '@/lib/auth/pages'

type Props = React.PropsWithChildren<{
  recruitments: RecruitmentWithRelations[]
}>

export default async function RecruitmentsTable({ recruitments }: Props) {
  const { type } = await auth.user()

  return (
    <section className="p-4 w-full overflow-x-auto">
      <table className="table bg-white text-base rounded-lg shadow-md">
        <thead className="text-base bg-neutral text-white rounded-lg">
          <tr className="rounded-lg">
            {type === 'PERSON'
              ? (
                <th>Empresa</th>
                )
              : (
                <th>Pasante</th>
                )}
            <th>Carrera</th>
            <th>Cupo</th>
            <th>Estatus</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recruitments.length > 0
            ? recruitments.map(recruitment => (
              <RecruitmentRow
                key={recruitment.id}
                recruitment={recruitment}
              />
            ))
            : (
              <tr>
                <td colSpan={6}>
                  <EmptyContent />
                </td>
              </tr>
              )}
        </tbody>
      </table>
    </section>
  )
}
