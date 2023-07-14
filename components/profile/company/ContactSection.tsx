import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'

export default function ContactSection() {
  return (
    <FormSection title="Medios de contacto" description="Añada como pueden comunicarse con su empresa.">
      <Input id="email" name="email" type="email" placeholder="correoempresarial@gmail.com" label="Correo electrónico" />
      <Input id="phone" name="phone" type="tel" placeholder="0412-0000000" label="Teléfono" />
      <Input id="address" name="address" placeholder="Calle Félix Romeo cruce con Vertueno" label="Dirección" />
    </FormSection>
  )
}