import collect from '@/lib/utils/collection'
import prisma from '../client'
import { connect } from '@/lib/utils/queries'
import { DateTime } from 'luxon'

export default async function custom() {
  const now = DateTime.now()
  const days15Ago = now.minus({ days: 15 }).toJSDate()
  const inOneMonth = now.plus({ months: 1 }).toJSDate()
  // Location
  const maracay = await prisma.location.findFirstOrThrow({
    where: {
      title: {
        contains: 'Maracay (Girardot)',
      },
    },
  })

  // First users
  const person = await prisma.person.findUniqueOrThrow({
    where: { email: 'u1@user.dev' },
  })

  const institute = await prisma.institute.findUniqueOrThrow({
    where: { email: 'i1@institute.dev' },
  })

  const company = await prisma.company.findUniqueOrThrow({
    where: { email: 'c1@company.dev' },
  })

  const idsForInternships = {
    personId: person.id,
    instituteId: institute.id,
  }

  // Rejected and Pending Internships
  const anyGrade = await prisma.grade.findFirstOrThrow()
  const anyCategory = await prisma.category.findFirstOrThrow()
  const anotherGrade = await prisma.grade.findFirstOrThrow({
    skip: 1,
  })
  const anotherCategory = await prisma.category.findFirstOrThrow({
    skip: 1,
  })

  await prisma.internship.create({
    data: {
      ...idsForInternships,
      hours: 24,
      status: 'REJECTED',
      categories: connect([anyCategory.id]),
      gradeId: anyGrade.id,
    },
  })

  await prisma.internship.create({
    data: {
      ...idsForInternships,
      hours: 48,
      categories: connect([anotherCategory.id]),
      gradeId: anotherGrade.id,
    },
  })

  // Informatics Accepted Internship
  const informatics = await prisma.category.findFirstOrThrow({
    where: { title: 'Informática' },
  })

  const informaticGrade = await prisma.grade.findFirstOrThrow({
    where: { title: 'Ingeniería Informática' },
  })

  const informaticAcceptedInternship = await prisma.internship.create({
    data: {
      ...idsForInternships,
      hours: 36,
      status: 'ACCEPTED',
      categories: connect([informatics.id]),
      gradeId: informaticGrade.id,
    },
  })

  // Informatics Software Vacant
  const softwareJob = await prisma.job.findFirstOrThrow({
    where: { title: 'Desarrollador de software' },
  })

  const softwareSkills = await prisma.skill.findMany({
    where: {
      OR: [
        { title: 'HTML' },
        { title: 'CSS' },
        { title: 'JavaScript' },
        { title: 'React' },
      ],
    },
  })

  await prisma.vacant.create({
    data: {
      companyId: company.id,
      jobId: softwareJob.id,
      locationId: maracay.id,
      limit: 10,
      duration: 30,
      categories: connect([informatics.id]),
      description: 'Se busca pasante Desarrollador de software para trabajar a tiempo parcial. Únete a nuestra empresa y consigue experiencia en el mundo real.',
      grades: connect([informaticGrade.id]),
      skills: connect(collect(softwareSkills).ids()),
    },
  })

  // Recruitments for Informatic Accepted Internship
  const vacants = collect(await prisma.vacant.findMany({
    where: {
      companyId: {
        not: company.id,
      },
    },
    take: 6,
  }))

  const recruitments = vacants.all().map((vacant, i) => ({
    startsAt: now.plus({ days: 15 }).toJSDate(),
    endsAt: now.plus({ months: 2 }).toJSDate(),
    interested: i % 2 === 0 ? 'PERSON' as const : 'COMPANY' as const,
    internshipId: informaticAcceptedInternship.id,
    vacantId: vacant.id,
  }))

  await prisma.recruitment.createMany({
    data: recruitments,
  })

  // Systemas Active Internship
  const systemsGrade = await prisma.grade.findFirstOrThrow({
    where: { title: 'Ingeniería en Sistemas' },
  })

  const systemsJob = await prisma.job.findFirstOrThrow({
    where: { title: 'Técnico de soporte' },
  })

  const systemsSkills = await prisma.skill.findMany({
    where: {
      OR: [
        { title: 'Sistemas Operativos' },
        { title: 'Hardware' },
        { title: 'Linux' },
      ],
    },
  })

  const systemsVacant = await prisma.vacant.create({
    data: {
      companyId: company.id,
      jobId: systemsJob.id,
      locationId: maracay.id,
      limit: 5,
      duration: 90,
      categories: connect([informatics.id]),
      description: 'Se busca un pasante para trabajar como Técnico de Soporte, a tiempo parcial. Únete a nuestra empresa y consigue experiencia en el mundo real.',
      grades: connect([informaticGrade.id]),
      skills: connect(collect(systemsSkills).ids()),
    },
  })

  const systemsActiveInternship = await prisma.internship.create({
    data: {
      ...idsForInternships,
      hours: 72,
      status: 'ACCEPTED',
      categories: connect([informatics.id]),
      gradeId: systemsGrade.id,
    },
  })

  const systemRecruitments = vacants.all().map((vacant, i) => ({
    startsAt: days15Ago,
    endsAt: inOneMonth,
    interested: i % 2 === 0 ? 'PERSON' as const : 'COMPANY' as const,
    internshipId: systemsActiveInternship.id,
    vacantId: vacant.id,
    status: 'REJECTED' as const,
  }))

  await prisma.recruitment.createMany({
    data: systemRecruitments,
  })

  const acceptedRecruitment = await prisma.recruitment.create({
    data: {
      startsAt: days15Ago,
      endsAt: inOneMonth,
      interested: 'PERSON' as const,
      internshipId: systemsActiveInternship.id,
      vacantId: systemsVacant.id,
      status: 'ACCEPTED' as const,
    },
  })

  const progresses = [
    {
      title: 'Reparación de equipos',
      description: 'Actividades de mantenimiento y reparación de computadores y laptops.',
      hours: 4,
      startsAt: now.minus({ days: 13 }).toJSDate(),
      endsAt: now.minus({ days: 13 }).toJSDate(),
      status: 'ACCEPTED' as const,
      recruitmentId: acceptedRecruitment.id,
    },
    {
      title: 'Respaldo de discos',
      description: 'Respaldo de 20 discos duros SATA pertenecientes a los clientes.',
      hours: 10,
      startsAt: now.minus({ days: 10 }).toJSDate(),
      endsAt: now.minus({ days: 7 }).toJSDate(),
      status: 'ACCEPTED' as const,
      recruitmentId: acceptedRecruitment.id,
    },
    {
      title: 'Monitoreo de sistema',
      description: 'Monitoreo de las actividades del sistema de redes de la empresa.',
      hours: 2,
      startsAt: now.minus({ days: 5 }).toJSDate(),
      endsAt: now.minus({ days: 5 }).toJSDate(),
      status: 'REJECTED' as const,
      recruitmentId: acceptedRecruitment.id,
    },
    {
      title: 'Revisión de equipos',
      description: 'Revisión del estado de los equipos del laboratorio de la empresa.',
      hours: 4,
      startsAt: now.minus({ days: 1 }).toJSDate(),
      endsAt: now.toJSDate(),
      status: 'PENDING' as const,
      recruitmentId: acceptedRecruitment.id,
    },
  ]

  progresses.reverse()

  await prisma.progress.createMany({
    data: progresses,
  })
}
