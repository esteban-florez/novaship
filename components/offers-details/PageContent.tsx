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
import { type Company, type Category, type Location, type Offer, type Skill } from '@prisma/client'
import { getExpirationDiff } from '@/lib/validation/expiration-dates'

interface Props {
  isOwner: boolean
  offer: Offer & {
    categories: Category[]
    location: Location
    company: Company
    skills: Skill[]
  }
}

export default function PageContent({ isOwner, offer }: Props) {
  const offerCategories = offer.categories.map((category) => {
    return category.title
  })

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
      content: offer.hours ?? 'No especificado',
      icon: <ClockIcon />,
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
        <div className="grid grid-cols-3 gap-x-2 gap-y-3">
          {atributtes.map((atr) => {
            return (
              <div className="col-span-3 md:col-span-1 lg:col-span-3 xl:col-span-1" key={atr.title}>
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
    </section>
  )
}
