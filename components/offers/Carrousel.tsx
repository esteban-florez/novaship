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
          className="flex w-full grow-0 flex-col bg-gradient-to-r from-base-300 from-15% to-primary/50 px-6 py-8 sm:px-12"
        >
          <div className="w-full flex-row">
            <Header title={jobs.title} jobs={jobs.categories} />
            <Content description={jobs.description} />
            <Footer owner={jobs.owner} ubication={jobs.ubication} />
          </div>
          <div className="mt-4 flex w-full flex-row items-center justify-center gap-4">
            <Btn left onClick={handleLeftBtnClick} />
            <Dots currentSlide={currentSlide} />
            <Btn right onClick={handleRightBtnClick} />
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
