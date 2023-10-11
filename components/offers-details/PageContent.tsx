import {
  BanknotesIcon,
  CheckIcon,
  ClockIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline'
import { modes } from '@/lib/translations'
import Atributtes from './Atributtes'
import Details from './Details'
import InfoUser from './InfoUser'
import Collapse from '../Collapse'
import AvatarInfo from './AvatarInfo'
import { type Offer, type Status } from '@prisma/client'
import { getExpirationDiff } from '@/lib/validation/expiration-dates'
import PageTitle from '../PageTitle'

interface Props {
  userId: string
  offer: Offer & {
    company: {
      description: string
      name: string
    }
    hiring: Array<{
      id: string
      personId: string
      person: {
        name: string
      }
      status: Status | null
    }>
    location: {
      title: string
    }
    categories: Array<{
      title: string
    }>
    skills: Array<{
      id: string
      title: string
    }>
  }
}

export default function PageContent({ userId, offer }: Props) {
  const isOwner = offer.companyId === userId
  const userHasApplied = offer.hiring.some(hiring => hiring.personId === userId)
  const offerCategories = offer.categories.map((category) => {
    return category.title
  })
  const userHiringStatus = offer.hiring.find(hiring => hiring.personId === userId)?.status

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
      <section className="grid grid-cols-7 gap-4 p-4">
        <div className="col-span-7">
          <Details
            id={offer.id}
            isOwner={isOwner}
            title={offer.title}
            expiresAt={getExpirationDiff(offer.createdAt, offer.expiresAt ?? new Date())}
            description={offer.description}
            categories={offerCategories}
            userHasApplied={userHasApplied}
            hiringStatus={userHiringStatus ?? 'PENDING'}
          />
          <div className="mt-4 block lg:hidden">
            <Collapse
              title={<AvatarInfo owner={offer.company.name} location={offer.location.title} />}
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
          <div className="card flex-row items-center rounded-xl bg-white shadow-lg">
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
            <h6 className="text-lg font-bold md:text-2xl">Habilidades requeridas</h6>
            <ul className="mt-2 flex flex-col">
              {offer.skills.map(skill => {
                return (
                  <div className="flex items-center gap-1.5" key={skill.id}>
                    <CheckIcon className="h-5 w-5 text-primary" />
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
        {/* TEMPORAL DISABLED */}
        {/* <div className="card col-span-7 bg-white p-4 shadow">
          <h2 className="text-xl font-semibold">Postulaciones - {offer.hiring.length}</h2>
          {isOwner &&
            <HiringList
              offerId={offer.id}
              hiring={offer.hiring}
            />}
        </div> */}
      </section>
    </>
  )
}
