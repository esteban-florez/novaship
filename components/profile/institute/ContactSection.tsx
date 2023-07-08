import FormSection from '@/components/forms/FormSection'
import InputSimple from '@/components/forms/inputs/Input'

export default function ContactSection() {
  return (
    <FormSection title="Medios de contacto" description="Facilite a los usuarios que veran su perfil información de contacto para comunicarse con usted.">
      <InputSimple id="email" name="email" type="email" placeholder="correoinstitucional@gmail.com" label="Correo electrónico" />
      <InputSimple id="phone" name="phone" type="tel" placeholder="0412-0000000" label="Teléfono" />
      <InputSimple id="address" name="address" placeholder="Calle Félix Romeo cruce con Vertueno" label="Dirección" />
    </FormSection>
  )
}
