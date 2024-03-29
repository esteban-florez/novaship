import { type NotificationsRecord } from '../types'

export const templates: NotificationsRecord = {
  'internship-created': ({ internshipId, institute }) => ({
    title: 'Has sido postulado como pasante.',
    content: `La institución "${institute}" te ha postulado como pasante.`,
    href: `/home/internships/${internshipId}`,
  }),

  'internship-accepted': ({ grade, internshipId, student }) => ({
    title: 'La postulación de pasante ha sido aceptado.',
    content: `${student} ha aceptado tu postulación de pasante para la carrera de ${grade}.`,
    href: `/home/internships/${internshipId}`,
  }),

  'internship-rejected': ({ grade, internshipId, student }) => ({
    title: 'La postulación de pasante ha sido rechazado.',
    content: `${student} ha rechazado tu postulación de pasante para la carrera de ${grade}.`,
    href: `/home/internships/${internshipId}`,
  }),

  'company-recruitment-created': ({ grade, internshipId, company }) => ({
    title: 'Solicitud de pasantía recibida.',
    content: `La empresa "${company}" te ha enviado una solicitud de pasantía para la carrera de ${grade}.`,
    href: `/home/internships/${internshipId}`,
  }),

  'person-recruitment-created': ({ job, student }) => ({
    title: 'Solicitud de pasantía recibida.',
    content: `El estudiante "${student}" te ha enviado una solicitud de pasantía para el cupo de ${job} que publicaste.`,
    href: '/home/internships/recruitments',
  }),

  'recruitment-accepted': ({ grade, name }) => ({
    title: 'Solicitud de pasantía aceptada.',
    content: `${name} ha aceptado tu solictud de pasantía para la carrera de ${grade}.`,
    href: '/home/internships/recruitments',
  }),

  'recruitment-rejected': ({ grade, name }) => ({
    title: 'Solicitud de pasantía rechazada.',
    content: `${name} ha rechazado tu solictud de pasantía para la carrera de ${grade}.`,
    href: '/home/internships/recruitments',
  }),

  'progress-updated': ({ grade, company, internshipId }) => ({
    title: 'Progreso de pasantía.',
    content: `${company} ha actualizado el progreso de la pasantía para la carrera de ${grade}.`,
    href: `/home/internships/${internshipId}`,
  }),

  'internship-completed': ({ grade, internshipId }) => ({
    title: 'Pasantía completada.',
    content: `Se han completado las horas de la pasantía para la carrera de ${grade}.`,
    href: `/home/internships/${internshipId}`,
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

  'invitation-asked': ({ user, team, teamId }) => ({
    title: 'Te ha enviado una solicitud.',
    content: `${user} desea formar parte de tu grupo ${team}.`,
    href: `/home/teams/${teamId}`,
  }),

  'invitation-sent': ({ user, team }) => ({
    title: 'Te han enviado una solicitud.',
    content: `${user} te ha invitado a formar parte de su grupo ${team}.`,
    href: '/home/invitations',
  }),

  'invitation-accepted': ({ user, team, teamId }) => ({
    title: 'La solicitud ha sido aceptada.',
    content: `${user} ha aceptado tu solicitud para unirse al grupo ${team}.`,
    href: `/home/teams/${teamId}`,
  }),

  'invitation-rejected': ({ user, team, teamId }) => ({
    title: 'La solicitud ha sido rechazada.',
    content: `${user} ha rechazado tu solicitud para unirse al grupo ${team}.`,
    href: `/home/teams/${teamId}`,
  }),
}
