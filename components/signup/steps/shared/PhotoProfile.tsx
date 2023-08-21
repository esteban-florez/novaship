import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'
import ImageInput from '@/components/forms/inputs/ImageInput'

export default function PhotoProfile() {
  const { register, errors, goBack } = useContext(SignUpContext)

  return (
    <>
      <h2 className="text-center text-xl font-bold md:text-3xl">
        ¡Ponle <span className="text-primary">cara</span> a tu <span className="text-secondary">perfil</span>!
      </h2>
      <p>
        La primera impresión cuenta, sube una foto que transmita confianza y profesionalismo.
      </p>
      <div className="mx-auto w-full pt-4">
        <ImageInput
          name="image"
          label="Subir imagen de perfil"
          register={register}
          errors={errors}
        />
        <div className="flex justify-between">
          <button onClick={goBack} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button type="submit" className="btn-primary btn mt-4">
            Enviar
          </button>
        </div>
      </div>
    </>
  )
}
