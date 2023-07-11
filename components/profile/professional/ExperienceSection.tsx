import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'

export default function ExperienceSection() {
  return (
    <FormSection title="Experiencias" description="Mencione sus experiencias laborales.">
      {/* TODO -> form dinámico para añadir multiples experiencias */}
      <Input name="" type="text" placeholder="Ingeniero en Sistemas" label="Experiencias" />
    </FormSection>
  )
}
