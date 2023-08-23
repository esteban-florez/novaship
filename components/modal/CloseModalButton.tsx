import { XMarkIcon } from '@heroicons/react/24/solid'

interface Props {
  id: string
  text: 'Cancelar' | 'Aceptar' | 'Cerrar'
}

export default function CloseModalButton({ id, text }: Props) {
  return (
    <label htmlFor={id} className="btn border border-neutral-300 bg-gray-200 px-6 py-2 text-neutral-600">
      <XMarkIcon className="h-5 w-5" />
      {text}
    </label>
  )
}
