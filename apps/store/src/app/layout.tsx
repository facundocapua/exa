import './globals.css'
import type { Metadata } from 'next'
import { Inter, Kanit } from 'next/font/google'
import React from 'react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const kanit = Kanit({
  weight: ['200', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kanit'
})

export const metadata: Metadata = {
  title: 'eXa',
  description: 'Donde encontras todo lo que te mereces'
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout ({ children }:Props) {
  return (
    <html lang="es" className={`${inter.variable} ${kanit.variable}`}>
      <body className="font-sans antialiased bg-white">
        {children}
      </body>
    </html>
  )
}
