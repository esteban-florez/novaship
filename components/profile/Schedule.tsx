'use client'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import Hour from './Hour'
import DummyRow from './DummyRow'
import clsx from 'clsx'
import { useState } from 'react'
import { useSelection } from '@/lib/hooks/useSelection'
import useSubmit from '@/lib/hooks/useSubmit'

const hours = [
  '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM',
  '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM',
  '09:00 PM', '10:00 PM', '11:00 PM',
]

const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']

const cellKey = (hour: number, day: number) => `${hour}-${day}`
const cellIndexes = (key: string) => key.split('-').map(n => Number(n)) as [number, number]

type Props = React.PropsWithChildren<{
  schedule: boolean[][] | null
  interactive?: boolean
}>

export default function Schedule({ schedule: data, interactive = false }: Props) {
  const [schedule, setSchedule] = useState(data)
  const [changed, setChanged] = useState(false)
  const [intersected, setIntersected] = useState<string[]>([])

  function h<T>(handler: T) {
    return interactive ? handler : undefined
  }

  async function updateFromServer() {
    await fetch('/api/schedule')
      .then(async response => await response.json())
      .then(data => { setSchedule(data.schedule as boolean[][]) })
  }

  const { alert, handleSubmit, serverErrors, loading } = useSubmit({
    append: { schedule },
    onSuccess: async () => {
      await updateFromServer()
      setChanged(false)
    },
  })

  const clone = () => {
    if (schedule === null) {
      throw new Error('The schedule for this user is not defined.')
    }

    return structuredClone(schedule)
  }

  const {
    boxRef, down, move, selecting, up, areaRef, box, cancel,
  } = useSelection({ clearIntersected, intersected, markIntersected })

  function clearIntersected() {
    setIntersected([])
  }

  function handleCellClick(hourIndex: number, dayIndex: number) {
    const newSchedule = clone()

    newSchedule[hourIndex][dayIndex] = !newSchedule[hourIndex][dayIndex]

    setSchedule(newSchedule)
    setChanged(true)
  }

  function resetSchedule() {
    setSchedule(data)
    setChanged(false)
  }

  function markIntersected(value: boolean) {
    const newSchedule = clone()

    intersected.forEach(key => {
      const [hourIndex, dayIndex] = cellIndexes(key)
      newSchedule[hourIndex][dayIndex] = value
    })

    setSchedule(newSchedule)
    setChanged(true)
  }

  function refHandler(td: HTMLTableCellElement | null, key: string) {
    if (td === null || boxRef.current === null || !selecting) return

    const boxRect = boxRef.current.getBoundingClientRect()
    const tdRect = td.getBoundingClientRect()

    const isIntersecting = boxRect.left < tdRect.right &&
      boxRect.right > tdRect.left &&
      boxRect.top < tdRect.bottom &&
      boxRect.bottom > tdRect.top

    const included = intersected.includes(key)

    if (isIntersecting && !included) {
      setIntersected([...intersected, key])
    }

    if (!isIntersecting && included) {
      setIntersected(intersected.filter(el => el !== key))
    }
  }

  return (
    <div className="col-span-full card gap-3 bg-white p-4 shadow-md border border-zinc-300 text-sm">
      {interactive && (
        <form id="schedule-form" onSubmit={h(handleSubmit)} action="/api/schedule" method="POST" />
      )}
      {interactive && alert} {interactive && serverErrors}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <CalendarDaysIcon className="h-6 w-6 text-neutral-700 pointer-events-none select-none" />
          <div className="pointer-events-none select-none">
            <h4 className="text-xl font-bold">Horario de Disponibilidad Laboral</h4>
            {schedule !== null && interactive && (
              <p className="-mt-1 max-w-lg">
                Haga click en una de las casillas para alternar entre <span className="bg-primary text-white p-1 rounded-xl font-bold">Disponible</span> y <span className="bg-base-300 border border-neutral p-1 rounded-xl font-bold">Ocupado</span>. También puedes seleccionar manteniendo el click y arrastrando sobre las casillas.
              </p>
            )}
          </div>
        </div>
        {changed && (
          <div className="flex gap-2 items-center">
            <button type="button" className="btn btn-sm btn-error" onClick={h(resetSchedule)} disabled={loading}>
              Deshacer cambios
            </button>
            <button type="submit" form="schedule-form" className="btn btn-sm btn-primary disabled:bg-primary disabled:brightness-50">
              Guardar cambios
            </button>
          </div>
        )}
      </div>
      {schedule !== null
        ? (
          <div className="relative">
            <table className="table table-pin-rows table-pin-cols schedule-table">
              <thead>
                <tr>
                  <th />
                  {days.map(day => <th key={day}>{day}</th>)}
                </tr>
              </thead>
              <tbody
                className="border border-red-500 relative"
                onMouseDown={h(down)}
                onMouseMove={h(move)}
                onMouseUp={h(up)}
                onMouseLeave={h(cancel)}
                ref={h(areaRef)}
              >
                {box}
                {schedule.map((days, hourIndex) => {
                  const hour = hours[hourIndex]
                  return (
                    <tr key={hour}>
                      <Hour>{hour}</Hour>
                      {days.map((scheduled, dayIndex) => {
                        const key = cellKey(hourIndex, dayIndex)
                        const selected = intersected.includes(key)
                        return (
                          <td
                            className={
                              clsx('transition-all hover:brightness-75', scheduled ? 'bg-primary' : 'bg-base-300', selected && 'brightness-75')
                            }
                            key={key}
                            onClick={h(() => { handleCellClick(hourIndex, dayIndex) })}
                            ref={h((td) => { refHandler(td, key) })}
                          />
                        )
                      }
                      )}
                    </tr>
                  )
                })}
                <DummyRow />
              </tbody>
            </table>
          </div>
          )
        : (
          <>
            <div className="grid place-items-center py-10">
              <h4 className="font-bold text-lg text-gray-400 mb-4">
                Aún no has creado tu horario de disponibilidad.
              </h4>
              <button type="submit" className="btn btn-primary" form="schedule-form">
                Crear horario
              </button>
            </div>
          </>
          )}
    </div>
  )
}
