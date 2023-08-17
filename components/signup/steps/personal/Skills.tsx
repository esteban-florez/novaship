import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'

export default function Skills() {
  const { goBack, goNext } = useContext(SignUpContext)
  return (
    <>
      <h2 className="text-center text-xl font-bold md:text-3xl">
        Selecciona tus <span className="text-secondary">conocimientos</span> y <span className="text-primary">habilidades</span>
      </h2>
      <p>
        Incluye todas las habilidades que poseas para que tus talentos puedan ser vistos por las empresas.
      </p>
      <div className="mx-auto w-full pt-4">
        {/* TODO _> select multiple */}
        <div className="mt-4 flex justify-between">
          <button onClick={goBack} type="button" className="btn-neutral btn">
            Volver
          </button>
          <button onClick={goNext} type="button" className="btn-primary btn">
            Siguiente
          </button>
        </div>
      </div>
    </>
  )
}
