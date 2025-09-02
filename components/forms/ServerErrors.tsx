import { XMarkIcon } from '@heroicons/react/24/solid'
import ErrorList from './ErrorList'
import { fields as translation } from '@/lib/translations'

type Props = React.PropsWithChildren<{
  errorRecord: {
    [x: string]: string[] | undefined
    [x: number]: string[] | undefined
    [x: symbol]: string[] | undefined
  } | undefined
  close: () => void
}>

export default function ServerErrors({ errorRecord, close }: Props) {
  if (errorRecord === undefined) return null

  return (
    <div className="alert alert-error relative block text-white font-semibold">
      <h4 className="text-lg">Verifique los siguientes campos: </h4>
      {Object.keys(errorRecord).map(errorKey => (
        <div key={errorKey}>
          <p>{translation[errorKey] ?? errorKey}</p>
          <ErrorList errors={errorRecord[errorKey]} />
        </div>
      ))}
      <button className="btn-ghost btn-square btn-sm btn absolute right-4 top-4" onClick={close}>
        <XMarkIcon className="h-6 w-6" />
      </button>
    </div>
  )
}
