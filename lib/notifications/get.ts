import prisma from '@/prisma/client'
import { templates } from './templates'

export async function getNotifications(authUserId: string, take?: number, skip?: number) {
  const rawNotifications = await prisma.notification.findMany({
    where: { authUserId },
    take,
    skip,
    orderBy: {
      createdAt: 'desc',
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
