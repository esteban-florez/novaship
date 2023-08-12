import Input from '@/components/forms/inputs/Input'
import BasicDataTemplate from '../BasicDataTemplate'
import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'

export default function PersonBasicData() {
  const { register, errors } = useContext(SignUpContext)

  return (
    <BasicDataTemplate
      nameInput={
        <Input label="Nombre y apellido:" name="name" register={register} errors={errors} placeholder="Ej. Myriam Yaqueno" />
      }
      documentInput={
        <Input label="Cédula de identidad:" name="ci" register={register} errors={errors} placeholder="Ej. 12345678" />
      }
    />
  )
}
