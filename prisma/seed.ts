import {
  TaskStatus,
  UserType,
  Visibility,
} from '@prisma/client'
import data from '@/lib/seederData.json'
import prisma from './client'

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const getValueFromType = (type: object) => {
  return Object.values(type)[Math.floor(Math.random() * Object.values(type).length)]
}

const fields: string[] = data.fields.titles
const skills: string[] = data.skills.titles
const projects: string[] = data.projects.titles

const QUERIES = 50

async function main() {
  await prisma.location.createMany({
    data: data.locations.map((location) => ({ title: location })),
  })

  for (let i = 0; i < QUERIES; i++) {
    const selectedUserType = getValueFromType(UserType)

    // Approved✅✅
    if (selectedUserType === 'PERSON') {
      const selectedTask = (data.tasks.titles.length * Math.random()) | 0
      const selectedSubTask = (data.subtasks.titles.length * Math.random()) | 0
      const selectedExperience = (data.experiences.roles.length * Math.random()) | 0
      const username = `${
      data.users.names[(data.users.names.length * Math.random()) | 0]
    } ${data.users.surnames[(data.users.surnames.length * Math.random()) | 0]}`

      let selectedField = (fields.length * Math.random()) | 0
      let selectedSkill = (skills.length * Math.random()) | 0
      let selectedProject = (data.projects.titles.length * Math.random()) | 0

      if (skills[selectedSkill] === null && skills[selectedSkill] === undefined) {
        selectedSkill = (skills.length * Math.random()) | 0
      }

      if (fields[selectedField] === null && fields[selectedField] === undefined) {
        selectedField = (fields.length * Math.random()) | 0
      }

      if (projects[selectedProject] === null && projects[selectedProject] === undefined) {
        selectedProject = (projects.length * Math.random()) | 0
      }

      const fieldTitle = fields[selectedField]
      const skillTitle = skills[selectedSkill]
      const projectTitle = projects[selectedProject]

      fields.splice(selectedField, 1)
      skills.splice(selectedSkill, 1)
      projects.splice(selectedProject, 1)

      await prisma.authUser.create({
        data: {
          type: selectedUserType,
          person: {
            create: {
              name: username,
              email: `u${i}@user.dev`,
              phone: random(10000000000, 11000000000).toString(),
              bio: data.users.descriptions[
                (data.users.descriptions.length * Math.random()) | 0
              ],
              profile: {
                create: {
                  title: data.profiles.titles[(data.profiles.titles.length * Math.random()) | 0],
                  description:
                    data.profiles.descriptions[
                      (data.profiles.descriptions.length * Math.random()) | 0
                    ],
                  schedule: {},
                  location: {
                    connect: {
                      title:
                        data.locations[
                          (data.locations.length * Math.random()) | 0
                        ],
                    },
                  },
                  fields: {
                    create: {
                      title: fieldTitle,
                    },
                  },
                  skills: {
                    create: {
                      title: skillTitle,
                    },
                  },
                  experiences: {
                    create: {
                      name: data.experiences.names[
                        (data.experiences.names.length * Math.random()) | 0
                      ],
                      role: data.experiences.roles[selectedExperience],
                      description:
                        data.experiences.descriptions[selectedExperience],
                      phone: random(60000000000, 61000000000).toString(),
                      from: new Date(),
                      to: new Date(),
                    },
                  },
                },
              },
              projects: {
                create: {
                  title: projectTitle,
                  description: data.projects.descriptions[selectedProject],
                  visibility: getValueFromType(Visibility),
                  tasks: {
                    create: {
                      title: data.tasks.titles[selectedTask],
                      description: data.tasks.descriptions[selectedTask],
                      status: getValueFromType(TaskStatus),
                      subtasks: {
                        create: {
                          title: data.subtasks.titles[selectedSubTask],
                          description:
                            data.subtasks.descriptions[selectedSubTask],
                          status: getValueFromType(TaskStatus),
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      })
    }

    // if (selectedUserType === 'COMPANY') {
    //   const selectedData = (data.companies.names.length * Math.random()) | 0
    //   const selectedOffer = (data.offers.titles.length * Math.random()) | 0

    //   await prisma.authUser.create({
    //     data: {
    //       type: selectedUserType,
    //       company: {
    //         create: {
    //           name: data.companies.names[selectedData],
    //           description: data.companies.descriptions[selectedData],
    //           email: `c${i}@company.dev`,
    //           phone: random(20000000000, 21000000000).toString(),
    //           certification: 'PENDING',
    //           location: {
    //                 connect: {
    //                   title: data.locations[(data.locations.length * Math.random()) | 0],
    //                 },
    //               },
    //           offers: {
    //             create: {
    //               title: data.offers.titles[selectedOffer],
    //               description: data.offers.descriptions[selectedOffer],
    //               mode: getValueFromType(Mode),
    //               schedule: getValueFromType(Schedule),
    //               limit: random(1, 20),
    //               salary: random(130, 610),
    //               target: getValueFromType(Target),
    //               expiresAt: new Date(),
    //               hours: random(32, 50),
    //             },
    //           },
    //         },
    //       },
    //     },
    //   })
    // }

    // Approved✅✅
    if (selectedUserType === 'INSTITUTE') {
      const selectedInstitute =
        (data.institutes.names.length * Math.random()) | 0

      await prisma.authUser.create({
        data: {
          type: selectedUserType,
          institute: {
            create: {
              name: data.institutes.names[selectedInstitute],
              description: data.institutes.descriptions[selectedInstitute],
              email: `i${i}@institute.dev`,
              phone: random(30000000000, 31000000000).toString(),
              certification: 'PENDING',
              location: {
                connect: {
                  title:
                    data.locations[(data.locations.length * Math.random()) | 0],
                },
              },
            },
          },
        },
      })
    }
  }
}

main()
  .then(async () => {
    console.log(
      '\x1b[1m',
      '\x1b[32m',
      '\n\nDatabase seeded successfully 👌\n\n',
      '\x1b[0m'
    )

    console.log(
      '\x1b[1m',
      '\x1b[31m',
      '{ NOTE: Company and their relationships isn\'t working }',
      '\x1b[0m\n'
    )
    console.log(
      '\x1b[1m',
      '\x1b[35m',
      `Total queries: ${QUERIES}`,
      '\x1b[0m\n'
    )
    console.log(
      '\x1b[35m',
      `🟣 Users: ${await prisma.authUser.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Persons: ${await prisma.person.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Profiles: ${await prisma.profile.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Companies: ${await prisma.company.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Offers: ${await prisma.offer.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Institutes: ${await prisma.institute.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Fields: ${await prisma.field.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Skills: ${await prisma.skill.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Experiences: ${await prisma.experience.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Projects: ${await prisma.project.count()}`,
      '\x1b[0m'
    )
    console.log('\x1b[35m', `🟣 Tasks: ${await prisma.task.count()}`, '\x1b[0m')
    console.log(
      '\x1b[35m',
      `🟣 Participations: ${await prisma.participation.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Substasks: ${await prisma.subtask.count()}`,
      '\x1b[0m'
    )
    console.log(
      '\x1b[35m',
      `🟣 Locations: ${await prisma.location.count()}`,
      '\x1b[0m'
    )
  })
  .catch(async (e) => {
    console.log("\nUgh, there's an error 😒\n")
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
