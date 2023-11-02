import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
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
    <html lang="es" className={`${inter.variable}`}>
      <body className='font-sans antialiased bg-black text-white dark'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
