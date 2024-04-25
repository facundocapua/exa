import MainLayout from '@/components/layout/MainLayout'
import React from 'react'

type Props = {
  children: React.ReactNode
  cart: React.ReactNode
  user: React.ReactNode
}

export default async function CatalogLayout ({ children, cart, user }: Props) {
  return (
    <MainLayout cart={cart} user={user}>
      <div className='mx-auto'>
        {children}
      </div>
    </MainLayout>
  )
}
