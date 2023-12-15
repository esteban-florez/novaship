import PageTitle from '@/components/PageTitle'
import Atributtes from '@/components/offers-details/Atributtes'
import Details from '@/components/offers-details/Details'
import InfoUser from '@/components/offers-details/InfoUser'
import { auth } from '@/lib/auth/pages'
import { getOffer } from '@/lib/data-fetching/offer'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import Hiring from '@/components/offers-details/HiringCard'
import Dropdown from '@/components/dropdown/Dropdown'
import Link from 'next/link'
import clsx from 'clsx'
import { getPersonSkillsIds, getSuggestedUsers } from '@/lib/data-fetching/user'
import collect from '@/lib/utils/collection'
import { getHiringData } from '@/lib/utils/tables'
import Skills from '@/components/offers-details/Skills'
import { OFFER_ID_FILTERS_TAB } from '@/lib/utils/tabs'
import { offerIdLinks } from '@/components/dropdown/Links'
import { modes, schedules } from '@/lib/translations'
import {
  BanknotesIcon,
  CalendarIcon,
  ClockIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline'
import EmptyContent from '@/components/EmptyContent'

export const metadata: Metadata = {
  title: 'Ver oferta',
}

// #FIX -> se pueden hacer múltiples postulaciones (duplicado)
export default async function OfferPage({
  params: { id },
  searchParams,
}: SearchParamsWithIdProps) {
  const { id: userId } = await auth.user()
  const offer = await getOffer({ id })

  if (offer === null) {
    notFound()
  }

  const links = offerIdLinks
  const filter = searchParams.filter ?? 'pending'
  const isOwner = offer.companyId === userId
  const offerCategories = collect(offer.categories).titles()
  const { status, hasApplied, interested, hiringId } = getHiringData(
    offer.hiring,
    userId
  )
  const userSkills = await getPersonSkillsIds({ id: userId })
  const skills = collect(offer.skills).ids()
  const suggestedUsers = await getSuggestedUsers({ offerId: id, skills })
  const offerData = { id, skills: offer.skills }
  const hirings = offer.hiring.length

  const tabCount = () => {
    if (filter === 'accepted') {
      return offer.hiring.filter((hiring) => hiring.status === 'ACCEPTED')
        .length
    }

    if (filter === 'suggested') {
      return suggestedUsers.length
    }

    return offer.hiring.filter((hiring) => hiring.status === 'PENDING').length
  }

  const hiringContent = () => {
    if (filter === 'suggested') {
      if (suggestedUsers.length === 0) {
        return (
          <div className="grid grid-cols-1 gap-4">
            <EmptyContent title="No hay postulaciones" />
          </div>
        )
      }
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {suggestedUsers.map((user) => {
            return (
              <Hiring
                key={user.id}
                offer={offerData}
                person={user}
                readOnly={offer.limit === 0}
              />
            )
          })}
        </div>
      )
    }

    if (filter === 'accepted' || filter === 'pending') {
      if (
        !offer.hiring.some(
          (hiring) => hiring.status.toLocaleLowerCase() === filter
        )
      ) {
        return (
          <div className="grid grid-cols-1 gap-4">
            <EmptyContent title="No hay postulaciones" />
          </div>
        )
      }
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {offer.hiring.map((hiring) => {
            if (hiring.status.toLocaleLowerCase() === filter) {
              return (
                <Hiring
                  key={hiring.id}
                  offer={offerData}
                  hiring={hiring}
                  readOnly={offer.limit === 0}
                />
              )
            }

            return null
          })}
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 gap-4">
        <EmptyContent title="No hay postulaciones" />
      </div>
    )
  }

  const atributtes = [
    {
      title: 'Modalidad',
      content: modes[offer.mode],
      icon: <HomeModernIcon />,
    },
    {
      title: 'Salario',
      content: [offer.salary, ' $'],
      icon: <BanknotesIcon />,
    },
    {
      title: 'Horas',
      content: offer.hours,
      icon: <ClockIcon />,
    },
    {
      title: 'Horario',
      content: schedules[offer.schedule],
      icon: <CalendarIcon />,
    },
  ]

  return (
    <>
      <PageTitle breadcrumbs={offer.title} />
      <section className="grid grid-cols-7 gap-4 mt-2 sm:mt-0 sm:p-4">
        <div className="col-span-7">
          <Details
            id={offer.id}
            isOwner={isOwner}
            title={offer.title}
            expiresAt={offer.expiresAt}
            description={offer.description}
            categories={offerCategories}
            userHasApplied={hasApplied}
            hiringStatus={status}
            location={offer.location.title}
            limit={offer.limit}
            job={offer.job.title}
            interested={interested}
            hiringId={hiringId}
            hirings={hirings}
          />
        </div>
        <div className="col-span-7 lg:col-span-5">
          {/* TODO -> mejorar */}
          <div className="card flex-col sm:flex-row items-center rounded-xl bg-white shadow-lg">
            {atributtes.map((atr) => {
              return (
                <Atributtes
                  key={atr.title}
                  title={atr.title}
                  icon={atr.icon}
                >
                  {atr.content}
                </Atributtes>
              )
            })}
          </div>
          <div className="card mt-4 bg-white p-4 shadow-lg">
            <h6 className="text-lg font-bold md:text-2xl">
              Habilidades requeridas
            </h6>
            <Skills
              companyId={offer.companyId}
              userId={userId}
              skills={offer.skills}
              userSkills={userSkills}
            />
          </div>
        </div>
        <div className="sticky col-span-7 sm:col-span-2">
          <div className="card bg-white p-4 shadow-md lg:self-start">
            <InfoUser
              image={offer.company.image}
              owner={offer.company.name}
              location={offer.location.title}
              description={offer.company.description}
            />
          </div>
        </div>
        {userId === offer.companyId && (
          <div className="col-span-7">
            <div className="card p-4 gap-4 bg-white shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <h4 className="font-bold mb-2 text-xl">Postulaciones</h4>
                <Dropdown
                  label={`Filtro - ${
                    OFFER_ID_FILTERS_TAB[
                      filter as keyof typeof OFFER_ID_FILTERS_TAB
                    ]
                  } (${tabCount()})`}
                >
                  {links.map((link) => {
                    return (
                      <Link
                        key={link.title}
                        href={{
                          pathname: `/home/offers/${id}`,
                          query: { filter: link.query },
                        }}
                        className={clsx(
                          'btn',
                          link.query === filter
                            ? 'btn-primary hover:btn-ghost'
                            : 'hover:btn-primary'
                        )}
                      >
                        {link.icon}
                        {link.title}
                      </Link>
                    )
                  })}
                </Dropdown>
              </div>
              {hiringContent()}
            </div>
          </div>
        )}
      </section>
    </>
  )
}
