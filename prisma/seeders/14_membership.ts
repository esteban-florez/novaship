import collect from '@/lib/utils/collection'
import prisma from '../client'
import numbers from '@/lib/utils/number'

export default async function membership() {
  const teams = await prisma.team.findMany({ select: { id: true } })
  const personsData = await prisma.person.findMany({ select: { id: true } })
  const companiesData = await prisma.company.findMany({ select: { id: true } })
  const persons = collect(personsData)
  const companies = collect(companiesData)
  const countRange = numbers(0, 20)
  const coinFlip = numbers(0, 1)

  for (const team of teams) {
    const memberCount = countRange.random()
    const randomBoolean = coinFlip.random() === 0

    const leader = await prisma.membership.create({
      data: {
        isLeader: true,
        companyId: randomBoolean ? companies.random().first().id : null,
        personId: randomBoolean ? null : persons.random().first().id,
        teamId: team.id,
      },
    })

    const personsArray = persons.random(memberCount).all()

    const members = personsArray
      .filter(person => person.id !== leader.personId)
      .map(person => ({
        teamId: team.id,
        personId: person.id,
      }))

    await prisma.membership.createMany({
      data: members,
    })
  }
}
