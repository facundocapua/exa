import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export default async function HeroBanner () {
  return (
    <section className='w-full mb-4 bg-secondary-100 md:px-24 relative md:py-12'>
      <div className="md:grid md:grid-cols-[60%_40%] items-center md:flex-row">
        <div className={clsx(
          'max-w-7xl md:backdrop-blur-0 backdrop-blur text-balance z-10',
          'absolute bottom-0 md:top-[10px]',
          'md:bg-transparent md:rounded-none md:static md:mx-auto md:top-0 md:w-auto'
        )}>
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative px-6">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl">
                <h1 className="hidden md:block text-4xl tracking-tight lg:text-secondary-500 sm:text-6xl text-secondary-500 font-title font-normal">
                  Carolina Pereyra
                </h1>
                <Link href="/portfolio" className="md:mt-6 block text-primary-100 text-base md:text-lg md:leading-8 md:text-gray-900">
                  Soy una estilista apasionada y una madre dedicada, con un don especial para realzar la belleza de cada persona que pasa por mi salón. Con una técnica precisa y un enfoque cálido, me especializo en crear estilos únicos que hacen que mis clientes se sientan auténticos y seguros. Para mí, la peluquería es una forma de cuidado y expresión personal, y cada cambio de look es una oportunidad para transformar y renovar desde adentro hacia afuera.
                </Link>
                <div className="mt-10 items-center gap-x-6 hidden md:block">
                  <Link
                    href="/portfolio"
                    className="rounded-md bg-primary-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
                  >
                    Ver Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[700px] aspect-[9/12] md:max-h-[400px] w-full md:aspect-square relative overflow-hidden md:rounded-2xl">
          <Image
              className='object-cover object-[0_100%] md:object-[0_30%]'
              src="/home.jpg"
              alt=""
              priority={true}
              fill={true}
            />
        </div>
      </div>
    </section>
  )
}
