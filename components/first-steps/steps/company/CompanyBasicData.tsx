import Input from '@/components/forms/inputs/Input'
import BasicDataTemplate from '../BasicDataTemplate'

export default function CompanyBasicData({ goBack, goNext }: StepProps) {
  return (
    <BasicDataTemplate
      goBack={goBack}
      goNext={goNext}
      nameInput={
        <Input label="Nombre de la empresa:" name="name" placeholder="Ej. Phasebuck S.A." />
      }
      documentInput={
        <Input label="RIF:" name="rif" placeholder="Ej. 1234567890" />
      }
    />
  )
}
