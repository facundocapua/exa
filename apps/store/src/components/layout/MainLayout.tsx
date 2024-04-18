import BannerTop from '@/components/BannerTop'
import Header from '@/components/layout/Header'
import Context from './Context'
import React from 'react'
import MainNavigation from '../navigation/MainNavigation'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
  cart: React.ReactNode
}

export default function MainLayout ({ children, cart }: Props) {
  return (
    <Context>
      <header className='absolute top-0 w-full z-20 bg-white drop-shadow-md'>
        <BannerTop />
        <Header cart={cart} />
        <MainNavigation />
      </header>
      <main className='pt-[114px] md:pt-[179px]'>{children}</main>
      <Footer />
    </Context>
  )
}
