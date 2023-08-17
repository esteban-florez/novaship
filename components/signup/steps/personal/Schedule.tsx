import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'

export default function Schedule() {
  const { goBack } = useContext(SignUpContext)
  return (
    <>
      <h2 className="text-center text-xl font-bold md:text-3xl">
        ¡Organiza tu <span className="text-primary">tiempo</span> con nuestro <span className="text-secondary">horario</span>!
      </h2>
      <p>
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
