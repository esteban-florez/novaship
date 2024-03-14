import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import Hour from './Hour'
import DummyRow from './DummyRow'
import clsx from 'clsx'

const scheduleHours = [
  '12:00 AM',
  '01:00 AM',
  '02:00 AM',
  '03:00 AM',
  '04:00 AM',
  '05:00 AM',
  '06:00 AM',
  '07:00 AM',
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
  '08:00 PM',
  '09:00 PM',
  '10:00 PM',
  '11:00 PM',
]

type Props = React.PropsWithChildren<{
  schedule: boolean[][] | null
}>

export default function Schedule({ schedule }: Props) {
  return (
    <div className="col-span-full card gap-3 bg-white p-4 shadow-md border border-zinc-300 text-sm">
      <div className="flex items-center gap-3 mb-2">
        <CalendarDaysIcon className="h-6 w-6 text-neutral-700" />
        <h4 className="text-xl font-bold">Horario</h4>
      </div>
      <div className="max-h-96 overflow-x-auto">
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
          <tbody>
            <DummyRow />
            {schedule === null
              ? (
                <tr>
                  <td className="h-60" colSpan={8}>
                    No has creado aún tu horario.
                    <button className="btn btn-primary">
                      Crear horario
                    </button>
                  </td>
                </tr>
                )
              : (
                  schedule.map((days, index) => {
                    const hour = scheduleHours[index]
                    return (
                      <tr key={hour}>
                        <Hour>{hour}</Hour>
                        {days.map((scheduled, index) => (
                          <td key={index} className={clsx(scheduled && 'bg-primary')} />
                        ))}
                      </tr>
                    )
                  })
                )}
            <DummyRow withHour />
          </tbody>
        </table>
      </div>
    </div>
  )
}
