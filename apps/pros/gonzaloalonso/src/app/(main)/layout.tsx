import { ReactNode } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

type Props = {
  children: ReactNode
}

export default function MainLayout ({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
