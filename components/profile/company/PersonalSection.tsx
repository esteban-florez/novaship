import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'

export default function PersonalSection() {
  return (
    <FormSection title="Datos personales" description="Añada el nombre de su empresa, recuerde colocarlo como fue registrado legalmente.">
      <Input name="name" type="text" label="Nombre" placeholder="Distribuidora y comercializadora Santander" />
      <Textarea name="description" label="Descripción" placeholder="Describa la empresa ¿Quienes son? ¿Qué hacen? ¿Que ofrecen?." height={10} />
    </FormSection>
  )
}
