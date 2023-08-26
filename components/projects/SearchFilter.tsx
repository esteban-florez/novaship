import { useState } from 'react'
import Input from '../forms/inputs/Input'
import Select from '../forms/inputs/Select'
import clsx from 'clsx'
import useClickOutside from '@/lib/hooks/useClickOutside'

interface Props {
  name: string
  onInput: (event: OnInputEvent | SelectOnInputEvent) => void
}

// TODO -> Por que se pueden filtrar los privados (?) xd
export default function SeachFilter({ name, onInput }: Props) {
  const [hidden, setHidden] = useState(true)
  const menuRef = useClickOutside<HTMLDivElement>(() => { setHidden(true) })

  return (
    <div className="relative w-full sm:max-w-sm" ref={menuRef}>
      <input
        type="text"
        name={name}
        onInput={onInput as (event: React.FormEvent<HTMLInputElement>) => void}
        onFocus={() => { setHidden(false) }}
        placeholder="Buscar..."
        className="input input-md my-3 w-full rounded-md border border-neutral-400 bg-neutral-100 shadow-inner focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div className={clsx(
        'menu absolute z-10 max-h-60 w-full flex-nowrap overflow-y-auto rounded-md border border-neutral-300 bg-white px-4 text-sm scrollbar-thin scrollbar-thumb-neutral-300/75', hidden && 'hidden'
      )}
      >
        <Select name="visibility" label="Privacidad" onInput={onInput} noDefault>
          <option value="ALL">Todos</option>
          <option value="PRIVATE">Privado</option>
          <option value="PUBLIC">Público</option>
        </Select>
        <Input type="number" name="members" label="Miembros" placeholder="Ej: 15" onInput={onInput} />
      </div>
    </div>
  )
}
