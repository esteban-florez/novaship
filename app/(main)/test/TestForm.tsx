'use client'

import Input from '@/components/forms/inputs/Input'
import Select from '@/components/forms/inputs/Select'
import Textarea from '@/components/forms/inputs/Textarea'
import useFormHandling from '@/lib/hooks/useFormHandling'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export default function TestForm() {
  const { status, alert, onSubmit } = useFormHandling()
  const isLoading = status === 'loading'

  return (
    <form action="/api/test" method="POST" onSubmit={onSubmit}>
      {alert}
      <div className="mb-4">
        <Input type="email" name="email" label="Correo electrónico" placeholder="correo@ejemplo.com" />
      </div>
      <div className="mb-4">
        <Input type="password" name="password" label="Contraseña" placeholder="Escribe tu contraseña..." />
      </div>
      <div className="mb-4">
        <Textarea label="Cuentanos sobre ti" name="bio" placeholder="Soy Esteban y me gusta el aguacate." />
      </div>
      <div className="mb-4">
        <Select label="Anime favorito" name="animeId">
          {[
            { value: 1, label: 'Shingeki no Kyokin' },
            { value: 2, label: 'Boku no Hero Academia' },
            { value: 3, label: 'Steins;Gate' },
          ].map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </Select>
      </div>
      <button
        className={clsx(
          'btn-primary btn', isLoading && 'btn-disabled'
        )}
        disabled={isLoading}
      >
        {isLoading && <ArrowPathIcon className="h-5 w-5 animate-spin" />}
        {isLoading ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  )
}
