import FormSection from '@/components/forms/FormSection'
import InputSimple from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'
import { type Institute } from '@prisma/client'

type Props = Pick<Institute, 'name' | 'description'>

export default function PersonalSection({ name, description }: Props) {
  return (
    <FormSection title="Datos personales" description="Añada el nombre de la institución, recuerde colocarlo como fue registrado legalmente.">
      <InputSimple id="name" name="name" type="text" label="Nombre" placeholder="UPTA Federico Brito Figueroa" value={name} />
      <Textarea id="description" name="description" label="Descripción" placeholder="Describa la insitución ¿Quienes son? ¿Que ofrecen?." height={10} value={description} />
    </FormSection>
  )
}
