'use client'

import { useState } from 'react'
import Btn from './Carrousel/Btn'
import Content from './Carrousel/Content'
import Dots from './Carrousel/Dots'
import { type Company, type Field, type Location, type Offer } from '@prisma/client'

interface Props {
  offers: Array<Offer & {
    company: Company
    location: Location
    fields: Field[]
  }>
}

export default function Carrousel({ offers }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const offer = offers[currentSlide]
  const previousSlide = currentSlide === 0 ? offers.length - 1 : currentSlide - 1
  const nextSlide = currentSlide === offers.length - 1 ? 0 : currentSlide + 1

  return (
    <div className="overflow-hidden">
      <div className="relative flex">
        <section
          key={offer.title}
          className="flex w-full grow-0 flex-col"
        >
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen de fondo carrusel" className="absolute right-0 top-0 h-full w-full object-cover" />
          <div className="relative z-10 h-full w-full px-4 pt-6 backdrop-blur-sm backdrop-brightness-50 sm:px-0">
            <Content
              title={offer.title}
              categories={offer.fields.map(field => field.title)}
              description={offer.description}
              owner={offer.company.name}
              ubication={offer.location.title}
            />
            <div className="my-4 flex w-full flex-row items-center justify-center gap-4">
              <div className="flex rounded-lg">
                <Btn direction="left" onClick={() => { setCurrentSlide(previousSlide) }} />
                <Dots length={offers.length} current={currentSlide} />
                <Btn direction="right" onClick={() => { setCurrentSlide(nextSlide) }} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
