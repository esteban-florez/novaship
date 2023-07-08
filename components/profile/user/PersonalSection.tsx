import FormSection from '@/components/forms/FormSection'
import InputSimple from '@/components/forms/inputs/Input'

interface Props {
  name: string
  surname: string
}

export default function PersonalSection({ name = '', surname = '' }: Props) {
  return (
    <FormSection title="Datos personales" description="Esta es la información básica que aparecerá en su perfil y también la que será mostrada en ofertas laborales, pasantías o proyectos.">
      <InputSimple id="name" name="name" placeholder="Ej. José" label="Nombre" value={name} />
      <InputSimple id="surname" name="surname" placeholder="Ej. Mendoza" label="Apellido" value={surname} />
    </FormSection>
  )
}
