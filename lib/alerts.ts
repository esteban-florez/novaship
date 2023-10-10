type AlertList = Record<string, AlertData | undefined>

export const alerts: AlertList = {
  project_created: {
    type: 'success',
    message: 'El proyecto fue registrado con éxito.',
  },
  project_team_required: {
    type: 'info',
    message: 'Se necesita un equipo para registrar un proyecto',
  },
  project_deleted: {
    type: 'warning',
    message: 'El proyecto ha sido borrado.',
  },
  project_not_member: {
    type: 'info',
    message: 'No eres miembro del proyecto seleccionado.',
  },
  offer_created: {
    type: 'success',
    message: 'La oferta fue registrada con éxito.',
  },
  offer_updated: {
    type: 'success',
    message: 'La oferta ha sido actualizada con éxito.',
  },
  offer_deleted: {
    type: 'warning',
    message: 'La oferta ha sido borrada.',
  },
  team_created: {
    type: 'success',
    message: 'El equipo de trabajo fue registrado con éxito.',
  },
  verified_user: {
    type: 'success',
    message: 'El usuario fué confirmado con éxito.',
  },
  redirected: {
    type: 'info',
    message: 'Pa fuera, pala calle.',
  },
}
