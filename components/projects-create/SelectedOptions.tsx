import { type FieldOption, type SkillOption } from '@/lib/types'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Button from '../Button'
import { BUTTON_ICON } from '@/lib/constants/button'

type Props = React.PropsWithChildren<{
  selectedOptions: FieldOption[] | SkillOption[]
  removeOption: (id: string) => void
}>

export default function SelectedOptions({ selectedOptions, removeOption }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
      <p>Opciones seleccionadas:</p>
      {selectedOptions.length === 0 && (
        <span className="text-neutral-400">Ninguna opción seleccionada.</span>
      )}
      {selectedOptions.map(option => (
        <span key={option.id} className="badge badge-primary badge-lg justify-between gap-1 font-semibold">
          {option.title}
          <Button icon={<XMarkIcon className="-mr-2 h-5 w-5" />} className={BUTTON_ICON} onClick={() => { removeOption(option.id) }} />
        </span>
      ))}
    </div>
  )
}
