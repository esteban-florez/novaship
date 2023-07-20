import FormSection from '@/components/forms/FormSection'
import Textarea from '@/components/forms/inputs/Textarea'

type Props = React.PropsWithChildren<{ bio: string | null }>

export default function BiographySection({ bio = null }: Props) {
  return (
    <FormSection title="¿Que ofrezco?" description="Describa quien es, su experiencia laboral o que puede brindar a las empresas o proyectos.">
      <Textarea name="bio" height={10} label="Sobre mí" placeholder="Cuento con años de experiencia..." value={bio ?? ''} />
    </FormSection>
  )
}
