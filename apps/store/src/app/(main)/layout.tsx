import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import { ScrollTop } from 'ui'

type Props = {
  children: React.ReactNode
}

export default async function CatalogLayout ({ children }: Props) {
  return (
    <MainLayout>
      <div className='mx-auto'>
        {children}
      </div>
      <ScrollTop />
    </MainLayout>
  )
}
