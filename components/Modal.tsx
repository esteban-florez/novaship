import { XMarkIcon } from '@heroicons/react/24/solid'
import Button from './Button'

type Props = React.PropsWithChildren<{
  id: string
  buttonIcon: React.ReactElement
  buttonText: string
  buttonClassName: string
  buttonCancelText: string
  buttonActionIcon?: React.ReactElement
  buttonActionClassName?: string
  buttonActionText?: string
  onClick?: () => void
}>

// Dev
// Arreglar las props
export default function Modal({ id, buttonIcon, buttonText, buttonClassName, buttonCancelText, buttonActionIcon, buttonActionClassName, buttonActionText, onClick, children }: Props) {
  const hasActionIcon = buttonActionIcon !== null && buttonActionIcon !== undefined
  const hasActionText = buttonActionText !== null && buttonActionText !== undefined
  const hasActionClassName = buttonActionClassName !== null && buttonActionClassName !== undefined

  return (
    <>
      <Button type="MODAL" id={id} icon={buttonIcon} className={buttonClassName}>
        {buttonText}
      </Button>
      <div className="modal p-0">
        <div className="modal-box p-0">
          <main className="mt-4 px-8 py-4">{children}</main>
          <footer className="modal-action bg-gray-100 px-4 py-2">
            <label htmlFor={id} className="inline-flex cursor-pointer items-center justify-center gap-x-2 rounded-md border border-neutral-300 bg-gray-200 px-6 py-2 text-neutral-600">
              <XMarkIcon className="h-5 w-5" />
              {buttonCancelText}
            </label>
            {(hasActionIcon && hasActionText && hasActionClassName) &&
              <Button type="BUTTON" icon={buttonActionIcon} className={buttonActionClassName} onClick={onClick}>{buttonActionText}</Button>}
          </footer>
        </div>
      </div>
    </>
  )
}
