import { BRANDS } from '@/data/brands'
import Image from 'next/image'

export default function OurSecret () {
  return (
    <section className="py-16 bg-gray-100">
      <div className="flex justify-center items-center gap-12 max-w-6xl mx-auto lg:flex-row flex-col">
        <div className="text-left md:w-1/2 ml-10">
          <h3 className='text-xl'>Nuestro secreto</h3>
          <h2 className="text-3xl text-gray-700 font-extralight mb-8">Sobre los productos utilizados</h2>
          <p className="break-words text-gray-600 mb-4 font-extralight">Utilizamos marcas de primera linea, los cuales son desarrollados con materias prima de excelencia.</p>
          <p className="break-words text-gray-600 mb-4 font-extralight">De esta forma podemos garantizar los mejores resultados.</p>
        </div>
        <div className="w-full sm:w-4/6 md:w-1/2 grid grid-cols-3 gap-4 items-center">
          {BRANDS.map(({ name, image }) => (
            <Image key={name} title={name} alt={name} src={image} className="w-36" />
          ))}
        </div>
      </div>
    </section>
  )
}
