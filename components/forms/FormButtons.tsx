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
      <Button url={url} style="DEFAULT" color="CANCEL">
        <ArrowLeftIcon className="h-4 w-4" />
        Cancelar
      </Button>
      <Button style="DEFAULT" color="PRIMARY">
        <PlusIcon className="h-4 w-4" />
        {actions[label]}
      </Button>
    </div>
  )
}
