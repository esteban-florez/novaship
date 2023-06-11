import Carrousel from "@/components/Jobs/Carrousel"
import Offers from "@/components/Jobs/Offers"
import Subnavbar from "@/components/layout/Subnavbar"

const data = [
  {
    id: 0,
    title: "Relleno 1",
    subTitles: ["Manualidades", "Presencial", "Medio tiempo", "Experimentado"],
    description: "Lorem ipsum dolor sit amet cont, temporibus in corrupti!",
    owner: "Nombre",
    location: "Aragua, La Victoria",
  },
  {
    id: 1,
    title: "Relleno 2",
    subTitles: ["Diseño", "Online"],
    description: "Lorem ipsum dolor sit a",
    owner: "Nombre",
    location: "Aragua, La Victoria",
  },
  {
    id: 2,
    title: "Relleno 3",
    subTitles: ["Marketing", "Medio tiempo", "Experimentado"],
    description: "Lorem ipsum dolor sit amet conscorrupti!",
    owner: "Nombre",
    location: "Aragua, La Victoria",
  },
  {
    id: 3,
    title: "Relleno 4",
    subTitles: [
      "Social manager",
      "Online",
      "Jornada completa",
      "Experimentado",
    ],
    description:
      "ipsum voluptatum sit perferendis nulla ad rerum facilis alias commodi ea asperiores. Omnis numquam reiciendis iste velit, temporibus in corrupti!",
    owner: "Nombre",
    location: "Aragua, La Victoria",
  },
  {
    id: 4,
    title: "Relleno 5",
    subTitles: ["Diseñador", "Presencial", "Medio tiempo", "Experimentado"],
    description: "Lorem ipsun corrupti!",
    owner: "Nombre",
    location: "Aragua, La Victoria",
  },
  {
    id: 5,
    title: "Relleno 6",
    subTitles: ["Electricista", "Presencial", "Medio tiempo"],
    description: "Lorem ipsum dolor sit amet conscorrupti!",
    owner: "Nombre",
    location: "Aragua, La Victoria",
  },
  {
    id: 6,
    title: "Relleno 7",
    subTitles: ["Programador", "Online", "Jornada completa", "Experimentado"],
    description: "Lorem ipsum dolor sit amet conscorrupti!",
    owner: "Nombre",
    location: "Aragua, La Victoria",
  },
  {
    id: 7,
    title: "Relleno 8",
    subTitles: ["Diseñador", "Online", "Medio tiempo", "Principiante"],
    description: "Lorem ipsum dolor sit amet conscorrupti!",
    owner: "Nombre",
    location: "Aragua, La Victoria",
  },
  {
    id: 8,
    title: "Relleno 9",
    subTitles: ["Arquitecto", "Presencial", "Medio tiempo", "Experimentado"],
    description:
      "Lorem ipsum dolor sit amet consectei ipsum voluptatum sit perferendis nulla ad rerum facilis alias commodi ea asperiores. Omnis numquam reiciendis iste velit, temporibus in corrupti!",
    owner: "Nombre",
    location: "Aragua, La Victoria",
  },
  {
    id: 9,
    title: "Relleno 10",
    subTitles: ["Profesor", "Presencial", "Jornada completa", "Experimentado"],
    description:
      "Lorem ipsum dolor sit amet consectetur adi quas ipsum vlit, temporibus in corrupti!",
    owner: "Nombre",
    location: "Aragua, La Victoria",
  },
  {
    id: 10,
    title: "Relleno 11",
    subTitles: ["Contador", "Online", "Pago por horas", "Experimentado"],
    description: "Lorem ipsum dolor sit amet consectetur aditi!",
    owner: "Nombre",
    location: "Aragua, La Victoria",
  },
]

export default function JobsPage() {
  return (
    <>
      <Subnavbar options={true} />
      <Carrousel />
      <section className="join px-6 mb-4">
        <button className="join-item btn-active normal-case font-semibold text-white text-lg btn-ghost btn btn-md">
          Todos
        </button>
        <button className="join-item normal-case font-semibold text-lg btn btn-ghost btn-md">
          Mis ofertas de trabajo
        </button>
        <button className="join-item normal-case font-semibold text-lg btn btn-ghost btn-md">
          Trabajos aplicados
        </button>
      </section>
      <div className="w-full px-8 gap-4 my-4 columns-3">
        {data.map((offers) => {
          return (
            <Offers
              key={offers.id}
              title={offers.title}
              subTitles={offers.subTitles}
              description={offers.description}
              owner={offers.owner}
              location={offers.location}
            />
          )
        })}
      </div>
    </>
  )
}
