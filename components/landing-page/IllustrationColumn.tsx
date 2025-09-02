import { url } from '@/lib/utils/url'

export default function IllustrationColumn() {
  return (
    <>
      <div className="order-1 flex flex-1 flex-col items-center justify-center p-4 md:order-2 md:p-0">
        <img src={url('/working_remote.webp').pathname} alt="Imagen de trabajo remoto" width={400} height={400} className="z-50" />
      </div>
      <img src={url('/shape.webp').pathname} alt="Imagen de forma" className="absolute right-0 top-0 h-64 md:h-[26rem]" />
    </>
  )
}
