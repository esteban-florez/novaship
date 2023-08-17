import { XMarkIcon } from '@heroicons/react/24/solid'

type Props = React.PropsWithChildren<{
  items: Array<{
    id: string
    title: string
  }>
  onRemove: (id: string) => void
  itemsName: string
}>

export default function SelectedItems({ items, onRemove, itemsName }: Props) {
  return (
    <div className="my-2 flex w-full flex-wrap items-center gap-x-1 gap-y-2 text-sm">
      <p>{itemsName} seleccionadas:</p>
      {items.length === 0 && (
        <span className="text-neutral-400">Ningun elemento seleccionado.</span>
      )}
      {items.map(item => (
        <span key={item.id} className="badge badge-primary badge-lg justify-between gap-1  text-sm font-semibold">
          {item.title}
          <button type="button" onClick={() => { onRemove(item.id) }}>
            <XMarkIcon className="-mr-2 h-4 w-4" />
          </button>
        </span>
      ))}
    </div>
  )
}
