'use client'

import {
  ArrowPathIcon,
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

const DEFAULT_TOASTS = {
  info: {
    style: 'alert-info',
    icon: <InformationCircleIcon className="h-6 w-6" />,
  },
  warning: {
    style: 'alert-warning',
    icon: <ExclamationTriangleIcon className="h-6 w-6" />,
  },
  error: {
    style: 'alert-error',
    icon: <XCircleIcon className="h-6 w-6" />,
  },
  success: {
    style: 'alert-success',
    icon: <CheckBadgeIcon className="h-6 w-6" />,
  },
  loading: {
    style: 'pr-6',
    icon: <ArrowPathIcon className="h-6 w-6 animate-spin" />,
  },
}

type Props = React.PropsWithChildren<AlertData & {
  onClose: () => void
}>

// TODO -> nuevo diseño o verificar responsive
// INFO -> si el message es muy largo no se ve bien
export default function Toast({ type, message, onClose }: Props) {
  const { style, icon } = DEFAULT_TOASTS[type]

  return (
    <div className="toast-center sm:toast-end toast-bottom toast z-[9999]">
      <div className={clsx('alert p-4 shadow-lg inline-flex', style)}>
        {icon}
        <p className={clsx({
          'break-normal': true,
          'text-sm': message.length > 15,
          'text-base': message.length < 15,
        })}
        >{message}
        </p>
        {type !== 'loading' && (
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  )
}
