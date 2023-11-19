import prisma from '@/prisma/client'
import { getInternships } from '../internships'
import { type Status } from '@prisma/client'
import { getInternshipStage } from '@/lib/utils/tables'
import { type InternshipWithRelations } from '@/lib/types'

export async function getOtherInternships(userId: string) {
  return await prisma.internship.count({
    where: {
      NOT: {
        instituteId: userId,
      },
    },
  })
}

export async function getInternshipsCount(userId: string) {
  const totalInternships = await prisma.internship.count({
    where: { instituteId: userId },
  })
  const internshipCountByMonth = await prisma.internship.groupBy({
    by: ['createdAt'],
    _count: true,
    where: { instituteId: userId },
    orderBy: {
      createdAt: 'asc',
    },
  })

  return { total: totalInternships, count: internshipCountByMonth }
}

export async function getRecruitmentsCount(userId: string) {
  const internships = await getInternships({ where: { instituteId: userId } })
  const totalRecruitments = await prisma.recruitment.count({
    where: { interested: 'PERSON' },
  })
  const recruitmentByMonth = await prisma.recruitment.findMany({
    where: { interested: 'PERSON' },
    select: {
      status: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  const recruitmentCountByMonth = recruitmentByMonth.map((recruitment) => {
    return {
      ...recruitment,
      _count: 1,
    }
  })

  return { total: totalRecruitments, count: recruitmentCountByMonth, recruitments: recruitmentByMonth, internships }
}

export function getRecruitmentsFiltered(recruitments: Array<{ status: Status, createdAt: Date }>) {
  const acceptedRecruitments = recruitments.filter(
    (recruitment) => recruitment.status === 'ACCEPTED'
  )
  const rejectedRecruitments = recruitments.filter(
    (recruitment) => recruitment.status === 'REJECTED'
  )

  return { accepted: acceptedRecruitments, rejected: rejectedRecruitments }
}

export function getStatuses(internships: InternshipWithRelations[]) {
  const stages = internships.map((internship) => {
    return getInternshipStage(internship)
  })

  const internshipsAccepted = stages.filter(
    (stage) => stage === 'ACCEPTED'
  ).length
  const internshipsInProgress = stages.filter(
    (stage) => stage === 'ACTIVE'
  ).length
  const internshipsCompleted = stages.filter(
    (stage) => stage === 'COMPLETED'
  ).length

  return { accepted: internshipsAccepted, inProgress: internshipsInProgress, completed: internshipsCompleted }
}

export function getMonthlyInternships(internships: InternshipWithRelations[]) {
  const internshipsCount: number[] = Array(12).fill(0)
  const months = Array.from(Array(12).keys())

  internships.forEach((internship) => {
    const month = months[internship.createdAt.getMonth()]
    internshipsCount[month] == null
      ? (internshipsCount[month] = 1)
      : (internshipsCount[month] += 1)
  })

  return internshipsCount
}
