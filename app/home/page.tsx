import Carousel from '@/components/carousel/Carousel'
import { type Metadata } from 'next'
import BarGraphic from '@/components/graphics/BarGraphic';
import numbers from '@/lib/utils/number';

export const metadata: Metadata = {
  title: 'Inicio',
}

export default function HomePage() {
  const items = [
    {
      title: 'Proyectos',
      description: 'Registra proyectos individuales o grupales de manera rápida y sencilla que puedan atraer posibles inversores para impulsar su desarrollo.',
      link: '/home/projects',
    },
    {
      title: 'Ofertas laborales',
      description: 'Encuentra ofertas de trabajo que se adapten a tu perfil profesional y a tu experiencia o consigue tu primera experiencia práctica.',
      link: '/home/offers',
    },
    {
      title: 'Pasantías',
      description: 'Consigue experiencia laboral que te ayude a alcanzar nuevos horizontes y te ayuden a desarrollar tu perfil laboral.',
      link: '/home/interships',
    },
  ]

  const labels = ['Test 1', 'Test 2', 'Test 3', 'Test 4']
  const datasets = [
    {
      label: 'Label 1',
      data: labels.map(() => numbers(1, 5).random()),
      backgroundColor: 'rgb(165,94,234,0.5)',
    },
    {
      label: 'Label 2',
      data: labels.map(() => numbers(1, 5).random()),
      backgroundColor: 'rgb(69,170,242,0.5)',
    }
  ]

  return (
    <>
      <Carousel items={items} />
      <div className="card bg-white shadow-md m-8">
        <BarGraphic title='Test' labels={labels} datasets={datasets} />
      </div>
    </>
  )
}
