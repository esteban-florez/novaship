import FormSection from '@/components/forms/FormSection'
import InputSimple from '@/components/forms/inputs/Input'

export default function TitleSection() {
  return (
    <FormSection title="Título" description="Indique su título de graduación para facilitar las postulaciones a ofertas laborales o proyectos.">
      <InputSimple id="title" name="title" type="text" placeholder="Ingeniero en Sistemas" label="Título" />
    </FormSection>
  )
}
