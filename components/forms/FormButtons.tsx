import { PlusIcon } from '@heroicons/react/24/solid'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link, { type LinkProps } from 'next/link'

interface Props {
  disableSubmit?: boolean
  link: string | LinkProps
  method: 'POST' | 'PUT'
}

export default function FormButtons({ method, disableSubmit, link }: Props) {
  const label = method === 'PUT' ? 'Aceptar' : 'Registrar'
  return (
    <div className="flex justify-between gap-x-2 border-t pt-4">
      {typeof link === 'string' && (
        <Link href={link}>
          <button
            disabled={disableSubmit}
            className="btn bg-white text-neutral-600 hover:bg-neutral-200 border-neutral-300 hover:border-neutral-500"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Cancelar
          </button>
        </Link>
      )}
      {typeof link === 'object' && (
        <Link {...link}>
          <button
            disabled={disableSubmit}
            className="btn bg-white text-neutral-600 hover:bg-neutral-200 border-neutral-300 hover:border-neutral-500"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Cancelar
          </button>
        </Link>
      )}
      <button
        disabled={disableSubmit}
        className="btn-primary btn"
      >
        <PlusIcon className="h-4 w-4" />
        {label}
      </button>
    </div>
  )
}
