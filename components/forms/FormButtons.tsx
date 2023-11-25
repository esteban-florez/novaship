import { PlusIcon } from '@heroicons/react/24/solid'
import GoBackBtn from '../GoBackBtn'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link, { type LinkProps } from 'next/link'

interface Props {
  label?: string
  disableSubmit?: boolean
  url?: string
  link?: LinkProps
}

export default function FormButtons({
  label = 'Aceptar',
  disableSubmit,
  url,
  link,
}: Props) {
  return (
    <div className="flex justify-between gap-x-2 border-t pt-4">
      {url == null && link == null && <GoBackBtn />}
      {url != null && (
        <Link href={url}>
          <button
            disabled={disableSubmit}
            className="btn bg-white text-neutral-600 hover:bg-neutral-200 border-neutral-300 hover:border-neutral-500"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Cancelar
          </button>
        </Link>
      )}
      {link != null && (
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
