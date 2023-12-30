import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  link: string
  className?: string
}

export default function Button ({ children, link, className }: Props) {
  return (
    <Link
      href={link}
      className={clsx(
        'uppercase bg-primary-300 font-extralight py-2 px-8 rounded-md inline-block mt-6 hover:scale-110 transition-all duration-300',
        className
      )}>
      {children}
    </Link>
  )
}
