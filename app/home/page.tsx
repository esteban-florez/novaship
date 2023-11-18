import EmptyContent from '@/components/EmptyContent'
import BarGraphic from '@/components/graphics/BarGraphic'
import NoData from '@/components/graphics/NoData'
import PieGraphic from '@/components/graphics/PieGraphic'
import GrowthIcon from '@/components/home/GrowthIcon'
import HomeCarousel from '@/components/home/HomeCarousel'
import MiniCard from '@/components/home/MiniCard'
import QuickAccess from '@/components/home/QuickAccess'
import Notification from '@/components/layout/Notification'
import { auth } from '@/lib/auth/pages'
import { getInternships } from '@/lib/data-fetching/internships'
import { getPersonRelatedIds } from '@/lib/data-fetching/user'
import { getNotifications } from '@/lib/notifications/get'
import getQuickAccessItems from '@/lib/quickAcessItems'
import collect from '@/lib/utils/collection'
import { daysLeft, getAllMonths } from '@/lib/utils/date'
import { growthComparedLastMonth } from '@/lib/utils/graph'
import { getCompletedHours, getInternshipStage } from '@/lib/utils/tables'
import { checkEmpty } from '@/lib/utils/verify'
import prisma from '@/prisma/client'
import {
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  CheckIcon,
  ClockIcon,
  ListBulletIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { type Prisma } from '@prisma/client'
import { type ChartData } from 'chart.js'
import clsx from 'clsx'
import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Inicio',
}

