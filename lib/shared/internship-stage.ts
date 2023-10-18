export const STAGE_COLORS = {
  PENDING: 'text-neutral-700',
  REJECTED: 'text-error',
  ACCEPTED: 'text-warning',
  ACTIVE: 'text-success',
  COMPLETED: 'text-primary',
}

export const STAGE_PROGRESS = {
  PENDING: '',
  REJECTED: 'progress-error',
  ACCEPTED: 'progress-warning',
  ACTIVE: 'progress-success',
  COMPLETED: 'progress-primary',
}

export const STAGE_ALERTS = {
  PENDING: {
    text: 'La solicitud de pasantía fué enviada, esperando confirmación del estudiante.',
    className: '',
  },
  REJECTED: {
    text: 'La solicitud de pasantía fué rechazada por el estudiante.',
    className: 'alert-error',
  },
  ACCEPTED: {
    text: 'La pasantía fué aceptada por el estudiante y está en búsqueda de empresa.',
    className: 'alert-warning',
  },
  ACTIVE: {
    text: 'La pasantía está actualmente en progreso.',
    className: 'alert-success',
  },
  COMPLETED: {
    text: 'Las horas totales de la pasantía fueron completadas.',
    className: 'alert-primary',
  },
}
