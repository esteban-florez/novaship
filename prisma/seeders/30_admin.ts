import lucia from '@/lib/auth/lucia'
import prisma from '../client'

interface Adcred {
  email: string
  image: string
  name: string
  password: string
}

export default async function admins() {
  if (process.env.ADCRED === undefined || process.env.ADCRED === '') {
    return
  }

  const data = JSON.parse(process.env.ADCRED) as Adcred[]

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
