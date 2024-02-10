'use client'

import Input from '@/components/forms/inputs/Input'
import Select from '@/components/forms/inputs/Select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

type Props = React.PropsWithChildren<{
  searchLabel?: string
  filterLabel: string
  filterOptions: Array<
  | {
    id: string
    title: string
  }
  | {
    id: string
    name: string
  }
  >
}>

export default function FilterBar({
  filterLabel,
  filterOptions,
  searchLabel,
}: Props) {
  const [filter, setFilter] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function updateParams(key: string, value: string) {
    const newParams = new URLSearchParams(
      searchParams as unknown as URLSearchParams
    )

    if (value === '') {
      newParams.delete(key)
    } else {
      newParams.set(key, value)
    }

    if (newParams.has('page')) {
      newParams.set('page', '1')
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

  function handleFilterSelect(event: SelectOnInputEvent) {
    const option = event.target.selectedOptions.item(0)

    if (option === null) {
      event.target.value = ''
      return
    }

    const { value } = option
    setFilter(value)
    updateParams('filtered', value)
  }

  function handleFilterReset() {
    setFilter('')
    updateParams('filtered', '')
  }

  return (
    <section className="mt-1 bg-white gap-2 flex items-center pt-2 px-4 justify-between shadow-md flex-wrap">
      {searchLabel !== undefined && (
        <div>
          <p className="font-semibold text-sm">Buscar por {searchLabel}: </p>
          <Input
            type="search"
            className="max-w-xs"
            name="search"
            placeholder="Buscar..."
            onInput={handleSearch}
          />
        </div>
      )}
      <div className="flex items-center gap-2">
        <div>
          <p className="font-semibold text-sm">Filtrar por {filterLabel}: </p>
          <Select
            name="filtered"
            onInput={handleFilterSelect}
            options={{
              type: 'rows',
              data: filterOptions,
            }}
            value={filter}
            noDefault
          >
            <option value="">Todas</option>
          </Select>
        </div>
        {filter !== '' && (
          <button
            className="btn btn-error mt-1.5"
            type="button"
            onClick={handleFilterReset}
          >
            Eliminar filtros
          </button>
        )}
      </div>
    </section>
  )
}
