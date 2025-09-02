import prisma from '../client'
import types from '@/lib/utils/types'
import { type Status, Interested } from '@prisma/client'
import collect from '@/lib/utils/collection'
import numbers from '@/lib/utils/number'
import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon'

//  Me averguenzo de haber escrito este código.
//                         Esteban Florez, 2023
export default async function recruitment() {
  const internships = await prisma.internship.findMany({
    where: { status: 'ACCEPTED' },
    select: { id: true, hours: true },
  })

  const vacants = collect(await prisma.vacant.findMany({ select: { id: true } }))
  const interested = types(Interested)
  const statuses = collect(['PENDING', 'REJECTED'] as const)
  const recruitmentsRange = numbers(0, 5)
  const isAcceptedProbability = numbers(1, 5)

  const recruitments = internships.flatMap(internship => {
    const recruitments = []
    const count = recruitmentsRange.random()
    let oneWasAccepted = false

    for (let i = 0; i < count; i++) {
      const isAccepted = isAcceptedProbability.random() === 3
      const status = isAccepted
        ? 'ACCEPTED'
        : statuses.random().first()

      if (isAccepted) {
        oneWasAccepted = true
      }

      const startDate = isAccepted
        ? faker.date.recent({ days: 10 })
        : faker.date.soon({ days: 4 })

      const startLuxon = DateTime.fromJSDate(startDate)

      const endDate = faker.date.between({
        from: startLuxon.plus({ months: 1 }).toJSDate(),
        to: startLuxon.plus({ months: 2 }).toJSDate(),
      })

      recruitments.push({
        startsAt: startDate,
        endsAt: endDate,
        status: status as Status,
        internshipId: internship.id,
        interested: interested.random(),
        vacantId: vacants.random().first().id,
      })
    }

    return !oneWasAccepted
      ? recruitments
      : recruitments.map(recruitment => ({
        ...recruitment,
        status: recruitment.status === 'ACCEPTED'
          ? recruitment.status
          : 'REJECTED' as Status,
      }))
  })

  await prisma.recruitment.createMany({ data: recruitments })
}
