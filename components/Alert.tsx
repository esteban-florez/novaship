import { CheckCircleIcon } from '@heroicons/react/24/outline'

const ALERT_TYPES = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
}

interface Props {
  type: 'info' | 'success' | 'warning' | 'error'
  message: string
}

export default function Alert({ type, message }: Props) {
  return (
    <div className={`alert mb-2 ${ALERT_TYPES[type]}`}>
      <CheckCircleIcon />
      <span>{message}</span>
    </div>
  )
}
