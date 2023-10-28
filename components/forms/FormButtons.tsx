import { PlusIcon } from '@heroicons/react/24/solid'
import GoBackBtn from '../GoBackBtn'

export default function FormButtons({ label = 'Aceptar', disableSubmit }: { label?: string, disableSubmit?: boolean }) {
  return (
    <div className="flex justify-between gap-x-2 border-t pt-4">
      <GoBackBtn />
      <button disabled={disableSubmit} className="btn-primary btn">
        <PlusIcon className="h-4 w-4" />
        {label}
      </button>
    </div>
  )
}
