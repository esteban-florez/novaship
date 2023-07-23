'use client'

import { useState } from 'react'
import Btn from './Carrousel/Btn'
import offers from './Carrousel/data.json'
import Header from './Carrousel/Header'
import Footer from './Carrousel/Footer'
import Content from './Carrousel/Content'
import Dots from './Carrousel/Dots'

export default function Carrousel() {
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
          <div className="relative z-10 h-full w-full px-6 py-8 backdrop-blur-sm backdrop-brightness-50 sm:px-12">
            <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-tr-[15rem] bg-neutral-800 md:rounded-br-full md:rounded-tr-none lg:w-7/12" />
            <div className="w-full flex-row">
              <Header title={offer.title} categories={offer.categories} />
              <Content description={offer.description} />
              <Footer owner={offer.owner} ubication={offer.ubication} />
            </div>
            <div className="mt-4 flex w-full flex-row items-center justify-center gap-4">
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
