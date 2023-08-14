import Input from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'
import { useContext } from 'react'
import { SignUpContext } from '../SignUpContext'

type Props = React.PropsWithChildren<{
  nameInput: React.JSX.Element
  documentInput: React.JSX.Element
}>

export default function BasicDataTemplate({ nameInput, documentInput }: Props) {
  const { goNext, goBack, register, errors } = useContext(SignUpContext)
  return (
    <>
      <h2 className="text-center text-xl font-bold md:text-3xl">
        ¡Estamos <span className="text-primary">interesados</span> en saber más sobre <span className="text-secondary">ti</span>!
      </h2>
      <p className="text-base">
        Ingresa los datos básicos para personalizar tu experiencia en la aplicación.
      </p>
      <section className="mx-auto w-full pt-4">
        <div className="grid grid-cols-2 gap-x-4">
          <div className="col-span-2 md:col-span-1">
            {nameInput}
          </div>
          <div className="col-span-2 md:col-span-1">
            {documentInput}
          </div>
          <div className="col-span-2 md:col-span-1">
            <Input label="Correo electrónico:" name="email" register={register} errors={errors} placeholder="Ej. correo@ejemplo.com" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Input label="Ingresa tu contraseña:" name="password" register={register} errors={errors} type="password" placeholder="Ingresa tu contraseña..." />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Input label="Teléfono:" type="number" name="phone" register={register} errors={errors} placeholder="Ej. 04121234567" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Input type="date" label="Fecha de nacimiento:" name="birth" register={register} errors={errors} placeholder="Fecha de nacimiento" />
          </div>
          <div className="col-span-2">
            <Textarea height={2} label="Descripción:" name="bio" register={register} errors={errors} placeholder="Ingresa la descripción..." />
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={goBack} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button onClick={goNext} type="button" className="btn-primary btn mt-4">
            Siguiente
          </button>
        </div>
      </section>
    </>
  )
}
