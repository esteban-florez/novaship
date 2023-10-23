type AlertList = Record<string, AlertData | undefined>

export const alerts: AlertList = {
  project_created: {
    type: 'success',
    message: 'El proyecto fue registrado con éxito.',
  },
  project_updated: {
    type: 'success',
    message: 'El proyecto ha sido actualizado con éxito.',
  },
  project_team_required: {
    type: 'info',
    message: 'Se necesita un equipo para registrar un proyecto',
  },
  project_team_unalterable: {
    type: 'info',
    message: 'Se ha actualizado el proyecto, mas el equipo no puede ser actualizado',
  },
  project_deleted: {
    type: 'warning',
    message: 'El proyecto ha sido borrado.',
  },
  project_not_member: {
    type: 'info',
    message: 'No eres miembro del proyecto seleccionado.',
  },
  task_updated: {
    type: 'success',
    message: 'La tarea ha sido actualizada con éxito.',
  },
  task_deleted: {
    type: 'warning',
    message: 'La tarea ha sido borrada.',
  },
  task_revision_created: {
    type: 'success',
    message: 'Se ha registrado la revisión en la tarea con éxito.',
  },
  task_revision_deleted: {
    type: 'warning',
    message: 'La revisión de la tarea ha sido borrada.',
  },
  task_revision_updated: {
    type: 'info',
    message: 'La revisión de la tarea ha sido actualizada.',
  },
  subtask_created: {
    type: 'success',
    message: 'La subtarea ha sido registrada con éxito.',
  },
  subtask_deleted: {
    type: 'warning',
    message: 'La subtarea ha sido borrada.',
  },
  subtask_revision_created: {
    type: 'success',
    message: 'Se ha registrado la revisión en la subtarea con éxito.',
  },
  subtask_revision_deleted: {
    type: 'warning',
    message: 'La revisión de la subtarea ha sido borrada.',
  },
  subtask_revision_updated: {
    type: 'info',
    message: 'La revisión de la subtarea ha sido actualizada.',
  },
  subtask_updated: {
    type: 'success',
    message: 'La subtarea ha sido actualizada con éxito.',
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
  login_needed: {
    type: 'warning',
    message: 'Primero debes iniciar sesión.',
  },
  internship_created: {
    type: 'success',
    message: 'La pasantía fué creada con éxito.',
  },
  internship_accepted: {
    type: 'success',
    message: 'Aceptaste la solicitud de pasantía con éxito.',
  },
  internship_rejected: {
    type: 'success',
    message: 'Rechazaste la solicitud de pasantía con éxito.',
  },
  internship_deleted: {
    type: 'success',
    message: 'La pasantía fué eliminada con éxito.',
  },
  bad_creds: {
    type: 'error',
    message: 'Credenciales inválidas.',
  },
  redirected: {
    type: 'info',
    message: 'Pa fuera, pala calle.',
  },
}
