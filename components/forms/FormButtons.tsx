import { PlusIcon } from '@heroicons/react/24/solid'
import GoBackBtn from '../GoBackBtn'

export default function FormButtons({ label, disableSubmit }: { label: string, disableSubmit?: boolean }) {
  return (
    <div className="flex justify-end gap-x-2 border-t pt-4">
      <GoBackBtn />
      <button disabled={disableSubmit} className='btn btn-primary'>
        <PlusIcon className="h-4 w-4" />
        {label}
      </button>
    </div>
  )
}
