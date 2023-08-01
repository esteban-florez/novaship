import { XMarkIcon } from '@heroicons/react/24/solid'
import Button from './Button'

type Props = React.PropsWithChildren<{
  id: string
  title: string
  accept: string
  acceptIcon: React.ReactElement
  cancel: string
  buttonText: string
  buttonIcon: React.ReactElement
}>

export default function Modal({ id, title, accept, acceptIcon, cancel, buttonText, buttonIcon, children }: Props) {
  return (
    <>
      <Button type="MODAL" id={id} bgColor="bg-secondary" textColor="text-secondary-content" icon={buttonIcon}>
        {buttonText}
      </Button>
      <div className="modal p-0">
        <div className="modal-box p-0">
          <h3 className="bg-primary p-4 text-center text-lg font-bold text-white">{title}</h3>
          <div className="px-4 py-2">{children}</div>
          <div className="modal-action border-t p-4">
            <label htmlFor={id} className="inline-flex cursor-pointer items-center justify-center gap-x-2 rounded-md bg-gray-200 px-6 py-2 text-neutral-600">
              <XMarkIcon className="h-5 w-5" />
              {cancel}
            </label>
            <Button bgColor="bg-secondary" textColor="text-secondary-content" icon={acceptIcon}>{accept}</Button>
          </div>
        </div>
      </div>
    </>
  )
}
