import BarGraphic from '@/components/graphics/BarGraphic'
import PieGraphic from '@/components/graphics/PieGraphic'
import GrowthIcon from '@/components/home/GrowthIcon'
import HomeCarousel from '@/components/home/HomeCarousel'
import MiniCard from '@/components/home/MiniCard'
import NotificationsSection from '@/components/home/NotificationsSection'
import QuickAccess from '@/components/home/QuickAccess'
import StatisticsGraphSection from '@/components/home/StatisticsGraphSection'
import ExpiringOffersSection from '@/components/home/company/ExpiringOffersSection'
import GraphsSection from '@/components/home/institute/GraphsSection'
import { auth } from '@/lib/auth/pages'
import {
  getExpiringOffers,
  getHirings,
  getUsersCompatibles,
} from '@/lib/data-fetching/home/company'
import {
  getInternshipsCount,
  getMonthlyInternships,
  getOtherInternships,
  getRecruitmentsCount,
  getRecruitmentsFiltered,
  getStatuses,
} from '@/lib/data-fetching/home/institute'
import {
  getInternshipHours,
  getOffers,
  getProjectsStatuses,
} from '@/lib/data-fetching/home/user'
import { getNotifications } from '@/lib/notifications/get'
import getQuickAccessItems from '@/lib/quickAcessItems'
import { getAllMonths } from '@/lib/utils/date'
import { growthComparedLastMonth } from '@/lib/utils/graph'
import { checkEmpty } from '@/lib/utils/verify'
import prisma from '@/prisma/client'
import {
  AcademicCapIcon,
  CheckIcon,
  ClockIcon,
  ListBulletIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { type ChartData } from 'chart.js'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Inicio',
}

