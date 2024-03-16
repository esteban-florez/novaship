'use client'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import Hour from './Hour'
import DummyRow from './DummyRow'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useSelection } from '@/lib/hooks/useSelection'

const hours = [
  '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM',
  '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM',
  '09:00 PM', '10:00 PM', '11:00 PM',
]

const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']

const cellKey = (day: number, hour: number) => `${days[day]}-${hours[hour]}`

type Props = React.PropsWithChildren<{
  schedule: boolean[][] | null
}>

export default function Schedule({ schedule: data }: Props) {
  const [schedule, setSchedule] = useState(data)
  const [changed, setChanged] = useState(false)
  const [intersected, setIntersected] = useState<string[]>([])

  const {
    boxRef, down, move, selecting, up, menuOpen, areaRef, box,
  } = useSelection({ clearIntersected, intersected })

  useEffect(() => {
    const listener = (e: Event) => { e.preventDefault() }

    if (selecting || menuOpen) {
      areaRef.current?.addEventListener('wheel', listener, { passive: false })
    } else {
      areaRef.current?.removeEventListener('wheel', listener)
    }
  }, [selecting, menuOpen, areaRef])

  function clearIntersected() {
    setIntersected([])
  }

  function alternate(hourIndex: number, dayIndex: number) {
    if (schedule === null) return

    const newSchedule = schedule.map(row => row.map(col => col))
    newSchedule[hourIndex][dayIndex] = !newSchedule[hourIndex][dayIndex]

    setSchedule(newSchedule)
    setChanged(true)
  }

  function resetSchedule() {
    setSchedule(data)
    setChanged(false)
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
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <CalendarDaysIcon className="h-6 w-6 text-neutral-700 pointer-events-none select-none" />
          <div className="pointer-events-none select-none">
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
            <button className="btn btn-sm btn-error" onClick={resetSchedule}>
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
          <div className="max-h-96 overflow-x-auto scrollbar relative border border-red-500" ref={areaRef}>
            {box}
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
              <tbody
                className="border border-red-500 relative"
                onMouseDown={down}
                onMouseMove={move}
                onMouseUp={up}
                onMouseLeave={up}
              >
                <DummyRow />
                {schedule.map((days, hourIndex) => {
                  const hour = hours[hourIndex]
                  return (
                    <tr key={hour}>
                      <Hour>{hour}</Hour>
                      {days.map((scheduled, dayIndex) => {
                        const key = cellKey(dayIndex, hourIndex)
                        const selected = intersected.includes(key)
                        return (
                          <td
                            className={
                              clsx('transition-all hover:brightness-75', scheduled ? 'bg-primary' : 'bg-base-300', selected && 'brightness-75')
                            }
                            key={key}
                            onClick={() => { alternate(hourIndex, dayIndex) }}
                            ref={(td) => { refHandler(td, key) }}
                          />
                        )
                      }
                      )}
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
