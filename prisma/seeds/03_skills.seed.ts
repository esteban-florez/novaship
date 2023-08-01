import prisma from "../client"
import data from '@/prisma/seeds-data.json'

const skills = data.skills

export default async function skill() {
  await prisma.skill.createMany({
    data: skills.map((skill) => ({ title: skill })),
  })
}