import clsx from 'clsx'

interface Props {
  id: string
  label: string
  className?: string
}

export default function CustomLabel({ id, label, className }: Props) {
  return (
    <label htmlFor={id} className={clsx('label', className)}>
      <span className="label-text text-base font-semibold">{label}</span>
    </label>
  )
}
