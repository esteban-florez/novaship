import { XMarkIcon } from '@heroicons/react/24/solid'
import Button from './Button'
import { type Colors, type Styles } from '@/lib/types'

type Props = React.PropsWithChildren<{
  id: string
  icon: React.ReactElement
  label: string
  style: Styles
  color: Colors
  hover: Colors
  cancelLabel: 'Cancelar' | 'Aceptar' | 'Cerrar'
  actionIcon?: React.ReactElement
  actionLabel?: string
  onClick?: () => void
}>

// Dev
// Arreglar las props
export default function Modal({ id, icon, label, color, hover, cancelLabel, actionIcon, actionLabel, onClick, children }: Props) {
  const hasActionIcon = actionIcon !== null && actionIcon !== undefined
  const hasActionText = actionLabel !== null && actionLabel !== undefined

  return (
    <>
      <Button type="MODAL" id={id} icon={icon} style="DEFAULT" color={color} hover={hover}>
        {label}
      </Button>
      <div className="modal p-0">
        <div className="modal-box p-0">
          <main className="mt-4 px-8 py-4">{children}</main>
          <footer className="modal-action bg-gray-100 px-4 py-2">
            <label htmlFor={id} className="inline-flex cursor-pointer items-center justify-center gap-x-2 rounded-md border border-neutral-300 bg-gray-200 px-6 py-2 text-neutral-600">
              <XMarkIcon className="h-5 w-5" />
              {cancelLabel}
            </label>
            {(hasActionIcon && hasActionText) &&
              <Button type="BUTTON" icon={actionIcon} style="DEFAULT" color={color} hover={color} onClick={onClick}>{actionLabel}</Button>}
          </footer>
        </div>
      </div>
    </>
  )
}
