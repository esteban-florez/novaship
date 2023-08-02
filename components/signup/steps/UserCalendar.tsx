type Props = React.PropsWithChildren<{
  setStep: (step: string) => void
}>

export default function UserCalendar({ setStep }: Props) {
  return (
    <>
      <h2 className="text-center font-title text-2xl font-bold md:text-4xl">
        Horario boleta
      </h2>
      <section className="mx-auto w-full pt-4">
        <div className="flex justify-between">
          <button onClick={() => { setStep('themePreferences') }} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button onClick={() => { setStep('userCurriculum') }} type="button" className="btn-primary btn mt-4">
            Siguiente
          </button>
        </div>
      </section>
    </>
  )
}
