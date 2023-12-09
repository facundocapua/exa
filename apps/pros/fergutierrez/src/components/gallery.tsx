'use client'
import Image from 'next/image'

type Props = {
  images: Array<string>
}

const imagesClasses = [
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative',
  'w-full block h-[350px] md:h-full rounded-xl md:col-span-2 relative',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl relative'
]

export default function Gallery ({ images }: Props) {
  return (
    <section className="grid md:grid-cols-3 md:grid-rows-[350px_350px_350px] gap-4">
      {imagesClasses.map((imageClasses, index) => (
        <div key={index} className={imageClasses}>
          {images[index] && <Image src={images[index]} alt="" className='object-cover rounded-lg cursor-pointer' fill />}
        </div>
      ))}
    </section>
  )
}
