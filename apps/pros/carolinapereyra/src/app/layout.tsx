import { STORE_DESCRIPTION, STORE_NAME, STORE_OG_IMAGE } from '@/utils/const'
import type { Metadata } from 'next'
import { Inter, Libre_Baskerville as Baskerville } from 'next/font/google'
import localFont from 'next/font/local'
import type { ReactNode } from 'react'
import 'ui/styles/global.css'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const libreBaskerville = Baskerville({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-baskerville',
  weight: ['400', '700']
})

const brittanySignature = localFont({
  src: [
    {
      path: './fonts/brittany-signature.ttf',
      weight: '400'
    }
  ],
  display: 'swap',
  variable: '--font-brittany-signature'
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
    <html lang="es" className={`${inter.variable} ${libreBaskerville.variable} ${brittanySignature.variable}`}>
      <GoogleTagManager gtmId="G-892BZ5ZFQN" />
      <body className='font-custom antialiased'>
        {children}
      </body>
      <GoogleAnalytics gaId="G-892BZ5ZFQN" />
    </html>
  )
}
