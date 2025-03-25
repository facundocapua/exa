import { ReactNode } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BannerTop from '@/components/banner-top'
import styles from './styles.module.css'

type Props = {
  children: ReactNode
  cart: ReactNode
}

export default function MainLayout ({ children, cart }: Props) {
  return (
    <>
      <BannerTop className={styles.banner} />
      <Header cart={cart} />
      {children}
      <Footer />
    </>
  )
}
