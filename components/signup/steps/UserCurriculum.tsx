type Props = React.PropsWithChildren<{
  setStep: (step: string) => void
}>

export default function UserCurriculum({ setStep }: Props) {
  return (
    <>
      <h2 className="text-center font-title text-2xl font-bold md:text-4xl">
        El curriculum miloco
      </h2>
      <section className="mx-auto w-full pt-4">
        {/* crear componentes de checkbox */}
        <label className="label cursor-pointer">
          <span className="label-text">Crea tu curriculum desde cero</span>
          <input type="checkbox" className="checkbox" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Adjunta tu curriculum</span>
          <input type="checkbox" className="checkbox" />
        </label>
        <div className="flex justify-between">
          <button onClick={() => { setStep('userCalendar') }} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button type="submit" className="btn-primary btn mt-4">
            Siguiente
          </button>
        </div>
      </section>
    </>
  )
}
