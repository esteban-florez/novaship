function a(type: AlertType, message: string) {
  return {
    type, message,
  }
}

export const alerts: Record<string, AlertData | undefined> = {
  success: a('success', 'Alerta de éxito'),
  error: a('error', 'Alert de error'),
  info: a('info', 'Alert de error'),
  loading: a('loading', 'Alert de error'),
  warning: a('warning', 'War'),
}
