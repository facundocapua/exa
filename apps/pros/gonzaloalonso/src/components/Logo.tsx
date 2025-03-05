import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo ({ centered = true }: { centered?: boolean}) {
  return (
    <Link href="/" className={clsx(
      'focus:outline-hidden',
      {
        'mx-auto': centered
      }
    )}>
      <span className="sr-only">Gonzalo Alonso</span>
      <Image className='focus:outline-hidden' src="/logo2.png" width={150} height={96} alt="Gonzalo Alonso" />
    </Link>
  )
}
