import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'
import SearchInput from '@/components/SearchInput'

export default function Skills() {
  const { goBack, goNext } = useContext(SignUpContext)
  return (
    <>
      <h2 className="text-center text-xl font-bold md:text-3xl">
        ¡Elige las <span className="text-primary">áreas</span> que sea relavantes para ti!
      </h2>
      <p className="text-base">
        Para ofrecer una mejor experiencia necesitamos conocer las áreas en las que te desempeñas.
      </p>
      <div className="mx-auto w-full pt-4">
        <div className="flex justify-end">
          <SearchInput />
        </div>
        <div className="my-4 grid max-h-56 grid-cols-2 gap-x-3 gap-y-2 overflow-y-scroll overscroll-auto">
          {/* // TODO -> aqui va el select multiple */}
        </div>
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
