import { PlusIcon } from '@heroicons/react/24/solid'
import BackBtn from '../BackBtn'

type Props = React.PropsWithChildren<{
  label?: string
  disableSubmit?: boolean
}>

export default function FormButtons({ label = 'Aceptar', disableSubmit }: Props) {
  return (
    <div className="flex justify-end gap-x-2 border-t pt-4">
      <BackBtn />
      <button disabled={disableSubmit} className="btn-primary btn">
        <PlusIcon className="h-4 w-4" />
        {label}
      </button>
    </div>
  )
}
