import { type SelectableField } from '@/lib/types'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  field: SelectableField
  handleFieldInput: (id: string) => void
}>

export default function FieldOption({ handleFieldInput, field: { id, title, selected } }: Props) {
  return (
    <button
      type="button"
      onClick={() => { handleFieldInput(id) }}
      className={clsx(
        'rounded-lg border-2 border-primary p-4 transition-colors',
        selected && 'bg-primary text-white'
      )}
    >
      <span className="mx-auto text-lg font-semibold">
        {title}
      </span>
    </button>
  )
}
