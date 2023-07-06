import FormSection from '@/components/forms/FormSection'
import InputSimple from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'

export default function PersonalSection() {
  return (
    <FormSection title="Datos personales" description="Añada el nombre de la institución, recuerde colocarlo como fue registrado legalmente.">
      <InputSimple id="name" name="name" type="text" label="Nombre" placeholder="UPTA Federico Brito Figueroa" />
      <Textarea id="description" name="description" label="Descripción" placeholder="Describa la insitución ¿Quienes son? ¿Que ofrecen?." height={10} />
    </FormSection>
  )
}
