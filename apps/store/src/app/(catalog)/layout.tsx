import MainLayout from '@/components/layout/MainLayout'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default async function CatalogLayout ({ children }: Props) {
  return (
    <MainLayout>
      <div className=' mx-auto my-12'>
        {children}
      </div>
    </MainLayout>
  )
}
