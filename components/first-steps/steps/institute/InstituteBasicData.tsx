import Input from '@/components/forms/inputs/Input'
import BasicDataTemplate from '../BasicDataTemplate'

export default function InstituteBasicData({ goBack, goNext }: StepProps) {
  return (
    <BasicDataTemplate
      goBack={goBack}
      goNext={goNext}
      nameInput={
        <Input label="Nombre de la institución:" name="name" placeholder="Ej. Colegio Luis Blanco" />
      }
      documentInput={
        <Input label="RIF:" name="rif" placeholder="Ej. 1234567890" />
      }
    />
  )
}
