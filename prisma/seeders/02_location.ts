import prisma from '../client'
import locations from '@/prisma/data/locations.json'

export default async function location() {
  const locationsData = Object.entries(locations).flatMap(([state, cities]) => {
    return cities.map(city => ({
      title: `${state}, ${city}`,
    }))
  })

  await prisma.location.createMany({
    data: locationsData,
  })
}
