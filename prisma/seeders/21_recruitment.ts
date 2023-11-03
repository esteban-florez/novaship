import prisma from '../client'
import types from '@/lib/utils/types'
import { type Status, Interested } from '@prisma/client'
import collect from '@/lib/utils/collection'
import numbers from '@/lib/utils/number'

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
  const internshipsToUpdate: Record<string, number> = {}

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
        const completed = numbers(0, internship.hours).random()
        internshipsToUpdate[internship.id] = completed
      }

      recruitments.push({
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

  Object.entries(internshipsToUpdate)
    .forEach(async ([id, completed]) => {
      await prisma.internship.update({
        where: { id },
        data: { completed },
      })
    })

  await prisma.recruitment.createMany({ data: recruitments })
}
