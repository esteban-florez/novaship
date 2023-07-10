import FormSection from '@/components/forms/FormSection'
import InputSimple from '@/components/forms/inputs/Input'

interface Props {
  title: string
}

export default function TitleSection({ title }: Props) {
  return (
    <FormSection title="Título" description="Indique su título de graduación para facilitar las postulaciones a ofertas laborales o proyectos.">
      <InputSimple id="title" name="title" type="text" placeholder="Ingeniero en Sistemas" label="Título" value={title} />
    </FormSection>
  )
}
