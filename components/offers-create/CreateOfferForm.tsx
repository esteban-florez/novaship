'use client'

import { useState } from 'react'
import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import Select from '@/components/forms/inputs/Select'
import Textarea from '@/components/forms/inputs/Textarea'
import SelectedSkills from './SelectedSkills'
import Link from 'next/link'
import { type SkillOption } from '@/lib/types'

export default function CreateOfferForm() {
  const [skills, setSkills] = useState<SkillOption[]>([
    { id: '8293-3819-1234', title: 'Programación', selected: false },
    { id: '2903-4850-1282', title: 'JavaScript', selected: false },
    { id: '8349-2309-4052', title: 'Bases de datos', selected: false },
    { id: '2930-9485-1234', title: 'React', selected: false },
    { id: '7890-1234-5324', title: 'Diseño', selected: false },
  ])
  const selectedSkills = skills.filter(skill => skill.selected)
  const availableSkills = skills.filter(skill => !skill.selected)

  function addSkill(id: string) {
    const newSkills = skills.map(skill => {
      if (skill.id !== id) return skill

      return {
        ...skill,
        selected: true,
      }
    })

    setSkills(newSkills)
  }

  function removeSkill(id: string) {
    const newSkils = skills.map(skill => {
      if (skill.id !== id) return skill

      return {
        ...skill,
        selected: false,
      }
    })

    setSkills(newSkils)
  }

  return (
    <form method="POST" action="/api/offer/create" className="mb-4 w-full rounded-lg bg-base-100 p-4" onSubmit={e => { e.preventDefault() }}>
      <FormSection title="Datos básicos" description="El nombre de la oferta, su descripción, categoría y salario serán visibles para los posibles candidatos.">
        <div className="mb-4">
          <Input name="title" placeholder="Ej. Desarrollador Web Front-End" label="Título de la oferta:" />
        </div>
        <div className="mb-4">
          <Input name="salary" placeholder="Ej. 25" label="Salario por hora ($):" />
        </div>
        <div className="mb-4">
          <Select name="companyId" label="Categoría">
            <option value="1283-1232-3829">Informática</option>
            <option value="1283-1232-3829">Mecánica</option>
            <option value="1283-1232-3829">Administración</option>
          </Select>
        </div>
        <div className="mb-4">
          <Textarea name="description" height={3} label="Descripción de la oferta" placeholder="Ej. Se busca Desarrollador Web Front-End con años de experiencia." />
        </div>
      </FormSection>
      <FormSection title="Empresa vinculada" description="Selecciona cual será la empresa vinculada a esta  de esta oferta de trabajo.">
        <Select name="companyId" label="Selecciona una empresa">
          <option value="1283-1232-3829">EmpresaNet</option>
          <option value="1283-1232-3829">ACME S.A.</option>
        </Select>
        <a className="btn-link self-start text-sm font-semibold" href="/home/profile/company">Registrar una nueva empresa</a>
      </FormSection>
      <FormSection title="Habilidades requeridas" description="Elige las habilidades necesarias para desempeñar el trabajo.">
        {availableSkills.length > 0 &&
          (
            <Select name="skills" label="Habilidades" noDefault>
              {availableSkills.map(skill => (
                <option key={skill.id} value={skill.id} onClick={() => { addSkill(skill.id) }}>
                  {skill.title}
                </option>
              ))}
            </Select>
          )}
        <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
          <SelectedSkills selectedSkills={selectedSkills} removeSkill={removeSkill} />
        </div>
      </FormSection>
      <FormSection title="Horario de trabajo" description="Especifica los detalles del horario de trabajo así como la modalidad.">
        <div className="mb-4">
          <Select name="mode" label="Modalidad">
            <option value="remote">Remoto</option>
            <option value="onsite">Presencial</option>
            <option value="hybrid">Híbrido</option>
          </Select>
        </div>
        <div className="mb-4">
          <Select name="mode" label="Horario">
            <option value="fulltime">Tiempo completo</option>
            <option value="parttime">Medio tiempo</option>
          </Select>
        </div>
        <div className="mb-4" />
      </FormSection>
      <FormSection title="Visibilidad de la oferta" description="Decide si la oferta tiene como objetivo a estudiantes en pasantías, o por el contrario, solo para aspirantes que no estén realizando pasantías.">
        <Select label="Visibilidad" name="target">
          <option value="interns">Pasantes</option>
          <option value="candidats">Candidatos</option>
        </Select>
      </FormSection>
      <div className="flex gap-2 px-4">
        <button className="btn-primary btn" type="submit">
          Crear oferta
        </button>
        <Link href="/home/offers" className="btn-ghost btn">
          Cancelar
        </Link>
      </div>
    </form>
  )
}
