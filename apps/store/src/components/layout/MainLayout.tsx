import BannerTop from '@/components/BannerTop'
import Header from '@/components/layout/Header'
import Context from './Context'
import React from 'react'
import MainNavigation from '../navigation/MainNavigation'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

export default function MainLayout ({ children }: Props) {
  return (
    <Context>
      <header className='sticky top-0 w-full z-20 bg-white drop-shadow-md'>
        <BannerTop />
        <Header />
        <MainNavigation />
      </header>
      <main>{children}</main>

      <Footer />
    </Context>
  )
}
