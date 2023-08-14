import Input from '@/components/forms/inputs/Input'
import BasicDataTemplate from '../BasicDataTemplate'
import { SignUpContext } from '../../SignUpContext'
import { useContext } from 'react'

export default function CompanyBasicData() {
  const { errors, register } = useContext(SignUpContext)

  return (
    <BasicDataTemplate
      nameInput={
        <Input label="Nombre de la empresa:" name="name" register={register} errors={errors} placeholder="Ej. Phasebuck S.A." />
      }
      documentInput={
        <Input label="RIF:" name="rif" type="number" register={register} errors={errors} placeholder="Ej. 1234567890" />
      }
    />
  )
}
