import { type NotificationsRecord } from '../types'

export const templates: NotificationsRecord = {
  'internship-created': ({ internshipId, institute }) => ({
    title: 'Nueva solicitud de pasantía.',
    content: `La institución "${institute}" te ha enviado una solicitud de pasantía.`,
    href: `/home/internships/${internshipId}`,
  }),

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

  'hiring-created': ({ company, title, offerId }) => ({
    title: 'Nueva solicitud de trabajo.',
    content: `La empresa ${company} te ha enviado una invitación para la oferta ${title}`,
    href: `/home/offers/${offerId}`,
  }),

  'hiring-accepted': ({ user, title, offerId }) => ({
    title: 'Tu solicitud de oferta ha sido aceptada.',
    content: `${user} ha aceptado tu postulación para la oferta ${title}.`,
    href: `/home/offers/${offerId}`,
  }),

  'hiring-declined': ({ user, title, offerId }) => ({
    title: 'Tu solicitud de oferta ha sido rechazada.',
    content: `${user} ha rechazado tu postulación para la oferta ${title}.`,
    href: `/home/offers/${offerId}`,
  }),
}
