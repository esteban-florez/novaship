interface Props {
  id: string
  label: string
}

export default function CustomLabel({ id, label }: Props) {
  return (
    <label htmlFor={id} className="label">
      <span className="label-text">{label}</span>
    </label>
  )
}
