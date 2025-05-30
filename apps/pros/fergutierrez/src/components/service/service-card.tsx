import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
  image: string | StaticImageData
  title: string
  link: string
}

export default function ServiceCard ({ image, title, link }: Props) {
  const titleParts = title.split(' ')
  return (
    <Link href={link} className="bg-neutral-700 py cursor-pointer">
      <div className="relative w-full aspect-5/6 overflow-hidden
        before:absolute before:bottom-4 before:right-4 before:h-0 before:w-0 before:border-b before:border-r before:transition-all before:duration-500 before:ease-in-out
        after:absolute after:top-4 after:left-4 after:h-0 after:w-0 after:border-t after:border-l after:transition-all after:duration-500 after:ease-in-out
        hover:before:w-[calc(100%-32px)] hover:before:h-[calc(100%-32px)]
        hover:after:h-[calc(100%-32px)] hover:after:w-[calc(100%-32px)]
      ">
        <Image alt={title} className="transition-all ease-in-out duration-500 object-cover" src={image} />
      </div>
      <h2 className="text-xl font-extralight text-center py-4 text-white tracking-wide">
        <span>{`${titleParts[0]} `}</span>
        <span className="text-white font-semibold">{titleParts.slice(1).join(' ')}</span>
      </h2>
    </Link>
  )
}
