import prisma from '@/prisma/client'

export default async function createPasswordReset(userId: string) {
  const { person, company, admin, institute } = await prisma.authUser.findUniqueOrThrow({
    where: { id: userId },
    include: {
      person: true,
      company: true,
      institute: true,
      admin: true,
    },
  })

  const username = person?.name ?? company?.name ?? admin?.name ?? institute?.name ?? 'estimado usuario'

  const { id: resetId } = await prisma.resets.create({
    data: {
      authUserId: userId,
    },
  })

  return {
    username,
    resetId,
  }
}
