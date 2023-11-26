import { randomCode } from '@/lib/utils/code'
import prisma from '../client'
import collect from '@/lib/utils/collection'
import { getExpirationDate } from '@/lib/utils/date'

async function createMembership(userId: string, teamId: string) {
  return await prisma.invitation.create({
    data: {
      personId: userId,
      teamId,
      membership: {
        create: {
          teamId,
          personId: userId,
        },
      },
    },
  })
}

export default async function custom() {
  const categories = await prisma.category.findMany({ skip: 8, take: 5, select: { id: true } })
  const users = collect(await prisma.person.findMany({ skip: 1, take: 5, select: { id: true } })).ids()
  const institute = await prisma.institute.findFirstOrThrow({ take: 1, select: { id: true } })
  const grade = await prisma.grade.findFirstOrThrow({ take: 1, select: { id: true } })
  const job = await prisma.job.findFirstOrThrow({ take: 1, select: { id: true } })
  const company = await prisma.company.findFirstOrThrow({ take: 1, select: { id: true } })

  // Location
  const maracay = await prisma.location.findFirstOrThrow({
    where: {
      title: { contains: 'Maracay (Girardot)' },
    },
    select: { id: true },
  })

  // Project where im in
  const project = await prisma.project.create({
    data: {
      code: randomCode('project'),
      title: 'Proyecto administrativo',
      description: 'Proyecto de gestión administrativo-tecnológico de la empresa Mayorca en su departamento de tecnologías y finanzas',
      visibility: 'PUBLIC',
      image: '/project3.jpg',
      categories: {
        connect: categories,
      },
      team: {
        create: {
          code: randomCode('team'),
          name: 'Equipo de finanzas',
          description: 'Disponemos de estrategias de marketing y gestión administrativo-social dedicados al desarrollo de la empresa Mayorca',
          categories: {
            connect: categories,
          },
          leader: {
            create: {
              person: {
                connect: { id: users[0] },
              },
            },
          },
        },
      },
    },
  })

  for (let i = 1; i < users.length - 1; i++) {
    await createMembership(users[i], project.teamId ?? '')
  }

  const memberships = await prisma.membership.findMany({
    take: 5,
    orderBy: {
      createdAt: 'asc',
    },
    select: {
      id: true,
    },
  })

  await prisma.team.update({
    where: {
      id: project.teamId ?? '',
    },
    data: {
      memberships: { connect: memberships },
    },
  })

  // Task for project
  const participationsData = users.map(personId => ({ personId }))
  await prisma.project.update({
    where: { id: project.id },
    data: {
      tasks: {
        create: {
          title: 'Gestionar registro en excel',
          description: 'Se requiere actualizar y añadir nuevos registros en el archivo excel de finanzas año 2023',
          personId: users[4],
          participations: {
            createMany: { data: participationsData },
          },
        },
      },
    },
  })

  // Internships
  // vacant categories, skills, grades not work on connection
  await prisma.internship.create({
    data: {
      hours: 24,
      categories: { connect: categories },
      personId: users[0],
      instituteId: institute.id,
      gradeId: grade.id,
      recruitments: {
        create: {
          startsAt: new Date(),
          endsAt: getExpirationDate(7),
          interested: 'PERSON',
          status: 'ACCEPTED',
          vacant: {
            create: {
              description: 'Se solicita pasante en el área de finanzas con poca experiencia laboral',
              limit: 6,
              duration: 30,
              jobId: job.id,
              companyId: company.id,
              locationId: maracay.id,
            },
          },
          progresses: {
            create: {
              title: 'Registro de estrategias financieras',
              description: 'Análisis y discuciones de estrategias de marketing',
              hours: 12,
              status: 'ACCEPTED',
              startsAt: new Date(),
              endsAt: getExpirationDate(1),
            },
          },
        },
      },
    },
  })
}
