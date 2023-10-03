import { MapPinIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function StoresBanner () {
  return (
    <section className='w-full bg-black py-14'>
      <div className='max-w-4xl mx-auto flex items-center justify-between'>
        <h3 className='text-4xl text-white'>
          Encuentra el <span className='font-bold block'>salón perfecto</span>
        </h3>
        <Link href='/stores' className='text-neutral-700 flex items-center bg-neutral-300 py-4 px-2 rounded-lg text-lg gap-2 hover:opacity-70 transition-all ease-in-out duration-300'>
          <MapPinIcon className='w-6 h-6' /> Buscador de salones
        </Link>
      </div>
    </section>
  )
}
