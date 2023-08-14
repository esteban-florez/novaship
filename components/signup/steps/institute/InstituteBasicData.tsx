import Input from '@/components/forms/inputs/Input'
import BasicDataTemplate from '../BasicDataTemplate'
import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'

export default function InstituteBasicData() {
  const { register, errors } = useContext(SignUpContext)

  return (
    <BasicDataTemplate
      nameInput={
        <Input label="Nombre de la institución:" name="name" register={register} errors={errors} placeholder="Ej. Colegio Luis Blanco" />
      }
      documentInput={
        <Input label="RIF:" name="rif" type="number" register={register} errors={errors} placeholder="Ej. 1234567890" />
      }
    />
  )
}
