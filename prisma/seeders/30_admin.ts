import lucia from '@/lib/auth/lucia'
import data from '../data/admins.json'
import prisma from '../client'

export default async function admins() {
  data.forEach(async ({ email, image, name, password }) => {
    const { id: authUserId } = await lucia.createUser({
      primaryKey: {
        providerId: 'email',
        providerUserId: email,
        password,
      },
      attributes: { type: 'ADMIN' },
    })

    await prisma.admin.create({
      data: { name, email, image, authUserId },
    })
  })
}
