import prisma from './client'
import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

export const seederQueries = {
  persons: 30,
  companies: 15,
  institute: 15,
  internships: 20,
  hirings: 15,
  interviews: 15,
}

async function seed() {
  console.time('Seeded')
  const seedFilesPath = path.join(__dirname, 'seeders')
  const seedFiles = fs.readdirSync(seedFilesPath)

  for (const seedFile of seedFiles) {
    const seedFilePath = path.join(seedFilesPath, seedFile)
    const seedFileUrl = pathToFileURL(seedFilePath).href
    const { default: seedFunction } = await import(seedFileUrl)
    console.time(seedFile)
    await seedFunction()
    console.timeEnd(seedFile)
  }
  console.timeEnd('Seeded')
}

let totalQueries = 0

interface LogProps {
  name: string
  value?: number
  bold?: boolean
  color?: string
}

function formatLog({ name, value = 0, bold = false, color = '\x1b[35m' }: LogProps) {
  const hasValue = value !== null && value > 0
  const isBold = bold !== null && bold
  totalQueries += value

  const options = {
    paddedName: name.padEnd(20, ' '),
    resetCode: '\x1b[0m',
    boldCode: '\x1b[1m',
  }
  const formattedName = isBold
    ? `${options.boldCode}${color}${options.paddedName}${options.resetCode}`
    : `${color}${options.paddedName}${options.resetCode}`
  const formattedValue = hasValue ? `${color}${value}${options.resetCode}` : ''

  if (isBold) {
    const result = hasValue ? `\n${formattedName} Total: ${formattedValue}\n` : `\n${formattedName}\n`
    console.log(result); return
  }

  if (hasValue) {
    console.log(`${formattedName} Total: ${formattedValue}`); return
  }

  console.log(formattedName)
}

seed()
  .then(async () => {
    console.time('Logging')
    formatLog({ name: 'Database seeded successfully 👌', bold: true, color: '\x1b[32m' })
    formatLog({ name: '🟣 AuthKeys', value: await prisma.authKey.count() })
    formatLog({ name: '🟣 Categories', value: await prisma.category.count() })
    formatLog({ name: '🟣 Companies', value: await prisma.company.count() })
    formatLog({ name: '🟣 Experiences', value: await prisma.experience.count() })
    formatLog({ name: '🟣 Categories', value: await prisma.category.count() })
    formatLog({ name: '🟣 Grades', value: await prisma.grade.count() })
    formatLog({ name: '🟣 Hirings', value: await prisma.hiring.count() })
    formatLog({ name: '🟣 Institutes', value: await prisma.institute.count() })
    formatLog({ name: '🟣 Internships', value: await prisma.internship.count() })
    formatLog({ name: '🟣 Jobs', value: await prisma.job.count() })
    formatLog({ name: '🟣 Locations', value: await prisma.location.count() })
    formatLog({ name: '🟣 Memberships', value: await prisma.membership.count() })
    formatLog({ name: '🟣 Offers', value: await prisma.offer.count() })
    formatLog({ name: '🟣 Participations', value: await prisma.participation.count() })
    formatLog({ name: '🟣 Persons', value: await prisma.person.count() })
    formatLog({ name: '🟣 Projects', value: await prisma.project.count() })
    formatLog({ name: '🟣 Recruitments', value: await prisma.recruitment.count() })
    formatLog({ name: '🟣 Revisions', value: await prisma.revision.count() })
    formatLog({ name: '🟣 Skills', value: await prisma.skill.count() })
    formatLog({ name: '🟣 Substasks', value: await prisma.subtask.count() })
    formatLog({ name: '🟣 Subparticipations', value: await prisma.subparticipation.count() })
    formatLog({ name: '🟣 Tasks', value: await prisma.task.count() })
    formatLog({ name: '🟣 Teams', value: await prisma.team.count() })
    formatLog({ name: '🟣 Users', value: await prisma.authUser.count() })
    formatLog({ name: '🟣 Vacants', value: await prisma.vacant.count() })
    formatLog({ name: 'Total queries', value: totalQueries, bold: true })
    console.timeEnd('Logging')
  })
  .catch((error) => {
    console.error('Seeding error:', error)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
