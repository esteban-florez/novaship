import {
  ArrowRightIcon,
  BanknotesIcon,
  ClockIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline'
import { modes, offerStatuses } from '@/lib/translations'
import Atributtes from './Atributtes'
import Details from './Details'
import InfoUser from './InfoUser'
import Collapse from '../Collapse'
import AvatarInfo from './AvatarInfo'
import { type Offer, type Status } from '@prisma/client'
import { getExpirationDiff } from '@/lib/validation/expiration-dates'
import AvatarIcon from '../AvatarIcon'
import Button from '../Button'

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
      icon: <HomeModernIcon className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Salario',
      content: [offer.salary, ' $'],
      icon: <BanknotesIcon className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Horas',
      content: offer.hours ?? 'No especificado',
      icon: <ClockIcon className="h-12 w-12 text-primary" />,
    },
  ]

  return (
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
              avatarInfo={false}
              owner={offer.company.name}
              location={offer.location.title}
              description={offer.company.description}
            />
          </Collapse>
        </div>
      </div>
      <div className="col-span-7 lg:col-span-4 xl:col-span-5">
        <div className="grid grid-cols-2 gap-x-2 gap-y-3">
          {atributtes.map((atr) => {
            return (
              <div className="col-span-2 md:col-span-1" key={atr.title}>
                <Atributtes
                  title={atr.title}
                  icon={atr.icon}
                >
                  {atr.content}
                </Atributtes>
              </div>
            )
          })}
        </div>
        <div className="card mt-4 bg-white p-4 shadow-lg">
          <h6 className="text-lg font-bold md:text-xl">Habilidades requeridas</h6>
          {offer.skills.map(skill => {
            return <p key={skill.id}>{skill.title}</p>
          })}
        </div>
      </div>
      <div className="sticky hidden lg:col-span-3 lg:block xl:col-span-2">
        <div className="card bg-white p-4 shadow-md lg:self-start">
          <InfoUser
            avatarInfo
            owner={offer.company.name}
            location={offer.location.title}
            description={offer.company.description}
          />
        </div>
      </div>
      <div className="card col-span-7 bg-white p-4 shadow">
        <h2 className="text-xl font-semibold">Postulaciones - {offer.hiring.length}</h2>
        {isOwner &&
          <section className="mt-2 flex flex-col gap-4 sm:flex-row">
            {offer.hiring.map(hiring => {
              return (
                <div key={hiring.id} className="flex flex-col gap-2 rounded-md border px-2 py-1">
                  <div className="flex items-center gap-x-2">
                    <AvatarIcon username={hiring.person.name} />
                    <p>{hiring.person.name}</p>
                  </div>
                  <span className="text-center font-semibold text-neutral-600">{offerStatuses[hiring.status ?? 'PENDING']}</span>
                  <Button
                    url={`/home/offers/${offer.id}/hiring/${hiring.id}`}
                    color="PRIMARY"
                    hover="WHITE"
                  >
                    Ver petición
                    <ArrowRightIcon className="h-5 w-5" />
                  </Button>
                </div>
              )
            })}
          </section>}
      </div>
    </section>
  )
}
