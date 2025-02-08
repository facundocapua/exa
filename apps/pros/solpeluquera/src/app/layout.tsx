import { STORE_DESCRIPTION, STORE_NAME, STORE_OG_IMAGE } from '@/utils/const'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import type { ReactNode } from 'react'
import 'ui/styles/global.css'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const fashionFetish = localFont({
  src: [
    {
      path: './fonts/fashion-fetish-regular.ttf',
      weight: '400'
    },
    {
      path: './fonts/fashion-fetish-heavy.ttf',
      weight: '900'
    }
  ],
  display: 'swap',
  variable: '--font-fashion-fetish'
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
    <html lang="es" className={`${inter.variable} ${fashionFetish.variable}`}>
      <GoogleTagManager gtmId="G-KJT39HQHWY" />
      <body className='font-sans antialiased'>
        {children}
      </body>
      <GoogleAnalytics gaId="G-KJT39HQHWY" />
    </html>
  )
}
