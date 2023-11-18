import { type VacantWithRelations } from '@/lib/types'
import Container from '../Container'
import BadgeList from '../BadgeList'

type Props = React.PropsWithChildren<{
  vacant: VacantWithRelations
}>

export default function SkillsGrades({ vacant }: Props) {
  const { skills, grades } = vacant

  return (
    <>
      <Container title="Carreras relacionadas">
        <BadgeList items={grades} />
      </Container>
      <div className="mt-4" />
      <Container title="Habilidades requeridas">
        <BadgeList items={skills} />
      </Container>
    </>
  )
}
