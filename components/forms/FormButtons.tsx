import { ArrowLeftIcon, PlusIcon } from '@heroicons/react/24/solid'
import Button from '../Button'

export default function FormButtons({ url = '' }: { url?: string }) {
  return (
    <div className="flex justify-end gap-x-2 border-t pt-4">
      <Button url={url} bgColor="bg-gray-200" textColor="text-neutral-600" icon={<ArrowLeftIcon className="h-4 w-4" />}>
        Cancelar
      </Button>
      <Button bgColor="bg-success" textColor="text-white" icon={<PlusIcon className="h-4 w-4" />}>
        Registrar
      </Button>
    </div>
  )
}
