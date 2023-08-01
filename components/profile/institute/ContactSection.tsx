import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import { type Institute } from '@prisma/client'

type InstitutePick = Pick<Institute, 'email' | 'phone'>
type Props = React.PropsWithChildren<InstitutePick>

export default function ContactSection({ email, phone }: Props) {
  return (
    <FormSection title="Medios de contacto" description="Facilite a los usuarios que veran su perfil información de contacto para comunicarse con usted.">
      <Input name="email" type="email" placeholder="correoinstitucional@gmail.com" label="Correo electrónico" value={email} />
      <Input name="phone" type="tel" placeholder="0412-0000000" label="Teléfono" value={phone} />
      {/* TODO -> add location */}
    </FormSection>
  )
}
