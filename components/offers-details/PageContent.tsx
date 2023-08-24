'use-client'

import {
  BanknotesIcon,
  ClockIcon,
  HomeModernIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { type OffersWithRelationships } from '@/lib/types'
import { modes, targets } from '@/lib/translations'
import Atributtes from './Atributtes'
import Details from './Details'
import InfoUser from './InfoUser'
import Collapse from '../Collapse'
import AvatarInfo from './AvatarInfo'

interface Props {
  offer: OffersWithRelationships
}

export default function PageContent({ offer }: Props) {
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
      title: 'Interés',
      content: targets[offer.target],
      icon: <UserIcon className="h-12 w-12 text-primary" />,
    },
    {
      title: 'Horas',
      content: offer.hours ?? 'No especificado',
      icon: <ClockIcon className="h-12 w-12 text-primary" />,
    },
  ]

  return (
    <section className="grid grid-cols-7 gap-4 p-4">
      <div className="col-span-7 xl:col-span-5">
        <Details
          title={offer.title}
          expiresAt={offer.expiresAt}
          description={offer.description}
        />
        <div className="mt-4 block xl:hidden">
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
        <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-3">
          {atributtes.map((atr) => {
            const { title, content, icon } = atr
            return (
              <div className="col-span-2 md:col-span-1" key={title}>
                <Atributtes
                  title={title}
                  icon={icon}
                >
                  {content}
                </Atributtes>
              </div>
            )
          })}
        </div>
        {/* TODO -> Hacer que muestre las habilidades */}
        <div className="card mt-4 bg-white p-4 shadow-lg">
          <p>Habilidades</p>
        </div>
      </div>
      <div className="sticky hidden lg:col-span-2 lg:block">
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
