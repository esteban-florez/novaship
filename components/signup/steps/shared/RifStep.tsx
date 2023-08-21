import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'
import ImageInput from '@/components/forms/inputs/ImageInput'

export default function RifStep() {
  const { register, errors, goBack, goNext, trigger } = useContext(SignUpContext)

  async function handleNext() {
    const valid = await trigger('certification')

    if (valid) {
      goNext()
    }
  }

  return (
    <div className="px-20">
      <h2 className="text-center text-xl font-bold md:text-3xl">
        ¡Valida tu <span className="text-primary">éxito</span>!
      </h2>
      <p className="text-center">
        Sube una imagen de tu RIF para verificar el registro de tu empresa. Asegúrate que la imagen sea clara y legible.
      </p>
      <div className="mx-auto w-full pt-4">
        <ImageInput name="certification" register={register} errors={errors} preview={false} />
        <div className="flex justify-between">
          <button onClick={goBack} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button onClick={handleNext} type="button" className="btn-primary btn mt-4">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}
