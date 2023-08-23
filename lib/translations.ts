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
  create: 'Registrar',
  project: 'Proyecto',
  admin: 'Administración',
  tasks: 'Tareas',
  task: 'Tarea',
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

export const modes = {
  REMOTE: 'Remoto',
  ONSITE: 'Presencial',
  HYBRID: 'Híbrido',
}

export const targets = {
  INTERNS: 'Pasantes',
  CANDIDATS: 'Postulantes',
}
