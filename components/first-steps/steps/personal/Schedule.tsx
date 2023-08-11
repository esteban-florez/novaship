type Props = React.PropsWithChildren<{
  goBack: () => void
}>

export default function Schedule({ goBack }: Props) {
  return (
    <>
      <h2 className="text-center text-xl font-bold md:text-3xl">
        ¡Organiza tu <span className="text-primary">tiempo</span> con nuestro <span className="text-secondary">horario</span>!
      </h2>
      <p className="text-base">
        Es importante que complete el calendario con sus horarios de disponibilidad.
      </p>
      <section className="mx-auto w-full pt-4">
        <div className="flex justify-between">
          <button onClick={goBack} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button type="submit" className="btn-primary btn mt-4">
            Finalizar
          </button>
        </div>
      </section>
    </>
  )
}
