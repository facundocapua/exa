import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { Inter, Kanit } from 'next/font/google'
import type { ReactNode } from 'react'
import Footer from '@/components/Footer'

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
  title: 'Gonzalo Alonso',
  description: 'Gonzalo Alonso Studio - Lo que vos mereces'
}

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${kanit.variable} dark`}>
      <body className='bg-black text-white'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
