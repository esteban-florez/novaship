import { XMarkIcon } from '@heroicons/react/24/solid'

interface Props {
  id: string
  text: 'Cancelar' | 'Aceptar' | 'Cerrar'
}

export default function CloseModalButton({ id, text }: Props) {
  return (
    <label htmlFor={id} className="btn bg-neutral-200 text-neutral-600 hover:bg-neutral-300 border-neutral-300 hover:border-neutral-500">
      <XMarkIcon className="h-5 w-5" />
      {text}
    </label>
  )
}
