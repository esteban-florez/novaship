'use client'

import { type Status } from '@prisma/client'
import RadarGraphic from '../graphics/RadarGraphic'
import collect from '@/lib/utils/collection'
import { type ChartData, type ChartOptions } from 'chart.js'
import useSubmit from '@/lib/hooks/useSubmit'
import { type HiringWithPersonSkills, type OptionSkill } from '@/lib/types'
import { useState } from 'react'

interface Props {
  offer: {
    id: string
    skills: OptionSkill[]
  }
  hiring?: HiringWithPersonSkills
  person?: {
    id: string
    name: string
    email: string
    skills: OptionSkill[]
  }
  readOnly: boolean
}

// DRY 54
// TODO -> improve code
export default function HiringCard({ offer, hiring, person, readOnly }: Props) {
  const [status, setStatus] = useState<Status>('ACCEPTED')
  const action = hiring != null ? `/api/hiring/${hiring?.id}` : '/api/hiring'

  const username = hiring?.person.name ?? person?.name
  const skillsName = collect(offer.skills).titles()
  const skillsIds = collect(offer.skills).ids()
  const hiringSkills = collect(
    hiring?.person.skills ?? person?.skills ?? []
  ).ids()
  const skills: number[] = []

  skillsIds.map((skill) => {
    return hiringSkills.includes(skill) ? skills.push(1) : skills.push(0)
  })

  const options: ChartOptions<'radar'> = {
    scales: {
      r: {
        ticks: {
          display: false,
        },
      },
    },
  }

  const data: ChartData<'radar'> = {
    labels: skillsName,
    datasets: [
      {
        label: 'Habilidades del aspirante',
        data: skills,
        backgroundColor: '#a55eea20',
        borderColor: '#a55eea',
        borderWidth: 1,
      },
    ],
  }

  const { handleSubmit, alert, loading } = useSubmit({
    method: hiring != null ? 'PUT' : 'POST',
    append: {
      offerId: offer.id,
      userId: person?.id,
      status,
    },
  })

  const buttons = {
    processing: (
      <button
        className="btn btn-neutral-600 text-black"
        disabled
      >
        Procesando...
      </button>
    ),
    accept: (
      <>
        <button className="btn btn-primary">Aceptar</button>
        <button
          onClick={() => {
            setStatus('REJECTED')
          }}
          className="btn btn-error"
        >
          Rechazar
        </button>
      </>
    ),
    invite: <button className="btn btn-primary">Invitar</button>,
  }

  const renderedFooter = () => {
    if (hiring?.interested === 'COMPANY' && hiring.status !== 'ACCEPTED') {
      return (
        <p className="text-center font-semibold text-neutral-600">
          La solicitud no ha sido aceptada aún por el usuario
        </p>
      )
    }

    if (hiring?.status === 'PENDING' && hiring.interested === 'PERSON') {
      return (
        <div className="grid grid-cols-2 gap-2">
          {hiring?.status === 'PENDING' &&
            buttons[loading ? 'processing' : 'accept']}
        </div>
      )
    }

    if (person != null) {
      return buttons[loading ? 'processing' : 'invite']
    }
  }

  const renderedContent = () => {
    return (
      <div className="bg-neutral-100 border rounded-md p-4 flex flex-col">
        <h6 className="font-bold text-center text-xl">{username}</h6>
        <p className="font-semibold text-neutral-600 text-center">
          {person?.email}
        </p>
        <RadarGraphic
          data={data}
          options={options}
        />
        {renderedFooter()}
        {/* {hiring?.interested === "COMPANY" && buttons["message"]} */}
        {/* {hiring?.status !== "PENDING" && (
          <>
            {person != null && buttons[loading ? "processing" : "invite"]}
            {hiring?.status === "PENDING" &&
              buttons[loading ? "processing" : "accept"]}
          </>
        )} */}
      </div>
    )
  }

  if (
    readOnly ||
    hiring?.status === 'ACCEPTED' ||
    hiring?.interested === 'COMPANY'
  ) {
    return renderedContent()
  }

  return (
    <>
      {alert}
      <form
        action={action}
        method="POST"
        onSubmit={handleSubmit}
      >
        {renderedContent()}
      </form>
    </>
  )
}
