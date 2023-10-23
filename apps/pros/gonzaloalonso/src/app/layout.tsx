import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import type { ReactNode } from 'react'

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
    <html lang="es">
      <body className='bg-black text-white'>
        <div className='max-w-7xl mx-auto'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
