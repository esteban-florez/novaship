import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  name: string
  value: string
  label: string
  icon?: React.ReactNode
  active: boolean
  className?: string
  onInput: () => void
}>

export default function SignupRadio({ name, value, label, children, icon, active = false, className = '', onInput }: Props) {
  return (
    <label className={clsx('label mb-2 cursor-pointer rounded-lg border border-gray-400 p-4 transition-all', active && 'border-transparent ring-2 ring-primary', className)}>
      <div className="flex flex-row items-center gap-3">
        <div className="rounded-full bg-primary p-2">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{label}</span>
          <span className="text-sm">{children}</span>
        </div>
      </div>
      <input className={className} name={name} type="radio" value={value} hidden onInput={() => { onInput() }} />
    </label>
  )
}
