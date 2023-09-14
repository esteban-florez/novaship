import { ArrowLeftIcon, PlusIcon } from '@heroicons/react/24/solid'
import Button from '../Button'
import { actions } from '@/lib/translations'
import { usePathname } from 'next/navigation'

interface Props {
  url: string
}

export default function FormButtons({ url }: Props) {
  const path = usePathname()
  const pathMethod = path.split('/').at(-1) as 'create' | 'update'

  return (
    <div className="flex justify-end gap-x-2 border-t pt-4">
      <Button url={url} color="CANCEL">
        <ArrowLeftIcon className="h-4 w-4" />
        Cancelar
      </Button>
      <Button color="PRIMARY">
        <PlusIcon className="h-4 w-4" />
        {actions[pathMethod]}
      </Button>
    </div>
  )
}
