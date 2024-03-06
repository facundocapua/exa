import type { Metadata } from 'next'
import Header from '@/components/header'
import { Inter, Rubik } from 'next/font/google'
import type { ReactNode } from 'react'
import Footer from '@/components/footer'
import 'ui/styles/global.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik'
})

export const metadata: Metadata = {
  title: 'Fer Gutierrez Makeup',
  description: 'Fer Gutierrez Makeup'
}

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${rubik.variable}`}>
      <body className='font-custom antialiased'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
