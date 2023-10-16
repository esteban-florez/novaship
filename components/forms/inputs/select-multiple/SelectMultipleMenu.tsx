import useClickOutside from '@/lib/hooks/useClickOutside'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { type KeyboardEvent, useState, type ChangeEvent, useRef } from 'react'

type Props = React.PropsWithChildren<{
  options: SelectOptionsArray
  menuOnTop: boolean
  disabled: boolean
  addOption: (optionValue: string) => void
}>

declare global {
  // eslint-disable-next-line no-var
  var canRun: boolean
}

globalThis.canRun = true

export default function SelectMultipleMenu({ options, menuOnTop, addOption, disabled }: Props) {
  const [hidden, setHidden] = useState(true)
  const [search, setSearch] = useState('')
  const [hovered, setHovered] = useState<number | null>(null)
  const menuRef = useClickOutside<HTMLDivElement>(() => { closeMenu() })
  const ulRef = useRef<HTMLUListElement>(null)

  const filteredOptions = options.filter(filterBySearch)
  const lastOptionIndex = filteredOptions.length - 1

  function filterBySearch({ label }: { label: string }) {
    const lower = label.toLowerCase()
    return lower.includes(search.toLowerCase())
  }

  function closeMenu() {
    setHidden(true)
    setHovered(null)
    if (ulRef.current !== null) {
      ulRef.current.scroll(0, 0)
    }
  }

  function handleOptionClick(optionValue: string) {
    setSearch('')
    closeMenu()
    addOption(optionValue)
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setHidden(false)
    setHovered(null)
    setSearch(e.target.value)
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (!globalThis.canRun) {
      return
    }

    globalThis.canRun = false
    setTimeout(() => {
      globalThis.canRun = true
    }, 100)

    if (event.code === 'ArrowUp' || event.code === 'ArrowDown' || event.code === 'Enter' || event.code === 'Escape') {
      event.preventDefault()
    }

    if (event.code === 'ArrowUp') {
      setHidden(false)
      if (hovered === null || hovered === 0) {
        setHovered(lastOptionIndex)
        return
      }

      setHovered(hovered - 1)
    } else if (event.code === 'ArrowDown') {
      setHidden(false)
      if (hovered === null || hovered === lastOptionIndex) {
        setHovered(0)
        return
      }

      setHovered(hovered + 1)
    } else if (event.code === 'Enter' && hovered !== null) {
      handleOptionClick(filteredOptions[hovered].value)
    } else if (event.code === 'Escape') {
      closeMenu()
    }
  }

  function isVisible(ele: HTMLElement) {
    const { parentElement: container } = ele
    if (container === null) return false

    const eleTop = ele.offsetTop
    const eleBottom = eleTop + ele.clientHeight

    const containerTop = container.scrollTop
    const containerBottom = containerTop + container.clientHeight

    return (
      (eleTop >= containerTop && eleBottom <= containerBottom)
    )
  }

  return (
    <div className="relative mb-3 w-full" ref={menuRef}>
      <ChevronDownIcon className="pointer-events-none absolute right-2 top-4 z-10 h-4 w-4 stroke-2" />
      <input
        className="input relative w-full border border-neutral-300 bg-base-100 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary disabled:border-neutral-300 placeholder:disabled:text-neutral-500"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => { setHidden(false) }}
        placeholder={disabled ? 'Seleccionaste el máximo de opciones' : 'Seleccionar...'}
        value={search}
        type="text"
        disabled={disabled}
      />
      {!disabled && (
        <ul
          className={clsx(
            'menu absolute z-20 max-h-52 w-full flex-nowrap overflow-y-auto rounded-md border border-neutral-300 bg-white text-sm shadow-lg scrollbar', hidden && 'hidden', menuOnTop && 'bottom-[115%]', !menuOnTop && 'top-[115%]'
          )}
          ref={ulRef}
        >
          {filteredOptions.length === 0
            ? (
              <li className="rounded-md p-1 text-neutral-500">
                No se encontró ninguna opción.
              </li>
            )
            : filteredOptions.map(({ value, label }, index) => (
              <button
                className={clsx('cursor-pointer rounded-md p-2 text-left transition-colors', index === hovered && 'bg-neutral-200')}
                onClick={() => { handleOptionClick(value) }}
                onMouseEnter={() => { setHovered(index) }}
                key={value}
                ref={(node) => {
                  if (node === null || hovered !== index || isVisible(node)) return
                  node.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                  })
                }}
              >
                {label}
              </button>
            ))}
        </ul>
      )}
    </div>
  )
}
