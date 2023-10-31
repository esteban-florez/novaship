import { useContext, useState } from 'react'
import { SignUpContext } from '../../SignUpContext'
import SelectMultiple from '@/components/forms/inputs/select-multiple/SelectMultiple'
import Select from '@/components/forms/inputs/Select'

export default function Jobs() {
  const { goBack, goNext, control, jobs, trigger, setValue, errors, register } = useContext(SignUpContext)
  const [disabled, setDisabled] = useState(false)

  async function handleNext() {
    const valid = await trigger(['jobs', 'employable'])

    if (valid) {
      goNext()
    }
  }

  function handleEmployableInput(event: React.BaseSyntheticEvent) {
    if (event.target.value === 'true') {
      setDisabled(false)
    } else {
      setDisabled(true)
      setValue('jobs', [])
    }
  }

  return (
    <div className="max-w-xl">
      <h2 className="text-center text-xl font-bold md:text-3xl">
        ¿Estás en <span className="text-primary">busca</span> de <span className="text-secondary">empleo</span>?
      </h2>
      <p>
        Selecciona si estás en busca de empleo, y en cuáles puestos de trabajo estás interesado.
      </p>
      <div className="mx-auto w-full pt-4">
        <Select name="employable" defaultValue="true" label="¿Estás en busca de empleo?" options={{ type: 'rows', data: [{ title: 'Sí', id: 'true' }, { title: 'No', id: 'false' }] }} onInput={handleEmployableInput} noDefault register={register} errors={errors} />
        <SelectMultiple
          disabled={disabled}
          options={{ type: 'rows', data: jobs }}
          label="Selecciona los puestos de trabajo que te interesen (max: 5):"
          itemsName="Puestos"
          control={control}
          limit={5}
          name="jobs"
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
    </div>
  )
}
