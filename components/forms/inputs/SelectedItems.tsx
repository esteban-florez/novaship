import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

type Props = React.PropsWithChildren<{
  items: Array<{
    id: string
    title: string
  }>
  onRemove: (id: string) => void
  itemsName: string
  limit: number
}>

export default function SelectedItems({ items, onRemove, itemsName, limit }: Props) {
  return (
    <div className="my-2 flex w-full flex-wrap items-center gap-x-1 gap-y-2 text-sm">
      <div className="flex items-center gap-1">
        <p>{itemsName} seleccionados(as):</p>
        <div
          className="tooltip"
          data-tip={`Puedes seleccionar un máximo de ${limit} ${itemsName}`}
        >
          <InformationCircleIcon className="h-6 w-6 hover:text-primary" />
        </div>
      </div>
      {items.length === 0 && (
        <span className="text-neutral-400">Ningun elemento seleccionado.</span>
      )}
      {items.map(item => (
        <span key={item.id} className="badge badge-primary badge-lg justify-between gap-1 text-sm font-semibold">
          {item.title}
          <button type="button" onClick={() => { onRemove(item.id) }}>
            <XMarkIcon className="-mr-2 h-4 w-4" />
          </button>
        </span>
      ))}
    </div>
  )
}
