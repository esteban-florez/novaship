import { type SelectableSkill, type SelectableCategory } from '@/lib/types'
import { XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  selectedOptions: SelectableCategory[] | SelectableSkill[]
  removeOption: (id: string) => void
}>

export default function SelectedOptions({ selectedOptions, removeOption }: Props) {
  return (
    <div className="flex flex-col gap-x-1 gap-y-2">
      <p className={clsx('font-semibold', selectedOptions.length === 0 ? 'text-neutral-400' : '')}>
        {selectedOptions.length > 0 ? `Opciones seleccionadas (${selectedOptions.length})` : 'Ninguna opción seleccionada.'}
      </p>
      <div className="block max-h-60 w-full gap-2 overflow-y-auto">
        {selectedOptions.map(option => (
          <div key={option.id} className="group flex w-full cursor-pointer select-none items-center justify-between gap-x-2 border-x border-t px-4 py-1 transition-colors delay-150 duration-150 first:rounded-t-md last:rounded-b-md last:border-b hover:bg-primary" onClick={() => { removeOption(option.id) }}>
            <p className="p-2 transition-colors delay-75 duration-75 group-hover:text-white">{option.title}</p>
            <XMarkIcon className="h-5 w-5 justify-self-end transition-colors delay-75 duration-75 group-hover:text-white" />
          </div>
        ))}
      </div>
    </div>
  )
}
