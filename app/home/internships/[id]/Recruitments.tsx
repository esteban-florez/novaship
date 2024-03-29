import EmptyContent from '@/components/EmptyContent'
import type { Company, Recruitment, Vacant } from '@prisma/client'
import RecruitmentItem from './RecruitmentItem'

type Props = React.PropsWithChildren<{
  stage: Stage
  recruitments: Array<Recruitment & {
    vacant: Vacant & {
      company: Company
    }
  }>
}>

export default function Recruitments({ stage, recruitments }: Props) {
  const isAccepted = stage !== 'ACCEPTED'

  return (
    <>
      <h3 className="font-bold tracking-tighter text-2xl">
        Postulaciones de la pasantía
      </h3>
      <p>Aquí aparecen todas las postulaciones de la pasantía, así como las solicitudes de empresas que desean reclutar al pasante.</p>
      {isAccepted || recruitments.length <= 0
        ? (
          <div className="pt-4">
            <EmptyContent title={isAccepted ? '¡No disponible aún!' : undefined}>
              {isAccepted ? 'El estudiante debe aceptar la solicitud de pasantía para poder postular a empresas...' : 'Aún no existen postulaciones o solicitudes.'}
            </EmptyContent>
          </div>
          )
        : (
          <div className="flex flex-col">
            {recruitments.map(recruitment => (
              <RecruitmentItem key={recruitment.id} recruitment={recruitment} />
            ))}
          </div>
          )}
    </>
  )
}
