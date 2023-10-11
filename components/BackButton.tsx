import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const { back } = useRouter()

  return (
    <button type="button" className="btn-error btn h-10 min-h-0" onClick={back}>
      <ArrowLeftIcon className="h-4 w-4" />
      Cancelar
    </button>
  )
}
