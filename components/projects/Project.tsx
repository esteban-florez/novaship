import Card from './Card'

export default function Project() {
  return (
    <>
      <section className="mb-4 flex w-full flex-col">
        <Card title="Hola wapo" categories={['OLASASA', 'OLASSA']} owner="Juan" ubication="Los Cocos" description="Lorem ipsum incolorun dolorum" />
        <Card title="Hola wapo" categories={['OLASASA', 'OLASSA']} owner="Juan" ubication="Los Cocos" description="Lorem ipsum incolorun dolorum" />
        <Card title="Hola wapo" categories={['OLASASA', 'OLASSA']} owner="Juan" ubication="Los Cocos" description="Lorem ipsum incolorun dolorum" />
      </section>
    </>
  )
}
