import types from '@/lib/utils/types'
import prisma from '../client'
import { Interested, Mode, Schedule, type Status } from '@prisma/client'
import { getExpirationDate } from '@/lib/utils/date'
import collect from '@/lib/utils/collection'

export default async function custom() {
  const user = await prisma.person.findFirstOrThrow({
    skip: 1,
    take: 1,
    select: {
      id: true,
      categories: {
        select: {
          id: true,
        },
      },
      skills: {
        select: {
          id: true,
        },
      },
    },
  })
  const users = await prisma.person.findMany({ skip: 1, take: 5, select: { id: true } })
  const company = await prisma.company.findFirstOrThrow({ take: 1, select: { id: true } })
  const jobs = await prisma.job.findMany({ take: 5, select: { id: true } })
  const { categories, skills } = user

  // Location
  const maracay = await prisma.location.findFirstOrThrow({
    where: {
      title: { contains: 'Maracay (Girardot)' },
    },
    select: { id: true },
  })

  const firstCategories = collect(categories).random(3).all()
  const firstSkills = collect(skills).random(3).all()
  const secondCategories = collect(categories).random(3).all()
  const secondSkills = collect(skills).random(3).all()
  const thirdCategories = collect(categories).random(3).all()
  const thirdSkills = collect(skills).random(3).all()

  const hiringData = users.map((u, i) => {
    return {
      interested: types(Interested).random() as Interested,
      status: 'ACCEPTED' as Status,
      personId: i === 0 ? user.id : u.id,
    }
  })

  // First offer
  await prisma.offer.create({
    data: {
      title: 'Desarrollador front-end',
      description: 'Se busca desarrollador front-end con 2 años de experiencia laboral',
      companyId: company.id,
      limit: 12,
      jobId: collect(jobs).random().first().id,
      locationId: maracay.id,
      mode: types(Mode).random(),
      salary: 180,
      schedule: types(Schedule).random(),
      hours: 40,
      expiresAt: getExpirationDate(2),
      categories: {
        connect: firstCategories,
      },
      skills: {
        connect: firstSkills,
      },
      hiring: {
        createMany: {
          data: hiringData,
        },
      },
    },
  })

  // Second offer
  await prisma.offer.create({
    data: {
      title: 'Ingeniero en sistemas',
      description: 'Se busca ingeniero en sistemas con años de experiencia laboral para mantenimiento de sistemas de la empresa',
      companyId: company.id,
      limit: 12,
      jobId: collect(jobs).random().first().id,
      locationId: maracay.id,
      mode: types(Mode).random(),
      salary: 180,
      schedule: types(Schedule).random(),
      hours: 40,
      expiresAt: getExpirationDate(2),
      categories: {
        connect: secondCategories,
      },
      skills: {
        connect: secondSkills,
      },
    },
  })

  // Third offer
  await prisma.offer.create({
    data: {
      title: 'Desarrollador back-end',
      description: 'Se busca desarrollador back-end con 1 año de experiencia laboral, tecnologías deseables: php y jQuery',
      companyId: company.id,
      limit: 12,
      jobId: collect(jobs).random().first().id,
      locationId: maracay.id,
      mode: types(Mode).random(),
      salary: 180,
      schedule: types(Schedule).random(),
      hours: 40,
      expiresAt: getExpirationDate(2),
      categories: {
        connect: thirdCategories,
      },
      skills: {
        connect: thirdSkills,
      },
    },
  })
}
