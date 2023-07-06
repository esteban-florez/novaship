import FormSection from '@/components/forms/FormSection'
import InputSimple from '@/components/forms/inputs/Input'

interface Props {
  email: string
  phone: string | null
  address: string | null
}

export default function ContactSection({ email, phone, address }: Props) {
  const phoneValue = phone ?? ''
  const addressValue = address ?? ''

  return (
    <FormSection title="Medios de contacto" description="Facilite a los usuarios que veran su perfil información de contacto para comunicarse con usted.">
      <InputSimple id="email" name="email" type="email" placeholder="micorreo2@gmail.com" label="Correo electrónico" value={email} />
      <InputSimple id="phone" name="phone" type="tel" placeholder="0412-0000000" label="Teléfono" value={phoneValue} />
      <InputSimple id="address" name="address" placeholder="Calle Félix Romeo cruce con Vertueno" label="Dirección" value={addressValue} />
    </FormSection>
  )
}
