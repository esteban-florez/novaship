interface Props {
  id: string
  type: 'text' | 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
  placeholder: string
  label?: string | null
  value?: string
  classes: string
}

export default function InputSimple({ id, type, placeholder, label = null, value = '', classes }: Props) {
  return (
    <>
      {label !== null && <label htmlFor={id} className="label"><span className="label-text">{label}</span></label>}
      <input id={id} type={type} placeholder={placeholder} className={classes} value={value} />
    </>
  )
}
