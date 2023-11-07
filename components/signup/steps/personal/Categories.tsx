import SearchInput from '@/components/SearchInput'
import { useContext, useState } from 'react'
import { SignUpContext } from '../../SignUpContext'
import CategoriesSelect from './CategoriesSelect'

export default function Categories() {
  const { goBack, goNext, selectedCategories } = useContext(SignUpContext)
  const [searchText, setSearchText] = useState('')

  function handleNext() {
    if (selectedCategories.length >= 1) {
      goNext()
    }
  }

  return (
    <>
      <h2 className="text-center text-xl font-bold md:text-3xl">
        ¡Elige las <span className="text-primary">categorías</span> que sean <span className="text-secondary">relevantes</span> para ti!
      </h2>
      <p>
        Para ofrecer una mejor experiencia necesitamos conocer las categorías laborales en las que te desempeñas.
      </p>
      <div className="mx-auto w-full pt-4">
        <div className="flex justify-end">
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
        </div>
        <CategoriesSelect searchText={searchText} />
        <div className="mt-2 flex justify-between">
          <button onClick={goBack} type="button" className="btn-neutral btn">
            Volver
          </button>
          <button onClick={handleNext} disabled={selectedCategories.length < 1} type="button" className="btn-primary btn">
            Siguiente
          </button>
        </div>
      </div>
    </>
  )
}
