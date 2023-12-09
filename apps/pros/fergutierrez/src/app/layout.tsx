import type { Metadata } from 'next'
import Header from '@/components/header'
import { Rubik } from 'next/font/google'
import type { ReactNode } from 'react'
import Footer from '@/components/footer'
import 'ui/styles/global.css'

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
    <html lang="es" className={`${rubik.variable}`}>
      <body className='font-sans antialiased'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
