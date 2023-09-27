type AlertList = Record<string, AlertData | undefined>

export const alerts: AlertList = {
  project_created: {
    type: 'success',
    message: 'El proyecto fue registrado con éxito.',
  },
  project_not_found: {
    type: 'info',
    message: 'No se encontró el proyecto.',
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
  offer_not_found: {
    type: 'info',
    message: 'No se encontró la oferta.',
  },
  offer_deleted: {
    type: 'warning',
    message: 'La oferta ha sido borrada.',
  },
  team_created: {
    type: 'success',
    message: 'El equipo de trabajo fue registrado con éxito.',
  },
  team_not_found: {
    type: 'info',
    message: 'No se encontró el equipo de trabajo.',
  },
  redirected: {
    type: 'info',
    message: 'Fuiste redireccionado.',
  },
}
