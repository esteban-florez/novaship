import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import { type Person } from '@prisma/client'

type Props = Pick<Person, 'email' | 'phone'>

export default function ContactSection({ email, phone }: Props) {
  return (
    <FormSection title="Medios de contacto" description="Facilite a los usuarios que veran su perfil información de contacto para comunicarse con usted.">
      <Input name="email" type="email" placeholder="micorreo2@gmail.com" label="Correo electrónico" value={email} />
      <Input name="phone" type="tel" placeholder="0412-0000000" label="Teléfono" value={phone ?? ''} />
    </FormSection>
  )
}
