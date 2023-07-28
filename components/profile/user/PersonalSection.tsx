import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import { type Person } from '@prisma/client'

type Props = React.PropsWithChildren<Pick<Person, 'name'>>

export default function PersonalSection({ name }: Props) {
  return (
    <FormSection title="Datos personales" description="Esta es la información básica que aparecerá en su perfil y también la que será mostrada en ofertas laborales, pasantías o proyectos.">
      <Input name="name" placeholder="Ej. José" label="Nombre" value={name} />
    </FormSection>
  )
}
