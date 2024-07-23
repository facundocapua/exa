import { STORE_NAME, STORE_DESCRIPTION, STORE_OG_IMAGE } from '@/utils/const'
import type { Metadata } from 'next'
import { Inter, Rubik } from 'next/font/google'
import type { ReactNode } from 'react'
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
  title: STORE_NAME,
  description: STORE_DESCRIPTION,
  openGraph: {
    title: STORE_NAME,
    description: STORE_DESCRIPTION,
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
    description: STORE_DESCRIPTION,
    site: '@eXaBeautyOk'
  }
}

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${rubik.variable}`}>
      <body className='font-custom antialiased'>
        {children}
      </body>
    </html>
  )
}
