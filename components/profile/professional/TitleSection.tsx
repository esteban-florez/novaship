import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'

type Props = React.PropsWithChildren<{ title: string }>

export default function TitleSection({ title }: Props) {
  return (
    <FormSection title="Título" description="Indique su título de graduación para facilitar las postulaciones a ofertas laborales o proyectos.">
      <Input name="title" type="text" placeholder="Ingeniero en Sistemas" label="Título" value={title} />
    </FormSection>
  )
}
