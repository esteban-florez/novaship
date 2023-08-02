import prisma from './client'
import fs from 'fs'
import path from 'path'
import data from '@/prisma/seeds-data.json'

export const seederQueries = {
  person: 20,
  profiles: 20,
  institute: 20,
  companies: 20,
  offers: 20,
  skills: data.skills.length,
  fields: data.fields.length,
  projects: data.projects.titles.length,
  tasks: data.tasks.titles.length,
  subtasks: data.subtasks.titles.length,
  experiences: data.experiences.names.length,
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
    const { default: seedFunction } = await import(seedFilePath)
    await seedFunction(prisma)
  }
}

seed()
  .then(async () => {
    console.log(
      '\x1b[1m',
      '\x1b[32m',
      '\nDatabase seeded successfully 👌\n',
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Candidacies: ${await prisma.candidacy.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Companies: ${await prisma.company.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Experiences: ${await prisma.experience.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Fields: ${await prisma.field.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Institutes: ${await prisma.institute.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Internships: ${await prisma.internship.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Interviews: ${await prisma.interview.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Locations: ${await prisma.location.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Memberships: ${await prisma.membership.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Offers: ${await prisma.offer.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Participations: ${await prisma.participation.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Persons: ${await prisma.person.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Postulations: ${await prisma.postulation.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Profiles: ${await prisma.profile.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Projects: ${await prisma.project.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Recruitments: ${await prisma.recruitment.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Reviews: ${await prisma.review.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Revisions: ${await prisma.revision.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Skills: ${await prisma.skill.count()}`,
      '\x1b[0m'
    )
    console.log('\x1b[35m', `🟣 Tasks: ${await prisma.task.count()}`, '\x1b[0m')
    console.log(
      '\x1b[35m',
      `🟣 Substasks: ${await prisma.subtask.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Users: ${await prisma.authUser.count()}`,
      '\x1b[0m'
    )
  })
  .catch((error) => {
    console.error('Seeding error:', error)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
