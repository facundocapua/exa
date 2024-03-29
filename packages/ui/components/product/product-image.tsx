import type { Product } from 'api'
import clsx from 'clsx'
import Image from 'next/image'

type Props = {
  image: string
  title: string
  width?: number
  height?: number
  className?: string
}
export default function ProductImage ({ image, title, width, height, className }: Props) {
  return (
    <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 ">
      <Image
        className={clsx(
          'h-full w-full object-cover',
          className
        )}
        width={width || 64}
        height={height || 64}
        alt={title}
        src={image}
      />
    </div>
  )
}
