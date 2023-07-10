import FormSection from '@/components/forms/FormSection'
import Textarea from '@/components/forms/inputs/Textarea'

interface Props {
  description: string
}

export default function AboutMeSection({ description }: Props) {
  return (
    <FormSection title="Biografía" description="Describase como un posible empleado para una empresa. Si usted no coloca una descripción se mostrará la sección Sobre mí de su perfil personal">
      <Textarea id="description" label="Biografía" name="description" placeholder="Licenciado en contabilidad, basta experiencia en uso de herramientas financieras..." height={10} value={description} />
    </FormSection>
  )
}
