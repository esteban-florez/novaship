'use client'

import Input from '@/components/forms/inputs/Input'
import Select from '@/components/forms/inputs/Select'
import { type Grade } from '@prisma/client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

type Props = React.PropsWithChildren<{
  grades: Array<Pick<Grade, 'id' | 'title'>>
}>

export default function FilterBar({ grades }: Props) {
  const [filter, setFilter] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function updateParams(key: string, value: string) {
    const newParams = new URLSearchParams(searchParams as unknown as URLSearchParams)

    if (value === '') {
      newParams.delete(key)
    } else {
      newParams.set(key, value)
    }

    const { href } = new URL(
      pathname + '?' + newParams.toString(),
      window.location.href
    )

    router.push(encodeURI(href))
  }

  function handleSearch(event: OnInputEvent) {
    // TODO -> hacer un throttle para que esta cosa no corra 100 veces si se escriben 100 caracteres rápidamente
    const { value } = event.target
    updateParams('search', value)
  }

  function handleGradeSelect(event: SelectOnInputEvent) {
    const option = event.target.selectedOptions.item(0)

    if (option === null) {
      event.target.value = ''
      return
    }

    const { value } = option
    setFilter(value)
    updateParams('grade', value)
  }

  return (
    <section className="mt-1 bg-white gap-2 flex items-center pt-2 px-4 justify-between shadow-md flex-wrap">
      <div>
        <p className="font-semibold text-sm">Buscar pasantes por nombre: </p>
        <Input
          type="search"
          className="max-w-xs"
          name="search"
          placeholder="Buscar pasantes..."
          onInput={handleSearch}
        />
      </div>
      <div className="flex items-center gap-2">
        <div>
          <p className="font-semibold text-sm">Filtrar por carrera: </p>
          <Select
            name="filter.grade"
            onInput={handleGradeSelect}
            options={{
              type: 'rows',
              data: grades,
            }}
            value={filter}
            noDefault
          >
            <option value="">Todas</option>
          </Select>
        </div>
        {filter !== '' && (
          <button
            className="btn btn-error mt-5"
            type="button"
            onClick={() => { setFilter(''); updateParams('grade', '') }}
          >
            Quitar filtros
          </button>
        )}
      </div>
    </section>
  )
}