// TODO -> mover a componentes
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

    const internships = await prisma.internship.findMany({
      where: {
        personId: userId,
        status: {
          not: 'REJECTED',
        },
      },
      select: {
        hours: true,
        recruitments: {
          select: {
            status: true,
            progresses: {
              select: {
                hours: true,
              },
            },
          },
        },
        updatedAt: true,
      },
    })

    const hoursRequired: number[] = Array(12).fill(0)
    const hoursCompleted: number[] = Array(12).fill(0)
    const months = Array.from(Array(12).keys())

    internships.forEach((internship) => {
      const month = months[internship.updatedAt.getMonth()]
      hoursRequired[month] == null
        ? (hoursRequired[month] = internship.hours ?? 0)
        : (hoursRequired[month] += internship.hours ?? 0)
      hoursCompleted[month] == null
        ? (hoursCompleted[month] = getCompletedHours(internship) ?? 0)
        : (hoursCompleted[month] += getCompletedHours(internship) ?? 0)
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
        <section className="px-4 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <h3 className="col-span-full text-lg font-bold text-primary">
            Últimas notificaciones
          </h3>
          {notifications.length > 0
            ? (
                notifications.map(({ display, id, createdAt }) => (
                  <div
                    key={id}
                    className="pt-1.5 card card-compact bg-base-100 border border-zinc-300 rounded-lg shadow-lg"
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
              <div className="col-span-full card bg-white border border-zinc-300 rounded-md shadow-md">
                <EmptyContent title="No tienes notificaciones." />
              </div>
              )}
        </section>
        <section className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2">
          <h3 className="col-span-full text-lg font-bold text-primary">
            Tus estadísticas
          </h3>
          <div className="pb-2 max-h-96 col-span-1 items-center card bg-white border border-zinc-300 rounded-md shadow-md">
            {checkEmpty([applicableOffers, nonApplicableOffers])
              ? (
                <NoData title="Ofertas laborales">
                  No hay ofertas registradas para mostrar este gráfico
                </NoData>
                )
              : (
                <PieGraphic
                  title="Ofertas laborales"
                  data={offersData}
                />
                )}
          </div>
          <div className="pb-2 max-h-96 col-span-1 items-center card bg-white border border-zinc-300 rounded-md shadow-md">
            {checkEmpty([
              tasksProgress,
              tasksDone,
              tasksRevision,
              tasksPending,
            ])
              ? (
                <NoData title="Proyectos">
                  Forma parte de algún proyecto para mostrar este gráfico
                </NoData>
                )
              : (
                <PieGraphic
                  title="Proyectos"
                  data={projectsData}
                />
                )}
          </div>
          <div className="col-span-full h-96 card bg-white border border-zinc-300 rounded-md items-center">
            {checkEmpty([hoursRequired, hoursCompleted])
              ? (
                <NoData title="Progreso de pasantías">
                  No estas realizando ninguna pasantía para mostrar este gráfico
                </NoData>
                )
              : (
                <BarGraphic
                  title="Progreso de pasantías"
                  data={internshipsData}
                />
                )}
          </div>
        </section>
      </>
    )
  }

  if (type === 'ADMIN') {
    const notifications = await getNotifications(authUserId, 3)
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
        <section className="px-4 pt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
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
        <section className="px-4 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <h3 className="col-span-full text-lg font-bold text-primary">
            Últimas notificaciones
          </h3>
          {notifications.length > 0
            ? (
                notifications.map(({ display, id, createdAt }) => (
                  <div
                    key={id}
                    className="pt-1.5 card card-compact bg-base-100 border border-zinc-300 rounded-lg shadow-lg"
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
              <div className="pb-2 col-span-full card bg-white border border-zinc-300 rounded-md shadow-md">
                <EmptyContent title="No tienes notificaciones." />
              </div>
              )}
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
        <section className="px-4 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <h3 className="col-span-full text-lg font-bold text-primary">
            Últimas notificaciones
          </h3>
          {notifications.length > 0
            ? (
                notifications.map(({ display, id, createdAt }) => (
                  <div
                    key={id}
                    className="pt-1.5 card card-compact bg-base-100 border border-zinc-300 rounded-lg shadow-lg"
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
              <div className="h-full col-span-full card bg-white border border-zinc-300 rounded-md shadow-md">
                <EmptyContent title="No tienes notificaciones." />
              </div>
              )}
        </section>
        <section className="px-4 pt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="col-span-full sm:col-span-2 gap-4">
            <h3 className="mb-4 text-lg font-bold text-primary">
              Ofertas por vencer
            </h3>
            {expiringOffers.length > 0
              ? (
                <article className="w-full gap-2 divide-y card bg-white border border-zinc-300 rounded-md shadow-md">
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
                <div className="h-full max-h-96 card bg-white border border-zinc-300 rounded-md shadow-md">
                  <div className="my-auto pb-2 sm:pb-0 items-center">
                    <EmptyContent title="No hay ofertas próximas a vencer." />
                  </div>
                </div>
                )}
          </div>
          <div className="col-span-full sm:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-primary">
              Estadísticas
            </h3>
            <div className="col-span-1 sm:col-span-2">
              <div
                className={clsx(
                  'pb-2 max-h-96 items-center card border border-zinc-300 rounded-md bg-white',
                  checkEmpty([users, totalUsers - users]) && 'h-96'
                )}
              >
                {checkEmpty([users, totalUsers - users])
                  ? (
                    <NoData title="Postulantes">
                      No hay ofertas registradas para mostrar
                    </NoData>
                    )
                  : (
                    <PieGraphic
                      title="Postulantes"
                      data={offersData}
                    />
                    )}
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <div className="h-96 items-center card border border-zinc-300 rounded-md bg-white">
              {checkEmpty(hiringUsers)
                ? (
                  <NoData title="Postulantes anuales">
                    No hay registros de postulantes para mostrar
                  </NoData>
                  )
                : (
                  <BarGraphic
                    title="Postulantes anuales"
                    data={hiringData}
                  />
                  )}
            </div>
          </div>
        </section>
      </>
    )
  }

  if (type === 'INSTITUTE') {
    const notifications = await getNotifications(authUserId, 3)
    const users = await prisma.internship.count({
      where: {
        NOT: {
          instituteId: userId,
        },
      },
    })
    const totalInternships = await prisma.internship.count({
      where: { instituteId: userId },
    })
    const internshipCountByMonth = await prisma.internship.groupBy({
      by: ['createdAt'],
      _count: true,
      where: { instituteId: userId },
      orderBy: {
        createdAt: 'asc',
      },
    })

    const internships = await getInternships({ where: { instituteId: userId } })
    const totalRecruitments = await prisma.recruitment.count({
      where: { interested: 'PERSON' },
    })
    const recruitmentByMonth = await prisma.recruitment.findMany({
      where: { interested: 'PERSON' },
      select: {
        status: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    })

    const recruitmentCountByMonth = recruitmentByMonth.map((recruitment) => {
      return {
        ...recruitment,
        _count: 1,
      }
    })

    const result = growthComparedLastMonth(
      [internshipCountByMonth, recruitmentCountByMonth],
      [totalInternships, totalRecruitments]
    )

    const acceptedRecruitments = recruitmentByMonth.filter(
      (recruitment) => recruitment.status === 'ACCEPTED'
    )
    const rejectedRecruitments = recruitmentByMonth.filter(
      (recruitment) => recruitment.status === 'REJECTED'
    )

    const stages = internships.map((internship) => {
      return getInternshipStage(internship)
    })

    const internshipsAccepted = stages.filter(
      (stage) => stage === 'ACCEPTED'
    ).length
    const internshipsInProgress = stages.filter(
      (stage) => stage === 'ACTIVE'
    ).length
    const internshipsCompleted = stages.filter(
      (stage) => stage === 'COMPLETED'
    ).length

    const graphs = [
      {
        title: 'Pasantes',
        count: result[0].total,
        icon: <AcademicCapIcon className="w-12 h-12" />,
      },
      {
        title: 'Solicitudes enviadas',
        count: result[1].total,
        icon: <ListBulletIcon className="w-12 h-12" />,
      },
      {
        title: 'Solicitudes aprobadas',
        count: acceptedRecruitments.length,
        icon: <CheckIcon className="w-12 h-12" />,
      },
      {
        title: 'Solicitudes rechazadas',
        count: rejectedRecruitments.length,
        icon: <XMarkIcon className="w-12 h-12" />,
      },
    ]

    const internshipsCount: number[] = Array(12).fill(0)
    const months = Array.from(Array(12).keys())

    internships.forEach((internship) => {
      const month = months[internship.createdAt.getMonth()]
      internshipsCount[month] == null
        ? (internshipsCount[month] = 1)
        : (internshipsCount[month] += 1)
    })

    const monthlyInternshipsData: ChartData<'bar'> = {
      labels: getAllMonths(),
      datasets: [
        {
          label: 'Pasantes',
          data: internshipsCount,
        },
      ],
    }

    const usersData: ChartData<'pie'> = {
      labels: ['Internos', 'Otros'],
      datasets: [
        {
          label: 'Progreso',
          data: [totalInternships, users],
        },
      ],
    }

    const internshipsData: ChartData<'pie'> = {
      labels: ['En busca de empresa', 'En progreso', 'Completadas'],
      datasets: [
        {
          label: 'Progreso',
          data: [
            internshipsAccepted,
            internshipsInProgress,
            internshipsCompleted,
          ],
        },
      ],
    }

    return (
      <>
        <QuickAccess items={quickAccessItems} />
        <section className="px-4 pt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
          <h3 className="col-span-full text-lg font-bold text-primary">
            Estadísticas
          </h3>
          {graphs.map(({ title, count, icon }, i) => {
            return (
              <MiniCard
                key={i}
                title={title}
                count={i < 2 ? result[i].total : count}
                percentage={i < 2 ? result[i].percentage : undefined}
              >
                {i < 2
                  ? (
                    <GrowthIcon comparision={result[i].comparision} />
                    )
                  : (
                      icon
                    )}
              </MiniCard>
            )
          })}
        </section>
        <section className="px-4 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <h3 className="col-span-full text-lg font-bold text-primary">
            Últimas notificaciones
          </h3>
          {notifications.length > 0
            ? (
                notifications.map(({ display, id, createdAt }) => (
                  <div
                    key={id}
                    className="pt-1.5 card card-compact bg-base-100 border border-zinc-300 rounded-lg shadow-lg"
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
              <div className="col-span-full card bg-white border border-zinc-300 rounded-md shadow-md">
                <EmptyContent title="No tienes notificaciones." />
              </div>
              )}
        </section>
        <section className="p-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
          <h3 className="col-span-full text-lg font-bold text-primary">
            Estadísticas
          </h3>
          <div className="max-h-96 col-span-1 sm:col-span-2 items-center card bg-white border boder-zinc-300 rounded-md shadow-md">
            {checkEmpty([
              internshipsAccepted,
              internshipsInProgress,
              internshipsCompleted,
            ])
              ? (
                <NoData title="Progreso de pasantías">
                  No hay pasantías "En busca de empleo", "En progreso" o
                  "Completadas" para mostrar
                </NoData>
                )
              : (
                <PieGraphic
                  title="Progreso de pasantías"
                  data={internshipsData}
                />
                )}
          </div>
          <div className="pb-2 max-h-96 col-span-1 sm:col-span-2 items-center card bg-white  border boder-zinc-300 rounded-md shadow-md">
            {checkEmpty([totalInternships, users])
              ? (
                <NoData title="Pasantes">
                  No hay registros de pasantes (suyos y otros) suficientes para
                  mostrar este gráfico
                </NoData>
                )
              : (
                <PieGraphic
                  title="Pasantes"
                  data={usersData}
                />
                )}
          </div>
          <div className="h-96 col-span-full items-center card bg-white  border boder-zinc-300 rounded-md shadow-md">
            {checkEmpty(internshipsCount)
              ? (
                <NoData title="Pasantías">
                  No hay registros de pasantías suficientes para mostrar este
                  gráfico
                </NoData>
                )
              : (
                <BarGraphic
                  title="Pasantías"
                  data={monthlyInternshipsData}
                />
                )}
          </div>
        </section>
      </>
    )
  }

  notFound()
}
