'use client'

import { useState } from 'react'
import Btn from './Carrousel/Btn'
import data from './Carrousel/data.json'
import Header from './Carrousel/Header'
import Footer from './Carrousel/Footer'
import Content from './Carrousel/Content'
import Dots from './Carrousel/Dots'

const offers = data

export default function Carrousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const renderJobs = () => {
    const start = currentSlide * 1
    const end = start + 1

    const handleLeftBtnClick = () => {
      currentSlide === 0
        ? setCurrentSlide(offers.length - 1)
        : setCurrentSlide(currentSlide - 1)
    }

    const handleRightBtnClick = () => {
      currentSlide === offers.length - 1
        ? setCurrentSlide(0)
        : setCurrentSlide(currentSlide + 1)
    }

    return offers.slice(start, end).map((jobs) => {
      return (
        <section
          key={jobs.title}
          className="flex w-full grow-0 flex-col"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen de fondo carrusel" className="absolute right-0 top-0 h-full w-full object-cover" />
          <div className="relative z-10 h-full w-full px-6 py-8 backdrop-blur-sm backdrop-brightness-50 sm:px-12">
            <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-tr-[15rem] bg-neutral-800 sm:rounded-tr-none lg:w-7/12 lg:rounded-br-full" />
            <div className="w-full flex-row">
              <Header title={jobs.title} jobs={jobs.categories} />
              <Content description={jobs.description} />
              <Footer owner={jobs.owner} ubication={jobs.ubication} />
            </div>
            <div className="mt-4 flex w-full flex-row items-center justify-center gap-4">
              <div className="flex rounded-lg">
                <Btn left onClick={handleLeftBtnClick} />
                <Dots currentSlide={currentSlide} />
                <Btn right onClick={handleRightBtnClick} />
              </div>
            </div>
          </div>
        </section>
      )
    })
  }

  return (
    <div className="overflow-hidden">
      <div className="relative flex">{renderJobs()}</div>
    </div>
  )
}
