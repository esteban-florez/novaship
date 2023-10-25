import { type NotificationsRecord } from '../types'

export const templates: NotificationsRecord = {
  'internship-accepted': ({ grade, internshipId, student }) => ({
    title: 'Tu solicitud de pasantía ha sido aceptada.',
    content: `${student} ha aceptado tu solicitud de pasantía para la carrera de ${grade}.`,
    href: `/home/internships/${internshipId}`,
  }),

  'recruitment-rejected': ({ grade, companyId, student }) => ({
    title: 'Tu solicitud de pasantía ha sido rechazada.',
    content: `${student} ha aceptado rechazado de pasantía para la carrera de ${grade}.`,
    href: `/home/companies/${companyId}/recrutiments`,
  }),
}
