type AlertList = Record<string, AlertData | undefined>

export const alerts: AlertList = {
  project_created: {
    type: 'success',
    message: 'El proyecto fué creado con éxito.',
  },
  redirected: {
    type: 'info',
    message: 'Fuiste redireccionado.',
  },
}
