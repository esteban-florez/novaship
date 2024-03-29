import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'
import SelectMultiple from '@/components/forms/inputs/select-multiple/SelectMultiple'

export default function Skills() {
  const { goBack, goNext, control, skills, trigger } = useContext(SignUpContext)

  async function handleNext() {
    const valid = await trigger('skills')

    if (valid) {
      goNext()
    }
  }

  return (
    <>
      <h2 className="text-center text-xl font-bold md:text-3xl">
        Selecciona tus <span className="text-primary">conocimientos</span> y <span className="text-secondary">habilidades</span>
      </h2>
      <p>
        Incluye todas las habilidades que poseas para que tus talentos puedan ser vistos por las empresas.
      </p>
      <div className="mx-auto w-full pt-4">
        <SelectMultiple
          options={{ type: 'rows', data: skills }}
          label="Selecciona tus habilidades:"
          itemsName="Habilidades"
          control={control}
          name="skills"
        />
        <div className="mt-4 flex justify-between">
          <button onClick={goBack} type="button" className="btn-neutral btn">
            Volver
          </button>
          <button onClick={handleNext} type="button" className="btn-primary btn">
            Siguiente
          </button>
        </div>
      </div>
    </>
  )
}
