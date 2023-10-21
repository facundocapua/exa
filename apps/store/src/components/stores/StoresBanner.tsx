import Image from 'next/image'
import Link from 'next/link'

export default function StoresBanner () {
  return (
    <div className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 mx-auto overflow-hidden xl:px-8">
          <Image
            src="/stores/bg-studios.jpg"
            alt="Studios"
            layout="fill"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-white bg-opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
      </div>

      {/* Callout */}
      <section
        aria-labelledby="sale-heading"
        className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-36 pb-8 text-center sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Exclusivo buscador eXa Pros
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600 [text-wrap:balance]">
            Utiliza nuestro buscador para explorar los profesionales asociados y encontrar el que mejor se adapte a tus necesidades.
          </p>
          <Link href='/stores'
            className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto"
          >
            Buscar profesionales
          </Link>
        </div>
      </section>
    </div>
  )
}
