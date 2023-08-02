import prisma from '../client'
import data from '@/prisma/data/skills.json'

const skills = data

export default async function skill() {
  await prisma.skill.createMany({
    data: skills.map((skill) => ({ title: skill })),
  })
}
