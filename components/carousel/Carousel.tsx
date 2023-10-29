'use client'

import { useState } from 'react'
import { type OffersFull } from '@/lib/types'
import Btn from './Btn'
import Content from './Content'
import Dots from './Dots'

interface Props {
  items:
  | OffersFull[]
  | Array<{
    title: string
    description: string
    link: string
  }>
}

// TODO -> rediseñar
export default function Carousel({ items }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const item = items[currentSlide]
  const previousSlide = currentSlide === 0 ? items.length - 1 : currentSlide - 1
  const nextSlide = currentSlide === items.length - 1 ? 0 : currentSlide + 1

  return (
    <div className="overflow-hidden">
      <div className="relative flex">
        <section
          key={item.title}
          className="flex w-full grow-0 select-none flex-col"
        >
          <img
            src="/card.webp"
            alt="Imagen de fondo carrusel"
            className="absolute right-0 top-0 h-full w-full object-cover"
          />
          <div className="relative z-10 h-full w-full px-4 pt-6 backdrop-blur-sm backdrop-brightness-50 sm:px-0">
            {'company' in item && (
              <Content
                destination="offers"
                id={item.id}
                title={item.title}
                categories={item.categories}
                description={item.description}
                owner={item.company.name}
                location={item.location.title}
              />
            )}
            {'link' in item && (
              <Content
                destination="home"
                title={item.title}
                description={item.description}
                link={item.link}
              />
            )}
            <div className="my-4 flex w-full flex-row items-center justify-center gap-4">
              <div className="flex rounded-lg">
                <Btn
                  direction="left"
                  onClick={() => {
                    setCurrentSlide(previousSlide)
                  }}
                />
                <Dots
                  length={items.length}
                  current={currentSlide}
                  onClick={(index) => { setCurrentSlide(index) }}
                />
                <Btn
                  direction="right"
                  onClick={() => {
                    setCurrentSlide(nextSlide)
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
