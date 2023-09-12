import AvatarIcon from './AvatarIcon'
import Button from './Button'
import clsx from 'clsx'
import { type ProjectMemberships } from '@/lib/types'

interface Props {
  title: string
  categories?: Array<{
    id: string
    title: string
  }>
  description: string
  owner?: string
  location?: string
  members?: ProjectMemberships
  link?: string
}

const stackOrder = ['z-40', 'z-30', 'z-20']

// TODO -> mover el boton a bajo (flex-col) para las ofertas
export default function Card({ title, categories, description, owner, location, members, link }: Props) {
  return (
    <>
      <div className="relative">
        <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen de fondo carrusel" className="h-28 w-full rounded-t-xl object-cover" />
        <img src="/onda-horizontal.webp" alt="Onda-horizontal" className="absolute bottom-0 w-full" />
      </div>
      <div className="card card-compact bg-base-100 shadow-lg">
        <div className="flex flex-col gap-3 rounded-t-xl p-4 pt-1">
          {/* Ofertas */}
          <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
          {(categories !== undefined && categories?.length > 0) && (
            <ul className="-mt-1 line-clamp-2 flex flex-row flex-wrap font-semibold text-primary">
              {categories?.map(category => {
                return (
                  <li
                    key={category.id}
                    className="me-1 cursor-pointer text-sm after:text-neutral-800 after:content-[','] last:after:content-[] hover:text-primary/40"
                  >
                    {category.title}
                  </li>
                )
              })}
            </ul>
          )}
          <ul className="-mt-3 line-clamp-2 flex flex-row flex-wrap font-semibold text-primary">
            {categories?.map(category => {
              return (
                <li
                  key={category.id}
                  className="me-1 cursor-pointer text-sm after:text-neutral-800 after:content-[','] last:after:content-[] hover:text-primary/40"
                >
                  {category.title}
                </li>
              )
            })}
          </ul>
          <p className="line-clamp-3 text-sm">{description}</p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-1">
            {members != null &&
              <div className="flex shrink-0 flex-row items-center justify-start -space-x-3">
                {members.map((member, i) => {
                  if (i <= 2) {
                    return (
                      <AvatarIcon
                        key={member.id}
                        username={member.person?.name ?? member.company?.name ?? ''}
                        className={clsx('h-10 w-10 border-2 border-white bg-black text-white', stackOrder[i], i > 0 && 'ms-1')}
                      />
                    )
                  }
                  return null
                })}
                {members.length > 3 &&
                  <div className={clsx(
                    'z-10 flex h-10 w-10 items-center justify-center text-sm font-bold',
                    members.length > 9 ? 'ps-2' : ''
                  )}
                  >
                    +{members.length - 3}
                  </div>}
              </div>}
            {owner !== undefined &&
              <div className="flex items-center gap-2">
                <AvatarIcon username={owner} className="bg-black text-white" />
                <div className="flex flex-col">
                  <h5 className="text-sm font-bold">{owner}</h5>
                  <small className="-mt-1 text-xs">{location}</small>
                </div>
              </div>}
            <Button
              url={link}
              style="DEFAULT"
              color="SECONDARY"
              hover="WHITE"
            >
              Ver más
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
