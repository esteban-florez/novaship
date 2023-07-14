import AvatarIcon from '@/components/AvatarIcon'
import { ActionButton } from '@/components/FilterButtons'
import Subtask from '@/components/projects/Subtask'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Detalles de Tarea',
}

export default function TaskPage() {
  return (
    <>
      <section className="relative flex flex-col bg-primary">
        <div className="flex flex-row justify-between rounded-br-full bg-white px-4 py-6 md:px-8 lg:w-1/2">
          <div className="flex flex-col gap-3">
            <h3 className="font-title text-xl font-bold md:text-3xl">Diseñar la interfaz</h3>
            <div className="-my-1 mb-1 flex flex-col">
              <p className="line-clamp-6 text-base">2 / 5 tareas realizadas</p>
              <div className="flex flex-row items-center gap-2">
                <progress className="progress-accent progress w-52 md:w-80" value="20" max="100" />
                <p className="line-clamp-6 text-sm">20%</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <AvatarIcon username="Liz Villegas" bg="bg-accent" />
              <AvatarIcon username="Estefani Garcia" bg="bg-secondary" />
              <AvatarIcon username="Esteban Florez" bg="bg-warning" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 px-16 py-4">
        <div className="rounded-xl border border-solid border-zinc-400 bg-white shadow">
          <div className="flex flex-col items-center justify-between rounded-t-lg border-b border-solid border-zinc-400 px-6 py-4 md:flex-row">
            <h2 className="font-title text-lg font-bold md:text-2xl">Tareas a realizar</h2>
            <ActionButton color="btn-primary">Agregar</ActionButton>
          </div>
          <div className="flex flex-col gap-2 px-8 py-4">
            <Subtask subtask="Hacer el Inicio de sesión" />
            <Subtask subtask="Hacer el Registro" />
            <Subtask subtask="Hacer el Olvido de contraseña" />
            <Subtask subtask="Hacer la Recuperación de contraseña" />
            <Subtask subtask="Hacer el Home" />
          </div>
        </div>
      </section>
    </>
  )
}
