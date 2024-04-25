import BannerTop from '@/components/BannerTop'
import Header from '@/components/layout/Header'
import Context from './Context'
import React from 'react'
import MainNavigation from '../navigation/MainNavigation'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
  cart: React.ReactNode
  user: React.ReactNode
}

export default function MainLayout ({ children, cart, user }: Props) {
  return (
    <Context>
      <header className='absolute top-0 w-full z-20 bg-white drop-shadow-md dark:bg-[#121212]'>
        <BannerTop />
        <Header cart={cart} user={user} />
        <MainNavigation />
      </header>
      <main className='pt-[114px] lg:pt-[179px]'>{children}</main>
      <Footer />
    </Context>
  )
}
