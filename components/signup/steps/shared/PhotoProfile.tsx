import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'
import ImageInput from '@/components/forms/inputs/ImageInput'

type Props = React.PropsWithChildren<{
  isInstitute?: boolean
}>

export default function PhotoProfile({ isInstitute = false }: Props) {
  const { register, errors, goBack, goNext, trigger } = useContext(SignUpContext)

  async function handleNext() {
    const valid = await trigger('image')

    if (valid) {
      goNext()
    }
  }

  return (
    <>
      <h2 className="text-center text-xl font-bold md:text-3xl">
        ¡Ponle <span className="text-primary">cara</span> a tu <span className="text-secondary">perfil</span>!
      </h2>
      <p className="text-base">
        La primera impresión cuenta, sube una foto que transmita confianza y profesionalismo.
      </p>
      <div className="mx-auto w-full pt-4">
        <ImageInput rounded name="image" label="Subir imagen de perfil" register={register} errors={errors} config={{ setValueAs: (value: FileList) => value.length === 0 ? undefined : value.item(0) }} />
        <div className="flex justify-between">
          <button onClick={goBack} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button
            onClick={isInstitute ? undefined : handleNext}
            type={isInstitute ? 'submit' : 'button'}
            className="btn-primary btn mt-4"
          >
            {isInstitute ? 'Enviar' : 'Siguiente'}
          </button>
        </div>
      </div>
    </>
  )
}
