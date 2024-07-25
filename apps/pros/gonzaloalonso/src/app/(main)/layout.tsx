import { ReactNode } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

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
