import lucia from '@/lib/auth/lucia'
import prisma from '../client'

export default async function custom() {
  const { id: locationId } = await prisma.location.findFirstOrThrow()

  const instituteUser = await lucia.createUser({
    primaryKey: {
      providerId: 'email',
      providerUserId: 'universidad@ejemplo.com',
      password: 'Password.12',
    },
    attributes: {
      type: 'INSTITUTE',
    },
  })

  await prisma.institute.create({
    data: {
      name: 'Universidad Universitaria',
      description: 'Somos una institución comprometida con la educación de nuestros estudiantes, basada en la construcción de una sociedad trabajadora.',
      email: 'universidad@ejemplo.com',
      phone: '02431231234',
      certification: '/rif.png',
      rif: '1231231231',
      authUser: {
        connect: {
          id: instituteUser.id,
        },
      },
      location: {
        connect: {
          id: locationId,
        },
      },
      verifiedAt: new Date(),
    },
  })
}
