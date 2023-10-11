import { PlusIcon } from '@heroicons/react/24/solid'
import Button from '../Button'
import { actions } from '@/lib/translations'
import { usePathname } from 'next/navigation'
import BackButton from '../BackButton'

type Props = React.PropsWithChildren<{
  label?: string
  disableSubmit?: boolean
}>

// TODO - añdir prop para el label del boton
export default function FormButtons({ label, disableSubmit }: Props) {
  const path = usePathname()
  const pathMethod = path.split('/').at(-1) as 'create' | 'update'

  return (
    <div className="flex flex-col gap-2 border-t pt-4 md:flex-row md:justify-end">
      <Button color="PRIMARY" isDisabled={disableSubmit}>
        <PlusIcon className="h-4 w-4" />
        {label ?? actions[pathMethod]}
      </Button>
      <BackButton />
    </div>
  )
}