export default async function HomePage() {
  const { id: userId, authUserId, type } = await auth.user()
  const quickAccessItems = getQuickAccessItems({ userId, type })
  const notifications = await getNotifications(authUserId, 3)

  if (type === 'PERSON') {
    const [applicableOffers, nonApplicableOffers] = await getOffers(userId)
    const [hoursRequired, hoursCompleted] = await getInternshipHours(userId)
    const [pending, progress, revision, done] = await getProjectsStatuses(
      userId
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
          data: [progress, done, revision, pending],
        },
      ],
    }

    const noDataGraphs = [
      {
        title: 'Ofertas laborales',
        content: 'No hay ofertas registradas para mostrar este gráfico',
      },
      {
        title: 'Proyectos',
        content: 'Forma parte de algún proyecto para mostrar este gráfico',
      },
      {
        title: 'Progreso de pasantías',
        content:
          'No estas realizando ninguna pasantía para mostrar este gráfico',
      },
    ]

    return (
      <>
        <HomeCarousel />
        <QuickAccess items={quickAccessItems} />
        <NotificationsSection
          notifications={notifications.map(({ display, id, createdAt }) => ({
            ...display,
            id,
            date: createdAt,
          }))}
        />
        <section className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2">
          <div className="col-span-1">
            <StatisticsGraphSection
              noData={noDataGraphs[0]}
              valid={checkEmpty([applicableOffers, nonApplicableOffers])}
              options={{
                title: true,
                center: true,
              }}
            >
              <PieGraphic
                title="Ofertas laborales"
                data={offersData}
              />
            </StatisticsGraphSection>
          </div>
          <div className="col-span-1">
            <StatisticsGraphSection
              noData={noDataGraphs[1]}
              valid={checkEmpty([progress, done, revision, pending])}
              options={{
                center: true,
              }}
            >
              <PieGraphic
                title="Proyectos"
                data={projectsData}
              />
            </StatisticsGraphSection>
          </div>
          <div className="mt-4 h-96 col-span-full">
            <StatisticsGraphSection
              noData={noDataGraphs[2]}
              valid={checkEmpty([hoursRequired, hoursCompleted])}
              options={{
                height: 'h-96',
              }}
            >
              <BarGraphic
                title="Progreso de pasantías"
                data={internshipsData}
              />
            </StatisticsGraphSection>
          </div>
        </section>
      </>
    )
  }

  if (type === 'ADMIN') {
    const query = { where: { verifiedAt: null } }
    const institutes = await prisma.institute.count({ ...query })
    const companies = await prisma.company.count({ ...query })

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
            count={institutes + companies}
          >
            <ClockIcon className="w-12 h-12" />
          </MiniCard>
        </section>
        <NotificationsSection
          notifications={notifications.map(({ display, id, createdAt }) => ({
            ...display,
            id,
            date: createdAt,
          }))}
        />
      </>
    )
  }

  if (type === 'COMPANY') {
    const expiringOffers = await getExpiringOffers(userId)
    const { users, totalUsers } = await getUsersCompatibles(userId)
    const hirings = await getHirings(userId)

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
          data: hirings,
        },
      ],
    }

    const noDataGraphs = [
      {
        title: 'Postulantes',
        content: 'No hay ofertas registradas para mostrar',
      },
      {
        title: 'Postulantes anuales',
        content: 'No hay registros de postulantes para mostrar',
      },
    ]

    return (
      <>
        <HomeCarousel />
        <QuickAccess items={quickAccessItems} />
        <NotificationsSection
          notifications={notifications.map(({ display, id, createdAt }) => ({
            ...display,
            id,
            date: createdAt,
          }))}
        />
        <section className="mt-4 sm:mt-0 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ExpiringOffersSection offers={expiringOffers} />
          <div className="col-span-1">
            <StatisticsGraphSection
              noData={noDataGraphs[0]}
              valid={checkEmpty([users, totalUsers - users])}
              options={{
                title: true,
              }}
            >
              <PieGraphic
                title="Postulantes"
                data={offersData}
              />
            </StatisticsGraphSection>
          </div>
          <div className="mt-4 h-96 col-span-full">
            <StatisticsGraphSection
              noData={noDataGraphs[1]}
              valid={checkEmpty(hirings)}
              options={{
                height: 'h-96',
              }}
            >
              <BarGraphic
                title="Postulantes anuales"
                data={hiringData}
              />
            </StatisticsGraphSection>
          </div>
        </section>
      </>
    )
  }

  if (type === 'INSTITUTE') {
    const otherInternships = await getOtherInternships(userId)
    const { total: tInternships, count: cInternships } =
      await getInternshipsCount(userId)
    const {
      total: tRecruitments,
      count: cRecruitments,
      internships,
      recruitments,
    } = await getRecruitmentsCount(userId)
    const { accepted, rejected } = getRecruitmentsFiltered(recruitments)
    const {
      accepted: iAccepted,
      inProgress,
      completed,
    } = getStatuses(internships)

    const result = growthComparedLastMonth(
      [cInternships, cRecruitments],
      [tInternships, tRecruitments]
    )
    const monthlyInternships = getMonthlyInternships(internships)

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
        count: accepted.length,
        icon: <CheckIcon className="w-12 h-12" />,
      },
      {
        title: 'Solicitudes rechazadas',
        count: rejected.length,
        icon: <XMarkIcon className="w-12 h-12" />,
      },
    ]

    const internshipsData: ChartData<'pie'> = {
      labels: ['En busca de empresa', 'En progreso', 'Completadas'],
      datasets: [
        {
          label: 'Progreso',
          data: [iAccepted, inProgress, completed],
        },
      ],
    }

    const usersData: ChartData<'pie'> = {
      labels: ['Internos', 'Otros'],
      datasets: [
        {
          label: 'Progreso',
          data: [tInternships, otherInternships],
        },
      ],
    }

    const monthlyInternshipsData: ChartData<'bar'> = {
      labels: getAllMonths(),
      datasets: [
        {
          label: 'Pasantes',
          data: monthlyInternships,
        },
      ],
    }

    const noDataGraphs = [
      {
        title: 'Progreso de pasantías',
        content:
          'No hay pasantías "En busca de empleo", "En progreso" o "Completadas" para mostrar',
      },
      {
        title: 'Pasantes',
        content:
          'No hay registros de pasantes (suyos y otros) suficientes para mostrar este gráfico',
      },
      {
        title: 'Pasantes',
        content:
          'No hay registros de pasantías suficientes para mostrar este gráfico',
      },
    ]

    return (
      <>
        <QuickAccess items={quickAccessItems} />
        <GraphsSection
          graphs={graphs}
          data={result}
        />
        <NotificationsSection
          notifications={notifications.map(({ display, id, createdAt }) => ({
            ...display,
            id,
            date: createdAt,
          }))}
        />
        <section className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1">
            <StatisticsGraphSection
              noData={noDataGraphs[0]}
              valid={checkEmpty([tInternships, inProgress, completed])}
              options={{
                title: true,
                center: true,
              }}
            >
              <PieGraphic
                title="Progreso de pasantías"
                data={internshipsData}
              />
            </StatisticsGraphSection>
          </div>
          <div className="col-span-1">
            <StatisticsGraphSection
              noData={noDataGraphs[1]}
              valid={checkEmpty([tInternships, otherInternships])}
              options={{
                center: true,
              }}
            >
              <PieGraphic
                title="Pasantes"
                data={usersData}
              />
            </StatisticsGraphSection>
          </div>
          <div className="col-span-full">
            <StatisticsGraphSection
              noData={noDataGraphs[1]}
              valid={checkEmpty(monthlyInternships)}
              options={{
                height: 'h-96',
              }}
            >
              <BarGraphic
                title="Pasantías"
                data={monthlyInternshipsData}
              />
            </StatisticsGraphSection>
          </div>
        </section>
      </>
    )
  }

  notFound()
}
