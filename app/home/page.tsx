import EmptyContent from '@/components/EmptyContent'
import BarGraphic from '@/components/graphics/BarGraphic'
import PieGraphic from '@/components/graphics/PieGraphic'
import GrowthIcon from '@/components/home/GrowthIcon'
import HomeCarousel from '@/components/home/HomeCarousel'
import MiniCard from '@/components/home/MiniCard'
import QuickAccess from '@/components/home/QuickAccess'
import Notification from '@/components/layout/Notification'
import { auth } from '@/lib/auth/pages'
import { getPersonRelatedIds } from '@/lib/data-fetching/user'
import { getNotifications } from '@/lib/notifications/get'
import getQuickAccessItems from '@/lib/quickAcessItems'
import collect from '@/lib/utils/collection'
import { daysLeft, diffForHumans, getAllMonths } from '@/lib/utils/date'
import { growthComparedLastMonth } from '@/lib/utils/graph'
import prisma from '@/prisma/client'
import {
  ArrowTopRightOnSquareIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'
import { type Prisma } from '@prisma/client'
import { type ChartData } from 'chart.js'
import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Inicio',
}

export default async function HomePage() {
  const { id: userId, authUserId, type } = await auth.user()
  const quickAccessItems = getQuickAccessItems({ userId, type })

  if (type === 'PERSON') {
    const notifications = await getNotifications(authUserId, 3)
    const { skills, jobs, categories } = await getPersonRelatedIds({
      id: userId,
    })
    const baseQuery: Prisma.OfferWhereInput = {
      limit: { gt: 0 },
      expiresAt: {
        gt: new Date(),
      },
    }
    const offerQuery: Prisma.OfferWhereInput = {
      OR: [
        {
          categories: {
            some: {
              id: { in: categories },
            },
          },
        },
        {
          jobId: {
            in: jobs,
          },
        },
        {
          skills: {
            some: {
              id: { in: skills },
            },
          },
        },
      ],
    }

    const applicableOffers = await prisma.offer.count({
      where: { ...baseQuery, ...offerQuery },
    })
    const nonApplicableOffers = await prisma.offer.count({
      where: { ...baseQuery, NOT: { ...offerQuery } },
    })

    const internships = await prisma.internship.groupBy({
      by: ['updatedAt'],
      _sum: {
        hours: true,
        completed: true,
      },
      where: { personId: userId },
    })

    const hoursRequired: number[] = Array(12).fill(0)
    const hoursCompleted: number[] = Array(12).fill(0)
    const months = Array.from(Array(12).keys())

    internships.forEach((internship) => {
      const month = months[internship.updatedAt.getMonth()]
      hoursRequired[month] == null
        ? (hoursRequired[month] = internship._sum?.hours ?? 0)
        : (hoursRequired[month] += internship._sum?.hours ?? 0)
      hoursCompleted[month] == null
        ? (hoursCompleted[month] = internship._sum?.completed ?? 0)
        : (hoursCompleted[month] += internship._sum?.completed ?? 0)
    })

    const tasks = await prisma.task.groupBy({
      by: ['status'],
      _count: {
        status: true,
      },
      where: {
        OR: [
          { personId: userId },
          {
            participations: {
              some: { personId: userId },
            },
          },
          {
            subtasks: {
              some: {
                subparticipations: {
                  some: { personId: userId },
                },
              },
            },
          },
        ],
      },
    })

    const { tasksPending, tasksProgress, tasksRevision, tasksDone } =
      tasks.reduce(
        (acc, task) => {
          const status = task.status
          if (status === 'PENDING') acc.tasksPending += task._count.status
          if (status === 'PROGRESS') acc.tasksProgress += task._count.status
          if (status === 'REVIEW') acc.tasksRevision += task._count.status
          if (status === 'DONE') acc.tasksDone += task._count.status
          return acc
        },
        {
          tasksPending: 0,
          tasksProgress: 0,
          tasksRevision: 0,
          tasksDone: 0,
        }
      )

    const offersData: ChartData<'pie'> = {
      labels: ['Puede aplicar', 'No puede aplicar'],
      datasets: [
        {
          label: 'Porcentaje',
          data: [applicableOffers, nonApplicableOffers],
        },
      ],
    }

    const internshipsData: ChartData<'bar'> = {
      labels: getAllMonths(),
      datasets: [
        {
          label: 'Horas requeridas',
          data: hoursRequired,
        },
        {
          label: 'Horas completadas',
          data: hoursCompleted,
        },
      ],
    }

    // TODO -> mostrar cuando no tiene valores
    const projectsData: ChartData<'pie'> = {
      labels: ['En progreso', 'Completadas', 'Revisión', 'Por empezar'],
      datasets: [
        {
          label: 'Tareas',
          data: [tasksProgress, tasksDone, tasksRevision, tasksPending],
        },
      ],
    }

    return (
      <>
        <HomeCarousel />
        <QuickAccess items={quickAccessItems} />
        <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <h3 className="col-span-full text-lg font-bold text-primary">
            Últimas notificaciones
          </h3>
          {notifications.length > 0
            ? (
                notifications.map(({ display, id, createdAt }) => (
                  <div
                    key={id}
                    className="card card-compact bg-base-100 rounded-lg shadow-lg"
                  >
                    <Notification
                      {...display}
                      key={id}
                      id={id}
                      date={createdAt}
                    />
                  </div>
                ))
              )
            : (
              <div className="col-span-full">
                <EmptyContent title="No tienes notificaciones." />
              </div>
              )}
        </section>
        <section className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2">
          <h3 className="mb-1 col-span-full text-lg font-bold text-primary">
            Tus estadísticas
          </h3>
          <div className="max-h-96 col-span-1 items-center card bg-white">
            <PieGraphic
              title="Ofertas laborales"
              data={offersData}
            />
          </div>
          <div className="max-h-96 col-span-1 items-center card bg-white">
            <PieGraphic
              title="Proyectos"
              data={projectsData}
            />
          </div>
          <div className="h-96 col-span-full items-center card bg-white">
            <BarGraphic
              title="Pasantías"
              data={internshipsData}
            />
          </div>
        </section>
      </>
    )
  }

  if (type === 'ADMIN') {
    const query = { where: { verifiedAt: null } }
    const institutes = await prisma.institute.count({ ...query })
    const companies = await prisma.company.count({ ...query })
    const verificationsPending = institutes + companies

    const totalPersons = await prisma.person.count()
    const personCountByMonth = await prisma.person.groupBy({
      by: ['createdAt'],
      _count: true,
      orderBy: {
        createdAt: 'asc',
      },
    })

    const totalInstitutes = await prisma.institute.count()
    const instituteCountByMonth = await prisma.institute.groupBy({
      by: ['createdAt'],
      _count: true,
      orderBy: {
        createdAt: 'asc',
      },
    })

    const totalCompanies = await prisma.company.count()
    const companyCountByMonth = await prisma.company.groupBy({
      by: ['createdAt'],
      _count: true,
      orderBy: {
        createdAt: 'asc',
      },
    })

    const totalOffers = await prisma.offer.count()
    const offerCountByMonth = await prisma.offer.groupBy({
      by: ['createdAt'],
      _count: true,
      orderBy: {
        createdAt: 'asc',
      },
    })

    const totalProjects = await prisma.project.count()
    const projectCountByMonth = await prisma.project.groupBy({
      by: ['createdAt'],
      _count: true,
      orderBy: {
        createdAt: 'asc',
      },
    })

    const totalTeams = await prisma.team.count()
    const teamCountByMonth = await prisma.team.groupBy({
      by: ['createdAt'],
      _count: true,
      orderBy: {
        createdAt: 'asc',
      },
    })

    const cards = [
      'Usuarios',
      'Instituciones',
      'Compañías',
      'Ofertas',
      'Proyectos',
      'Equipos',
    ]
    const result = growthComparedLastMonth(
      [
        personCountByMonth,
        instituteCountByMonth,
        companyCountByMonth,
        offerCountByMonth,
        projectCountByMonth,
        teamCountByMonth,
      ],
      [
        totalPersons,
        totalInstitutes,
        totalCompanies,
        totalOffers,
        totalProjects,
        totalTeams,
      ]
    )

    return (
      <>
        <HomeCarousel />
        <QuickAccess items={quickAccessItems} />
        <section className="p-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
          <h3 className="col-span-full text-lg font-bold text-primary">
            Estadísticas
          </h3>
          {result.map((graph, i) => {
            return (
              <MiniCard
                key={i}
                title={cards[i]}
                count={graph.total}
                percentage={graph.percentage}
              >
                <GrowthIcon comparision={graph.comparision} />
              </MiniCard>
            )
          })}
          <MiniCard
            title="Verificaciones pendientes"
            count={verificationsPending}
          >
            <ClockIcon className="w-12 h-12" />
          </MiniCard>
        </section>
      </>
    )
  }

  if (type === 'COMPANY') {
    const notifications = await getNotifications(authUserId, 3)

    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)

    const expiringOffers = await prisma.offer.findMany({
      where: {
        companyId: userId,
        expiresAt: {
          gte: weekAgo,
          lte: new Date(),
        },
      },
      select: {
        id: true,
        title: true,
        hiring: true,
        expiresAt: true,
      },
      take: 5,
    })

    const offers = await prisma.offer.findMany({
      where: {
        companyId: userId,
        expiresAt: {
          gte: new Date(),
        },
      },
      select: {
        categories: {
          select: {
            id: true,
          },
        },
        skills: {
          select: {
            id: true,
          },
        },
        job: {
          select: {
            id: true,
          },
        },
      },
    })

    const categories: string[] = []
    const skills: string[] = []
    const jobs: string[] = []
    offers.forEach((offer) => {
      collect(offer.categories)
        .ids()
        .map((category) => categories.push(category))
      collect(offer.skills)
        .ids()
        .map((skill) => skills.push(skill))
      jobs.push(offer.job.id)
    })

    const totalUsers = await prisma.person.count()
    const users = await prisma.person.count({
      where: {
        OR: [
          {
            categories: {
              some: {
                id: {
                  in: categories,
                },
              },
            },
          },
          {
            skills: {
              some: {
                id: {
                  in: skills,
                },
              },
            },
          },
          {
            jobs: {
              some: {
                id: {
                  in: jobs,
                },
              },
            },
          },
        ],
      },
    })

    const hirings = await prisma.hiring.groupBy({
      by: ['updatedAt'],
      where: {
        offer: {
          companyId: userId,
        },
      },
    })

    const hiringUsers: number[] = Array(12).fill(0)
    const months = Array.from(Array(12).keys())

    hirings.forEach((hiring) => {
      const month = months[hiring.updatedAt.getMonth()]
      hiringUsers[month] == null
        ? (hiringUsers[month] = 0)
        : (hiringUsers[month] += 1)
    })

    const offersData: ChartData<'pie'> = {
      labels: ['Posible postulantes', 'Usuarios no postulables'],
      datasets: [
        {
          label: 'Porcentaje',
          data: [users, totalUsers - users],
        },
      ],
    }

    const hiringData: ChartData<'bar'> = {
      labels: getAllMonths(),
      datasets: [
        {
          label: 'Postulaciones al mes',
          data: hiringUsers,
        },
      ],
    }

    return (
      <>
        <HomeCarousel />
        <QuickAccess items={quickAccessItems} />
        <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <h3 className="col-span-full text-lg font-bold text-primary">
            Últimas notificaciones
          </h3>
          {notifications.length > 0
            ? (
                notifications.map(({ id, createdAt, display }) => (
                  <div
                    key={id}
                    className="card card-compact p-0 bg-base-100 border border-zinc-300 rounded-md shadow-lg"
                  >
                    <Link
                      href={display.href}
                      className="flex flex-col p-4 w-80 max-w-xs hover:bg-base-200"
                    >
                      <p className="line-clamp-2 text-sm leading-tight font-semibold normal-case text-neutral-600">
                        {display.content}
                      </p>
                      <small className="text-neutral-600 font-semibold">
                        {diffForHumans(createdAt)}
                      </small>
                    </Link>
                  </div>
                ))
              )
            : (
              <div className="col-span-full">
                <EmptyContent title="No tienes notificaciones." />
              </div>
              )}
        </section>
        <section className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-primary">
              Ofertas por vencer
            </h3>
            {expiringOffers.length > 0
              ? (
                <article className="w-full card bg-white gap-2 border border-zinc-300 rounded-md divide-y">
                  {expiringOffers.map((offer) => {
                    return (
                      <div
                        className="tooltip"
                        data-tip={offer.title}
                        key={offer.id}
                      >
                        <div className="p-2 flex flex-col">
                          <div className="inline-flex items-center justify-between gap-x-4">
                            <p className="text-left font-semibold text-neutral-600 line-clamp-1">
                              {offer.title}
                            </p>
                            <Link href={`/home/offers/${offer.id}`}>
                              <ArrowTopRightOnSquareIcon className="h-5 w-5 hover:text-primary" />
                            </Link>
                          </div>
                          <div className="inline-flex justify-between gap-x-4">
                            <small className="text-primary font-semibold">
                              {daysLeft(offer.expiresAt ?? new Date())}
                            </small>
                            <small className="text-neutral-500">
                              {offer.hiring.length} postulaciones
                            </small>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </article>
                )
              : (
                <div className="card bg-white border rounded-md col-span-full">
                  <EmptyContent title="No hay ofertas próximas a vencer." />
                </div>
                )}
          </div>
          <div className="col-span-1 sm:col-span-2">
            <div className="max-h-96 items-center card rounded-md bg-white">
              <PieGraphic
                title="Ofertas"
                data={offersData}
              />
            </div>
          </div>
          <div className="h-96 col-span-full items-center card rounded-md bg-white">
            <BarGraphic
              title="Postulantes"
              data={hiringData}
            />
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <HomeCarousel />
      <QuickAccess items={quickAccessItems} />
    </>
  )
}
