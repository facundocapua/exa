import { BannerTop } from '@/components/banner-top'
import { Header } from '@/components/layout/header'
import Context from './Context'
import React from 'react'
import MainNavigation from '../navigation/MainNavigation'
import Footer from './Footer'
import styles from './styles.module.css'

type Props = {
  children: React.ReactNode
  cart: React.ReactNode
  user: React.ReactNode
}

export default function MainLayout ({ children, cart, user }: Props) {
  return (
    <Context>
      <header className={'fixed top-0 w-full z-20 bg-white drop-shadow-md dark:bg-[#121212]'}>
        <BannerTop className={styles.banner} />
        <Header cart={cart} user={user} />
        <MainNavigation />
      </header>
      <main className='pt-[114px] lg:pt-[179px]'>{children}</main>
      <Footer />
    </Context>
  )
}
