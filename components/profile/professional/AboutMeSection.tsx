import FormSection from '@/components/forms/FormSection'
import Textarea from '@/components/forms/inputs/Textarea'

export default function AboutMeSection() {
  return (
    <FormSection title="Biografía" description="Describase como un posible empleado para una empresa.">
      <Textarea id="description" label="Biografía" name="description" placeholder="Licenciado en contabilidad, basta experiencia en uso de herramientas financieras..." height={10} />
    </FormSection>
  )
}
