import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo ({ centered = true }: { centered?: boolean}) {
  return (
    <Link href="/" className={clsx(
      'focus:outline-hidden w-fit',
      {
        'mx-auto': centered
      }
    )}>
      <span className="sr-only">Sol La Peluquera</span>
      <Image className='focus:outline-hidden' src="/logo.webp" width={150} height={96} alt="logo" />
    </Link>
  )
}
