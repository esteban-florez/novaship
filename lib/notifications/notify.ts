import prisma from '@/prisma/client'

interface NotifyParams {
  receiver: string | string[]
  type: string
  data: Rec
}

export async function notify({ data, receiver, type }: NotifyParams) {
  if (Array.isArray(receiver)) {
    const notifications = receiver.map(authUserId => ({ type, data, authUserId }))
    await prisma.notification.createMany({ data: notifications })
  } else {
    await prisma.notification.create({
      data: { type, data, authUserId: receiver },
    })
  }
}
