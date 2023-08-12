'use client'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Context ({ children }: Props) {
  return (
    <>
      {children}
    </>
  )
}
