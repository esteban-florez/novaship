import Carousel from '../carousel/Carousel'

export default function HomeCarousel() {
  const items = [
    {
      title: 'Proyectos',
      description:
        'Registra proyectos individuales o grupales de manera rápida y sencilla que puedan atraer posibles inversores para impulsar su desarrollo.',
      link: '/home/projects',
      image: '/project_carousel.jpg',
    },
    {
      title: 'Ofertas laborales',
      description:
        'Encuentra ofertas de trabajo que se adapten a tu perfil profesional y a tu experiencia o consigue tu primera experiencia práctica.',
      link: '/home/offers',
      image: '/offer_carousel.jpg',
    },
    {
      title: 'Pasantías',
      description:
        'Consigue experiencia laboral que te ayude a alcanzar nuevos horizontes y te ayuden a desarrollar tu perfil laboral.',
      link: '/home/interships',
      image: '/internship_carousel.jpg',
    },
  ]

  return <Carousel items={items} />
}
