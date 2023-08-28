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
  acceptIcon?: React.ReactElement
  acceptLabel?: string
  acceptColor?: Colors
  onClick?: () => void
}>

// Dev
// Arreglar las props
// Si hay scroll el actions del modal queda flotando
export default function Modal({
  id, icon, label, color, style = 'DEFAULT',
  hover, cancelLabel, acceptColor = 'EMPTY',
  acceptIcon, acceptLabel, onClick, children,
}: Props) {
  const hasacceptIcon = acceptIcon !== null && acceptIcon !== undefined
  const hasActionText = acceptLabel !== null && acceptLabel !== undefined

  return (
    <>
      <Button type="MODAL" id={id} style={style} color={color} hover={hover}>
        {icon}
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
            {(hasacceptIcon && hasActionText) &&
              <Button type="BUTTON" style="DEFAULT" color={acceptColor} hover={acceptColor} onClick={onClick}>
                {acceptIcon}
                {acceptLabel}
              </Button>}
          </footer>
        </div>
      </div>
    </>
  )
}
