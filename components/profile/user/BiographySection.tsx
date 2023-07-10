import FormSection from '@/components/forms/FormSection'
import Textarea from '@/components/forms/inputs/Textarea'

interface Props {
  bio: string | null
}

export default function BiographySection({ bio }: Props) {
  const textareaValue = bio ?? ''
  return (
    <FormSection title="¿Que ofrezco?" description="Describa quien es, su experiencia laboral o que puede brindar a las empresas o proyectos.">
      <Textarea id="bio" name="bio" height={10} label="Sobre mí" placeholder="Cuento con años de experiencia..." value={textareaValue} />
    </FormSection>
  )
}
