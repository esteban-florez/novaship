import { type SelectableCategory } from '@/lib/types'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  category: SelectableCategory
  handleCategoryInput: (id: string) => void
}>

export default function CategoryOption({ handleCategoryInput, category: { id, title, selected } }: Props) {
  return (
    <button
      type="button"
      onClick={() => { handleCategoryInput(id) }}
      className={clsx(
        'rounded-lg border-2 border-neutral-300 p-4 transition-colors hover:border-primary',
        selected && 'border-2 border-primary'
      )}
    >
      <span className="mx-auto text-lg font-semibold">
        {title}
      </span>
    </button>
  )
}
