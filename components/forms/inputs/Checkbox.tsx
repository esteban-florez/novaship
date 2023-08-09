import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  name: string
  value: string
  label: string
  active: boolean
  onInput: () => void
}>

export default function Checkbox({ name, value, label, active = false, onInput }: Props) {
  return (
    <label className={clsx('label mb-2 cursor-pointer rounded-lg border border-gray-400 p-4', active && 'border-2 border-primary')}>
      <span className="mx-auto text-lg font-semibold">{label}</span>
      <input
        name={name} type="checkbox" value={value}
        checked={active} hidden onInput={onInput}
      />
    </label>
  )
}
