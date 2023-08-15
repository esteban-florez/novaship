import FormSection from '@/components/forms/FormSection'
import Textarea from '@/components/forms/inputs/Textarea'
import { type Person } from '@prisma/client'

type Props = React.PropsWithChildren<Pick<Person, 'description'>>

export default function BiographySection({ description }: Props) {
  return (
    <FormSection title="¿Que ofrezco?" description="Describa quien es, su experiencia laboral o que puede brindar a las empresas o proyectos.">
      <Textarea name="description" height={10} label="Sobre mí" placeholder="Cuento con años de experiencia..." value={description ?? ''} />
    </FormSection>
  )
}
