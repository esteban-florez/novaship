import { ArrowLeftIcon, PlusIcon } from '@heroicons/react/24/solid'
import Button from '../Button'
import { actions } from '@/lib/translations'
import { usePathname } from 'next/navigation'

interface Props {
  url?: string
}

export default function FormButtons({ url = '' }: Props) {
  const path = usePathname()
  const pathMethod = path.split('/').at(-1)
  const label = pathMethod === 'create' ? 'create' : 'update'

  return (
    <div className="flex justify-end gap-x-2 border-t pt-4">
      <Button url={url} icon={<ArrowLeftIcon className="h-4 w-4" />} style="DEFAULT" color="CANCEL">
        Cancelar
      </Button>
      <Button icon={<PlusIcon className="h-4 w-4" />} style="DEFAULT" color="PRIMARY">
        {actions[label]}
      </Button>
    </div>
  )
}
