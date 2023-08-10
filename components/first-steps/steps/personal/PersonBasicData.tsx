import Input from '@/components/forms/inputs/Input'
import BasicDataTemplate from '../BasicDataTemplate'

export default function PersonBasicData({ goBack, goNext }: StepProps) {
  return (
    <BasicDataTemplate
      goBack={goBack}
      goNext={goNext}
      nameInput={
        <Input label="Nombre y apellido:" name="name" placeholder="Ej. Myriam Yaqueno" />
      }
      documentInput={
        <Input label="Cédula de identidad:" name="ci" placeholder="Ej. 12345678" />
      }
    />
  )
}
