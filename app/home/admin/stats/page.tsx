import EmptyContent from '@/components/EmptyContent'
import BarGraphic from '@/components/graphics/BarGraphic'
import PieGraphic from '@/components/graphics/PieGraphic'
import StatisticsGraphSection from '@/components/home/StatisticsGraphSection'
import { getInternships } from '@/lib/data-fetching/internships'
import { getAllMonths } from '@/lib/utils/date'
import { getCompletedHours } from '@/lib/utils/tables'
import { checkEmpty } from '@/lib/utils/verify'
import prisma from '@/prisma/client'
import { type ChartData } from 'chart.js'
import { type Metadata } from 'next'
import { PDFProvider } from './PDFProvider'
import DownloadButton from './DownloadButton'
import PageTitle from '@/components/PageTitle'
import WrapperPDF from './WrapperPDF'
import { getStatuses } from '@/lib/data-fetching/home/institute'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Estadísticas',
}

export default async function StatsPage() {
  const { type } = await auth.user()
  if (type !== 'ADMIN') {
    notFound()
  }

  const persons = await prisma.person.count()
  const companies = await prisma.company.count()
  const institutes = await prisma.institute.count()
  const offers = await prisma.offer.findMany()
  const allInternships = await getInternships()
  const internships = await getInternships({
    where: {
      status: {
        not: 'REJECTED',
      },
    },
  })
  const members = await prisma.membership.findMany({
    select: {
      createdAt: true,
    },
  })
  const tasks = await prisma.task.findMany({
    select: {
      status: true,
    },
  })

  const offersGraphData = { available: 0, expired: 0, limitReached: 0 }
  const tasksGraphData = { pending: 0, progress: 0, review: 0, done: 0 }

  offers.forEach((offer) => {
    const date = new Date()
    if (offer.expiresAt != null) {
      offer.limit > 0
        ? (offersGraphData.available += 1)
        : (offersGraphData.limitReached += 1)
      date >= offer.expiresAt
        ? (offersGraphData.expired += 1)
        : (offersGraphData.available += 1)
    } else {
      offer.limit > 0
        ? (offersGraphData.available += 1)
        : (offersGraphData.limitReached += 1)
    }
  })

  const membersRegistered: number[] = Array(12).fill(0)
  const membersMonths = Array.from(Array(12).keys())

  members.forEach((m) => {
    const month = membersMonths[m.createdAt.getMonth()]
    membersRegistered[month] == null
      ? (membersRegistered[month] = 1)
      : (membersRegistered[month] += 1)
  })

  const hoursCompleted: number[] = Array(12).fill(0)
  const hoursRequired: number[] = Array(12).fill(0)
  const internshipMonths = Array.from(Array(12).keys())

  internships.forEach((internship) => {
    const month = internshipMonths[internship.updatedAt.getMonth()]
    hoursRequired[month] == null
      ? (hoursRequired[month] = internship.hours ?? 0)
      : (hoursRequired[month] += internship.hours ?? 0)
    hoursCompleted[month] == null
      ? (hoursCompleted[month] = getCompletedHours(internship) ?? 0)
      : (hoursCompleted[month] += getCompletedHours(internship) ?? 0)
  })

  tasks.forEach((t) => {
    if (t.status === 'PENDING') tasksGraphData.pending += 1
    if (t.status === 'PROGRESS') tasksGraphData.progress += 1
    if (t.status === 'REVIEW') tasksGraphData.review += 1
    if (t.status === 'DONE') tasksGraphData.done += 1
  })

  const { accepted, completed, inProgress } = getStatuses(allInternships)

  const tasksData: ChartData<'pie'> = {
    labels: ['Pendiente', 'Progreso', 'Revisión', 'Terminadas'],
    datasets: [
      {
        label: 'Tareas',
        data: Object.values(tasksGraphData),
      },
    ],
  }

  const usersData: ChartData<'pie'> = {
    labels: ['Personas', 'Empresas', 'Instituciones'],
    datasets: [
      {
        label: 'Tareas',
        data: [persons, companies, institutes],
      },
    ],
  }

  const offersData: ChartData<'pie'> = {
    labels: ['Disponibles', 'Expiraron', 'Sin cupos'],
    datasets: [
      {
        data: Object.values(offersGraphData),
      },
    ],
  }

  const membershipsData: ChartData<'bar'> = {
    labels: getAllMonths('short'),
    datasets: [
      {
        label: 'Miembros',
        data: membersRegistered,
      },
    ],
  }

  const internshipsData: ChartData<'bar'> = {
    labels: getAllMonths('short'),
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

  const internshipsStagesGraph: ChartData<'pie'> = {
    labels: ['Aceptadas', 'Completadas', 'En progreso'],
    datasets: [
      {
        data: [accepted, completed, inProgress],
      },
    ],
  }

  const showTasksGraph = !checkEmpty(Object.values(tasksGraphData))
  const showUsersGraph = !checkEmpty([persons, companies, institutes])
  const showOffersGraph = !checkEmpty(Object.values(offersGraphData))
  const showMembershipsGraph = !checkEmpty(membersRegistered)
  const showInternshipsGraph = !checkEmpty([hoursRequired, hoursCompleted])
  const showInternshipsStagesGraph = !checkEmpty([
    accepted,
    completed,
    inProgress,
  ])

  return (
    <PDFProvider>
      <PageTitle title="Estadísticas">
        <DownloadButton />
      </PageTitle>
      <WrapperPDF>
        <section className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {checkEmpty([
            showTasksGraph,
            showUsersGraph,
            showOffersGraph,
            showMembershipsGraph,
            showInternshipsGraph,
            showInternshipsStagesGraph,
          ]) && (
            <div className="col-span-2">
              <EmptyContent title="No hay gráficas a mostrar." />
            </div>
          )}
          {showTasksGraph && (
            <div className="col-span-1">
              <StatisticsGraphSection
                options={{ height: 'h-96', shadow: true, center: true }}
              >
                <PieGraphic
                  title="Tareas de proyectos"
                  data={tasksData}
                />
              </StatisticsGraphSection>
            </div>
          )}
          {showUsersGraph && (
            <div className="col-span-1">
              <StatisticsGraphSection
                options={{ height: 'h-96', shadow: true, center: true }}
              >
                <PieGraphic
                  title="Usuarios registrados"
                  data={usersData}
                />
              </StatisticsGraphSection>
            </div>
          )}
          {showOffersGraph && (
            <div className="col-span-1">
              <StatisticsGraphSection
                options={{ height: 'h-96', shadow: true, center: true }}
              >
                <PieGraphic
                  title="Ofertas laborales"
                  data={offersData}
                />
              </StatisticsGraphSection>
            </div>
          )}
          {showInternshipsStagesGraph && (
            <div className="col-span-1">
              <StatisticsGraphSection
                options={{ height: 'h-96', shadow: true, center: true }}
              >
                <PieGraphic
                  title="Progreso de pasantías"
                  data={internshipsStagesGraph}
                />
              </StatisticsGraphSection>
            </div>
          )}
          {showMembershipsGraph && (
            <div className="col-span-1">
              <StatisticsGraphSection
                options={{ height: 'h-96', shadow: true }}
              >
                <BarGraphic
                  title="Miembros registrados"
                  data={membershipsData}
                />
              </StatisticsGraphSection>
            </div>
          )}
          {showInternshipsGraph && (
            <div className="col-span-1">
              <StatisticsGraphSection
                options={{ height: 'h-96', shadow: true }}
              >
                <BarGraphic
                  title="Horas de pasantías"
                  data={internshipsData}
                />
              </StatisticsGraphSection>
            </div>
          )}
        </section>
      </WrapperPDF>
    </PDFProvider>
  )
}
