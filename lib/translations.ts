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
}

export const statuses = {
  sent: 'Enviado',
  read: 'Leído',
  received: 'Recibido',
} as const

export const userTypes = {
  PERSON: 'Persona natural',
  COMPANY: 'Empresa',
  INSTITUTE: 'Institución',
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
  PENDING: 'Pendiente',
  PROGRESS: 'En progreso',
  REVIEW: 'En revisión',
  DONE: 'Terminada',
}

export const expirations = {
  DAYS1: '1 día',
  DAYS3: '3 días',
  DAYS5: '5 días',
  DAYS7: '7 días',
  DAYS15: '15 días',
  DAYS31: '31 días',
}

export const offerStatuses = {
  PENDING: 'Pendiente',
  REJECTED: 'Rechazada',
  ACCEPTED: 'Aceptada',
} as const
