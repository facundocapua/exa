import Image from 'next/image'
import Link from 'next/link'

export default async function HeroBanner () {
  return (
    <section className='w-full mb-4 bg-secondary-100 md:px-24 relative md:pt-12'>
      <div className="md:grid md:grid-cols-2 items-center md:flex-row bg-radial-small md:bg-radial-medium 2xl:bg-radial-big">
        <div className="max-w-[700px] max-h-[700px] w-full aspect-square relative overflow-hidden">
          <Image
            className='object-cover object-center opacity-60 md:opacity-100'
            src="/home.png"
            alt=""
            fill
          />
        </div>
        <div className="mx-auto max-w-7xl absolute top-[150px] md:static md:top-0">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative px-6">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl">
                <h1 className="text-4xl tracking-tight lg:text-secondary-500 sm:text-4xl text-secondary-500 font-custom font-normal uppercase">
                  <span className="text-primary-400 font-black text-6xl block md:inline">Sol</span> La Peluquera
                </h1>
                <Link href="/portfolio" className="mt-6 block md:text-lg md:leading-8 text-gray-900 md:text-gray-900">
                  Lipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Link>
                {/* <p className="mt-6 text-lg leading-8 text-gray-900">
                  Lipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
                <div className="mt-10 flex items-center gap-x-6 hidden md:block">
                  <Link
                    href="/portfolio"
                    className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Ver portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
