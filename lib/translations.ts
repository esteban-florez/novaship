export const routes: Rec = {
  home: 'Inicio',
  offers: 'Ofertas',
  offer: 'Oferta',
  projects: 'Proyectos',
  chats: 'Conversaciones',
  profile: 'Perfil',
  internships: 'Pasantías',
  user: 'Usuario',
  professional: 'Profesional',
  institute: 'Institución',
  company: 'Compañía',
  create: 'Agregar',
  project: 'Proyecto',
  admin: 'Administración',
  tasks: 'Tareas',
  task: 'Tarea',
  subtasks: 'Subtareas',
  subtask: 'Subtarea',
  update: 'Actualizar',
  chat: 'Chat',
  teams: 'Equipos de trabajo',
  hiring: 'Postulaciones',
  memberships: 'Miembros',
  verifications: 'Verificaciones',
  select: 'Inscribir pasante',
  institutes: 'Instituciones',
  persons: 'Personas',
  companies: 'Empresas',
  notifications: 'Notificaciones',
  recruit: 'Reclutar pasantes',
  vacants: 'Cupos',
  recruitments: 'Solicitudes',
  apply: 'Buscar cupos',
  invitations: 'Invitaciones',
  stats: 'Estadísticas',
  backups: 'Base de datos',
  logs: 'Registros',
}

export const userTypes = {
  PERSON: 'Persona natural',
  COMPANY: 'Empresa',
  INSTITUTE: 'Institución',
  ADMIN: 'Administrador',
} as const

export const visibilities = {
  PRIVATE: 'Privado',
  PUBLIC: 'Público',
}

export const fields: Record<string, string> = {
  email: 'Correo electrónico: ',
}

export const days = {
  monday: 'Lunes',
  tuesday: 'Martes',
  wednesday: 'Miércoles',
  thursday: 'Jueves',
  friday: 'Viernes',
  saturday: 'Sábado',
  sunday: 'Domingo',
} as const

export const schedules = {
  FULLTIME: 'Tiempo completo',
  PARTTIME: 'Medio tiempo',
} as const

export const modes = {
  REMOTE: 'Remoto',
  ONSITE: 'Presencial',
  HYBRID: 'Semi-presencial',
} as const

export const actions = {
  update: 'Actualizar',
  create: 'Registrar',
} as const

export const taskStatuses = {
  PENDING: 'Por hacer',
  PROGRESS: 'En progreso',
  REVIEW: 'En revisión',
  DONE: 'Hecho',
}

export const expirations = {
  DAYS1: '1 día',
  DAYS3: '3 días',
  DAYS5: '5 días',
  DAYS7: '7 días',
  DAYS15: '15 días',
  DAYS31: '31 días',
}

export const statuses = {
  PENDING: 'En espera',
  REJECTED: 'Rechazada',
  ACCEPTED: 'Aceptada',
} as const

export const genders = {
  MALE: 'Masculino',
  FEMALE: 'Femenino',
}

export const stages = {
  PENDING: 'Por confirmar',
  REJECTED: 'Rechazada',
  ACCEPTED: 'En busca de cupo',
  ACTIVE: 'En curso',
  COMPLETED: 'Completada',
} as const

export const progressStatuses = {
  PENDING: 'Pendiente',
  REJECTED: 'Cancelada',
  ACCEPTED: 'Completada',
} as const

export const durations: Rec = {
  7: 'Una semana',
  14: 'Dos semanas',
  30: 'Un mes',
  90: 'Tres meses',
  180: 'Seis meses',
  365: 'Un año',
}

export const months: Rec = {
  0: 'ENE',
  1: 'FEB',
  2: 'MAR',
  3: 'ABR',
  4: 'MAY',
  5: 'JUN',
  6: 'JUL',
  7: 'AGO',
  8: 'SEP',
  9: 'OCT',
  10: 'NOV',
  11: 'DIC',
}
