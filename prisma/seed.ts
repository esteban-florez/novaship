import prisma from './client'
import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

import dataSkills from '@/prisma/data/skills.json'
import dataFields from '@/prisma/data/fields.json'
import dataProjects from '@/prisma/data/projects.json'
import dataTasks from '@/prisma/data/tasks.json'
import dataSubtasks from '@/prisma/data/subtasks.json'
import dataExperiences from '@/prisma/data/experiences.json'

export const seederQueries = {
  persons: 20,
  institute: 20,
  companies: 20,
  offers: 20,
  skills: dataSkills.length,
  fields: dataFields.length,
  projects: dataProjects.titles.length,
  tasks: dataTasks.titles.length,
  subtasks: dataSubtasks.titles.length,
  experiences: dataExperiences.names.length,
  memberships: 30,
  participations: 20,
  revisions: 12,
  reviews: 40,
  candidacies: 20,
  postulations: 20,
  recruitments: 10,
  interviews: 15,
}

async function seed() {
  const seedFilesPath = path.join(__dirname, 'seeders')
  const seedFiles = fs.readdirSync(seedFilesPath)

  for (const seedFile of seedFiles) {
    const seedFilePath = path.join(seedFilesPath, seedFile)
    const seedFileUrl = pathToFileURL(seedFilePath).href
    const { default: seedFunction } = await import(seedFileUrl)
    await seedFunction(prisma)
  }
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
    formatLog({ name: 'Database seeded successfully 👌', bold: true, color: '\x1b[32m' })
    formatLog({ name: '🟣 AuthKeys', value: await prisma.authKey.count() })
    formatLog({ name: '🟣 AuthSessions', value: await prisma.authSession.count() })
    formatLog({ name: '🟣 Candidacies', value: await prisma.candidacy.count() })
    formatLog({ name: '🟣 Companies', value: await prisma.company.count() })
    formatLog({ name: '🟣 Experiences', value: await prisma.experience.count() })
    formatLog({ name: '🟣 Fields', value: await prisma.field.count() })
    formatLog({ name: '🟣 Institutes', value: await prisma.institute.count() })
    formatLog({ name: '🟣 Internships', value: await prisma.internship.count() })
    formatLog({ name: '🟣 Interviews', value: await prisma.interview.count() })
    formatLog({ name: '🟣 Locations', value: await prisma.location.count() })
    formatLog({ name: '🟣 Memberships', value: await prisma.membership.count() })
    formatLog({ name: '🟣 Offers', value: await prisma.offer.count() })
    formatLog({ name: '🟣 Participations', value: await prisma.participation.count() })
    formatLog({ name: '🟣 Persons', value: await prisma.person.count() })
    formatLog({ name: '🟣 Postulations', value: await prisma.postulation.count() })
    formatLog({ name: '🟣 Projects', value: await prisma.project.count() })
    formatLog({ name: '🟣 Recruitments', value: await prisma.recruitment.count() })
    formatLog({ name: '🟣 Reviews', value: await prisma.review.count() })
    formatLog({ name: '🟣 Revisions', value: await prisma.revision.count() })
    formatLog({ name: '🟣 Skills', value: await prisma.skill.count() })
    formatLog({ name: '🟣 Tasks', value: await prisma.task.count() })
    formatLog({ name: '🟣 Substasks', value: await prisma.subtask.count() })
    formatLog({ name: '🟣 Users', value: await prisma.authUser.count() })
    formatLog({ name: 'Total queries', value: totalQueries, bold: true })
  })
  .catch((error) => {
    console.error('Seeding error:', error)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
