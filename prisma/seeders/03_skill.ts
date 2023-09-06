import prisma from '../client'
import skills from '@/prisma/data/skills.json'

export default async function skill() {
  await prisma.skill.createMany({
    data: skills.map((skill) => ({ title: skill })),
  })
}
