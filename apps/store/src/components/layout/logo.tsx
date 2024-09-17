'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  responsive?: boolean
  center?: boolean
  onClick?: () => void
  className?: string
}

export const Logo = ({ responsive = true, center = true, onClick, className }: Props) => {
  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <Link href="/" onClick={handleClick} className={clsx(
      'relative block aspect-[128/75]',
      responsive ? 'w-[70px] lg:w-[100px]' : 'w-[100px]',
      center ? 'mx-auto' : '',
      className
    )}>
      <Image
        src="/logo.png"
        fill
        sizes='(max-width: 1024px) 50vw, 100vw'
        alt="eXa"
      />
    </Link>
  )
}

export default Logo
