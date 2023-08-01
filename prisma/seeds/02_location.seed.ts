import prisma from "../client"
import data from '@/prisma/seeds-data.json'

const locations = data.locations

export default async function location() {
  await prisma.location.createMany({
    data: locations.map((location) => ({ title: location })),
  })
}