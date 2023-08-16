import SearchInput from '@/components/SearchInput'
import { useContext, useState } from 'react'
import { SignUpContext } from '../../SignUpContext'
import FieldsSelect from '../../FieldsSelect'

export default function Fields() {
  const { goBack, goNext } = useContext(SignUpContext)
  const [searchText, setSearchText] = useState('')

  return (
    <>
      <h2 className="text-center text-xl font-bold md:text-3xl">
        ¡Elige las <span className="text-primary">áreas</span> que sea relevantes para ti!
      </h2>
      <p className="text-base">
        Para ofrecer una mejor experiencia necesitamos conocer las áreas en las que te desempeñas.
      </p>
      <div className="mx-auto w-full pt-4">
        <div className="flex items-center justify-between rounded-lg bg-primary px-4 py-2 shadow-md">
          <p className="font-semibold text-white">Puedes seleccionar un máximo de 5 áreas:</p>
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
        </div>
        <FieldsSelect searchText={searchText} />
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
