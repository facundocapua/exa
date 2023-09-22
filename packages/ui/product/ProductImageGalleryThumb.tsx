import clsx from 'clsx'
import Image from 'next/image'

type Props = {
  label: string
  image: string
  selected: boolean
}

export default function ProductImageGalleryThumb ({ label, image, selected }: Props) {
  return (
    <>
      <span className="sr-only">{label}</span>
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <Image
          src={image}
          alt={label}
          className="h-full w-full object-cover object-center sm:rounded-lg"
          width={100}
          height={100}
        />
      </span>
      <span
        className={clsx(
          selected ? 'ring-primary-500' : 'ring-transparent',
          'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
        )}
        aria-hidden="true"
      />
    </>
  )
}
