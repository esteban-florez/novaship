import CardComment from './CardComment'

export default function CommentsColumn() {
  return (
    <div className="order-2 flex flex-1 flex-col gap-y-8 md:order-1">
      <CardComment title="Puedes comunicarte con empresas" className="md:ms-4">
        <p>Te ofrecemos una plataforma donde puedas comunicarte eficazmente con las empresas, evitando el tedioso proceso de buscar un trabajo y aumentando tu alcance laboral.</p>
        <p className="font-semibold text-primary">¡Sé parte de los profesionales que las empresa buscan!</p>
      </CardComment>
      <CardComment title="¿Buscas personal? No hay problemas" color="bg-secondary" className="md:ms-12">
        <p>Tenemos las herramientas para tí, gestiona ofertas laborales, lleva a cabo proyectos y encuentra al personal adecuado para el rol.</p>
        <p className="font-semibold text-secondary">No te quedes atrás !Queremos que tu empresa crezca!</p>
      </CardComment>
      <CardComment title="¿Necesitas experiencia? No te quedes atrás">
        <p>No dejes que tus estudiantes salgan sin experiencia, nosotros lo vivimos y tú no tienes por qué. Encuentra empresas para hacer convenios y garantizar pasantías ¡Las empresas también los necesitan!</p>
        <p className="font-semibold text-primary">¡Un profesional con experiencia es un profesional capaz!</p>
      </CardComment>
    </div>
  )
}
