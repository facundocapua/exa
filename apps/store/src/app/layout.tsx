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
  title: 'eXa Beauty Store',
  description: 'Tienda de productos de belleza de marcas premium.',
  openGraph: {
    title: 'eXa Beauty Store',
    description: 'Tienda de productos de belleza de marcas premium.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'eXa Beauty Solutions',
    images: [
      {
        url: 'https://cdn.exabeauty.com.ar/exa-og.jpg',
        width: 1200,
        height: 630,
        alt: 'eXa Beauty Store'
      }
    ]
  },
  twitter: {
    card: 'summary',
    creator: '@eXaBeautyOk',
    title: 'eXa Beauty Store',
    description: 'Tienda de productos de belleza de marcas premium.',
    site: '@eXaBeautyOk'
  }
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
