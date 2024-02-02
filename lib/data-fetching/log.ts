import prisma from '@/prisma/client'

export type LogStatus = 'Success' | 'Error' | 'Warning' | 'Info'

interface Props {
  title: string
  description?: string
  status: LogStatus
  authUserId: string
}

export default async function logEvent({ title, status, description, authUserId }: Props) {
  return await prisma.log.create({
    data: {
      title,
      description,
      status,
      authUserId,
    },
  })
}
