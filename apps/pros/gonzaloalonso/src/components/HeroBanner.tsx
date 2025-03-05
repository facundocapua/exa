import Image from 'next/image'
import Link from 'next/link'

export default async function HeroBanner () {
  return (
    <section className='max-w-7xl mx-auto mb-4'>
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl bg-white/40 lg:bg-transparent">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-black lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:pl-8 lg:py-56 lg:pr-0 ">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight lg:text-gray-300 sm:text-6xl text-black ">
                  <span className="text-black lg:text-primary-400">Gonzalo Alonso</span> Studio
                </h1>
                <p className="mt-6 text-lg font-semibold leading-8 text-gray-900 lg:text-gray-300">
                  Un espacio propicio para encontrar tu Hair Style. Disfrutá de la Experiencia GA, en un mundo de calidad, calidez y lujo, guiado por profesionales expertos.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/portfolio"
                    className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Ver portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="object-cover lg:aspect-auto lg:h-full lg:w-full object-top"
            src="/home.jpg"
            alt=""
            fill
          />
        </div>
      </div>
    </section>
  )
}
