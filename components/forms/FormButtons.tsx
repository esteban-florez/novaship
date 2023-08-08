import { ArrowLeftIcon, PlusIcon } from '@heroicons/react/24/solid'
import Button from '../Button'
import { BUTTON_DEFAULT } from '@/lib/constants/button'
import clsx from 'clsx'

interface Props {
  url?: string
}

export default function FormButtons({ url = '' }: Props) {
  return (
    <div className="flex justify-end gap-x-2 border-t pt-4">
      <Button url={url} icon={<ArrowLeftIcon className="h-4 w-4" />} className={clsx(BUTTON_DEFAULT, 'bg-gray-200 text-neutral-600')}>
        Cancelar
      </Button>
      <Button icon={<PlusIcon className="h-4 w-4" />} className={clsx(BUTTON_DEFAULT, 'bg-primary text-primary-content')}>
        Registrar
      </Button>
    </div>
  )
}
