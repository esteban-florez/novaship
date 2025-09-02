import prisma from '@/prisma/client'

export async function notify(type: string, receiver: string | string[], data: Rec) {
  if (Array.isArray(receiver)) {
    const notifications = receiver.map(authUserId => ({ type, data, authUserId }))
    await prisma.notification.createMany({ data: notifications })
  } else {
    await prisma.notification.create({
      data: { type, data, authUserId: receiver },
    })
  }
}
