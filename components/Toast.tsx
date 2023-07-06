const TOAST_TYPES = {
  info: 'alert alert-info',
  warning: 'alert alert-warning',
  error: 'alert alert-error',
  success: 'alert alert-success',
}

interface Props {
  type: 'info' | 'warning' | 'error' | 'success'
  message: string
}

export default function Toast({ type, message }: Props) {
  return (
    <div className="toast-end toast">
      <div className={TOAST_TYPES[type]}>
        <span>{message}</span>
      </div>
    </div>
  )
}
