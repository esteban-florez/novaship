'use client'

import useClickOutside from '@/lib/hooks/useClickOutside'
import clsx from 'clsx'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

type Status = 'pending' | 'done' | 'progress' | 'review' | ''

export default function Filters() {
  const [inputFocus, setInputFocus] = useState(false)
  const inputRef = useClickOutside<HTMLInputElement>(() => {
    setInputFocus(false)
  })
  const [search, setSearch] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [filter, setFilter] = useState<Status>(
    searchParams.get('filtered') as Status
  )

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
    setSearch(value)
    updateParams('search', value)
  }

  function handleFilterOption(option: Status) {
    setFilter(option)
    updateParams('filtered', option)
  }

  function handleFilterReset() {
    setFilter('')
    setSearch('')
    router.push(pathname)
  }

  return (
    <>
      <div className="sticky left-0 top-0 right-0">
        <div className="bg-white rounded-md border border-zinc-300">
          <div className="w-full">
            <input
              type="search"
              className="input input-md w-full bg-base-100 transition-all focus:outline-none focus:ring-2 focus:ring-primary mb-3 rounded-md"
              ref={inputRef}
              placeholder="Buscar..."
              value={search}
              onInput={handleSearch}
              onClick={() => {
                setInputFocus(true)
              }}
            />
          </div>
          <div className="-mt-3 p-2 px-4 border-t border-zinc-300">
            <small
              onClick={handleFilterReset}
              className="cursor-pointer text-neutral-600 text-semibold hover:text-error transition-colors delay-75 duration-75 ease-out select-none"
            >
              Limpiar filtros
            </small>
          </div>
        </div>
        {inputFocus && (
          <div
            ref={inputRef}
            className="mt-2 card bg-white border border-zinc-300 rounded-md p-4 flex flex-row flex-wrap gap-4"
          >
            <h6 className="w-full font-semibold text-primary">
              Filtrar por estado
            </h6>
            <span
              onClick={() => {
                handleFilterOption('pending')
              }}
              className="cursor-pointer inline-flex items-center gap-1"
            >
              <span
                className={clsx(
                  'h-4 w-4 border border-zinc-300 rounded-full',
                  filter === 'pending' && 'bg-primary'
                )}
              />
              <small>Por empezar</small>
            </span>
            <span
              onClick={() => {
                handleFilterOption('done')
              }}
              className="cursor-pointer inline-flex items-center gap-1"
            >
              <span
                className={clsx(
                  'h-4 w-4 border border-zinc-300 rounded-full',
                  filter === 'done' && 'bg-primary'
                )}
              />
              <small>Completadas</small>
            </span>
            <span
              onClick={() => {
                handleFilterOption('progress')
              }}
              className="cursor-pointer inline-flex items-center gap-1"
            >
              <span
                className={clsx(
                  'h-4 w-4 border border-zinc-300 rounded-full',
                  filter === 'progress' && 'bg-primary'
                )}
              />
              <small>En progreso</small>
            </span>
            <span
              onClick={() => {
                handleFilterOption('review')
              }}
              className="cursor-pointer inline-flex items-center gap-1"
            >
              <span
                className={clsx(
                  'h-4 w-4 border border-zinc-300 rounded-full',
                  filter === 'review' && 'bg-primary'
                )}
              />
              <small>En revisión</small>
            </span>
            <span
              onClick={() => {
                handleFilterOption('')
              }}
              className="cursor-pointer inline-flex items-center gap-1"
            >
              <span
                className={clsx(
                  'h-4 w-4 border border-zinc-300 rounded-full',
                  filter === '' && 'bg-primary'
                )}
              />
              <small>Todos</small>
            </span>
          </div>
        )}
      </div>
    </>
  )
}
