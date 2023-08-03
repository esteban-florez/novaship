type Props = React.PropsWithChildren<{
  setStep: (step: string) => void
}>

export default function PhotoProfile({ setStep }: Props) {
  return (
    <>
      <h2 className="text-center text-2xl font-bold md:text-4xl">
        ¡Ponle cara a tu perfil!
      </h2>
      <div className="mx-auto w-full pt-4">
        {/* Poner para previsualizar la imagen si se puede */}
        <input type="file" className="file-input w-full max-w-xs" />
        <div className="flex justify-between">
          <button onClick={() => { setStep('basicData') }} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button onClick={() => { setStep('themePreferences') }} type="button" className="btn-primary btn mt-4">
            Siguiente
          </button>
        </div>
      </div>
    </>
  )
}
