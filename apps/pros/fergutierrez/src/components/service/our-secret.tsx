import { BRANDS } from '@/data/brands'
import Image from 'next/image'

export default function OurSecret () {
  return (
    <section className="py-16 bg-gray-100">
      <div className="flex justify-center items-center gap-12 max-w-6xl mx-auto lg:flex-row flex-col">
        <div className="text-left md:w-1/2 ml-10">
          <h2 className="text-3xl text-gray-700 font-extralight mb-8">Sobre mis trabajos</h2>
          <p className="break-words text-gray-600 mb-4 font-extralight">Mis maquillajes tienen asegurada su durabilidad, ya que están realizados con técnicas precisas y son aptos para emocionarse.</p>
          <p className="break-words text-gray-600 mb-4 font-extralight">Mis trabajos son realizados con marcas de excelente calidad.</p>
        </div>
        <div className="w-full sm:w-4/6 md:w-1/2 grid grid-cols-5 gap-4 items-center">
          {BRANDS.map(({ name, image }) => (
            <Image key={name} title={name} alt={name} src={image} className="w-36" />
          ))}
        </div>
      </div>
    </section>
  )
}
