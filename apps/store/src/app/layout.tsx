import './globals.css'
import type { Metadata } from 'next'
import { Inter, Kanit } from 'next/font/google'
import React from 'react'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

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
  description: 'Tienda de productos de belleza de marcas premium. Distribuidor oficial de Framesi, Framar, Kerastase y LOreal Professionnel.',
  openGraph: {
    title: 'eXa Beauty Store',
    description: 'Tienda de productos de belleza de marcas premium. Distribuidor oficial de Framesi, Framar, Kerastase y LOreal Professionnel.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'eXa Beauty Solutions',
    url: 'https://exabeauty.com.ar',
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
    description: 'Tienda de productos de belleza de marcas premium. Distribuidor oficial de Framesi, Framar, Kerastase y LOreal Professionnel.',
    site: '@eXaBeautyOk'
  }
}

type Props = {
  children: React.ReactNode
  auth: React.ReactNode
}

export default function RootLayout ({ children, auth }:Props) {
  return (
    <html lang="es" className={`${inter.variable} ${kanit.variable}`}>
      <GoogleTagManager gtmId="G-ZLKQ9JW32Q" />
      <body className="font-sans antialiased bg-white dark:bg-gray-800">
        {children}
        {auth}
      </body>
      <GoogleAnalytics gaId="G-ZLKQ9JW32Q" />
    </html>
  )
}
