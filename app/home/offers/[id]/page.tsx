import Collapse from '@/components/Collapse'
import PageTitle from '@/components/PageTitle'
import Atributtes from '@/components/offers-details/Atributtes'
import AvatarInfo from '@/components/offers-details/AvatarInfo'
import Details from '@/components/offers-details/Details'
import InfoUser from '@/components/offers-details/InfoUser'
import { auth } from '@/lib/auth/pages'
import { getOffer } from '@/lib/data-fetching/offer'
import { modes } from '@/lib/translations'
import collect from '@/lib/utils/collection'
import { getExpiresAtDate } from '@/lib/utils/date'
import prisma from '@/prisma/client'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import {
  BanknotesIcon,
  ClockIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Ver oferta',
}

export default async function OfferPage({ params: { id } }: PageContext) {
  const { id: userId } = await auth.user()
  const user = await prisma.person.findFirst({
    where: { id: userId },
    select: {
      skills: {
        select: {
          id: true,
        },
      },
    },
  })
  const offer = await getOffer({ id })

  if (offer === null) {
    notFound()
  }

  const expiresAt = getExpiresAtDate(offer?.expiresAt)

  const isOwner = offer.companyId === userId
  const userHasApplied = offer.hiring.some(
    (hiring) => hiring.personId === userId
  )
  const offerCategories = offer.categories.map((category) => {
    return category.title
  })
  const userHiringStatus = offer.hiring.find(
    (hiring) => hiring.personId === userId
  )?.status

  const userSkills = collect(user?.skills ?? []).ids()

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
  ]

  return (
    <>
      <PageTitle
        title="Ofertas laboral"
        breadcrumbs={offer.title}
      />
      <section className="grid grid-cols-7 gap-4 mt-2 sm:mt-0 sm:p-4">
        <div className="col-span-7">
          <Details
            id={offer.id}
            isOwner={isOwner}
            title={offer.title}
            expiresAt={expiresAt}
            description={offer.description}
            categories={offerCategories}
            userHasApplied={userHasApplied}
            hiringStatus={userHiringStatus ?? 'PENDING'}
          />
          <div className="mt-4 block lg:hidden">
            {/* TODO -> borrar usuario duplicado */}
            <Collapse
              title={
                <AvatarInfo
                  owner={offer.company.name}
                  location={offer.location.title}
                />
              }
              bg="bg-white"
            >
              <InfoUser
                owner={offer.company.name}
                location={offer.location.title}
                description={offer.company.description}
              />
            </Collapse>
          </div>
        </div>
        <div className="col-span-7 lg:col-span-5">
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
            <ul className="mt-2 flex flex-col">
              {offer.skills.map((skill) => {
                return (
                  <div
                    className="flex items-center gap-1.5"
                    key={skill.id}
                  >
                    {userSkills?.includes(skill.id)
                      ? (
                        <CheckCircleIcon className="h-6 w-6 text-primary" />
                        )
                      : (
                        <XCircleIcon className="h-6 w-6 text-neutral-600" />
                        )}

                    <li className="text-base md:text-lg">{skill.title}</li>
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="sticky hidden lg:col-span-2 lg:block">
          <div className="card bg-white p-4 shadow-md lg:self-start">
            <InfoUser
              owner={offer.company.name}
              location={offer.location.title}
              description={offer.company.description}
            />
          </div>
        </div>
      </section>
    </>
  )
}
