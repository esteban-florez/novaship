import useClickOutside from '@/lib/hooks/useClickOutside'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useState } from 'react'

type Props = React.PropsWithChildren<{
  options: SelectOptionsArray
  menuOnTop: boolean
  disabled: boolean
  addOption: (optionValue: string) => void
}>

export default function SelectMultipleMenu({ options, menuOnTop, addOption, disabled }: Props) {
  const [hidden, setHidden] = useState(true)
  const [search, setSearch] = useState('')
  const menuRef = useClickOutside<HTMLDivElement>(() => { setHidden(true) })

  const filteredOptions = options.filter(filterBySearch)

  function filterBySearch({ label }: { label: string }) {
    const lower = label.toLowerCase()
    return lower.includes(search.toLowerCase())
  }

  function handleOptionClick(optionValue: string) {
    setSearch('')
    setHidden(true)
    addOption(optionValue)
  }

  return (
    <div className="relative mb-3 w-full" ref={menuRef}>
      <ChevronDownIcon className="pointer-events-none absolute right-2 top-4 z-30 h-4 w-4" />
      <input
        className="input relative z-20 w-full border border-neutral-300 text-sm transition-colors focus:outline-none"
        onChange={(e) => { setSearch(e.target.value) }}
        onFocus={() => { setHidden(false) }}
        placeholder="Seleccionar..."
        value={search}
        type="text"
        disabled={disabled}
      />
      {!disabled && (
        <ul
          className={clsx(
            'menu absolute z-10 max-h-40 w-full flex-nowrap overflow-y-auto rounded-md border border-neutral-300 bg-white text-sm scrollbar-thin scrollbar-thumb-neutral-300/75', hidden && 'hidden', menuOnTop && 'bottom-full'
          )}
        >
          {filteredOptions.length === 0
            ? (
              <li className="rounded-md p-1 text-neutral-500">
                No se encontró ninguna opción.
              </li>
              )
            : filteredOptions.map(({ value, label }) => (
              <button
                className="cursor-pointer rounded-md p-2 text-left transition-colors hover:bg-neutral-200" key={value} onClick={() => { handleOptionClick(value) }}
              >
                {label}
              </button>
            ))}
        </ul>
      )}
    </div>
  )
}
