import CommentsColumn from './CommentsColumn'
import Title from './Title'
import WhoWeAreColumn from './WhoWeAreColumn'

export default function AboutUsSection() {
  return (
    <section className="border-b pb-16 pt-8 md:px-20">
      <Title>¿Por qué escogernos?</Title>
      <div className="flex flex-col px-4 md:flex-row md:px-0">
        <CommentsColumn />
        <WhoWeAreColumn />
      </div>
    </section>
  )
}
