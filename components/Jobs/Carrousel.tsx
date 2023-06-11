"use client"

import { useState } from "react"

const data = [
  {
    isActive: true,
    title: "Diseñador gráfico",
    "sub-title": "Diseño | Presencial | Jornada completa",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quidem, repellendus obcaecati expedita porro, officia quo nostrum magnam excepturi adipisci repudiandae itaque ea veritatis sequi vitae saepe. Velit, tempora deleniti.",
    owner: "Diseñadores unidos",
    ubication: "Aragua, La Victoria",
  },
  {
    isActive: false,
    title: "Carpintero",
    "sub-title": "Carpintería | Presencial | Jornada completa",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quidem, repellendus obcaecati expedita porro, officia quo nostrum magnam excepturi adipisci repudiandae itaque ea veritatis sequi vitae saepe. Velit, tempora deleniti.",
    owner: "Amueblados Las Mercedes",
    ubication: "Aragua, Las Mercedes",
  },
  {
    isActive: false,
    title: "Contador con experiencia",
    "sub-title": "Contaduría | Online | Medio tiempo",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quidem, repellendus obcaecati expedita porro, officia quo nostrum magnam excepturi adipisci repudiandae itaque ea veritatis sequi vitae saepe. Velit, tempora deleniti.",
    owner: "Finanzas Latinas",
    ubication: "Aragua, Las Mercedes",
  },
  {
    isActive: false,
    title: "Trabajo relleno",
    "sub-title": "Contaduría | Online | Medio tiempo",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quidem, repellendus obcaecati expedita porro, officia quo nostrum magnam excepturi adipisci repudiandae itaque ea veritatis sequi vitae saepe. Velit, tempora deleniti.",
    owner: "Finanzas Latinas",
    ubication: "Aragua, Las Mercedes",
  },
  {
    isActive: false,
    title: "Más relleno",
    "sub-title": "Contaduría | Online | Medio tiempo",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quidem, repellendus obcaecati expedita porro, officia quo nostrum magnam excepturi adipisci repudiandae itaque ea veritatis sequi vitae saepe. Velit, tempora deleniti.",
    owner: "Finanzas Latinas",
    ubication: "Aragua, Las Mercedes",
  },
]

export default function Carrousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideInactive = "w-4 h-4 rounded-full bg-primary/50"
  const slideActive = "w-6 h-4 rounded-full bg-primary"

  const renderJobs = () => {
    const start = currentSlide * 1
    const end = start + 1

    return data.slice(start, end).map((jobs) => {
      return (
        <section
          key={jobs.title}
          className="p-8 w-full flex-grow-0 flex-shrink-1"
        >
          <div className="relative flex bg-primary/25 rounded-xl w-full">
            <button
              onClick={() => {
                currentSlide === 0
                  ? setCurrentSlide(data.length - 1)
                  : setCurrentSlide(currentSlide - 1)
              }}
              className="absolute rounded-md top-[45%] left-0 p-2 hover:bg-black/50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-white hover:fill-purple-300"
                fill="none"
                viewBox="0 0 448 512"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                />
              </svg>
            </button>
            <div className="flex-col w-3/6 py-8 px-10">
              <header>
                <h3 className="text-2xl font-title font-bold text-white">
                  {jobs.title}
                </h3>
                <h6 className="-mt-2 text-neutral-300 font-semibold">
                  {jobs["sub-title"]}
                </h6>
              </header>
              <main className="my-4">
                <p className="line-clamp-3 text-sm">{jobs.description}</p>
              </main>
              <footer className="flex flex-row justify-between gap-4">
                <div className="flex flex-row justify-center items-center gap-2">
                  <div className="placeholder avatar">
                    <div className="h-8 w-8 rounded-full bg-white text-neutral-content">
                      <span></span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-title font-bold text-white/90">
                      {jobs.owner}
                    </h5>
                    <small className="-mt-2 font-semibold">
                      {jobs.ubication}
                    </small>
                  </div>
                </div>
                <button className="btn btn-sm w-2/6 btn-outline btn-w-xl btn-primary">
                  Ver más
                </button>
              </footer>
            </div>
            <ul className="flex absolute left-2/4 bottom-5 gap-2">
              <li
                className={`${
                  currentSlide === 0 ? slideActive : slideInactive
                }`}
              ></li>
              <li
                className={`${
                  currentSlide === 1 ? slideActive : slideInactive
                }`}
              ></li>
              <li
                className={`${
                  currentSlide === 2 ? slideActive : slideInactive
                }`}
              ></li>
              <li
                className={`${
                  currentSlide === 3 ? slideActive : slideInactive
                }`}
              ></li>
              <li
                className={`${
                  currentSlide === 4 ? slideActive : slideInactive
                }`}
              ></li>
            </ul>
            <div className="flex-col relative w-3/6">
              <div className="absolute right-[65%] top-0 bg-primary w-1/6 h-3/6 rounded-bl-full"></div>
              <div className="absolute right-0 top-0 bg-primary w-4/6 h-full rounded-e-xl rounded-bl-[20%]"></div>
            </div>
            <button
              onClick={() => {
                currentSlide === data.length - 1
                  ? setCurrentSlide(0)
                  : setCurrentSlide(currentSlide + 1)
              }}
              className="absolute rounded-md top-[45%] right-0 hover:bg-black/50 transition-colors p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-white hover:fill-purple-300"
                fill="none"
                viewBox="0 0 448 512"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </button>
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
