import { XMarkIcon } from '@heroicons/react/24/solid'

interface Props {
  id: string
  text: 'Cancelar' | 'Aceptar' | 'Cerrar'
}

export default function CloseModalButton({ id, text }: Props) {
  return (
    <label htmlFor={id} className="btn btn-neutral">
      <XMarkIcon className="h-5 w-5" />
      {text}
    </label>
  )
}
