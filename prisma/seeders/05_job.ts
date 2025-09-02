import prisma from '../client'
import jobs from '@/prisma/data/jobs.json'

export default async function job() {
  await prisma.job.createMany({
    data: jobs.map((job) => ({ title: job })),
  })
}
