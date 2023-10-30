import prisma from '@/prisma/client'
import { templates } from './templates'

export async function getNotifications(authUserId: string, all = true) {
  const rawNotifications = await prisma.notification.findMany({
    where: { authUserId },
    take: all ? undefined : 3,
    orderBy: {
      createdAt: 'asc',
    },
  })

  return rawNotifications.map(notification => {
    const { type, data: rawData } = notification
    const template = templates[type]

    if (template === undefined) {
      throw new Error(`Notification type "${type}" doesn't exist.`)
    }

    return {
      ...notification,
      display: template(rawData as Rec),
    }
  })
}
