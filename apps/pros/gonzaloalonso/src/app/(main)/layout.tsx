import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type Props = {
  children: ReactNode
  cart: ReactNode
}

export default function MainLayout ({ children, cart }: Props) {
  return (
    <>
      <Header cart={cart} />
      {children}
      <Footer />
    </>
  )
}
