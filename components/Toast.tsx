import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'

const TOAST_TYPES = {
  info: 'alert-info',
  warning: 'alert-warning',
  error: 'alert-error',
  success: 'alert-success',
}

const TOAST_ICONS = {
  info: <InformationCircleIcon className="h-6 w-6" />,
  warning: <ExclamationTriangleIcon className="h-6 w-6" />,
  error: <XCircleIcon className="h-6 w-6" />,
  success: <CheckCircleIcon className="h-6 w-6" />,
}

interface Props {
  type: 'info' | 'warning' | 'error' | 'success'
  message: string
  onClose: () => void
}

export default function Toast({ type, message, onClose }: Props) {
  return (
    <div className="toast-end toast">
      <div className={`alert px-3 py-1 ${TOAST_TYPES[type]} rounded-md`}>
        {TOAST_ICONS[type]}
        <p className="text-sm">{message}</p>
        <button onClick={onClose} className="btn-ghost btn-sm btn">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
