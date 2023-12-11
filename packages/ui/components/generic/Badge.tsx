import clsx from 'clsx'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Badge ({ children, className }: Props) {
  return (
    <span className={clsx('inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mr-2 dark:bg-primary-800 dark:text-primary-100', className)}>
      {children}
    </span>
  )
}
