type Props = React.PropsWithChildren<{
  setStep: (step: string) => void
}>

export default function UserType({ setStep }: Props) {
  return (
    <>
      <h2 className="text-center font-title text-2xl font-bold md:text-4xl">
        Tipo de usuario
      </h2>
      <section className="mx-auto w-full pt-4">
        <label className="label cursor-pointer">
          <span className="label-text">Personal</span>
          <input type="checkbox" className="checkbox" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Empresarial</span>
          <input type="checkbox" className="checkbox" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Institucional</span>
          <input type="checkbox" className="checkbox" />
        </label>
        <div className="flex justify-between">
          <button onClick={() => { setStep('general') }} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button onClick={() => { setStep('basicData') }} type="button" className="btn-primary btn mt-4">
            Siguiente
          </button>
        </div>
      </section>
    </>
  )
}
