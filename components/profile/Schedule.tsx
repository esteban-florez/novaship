'use client'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import Hour from './Hour'
import DummyRow from './DummyRow'
import clsx from 'clsx'
import { useState } from 'react'

const scheduleHours = [
  '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM',
  '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM',
  '09:00 PM', '10:00 PM', '11:00 PM',
]

type Props = React.PropsWithChildren<{
  schedule: boolean[][] | null
}>

declare global {
  // eslint-disable-next-line no-var
  var wait: boolean
}

export default function Schedule({ schedule: data }: Props) {
  const [schedule, setSchedule] = useState(data)
  const [changed, setChanged] = useState(false)
  const [initialPoint, setInitialPoint] = useState<[number, number] | null>(null)
  const [currentPoint, setCurrentPoint] = useState<[number, number] | null>(null)

  if (initialPoint !== null && currentPoint !== null) {
    console.log('Inicial: ', initialPoint)
    console.log('Actual: ', currentPoint)
  }

  const coords = (event: React.MouseEvent) => [event.clientX, event.clientY] as [number, number]

  function alternate(i: number, j: number) {
    const newSchedule = [...schedule as boolean[][]]
    newSchedule[i][j] = !newSchedule[i][j]
    setSchedule(newSchedule)
    setChanged(true)
  }

  function initSelection(event: React.MouseEvent) {
    setInitialPoint(coords(event))
    setCurrentPoint(coords(event))
  }

  function resizeSelection(event: React.MouseEvent) {
    if (globalThis.wait || initialPoint === null) return

    globalThis.wait = true

    setTimeout(() => {
      globalThis.wait = false
    }, 20)

    const { clientX, clientY } = event

    setCurrentPoint([clientX, clientY])
  }

  function endSelection(event: React.MouseEvent) {
    setInitialPoint(null)
    setCurrentPoint(null)
  }

  return (
    <div className="col-span-full card gap-3 bg-white p-4 shadow-md border border-zinc-300 text-sm">
      <div
        className="border border-blue-500 bg-blue-300 opacity-50 absolute block z-50" style={{
          width: 100,
          height: 100,
          top: 0,
          left: 0,
        }}
      />
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <CalendarDaysIcon className="h-6 w-6 text-neutral-700" />
          <div>
            <h4 className="text-xl font-bold">Horario de Disponibilidad Laboral</h4>
            {schedule !== null && (
              <p className="-mt-1">
                Haga click en una de las casillas para alternar entre <span className="bg-primary text-white p-1 rounded-xl font-bold">Disponible</span> y <span className="bg-base-300 border border-neutral p-1 rounded-xl font-bold">Ocupado</span>
              </p>
            )}
          </div>
        </div>
        {changed && (
          <div className="flex gap-2 items-center">
            <button className="btn btn-sm btn-error">
              Deshacer cambios
            </button>
            <button className="btn btn-sm btn-primary">
              Guardar cambios
            </button>
          </div>
        )}
      </div>
      {schedule !== null
        ? (
          <div className="max-h-96 overflow-x-auto scrollbar">
            <table className="table table-pin-rows table-pin-cols schedule-table">
              <thead>
                <tr>
                  <th />
                  <th>Lun</th>
                  <th>Mar</th>
                  <th>Mie</th>
                  <th>Jue</th>
                  <th>Vie</th>
                  <th>Sab</th>
                  <th>Dom</th>
                </tr>
              </thead>
              <tbody onMouseDown={initSelection} onMouseMove={resizeSelection} onMouseUp={endSelection} onMouseLeave={endSelection}>
                <DummyRow />
                {schedule.map((days, i) => {
                  const hour = scheduleHours[i]
                  return (
                    <tr key={hour}>
                      <Hour>{hour}</Hour>
                      {days.map((scheduled, j) => (
                        <td key={j} className={clsx('transition-all hover:brightness-75', scheduled ? 'bg-primary' : 'bg-base-300')} onClick={() => { alternate(i, j) }} />
                      ))}
                    </tr>
                  )
                })}
                <DummyRow withHour />
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
              <button className="btn btn-primary">
                Crear horario
              </button>
            </div>
          </>
          )}
    </div>
  )
}
