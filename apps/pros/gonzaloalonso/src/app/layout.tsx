import { STORE_NAME, STORE_OG_IMAGE } from '@/utils/const'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import 'ui/styles/global.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: STORE_NAME,
  description: 'Gonzalo Alonso Studio - Lo que vos mereces.',
  openGraph: {
    title: STORE_NAME,
    description: 'Gonzalo Alonso Studio - Lo que vos mereces.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'eXa Pro',
    images: [
      {
        url: STORE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: STORE_NAME
      }
    ]
  },
  twitter: {
    card: 'summary',
    creator: '@eXaBeautyOk',
    title: STORE_NAME,
    description: 'Gonzalo Alonso Studio - Lo que vos mereces.',
    site: '@eXaBeautyOk'
  }
}

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className='font-sans antialiased bg-black text-white dark'>
        {children}
      </body>
    </html>
  )
}
