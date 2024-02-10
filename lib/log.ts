import { type LogStatus, type Model } from './data-fetching/log'

type Log = Record<string, {
  message: string
  model: Model
  status: LogStatus
}>

export const logs = {
  // AUTH
  forget_password: {
    message: 'Olvidar contraseña',
    model: 'PasswordForget',
    status: 'Success',
  },
  password_recovery: {
    message: 'Recuperar contraseña',
    model: 'PasswordRecovery',
    status: 'Success',
  },
  login: {
    message: 'Iniciar sesión',
    model: 'Login',
    status: 'Success',
  },
  logout: {
    message: 'Cerrar sesión',
    model: 'Logout',
    status: 'Success',
  },
  signup: {
    message: 'Registrar usuario',
    model: 'Register',
    status: 'Success',
  },
  verification: {
    message: 'Verificar usuario',
    model: 'Verify',
    status: 'Success',
  },

  // DATABASE
  backup_db: {
    message: 'Respaldar base de datos',
    model: 'Backup',
    status: 'Success',
  },
  restore_db: {
    message: 'Restaurar base de datos',
    model: 'Backup',
    status: 'Success',
  },

  // PROFILE
  profile: {
    message: 'Actualizó su perfil',
    model: 'Profile',
    status: 'Success',
  },

  // MODELS
  hiring_create_person: {
    message: 'Postuló a una oferta',
    model: 'Hiring',
    status: 'Success',
  },
  hiring_create_company: {
    message: 'Contrató a un postulante',
    model: 'Hiring',
    status: 'Success',
  },
  hiring_update: {
    message: 'Postulación actualizada',
    model: 'Hiring',
    status: 'Success',
  },
  vacant_update: {
    message: 'Vacante actualizada',
    model: 'Vacant',
    status: 'Success',
  },
  vacant_create: {
    message: 'Vacante registrada',
    model: 'Vacant',
    status: 'Success',
  },
  project_create: {
    message: 'Proyecto registrado',
    model: 'Project',
    status: 'Success',
  },
  project_update: {
    message: 'Proyecto actualizado',
    model: 'Project',
    status: 'Success',
  },
  project_delete: {
    message: 'Proyecto eliminado',
    model: 'Project',
    status: 'Warning',
  },
  team_create: {
    message: 'Equipo registrado',
    model: 'Team',
    status: 'Success',
  },
  team_update: {
    message: 'Equipo actualizado',
    model: 'Team',
    status: 'Success',
  },
  team_delete: {
    message: 'Equipo eliminado',
    model: 'Team',
    status: 'Warning',
  },
  task_create: {
    message: 'Tarea registrada',
    model: 'Task',
    status: 'Success',
  },
  task_update: {
    message: 'Tarea actualizada',
    model: 'Task',
    status: 'Success',
  },
  task_delete: {
    message: 'Tarea eliminada',
    model: 'Task',
    status: 'Warning',
  },
  subtask_create: {
    message: 'Subtarea registrada',
    model: 'Subtask',
    status: 'Success',
  },
  subtask_update: {
    message: 'Subtarea actualizada',
    model: 'Subtask',
    status: 'Success',
  },
  subtask_delete: {
    message: 'Subtarea eliminada',
    model: 'Subtask',
    status: 'Warning',
  },
  internship_create: {
    message: 'Pasantía registrada',
    model: 'Internship',
    status: 'Success',
  },
  internship_update: {
    message: 'Pasantía actualizada',
    model: 'Internship',
    status: 'Success',
  },
  internship_status_update: {
    message: 'Pasantía actualizada',
    model: 'Internship',
    status: 'Success',
  },
  internship_delete: {
    message: 'Pasantía eliminada',
    model: 'Internship',
    status: 'Warning',
  },
  invitation_create: {
    message: 'Invitación registrada',
    model: 'Invitation',
    status: 'Success',
  },
  invitation_update: {
    message: 'Invitación actualizada',
    model: 'Invitation',
    status: 'Success',
  },
  offer_create: {
    message: 'Oferta registrada',
    model: 'Offer',
    status: 'Success',
  },
  offer_update: {
    message: 'Oferta actualizada',
    model: 'Offer',
    status: 'Success',
  },
  offer_delete: {
    message: 'Oferta eliminada',
    model: 'Offer',
    status: 'Warning',
  },
  progress_create: {
    message: 'Progreso registrado',
    model: 'Progress',
    status: 'Success',
  },
  progress_update: {
    message: 'Progreso actualizado',
    model: 'Progress',
    status: 'Success',
  },
  recruitment_create: {
    message: 'Reclutamiento registrado',
    model: 'Recruitment',
    status: 'Success',
  },
  recruitment_update: {
    message: 'Reclutamiento actualizado',
    model: 'Recruitment',
    status: 'Success',
  },
  revision_create: {
    message: 'Revisión registrada',
    model: 'Revision',
    status: 'Success',
  },
  revision_update: {
    message: 'Revisión actualizada',
    model: 'Revision',
    status: 'Success',
  },
  revision_delete: {
    message: 'Revisión eliminada',
    model: 'Revision',
    status: 'Warning',
  },
} satisfies Log
