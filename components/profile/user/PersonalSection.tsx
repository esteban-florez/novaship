import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'

interface Props {
  name: string
  surname: string
}

export default function PersonalSection({ name, surname }: Props) {
  return (
    <FormSection title="Datos personales" description="Esta es la información básica que aparecerá en su perfil y también la que será mostrada en ofertas laborales, pasantías o proyectos.">
      <Input name="name" placeholder="Ej. José" label="Nombre" value={name} />
      <Input name="surname" placeholder="Ej. Mendoza" label="Apellido" value={surname} />
    </FormSection>
  )
}
