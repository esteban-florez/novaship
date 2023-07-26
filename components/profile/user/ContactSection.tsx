import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import { type AuthUser } from '@prisma/client'

type Props = React.PropsWithChildren<Pick<AuthUser, 'email' | 'phone' | 'address'>>

export default function ContactSection({ email, phone, address }: Props) {
  return (
    <FormSection title="Medios de contacto" description="Facilite a los usuarios que veran su perfil información de contacto para comunicarse con usted.">
      <Input name="email" type="email" placeholder="micorreo2@gmail.com" label="Correo electrónico" value={email} />
      <Input name="phone" type="tel" placeholder="0412-0000000" label="Teléfono" value={phone ?? ''} />
      <Input name="address" placeholder="Calle Félix Romeo cruce con Vertueno" label="Dirección" value={address ?? ''} />
    </FormSection>
  )
}
