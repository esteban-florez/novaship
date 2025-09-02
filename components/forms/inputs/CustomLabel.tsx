import clsx from 'clsx'

interface Props {
  id: string
  label: string
  className?: string
  isOptional?: boolean
}

export default function CustomLabel({
  id,
  label,
  className,
  isOptional = false,
}: Props) {
  return (
    <label
      htmlFor={id}
      className={clsx('label', className)}
    >
      <span className="label-text text-base font-semibold">{label}</span>
      {!isOptional && (
        <div
          className="tooltip tooltip-right"
          data-tip="Este campo es obligatorio"
        >
          <span className="ms-1">
            <b className="text-error">*</b>
          </span>
        </div>
      )}
    </label>
  )
}
