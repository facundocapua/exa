import MainLayout from '@/components/layout/MainLayout'
import React from 'react'

type Props = {
  children: React.ReactNode
  cart: React.ReactNode
}

export default async function CatalogLayout ({ children, cart }: Props) {
  return (
    <MainLayout cart={cart}>
      <div className='mx-auto'>
        {children}
      </div>
    </MainLayout>
  )
}
