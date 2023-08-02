import prisma from '../client'
import data from '@/prisma/data/offers.json'
import numbers from '@/lib/utils/number'
import types from '@/lib/utils/types'
import { Mode, Schedule, Target } from '@prisma/client'
import { seederQueries } from '../seed'

const offers = data

const ExpireOptions = [1, 3, 5, 7, 15, 30]

export default async function offer() {
  const locationCount = await prisma.location.count()
  const companiesCount = await prisma.company.count()

  for (let i = 1; i <= seederQueries.offers; i++) {
    const skipCompanies = numbers(1, companiesCount - 1).randomBetween()
    const skipLocations = numbers(1, locationCount - 1).randomBetween()
    const selectedCompany = await prisma.company.findFirst({ skip: skipCompanies })
    const selectedLocation = await prisma.location.findFirst({ skip: skipLocations })
    const position = numbers(offers.titles.length - 1).randomBetween()
    const title = offers.titles[position]
    const description = offers.titles[position]

    const date = new Date()
    date.setDate(date.getDate() + ExpireOptions[Math.floor(Math.random() * ExpireOptions.length)])

    await prisma.offer.create({
      data: {
        title,
        description,
        limit: numbers(10, 50).randomBetween(),
        mode: types(Mode).random(),
        salary: numbers(80, 520).randomBetween(),
        schedule: types(Schedule).random(),
        target: types(Target).random(),
        expiresAt: date,
        company: {
          connect: {
            id: selectedCompany?.id,
          },
        },
        location: {
          connect: {
            id: selectedLocation?.id,
          },
        },
      },
    })
  }
}
